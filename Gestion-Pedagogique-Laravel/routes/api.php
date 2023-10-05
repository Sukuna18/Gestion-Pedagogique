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
        Route::apiResource("cours", "App\Http\Controllers\CoursController");
        Route::apiResource("sessions", "App\Http\Controllers\SessionCoursController");
    });   
    Route::middleware(['auth:api', 'role:attache'])->group(function () {
      //
    });    
    Route::apiResource("salles", "App\Http\Controllers\SalleController");
    Route::apiResource("modules", "App\Http\Controllers\ModuleController");
    Route::apiResource("semestres", "App\Http\Controllers\SemestreController");
    Route::apiResource("classes", "App\Http\Controllers\ClasseController");
    Route::apiResource("professeurs", "App\Http\Controllers\ProfesseurController");
    Route::apiResource("annees", "App\Http\Controllers\AnneeScolaireController");
    Route::get("all", "App\Http\Controllers\CoursController@allData");
  });
  Route::apiResource("users", "App\Http\Controllers\UserController");
