import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class OrderService {
    constructor() { }
    getOrders() {
        return ['order1', 'order2', 'order3'];
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(); };
OrderService.ɵprov = i0.ɵɵdefineInjectable({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OrderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=order.service.js.map