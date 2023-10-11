<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListeDePresenceRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'session_cours_id' => $this->session_cours_id,
            'name' => $this->user->name,
            'email' => $this->user->email,
            'matricule' => $this->user->matricule,
            'present' => $this->present,
        ];
    }
}
