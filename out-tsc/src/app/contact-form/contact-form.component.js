import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ContactFormComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name required ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" First Name sohould be minimum of ", _r1.errors.minlength.requiredLength, " characters ");
} }
function ContactFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ContactFormComponent_div_8_div_1_Template, 2, 0, "div", 12);
    i0.ɵɵtemplate(2, ContactFormComponent_div_8_div_2_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors.minlength);
} }
export class ContactFormComponent {
    constructor() { }
    ngOnInit() { }
    log(frstn) {
        console.log(frstn);
    }
    submit(f) {
        console.log(f);
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 17, vars: 5, consts: [[3, "ngSubmit"], ["f", "ngForm"], ["ngModelGroup", "contact"], [1, "form-group"], ["for", "firstName"], ["ngModel", "", "required", "", "minlength", "3", "type", "text", "name", "firstName", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["ngModel", "", "name", "comment", "cols", "30", "rows", "10", 1, "form-control"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return ctx.submit(_r0); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "label", 4);
        i0.ɵɵtext(5, " First Name: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 5, 6);
        i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_6_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(7); return ctx.log(_r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, ContactFormComponent_div_8_Template, 3, 2, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "label", 8);
        i0.ɵɵtext(11, " Comment: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "textarea", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "json");
        i0.ɵɵelementStart(15, "button", 10);
        i0.ɵɵtext(16, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 3, _r0.value), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !_r0.valid);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.NgModelGroup, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i1.RequiredValidator, i1.MinLengthValidator, i2.NgIf], pipes: [i2.JsonPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{
                selector: 'contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=contact-form.component.js.map