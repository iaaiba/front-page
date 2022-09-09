import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService, Role } from 'src/app/configurations/security/authorization.service';
import { AbstractRoleGuard } from 'src/app/configurations/security/guards/abstract-role.guard';

@Injectable({
    providedIn: 'root'
})
export class ScrapyGuard extends AbstractRoleGuard {
    readonly requiredRole = Role.MANAGE_USERS
    
    constructor(auth: AuthorizationService, router: Router) {
        super(auth, router)
    }

}
