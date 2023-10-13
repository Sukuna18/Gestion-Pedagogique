<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscriptions extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'annee_scolaire_id',
        'classe_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function annee_scolaire()
    {
        return $this->belongsTo(AnneeScolaire::class);
    }
    public function classe()
    {
        return $this->belongsTo(Classe::class);
    }
    public static function booted()
    {
        static::created(function ($inscription) {
            $inscription->user->roles()->attach(3);
        });
        static::deleted(function ($inscription) {
            $inscription->user->roles()->detach(3);
            User::destroy($inscription->user_id);
            Etudiant::where('user_id', $inscription->user_id)->delete();
        });
    }
}

