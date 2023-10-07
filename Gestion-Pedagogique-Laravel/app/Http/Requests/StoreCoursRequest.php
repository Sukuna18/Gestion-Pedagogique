<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCoursRequest extends FormRequest
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
            'heure_globale' => ['required', 'numeric'],
            'module_id' => ['required', 'exists:modules,id'],
            'classe_id' => ['required', 'exists:classes,id'],
            'professeur_id' => ['required', 'exists:professeurs,id'],
            'semestre_id' => ['required', 'exists:semestres,id'],
        ];
    }
}
