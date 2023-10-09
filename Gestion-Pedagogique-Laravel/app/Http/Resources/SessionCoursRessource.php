<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionCoursRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "date" => $this->date,
            "heure_debut" => $this->heure_debut,
            "heure_fin" => $this->heure_fin,
            "cours" => CoursRessource::make($this->cours),
            "salle" => $this->salle,
            "nb_heures" => $this->nb_heures,
            "terminer" => $this->terminer,
            "en_ligne" => $this->en_ligne,
            "annuler" => $this->annuler,
        ];
    }
}
