<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListeDePresenceRequest;
use App\Http\Requests\UpdateListeDePresenceRequest;
use App\Http\Resources\ListeDePresenceRessource;
use App\Models\ListeDePresence;
use App\Models\SessionCours;

class ListeDePresenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreListeDePresenceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ListeDePresence $listeDePresence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ListeDePresence $listeDePresence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateListeDePresenceRequest $request, ListeDePresence $listeDePresence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ListeDePresence $listeDePresence)
    {
        //
    }
    public function updatePresence($id)
    {
        $presence = ListeDePresence::where('id',$id)->update(['present' => true]);
        return response()->json(['message' => 'Presence updated', 'presence' => $presence], 200);
    }
    public function getUsersBySession($id)
    {
        $listeDePresence = ListeDePresence::where('session_cours_id', $id)->get();
        return ListeDePresenceRessource::collection($listeDePresence);
    }
}
