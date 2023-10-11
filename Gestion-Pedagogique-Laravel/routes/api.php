<?php

use App\Http\Resources\UserRessource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post("login", "App\Http\Controllers\AuthController@login");
Route::middleware('auth:api')->group(function () {
    Route::get('user', function (Request $request) {
      return new UserRessource($request->user());
    });
    Route::post('logout', function (Request $request) {
      $request->user()->token()->revoke();
        return response()->json(['message' => 'Logged out'], 200);
      });
      Route::middleware(['auth:api', 'role:responsable'])->group(function () {
        Route::apiResource("cours", "App\Http\Controllers\CoursController")->except(['index']);
        Route::apiResource("sessions", "App\Http\Controllers\SessionCoursController")->except(['index, show']);
        Route::apiResource("inscriptions", "App\Http\Controllers\InscriptionsController")->except(['index']);
        Route::get('deleted-session', 'App\Http\Controllers\SessionCoursController@getDeletedSessions');
        Route::get('sessions/eleves/{id}', [App\Http\Controllers\SessionCoursController::class, 'getStudentsBySessionClasses']);
        Route::get('sessions/classes/{id}', [App\Http\Controllers\SessionCoursController::class, 'getSessionCoursByClasses']);
    });   
    Route::middleware(['auth:api', 'role:attache'])->group(function () {
      Route::get("sessions/modules/{id}", [App\Http\Controllers\SessionCoursController::class, 'getSessionCoursByModule']);  
      Route::put('sessions/valide/{session}', [App\Http\Controllers\SessionCoursController::class, 'validerSession']);
      Route::put('sessions/invalide/{session}', [App\Http\Controllers\SessionCoursController::class, 'invaliderSession']);
      Route::get('session/{id}/users', [App\Http\Controllers\ListeDePresenceController::class, 'getUsersBySession']);
      Route::get('sessions/{session}', [App\Http\Controllers\SessionCoursController::class, 'show']);
      Route::get('presences/{id}',[App\Http\Controllers\ListeDePresenceController::class, 'updatePresence']);
    });    
    Route::middleware(['auth:api', 'role:professeur'])->group(function () {
      Route::get("sessions/professeur/{id}/modules/{module}", [App\Http\Controllers\SessionCoursController::class, 'getSessionProfesseurModule']);  
      Route::get('sessions/professeur/{id}', [App\Http\Controllers\SessionCoursController::class, 'getSessionCoursByProfesseur']);
      Route::get('cours/professeur/{id}', [App\Http\Controllers\CoursController::class, 'getCoursByProfesseur']);
    });
    Route::get('sessions', [App\Http\Controllers\SessionCoursController::class, 'index']);
    Route::get('inscriptions', [App\Http\Controllers\InscriptionsController::class, 'index']);
    Route::get('cours', [App\Http\Controllers\CoursController::class, 'index']);
    Route::apiResource("salles", "App\Http\Controllers\SalleController");
    Route::apiResource("modules", "App\Http\Controllers\ModuleController");
    Route::apiResource("semestres", "App\Http\Controllers\SemestreController");
    Route::apiResource("classes", "App\Http\Controllers\ClasseController");
    Route::apiResource("professeurs", "App\Http\Controllers\ProfesseurController");
    Route::apiResource("annees", "App\Http\Controllers\AnneeScolaireController");
    Route::get("all", "App\Http\Controllers\CoursController@allData");
  });
  Route::get('mail/annuler/{id}', 'App\Http\Controllers\SendEmailController@sendCancelledSessionEmail');
  Route::get('mail/absence', 'App\Http\Controllers\SendEmailController@sendCancelledSessionEmail');
  Route::apiResource("users", "App\Http\Controllers\UserController");
