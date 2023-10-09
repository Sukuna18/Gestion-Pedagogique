<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InscriptionRessource extends JsonResource
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
            'id_etudiant' => $this->user->id,
            'name' => $this->user->name,
            'matricule' => $this->user->matricule,
            'annee_scolaire' => $this->annee_scolaire,
            'classe' => $this->classe,
        ];
    }
}
