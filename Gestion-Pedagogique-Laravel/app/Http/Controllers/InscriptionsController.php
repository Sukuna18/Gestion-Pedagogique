<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInscriptionsRequest;
use App\Http\Requests\UpdateInscriptionsRequest;
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
        return Inscriptions::all();
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
    }
    


    /**
     * Display the specified resource.
     */
    public function show(Inscriptions $inscriptions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inscriptions $inscriptions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInscriptionsRequest $request, Inscriptions $inscriptions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inscriptions $inscriptions)
    {
        //
    }
}
