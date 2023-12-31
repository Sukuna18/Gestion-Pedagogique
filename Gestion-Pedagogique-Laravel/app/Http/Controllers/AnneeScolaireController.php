<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnneeScolaireRequest;
use App\Http\Requests\UpdateAnneeScolaireRequest;
use App\Models\AnneeScolaire;

class AnneeScolaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = AnneeScolaire::all();
        return $all;
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
    public function store(StoreAnneeScolaireRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(AnneeScolaire $anneeScolaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AnneeScolaire $anneeScolaire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnneeScolaireRequest $request, AnneeScolaire $anneeScolaire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AnneeScolaire $anneeScolaire)
    {
        //
    }
}
