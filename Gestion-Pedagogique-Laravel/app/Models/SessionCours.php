<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class SessionCours extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'date',
        'heure_debut',
        'heure_fin',
        'cours_id',
        'salle_id',
        'nb_heures',
        'en_ligne',
        'en_cours',
        'terminer',
        'valider'

    ];
    
    public function cours()
    {
        return $this->belongsTo(Cours::class);
    }
    public function salle()
    {
        return $this->belongsTo(Salle::class);
    }
     public static function isOverTime(string $cours_id, string $heure_debut, string $heure_fin){
        $cours = Cours::find($cours_id);
        $sessionsCours = SessionCours::where('cours_id', $cours_id)->where('deleted_at', null)->get();
        $cummul = $sessionsCours->sum('nb_heures');
        $duree = Carbon::parse($heure_debut)->diffInHours(Carbon::parse($heure_fin));
        if($cummul + $duree > $cours->heure_globale){
            return true;
        }
        return false;
    }

    protected static function booted()
    {
        static::created(function ($session) {
            $sessionsCours = SessionCours::where('cours_id', $session->cours_id)->get();
            $cummul = $sessionsCours->sum('nb_heures');
            $cours = Cours::find($session->cours_id);
            if ($cummul == $cours->heure_globale) {
                $cours->update(['termine' => true]);
            } else if ($cummul < $cours->heure_globale) {
                $cours->update(['termine' => false]);
            }
            $inscriptions = Inscriptions::where('classe_id', $cours->classe_id)->get();
            foreach ($inscriptions as $inscription) {
                ListeDePresence::create([
                    'session_cours_id' => $session->id,
                    'user_id' => $inscription->user_id,
                    'present' => false,
                ]);
            }
        });
        static::deleted(function ($session) {
            $sessionsCours = SessionCours::where('cours_id', $session->cours_id)->get();
            $cummul = $sessionsCours->sum('nb_heures');
            $cours = Cours::find($session->cours_id);
            if ($cummul == $cours->heure_globale) {
                $cours->update(['termine' => true]);
            } else if ($cummul < $cours->heure_globale) {
                $cours->update(['termine' => false]);
            }
            $inscriptions = Inscriptions::where('classe_id', $cours->classe_id)->get();
            foreach ($inscriptions as $inscription) {
                ListeDePresence::where('session_cours_id', $session->id)->where('user_id', $inscription->user_id)->delete();
            }
        });
    }
}
