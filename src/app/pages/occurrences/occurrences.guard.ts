import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService, Role } from 'src/app/configurations/security/authorization.service';
import { AbstractRoleGuard } from 'src/app/configurations/security/guards/abstract-role.guard';

@Injectable({
    providedIn: 'root'
})
export class OccurrencesGuard extends AbstractRoleGuard {
    readonly requiredRole = Role.READ_ORDINANCES
    
    constructor(auth: AuthorizationService, router: Router) {
        super(auth, router)
    }

}
