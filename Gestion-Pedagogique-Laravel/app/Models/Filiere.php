<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filiere extends Model
{
    use HasFactory;
    public function specialites(){
        return $this->hasMany(Specialite::class);
    }
    public function classes(){
        return $this->hasMany(Classe::class);
    }
}
