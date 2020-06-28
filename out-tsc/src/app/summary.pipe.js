import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SummaryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actLimit = limit ? limit : 50;
        return value.substr(0, actLimit) + '...';
    }
}
SummaryPipe.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); };
SummaryPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "summary", type: SummaryPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SummaryPipe, [{
        type: Pipe,
        args: [{
                name: 'summary',
            }]
    }], null, null); })();
//# sourceMappingURL=summary.pipe.js.map