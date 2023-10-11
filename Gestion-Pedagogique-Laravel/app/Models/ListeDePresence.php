<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListeDePresence extends Model
{
    use HasFactory;
    protected $fillable = [
        'session_cours_id',
        'user_id',
        'present',
    ];
    public function session_cours()
    {
        return $this->belongsTo(SessionCours::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
