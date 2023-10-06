<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialite extends Model
{
    use HasFactory;
    public function filiere(){
        return $this->belongsTo(Filiere::class);
    }
    public function professeurs(){
        return $this->hasMany(Professeur::class);
    }
}
