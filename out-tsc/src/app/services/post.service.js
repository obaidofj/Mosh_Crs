import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
export class PostService extends DataService {
    //private url = 'http://jsonplaceholder.typicode.com/posts';
    constructor(http) {
        super('http://jsonplaceholder.typicode.com/posts', http);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(i0.ɵɵinject(i1.Http)); };
PostService.ɵprov = i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PostService, [{
        type: Injectable
    }], function () { return [{ type: i1.Http }]; }, null); })();
//# sourceMappingURL=post.service.js.map