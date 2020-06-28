import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthorsService {
    constructor() { }
    getAuthors() {
        return ['author1', 'author2', 'author3'];
    }
}
AuthorsService.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(); };
AuthorsService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthorsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=authors.service.js.map