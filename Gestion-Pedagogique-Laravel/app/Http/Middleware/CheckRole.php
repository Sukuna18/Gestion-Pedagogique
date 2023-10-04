<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ... $roles)
    {
        if (!Auth::check())
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
    
            /** @var \App\Models\User $user **/
        $user = Auth::user();
        if($user->isResponsable())
            return $next($request);
    
        foreach($roles as $role) {
            if($user->hasRole($role))
                return $next($request);
        }
    
        return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
    }
    
}
