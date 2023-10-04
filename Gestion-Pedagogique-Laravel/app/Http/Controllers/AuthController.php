<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserRessource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        Auth::attempt($credentials);
        if(Auth::user() === null){
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
        $user = Auth::user();
        /** @var \App\Models\User $user **/
        $token = $user->createToken('authToken')->accessToken;
        return response()->json([
            'user' => new UserRessource($user),
            'token' => $token
        ], 200);
    }
}
