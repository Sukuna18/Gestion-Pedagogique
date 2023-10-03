<?php

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

Route::apiResource("salles", "App\Http\Controllers\SalleController");
Route::apiResource("modules", "App\Http\Controllers\ModuleController");
Route::apiResource("semestres", "App\Http\Controllers\SemestreController");
Route::apiResource("classes", "App\Http\Controllers\ClasseController");
Route::apiResource("professeurs", "App\Http\Controllers\ProfesseurController");
Route::apiResource("annees", "App\Http\Controllers\AnneeScolaireController");
Route::apiResource("cours", "App\Http\Controllers\CoursController");
Route::get("all", "App\Http\Controllers\CoursController@allData");
