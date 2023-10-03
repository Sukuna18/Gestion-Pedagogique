<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoursRequest;
use App\Http\Requests\UpdateCoursRequest;
use App\Http\Resources\CoursRessource;
use App\Models\AnneeScolaire;
use App\Models\Classe;
use App\Models\Cours;
use App\Models\Module;
use App\Models\Professeur;
use App\Models\Salle;
use App\Models\Semestre;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = Cours::all();
        return CoursRessource::collection($all);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCoursRequest $request)
    {
        $annee = AnneeScolaire::where('active', 1)->first();
        $data = Cours::create([
            'heure_globale' => $request->heure_globale,
            'module_id' => $request->module_id,
            'classe_id' => $request->classe_id,
            'annee_id' => $annee->id,
            'professeur_id' => $request->professeur_id,
            'semestre_id' => $request->semestre_id,
        ]);
        return new CoursRessource($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cours $cours)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cours $cours)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCoursRequest $request, Cours $cours)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cours $cours)
    {
        //
    }
    public function allData(){
        $allClasses = Classe::all();
        $AllProfesseurs = Professeur::all();
        $AllModules = Module::all();
        $AllSemestres = Semestre::all();
        $AllAnnees = AnneeScolaire::all();
        return response()->json([
            'classes' => $allClasses,
            'professeurs' => $AllProfesseurs,
            'modules' => $AllModules,
            'semestres' => $AllSemestres,
            'annees' => $AllAnnees,
            'cours' => CoursRessource::collection(Cours::all())
        ]);
    }
}
