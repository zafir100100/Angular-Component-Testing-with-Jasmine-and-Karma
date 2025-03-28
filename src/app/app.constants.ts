import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public readonly MAX_LENGTH = {
        USERNAME: 10,
        PASSWORD: 15
    };
}
