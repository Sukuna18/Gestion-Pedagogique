<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSessionCoursRequest extends FormRequest
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
            'date' => ['date'],
            'heure_debut' => ['date_format:H:i'],
            'heure_fin' => ['date_format:H:i'],
            'nb_heures' => ['numeric'],
            'cours_id' => ['exists:cours,id'],
            'salle_id' => ['exists:salles,id', 'nullable'],
        ];
    }
}
