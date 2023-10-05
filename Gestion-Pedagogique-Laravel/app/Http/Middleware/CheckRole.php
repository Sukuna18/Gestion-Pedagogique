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
    public function handle(Request $request, Closure $next, ...$requiredRoles)
    {
        $user = $request->user();
        
        $userRoles = $user->roles()->pluck('libelle')->toArray();
     
        foreach ($requiredRoles as $role) {
            if (in_array($role, $userRoles)) {
                return $next($request);
            }
        }
    
        return abort(403, 'Unauthorized.');
    }
    
    
}
