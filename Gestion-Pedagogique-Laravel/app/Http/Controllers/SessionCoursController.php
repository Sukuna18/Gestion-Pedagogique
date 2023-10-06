<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSessionCoursRequest;
use App\Http\Requests\UpdateSessionCoursRequest;
use App\Http\Resources\SessionCoursRessource;
use App\Models\Cours;
use App\Models\SessionCours;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SessionCoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $date = $request->date ?? Carbon::now()->format('Y-m-d');
        // $classes = SessionCours::with('cours.classe')->get();

        $sessions = SessionCours::where('date', $date)->get();
        return SessionCoursRessource::collection($sessions);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSessionCoursRequest $request)
    {
        $session = SessionCours::where('salle_id', $request->salle_id)
            ->where('date', Carbon::parse($request->date)->format('Y-m-d'))
            ->where('heure_debut', $request->heure_debut)
            ->where('heure_fin', $request->heure_fin)
            ->first();
        if ($session) {
            return response()->json(['message' => 'Une session de cours est déjà programmée dans cette salle à cette date et heure'], 422);
        }
        if (SessionCours::isOverTime($request->cours_id, $request->heure_debut, $request->heure_fin) == true) {
            throw new \Exception("l'horaire choisie dépasse l'horaire globale du cours");
        }
        try {
            $data = SessionCours::create([
                'date' => Carbon::parse($request->date)->format('Y-m-d'),
                'heure_debut' => $request->heure_debut,
                'en_ligne' => $request->en_ligne,
                'heure_fin' => $request->heure_fin,
                'nb_heures' => $request->nb_heures,
                'cours_id' => $request->cours_id,
                'salle_id' => $request->salle_id,
            ]);
            return new SessionCoursRessource($data);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Une erreur est survenue lors de la création de la session de cours'], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SessionCours $session)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SessionCours $session)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSessionCoursRequest $request, SessionCours $session)
    {
        $sessions = SessionCours::where('salle_id', $request->salle_id)
            ->where('date', Carbon::parse($request->date)->format('Y-m-d'))
            ->where('heure_debut', $request->heure_debut)
            ->where('heure_fin', $request->heure_fin)
            ->first();
        if ($sessions) {
            return response()->json(['message' => 'Une session de cours est déjà programmée dans cette salle à cette date et heure'], 422);
        }
        if (SessionCours::isOverTime($request->cours_id, $request->heure_debut, $request->heure_fin) == true) {
            throw new \Exception("l'horaire choisie dépasse l'horaire globale du cours");
        }
        try {

            $session->update([
                'date' => $request->date,
                'heure_debut' => $request->heure_debut,
                'heure_fin' => $request->heure_fin,
                'en_ligne' => $request->en_ligne,
                'nb_heures' => Carbon::parse($request->heure_debut)->diffInHours(Carbon::parse($request->heure_fin)),
                'cours_id' => $request->cours_id,
                'salle_id' => $request->salle_id,
            ]);
            return new SessionCoursRessource($session);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Une erreur est survenue lors de la modification de la session de cours'], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SessionCours $session)
    {
        try {
            $session->delete();
            return response()->json(['message' => 'Session de cours supprimée avec succès'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Une erreur est survenue lors de la suppression de la session de cours'], 422);
        }
    }
    public function searchByDate(Request $request)
    {
        $date = $request->date;
        dd($date);
        $sessions = SessionCours::where('date', $date)->get();
        return SessionCoursRessource::collection($sessions);
    }
}
