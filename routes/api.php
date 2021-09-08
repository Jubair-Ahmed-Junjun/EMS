<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeeController;


//-------- All Public Routes
Route::get('/employees', [EmployeeController::class, "index"]);
Route::get('/employees/{id}', [EmployeeController::class, "show"]);

Route::post('/employees', [EmployeeController::class, "store"]);
Route::put('/employees/{id}', [EmployeeController::class, "update"]);
Route::delete('/employees/{id}', [EmployeeController::class, "destroy"]);

//----------- All Private Route
// Route::group(["middleware" => 'auth:sanctum'], function () {
//     Route::post('/employees', [EmployeeController::class, "store"]);
//     Route::put('/employees/{id}', [EmployeeController::class, "update"]);
//     Route::delete('/employees/{id}', [EmployeeController::class, "destroy"]);
// });



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
