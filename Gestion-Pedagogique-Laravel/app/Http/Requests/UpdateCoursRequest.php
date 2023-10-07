<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCoursRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'heure_globale' => ['numeric'],
            'module_id' => ['exists:modules,id'],
            'classe_id' => ['exists:classes,id'],
            'professeur_id' => ['exists:professeurs,id'],
            'semestre_id' => ['exists:semestres,id'],
        ];
    }
}
