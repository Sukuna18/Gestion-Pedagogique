import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AllService } from '../services/all.service';

export const coursResolver: ResolveFn<boolean> = (route, state) => {
    const data = inject(AllService);
    return data.getAll();
};
