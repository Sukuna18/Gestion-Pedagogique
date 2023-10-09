<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professeur extends Model
{
    use HasFactory;
    public function cours()
    {
        return $this->hasMany(Cours::class);
    }
    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
