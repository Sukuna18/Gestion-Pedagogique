<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSessionCoursRequest;
use App\Http\Requests\UpdateSessionCoursRequest;
use App\Http\Resources\SessionCoursRessource;
use App\Models\SessionCours;

class SessionCoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return SessionCoursRessource::collection(SessionCours::all());
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
        $data = SessionCours::create([
            'date' => $request->date,
            'heure_debut' => $request->heure_debut,
            'heure_fin' => $request->heure_fin,
            'nb_heures' => $request->nb_heures,
            'cours_id' => $request->cours_id,
            'salle_id' => $request->salle_id,
        ]);
        return new SessionCoursRessource($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(SessionCours $sessionCours)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SessionCours $sessionCours)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSessionCoursRequest $request, SessionCours $sessionCours)
    {
        $data = $sessionCours->update([
            'date' => $request->date,
            'heure_debut' => $request->heure_debut,
            'heure_fin' => $request->heure_fin,
            'online' => $request->online,
            'nb_heures' => $request->nb_heures,
            'cours_id' => $request->cours_id,
            'salle_id' => $request->salle_id,
        ]);
        return new SessionCoursRessource($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SessionCours $sessionCours)
    {
        $sessionCours->delete();
        return response()->json(['message' => 'Session de cours supprimée avec succès'], 200);
    }
}
