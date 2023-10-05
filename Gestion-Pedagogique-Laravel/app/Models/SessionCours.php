<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionCours extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'heure_debut',
        'heure_fin',
        'cours_id',
        'salle_id',
        'nb_heures',
        'en_ligne',
        'annuler'

    ];
}
