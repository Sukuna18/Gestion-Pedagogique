<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\SendEmailNotifications;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class SendEmailController extends Controller
{
    public function sendCancelledSessionEmail($id)
    {
        $content = "Demande d'annulation de cours";
        $sender = User::find($id)->name;
        $users = User::whereHas('roles', function ($query) {
            $query->where('libelle', 'attache');
        })->get();
        Notification::send($users, new SendEmailNotifications($content, $sender));
        return response()->json(['message' => 'notification envoyée avec succès'], 200);
    }
    public function sendAbsenceEmail()
    {
        // $content = "Demande d'absence";
        // $sender = User::find($id)->name;
        // $users = User::where('role_id', 4)->get();

        // Notification::send($users, new SendEmailNotifications($content, $sender));
        // dispatch(new SendEmailNotifications($content, $sender))->delay(now()->addMinutes(1));
        // return response()->json(['message' => 'notification envoyée avec succès'], 200);
    }
}
