<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInscriptionsRequest;
use App\Http\Requests\UpdateInscriptionsRequest;
use App\Http\Resources\InscriptionRessource;
use App\Models\Etudiant;
use App\Models\Inscriptions;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class InscriptionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return InscriptionRessource::collection(Inscriptions::all());
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
    public function store(StoreInscriptionsRequest $request)
    {
        try {
            return DB::transaction(function () use ($request) {
                $etudiants = $request->etudiants;
                foreach ($etudiants as $etudiant) {
                    extract($etudiant);
                    
                    $matricule = $matricule ?? sha1(time());
                    $users = User::where('matricule', $matricule)->first();
                    if (!$users) {
                        $name = $prenom . ' ' . $nom;
                        $user = User::create([
                            'name' => $name,
                            'email' => $email,
                            'matricule' => $matricule,
                            'password' => '12345',
                        ]);
                        Etudiant::create([
                            'user_id' => $user->id,
                            'date_de_naissance' => Carbon::createFromFormat('d/m/Y', $date_de_naissance)->format('Y-m-d'),
                            'lieu_de_naissance' => $lieu_de_naissance,
                        ]);
                         $inscription = Inscriptions::create([
                            'user_id' => $user->id,
                            'annee_scolaire_id' => $request->annee_scolaire_id,
                            'classe_id' => $request->classe_id,
                        ]);
                    }
                }
                
                return response()->json([
                    'message' => 'Inscription effectuée avec succès',
                    'data' => $inscription,
                ]);
            });
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Une erreur est survenue lors de l\'enregistrement de l\'inscription',
            ], 422);
        }
    }
    


    /**
     * Display the specified resource.
     */
    public function show(Inscriptions $inscription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inscriptions $inscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInscriptionsRequest $request, Inscriptions $inscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inscriptions $inscription)
    {
       try {
        $inscription->delete();
        return response()->json([
            'message' => 'Inscription supprimée avec succès',
        ]);
       } catch (\Throwable $th) {
        return response()->json([
            'message' => 'Une erreur est survenue lors de la suppression de l\'inscription',
        ], 422);
       }
    }
}
