<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cours extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'cours';
    protected $fillable = [
        'id',
        'heure_globale',
        'salle_id',
        'module_id',
        'classe_id',
        'professeur_id',
        'semestre_id',
        'annee_id',
    ];
    public function module()
    {
        return $this->belongsTo(Module::class);
    }
    public function classe()
    {
        return $this->belongsTo(Classe::class);
    }
    public function professeur()
    {
        return $this->belongsTo(Professeur::class);
    }
    public function semestre()
    {
        return $this->belongsTo(Semestre::class);
    }
    public function annee()
    {
        return $this->belongsTo(AnneeScolaire::class);
    }
}
