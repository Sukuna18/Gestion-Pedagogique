<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursRessource extends JsonResource
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
            'heure_globale' => $this->heure_globale,
            'module' => $this->module,
            'classe' => $this->classe,
            'niveau' => $this->classe->niveau,
            'annee' => $this->annee,
            'professeur' => $this->professeur,
            'semestre' => $this->semestre,
        ];
    }
}
