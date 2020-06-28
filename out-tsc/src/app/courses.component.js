import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./courses.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "./summary.pipe";
function CoursesComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r2, " ");
} }
export class CoursesComponent {
    constructor(service) {
        this.title = 'List of courses';
        this.txtstr = 'loreum text jhlh kkklk jlklkj akljl jklja lkjljk klja kljl dnfkdnsaf njkdfndsjf sjkdfs kj dfad';
        this.email = 'email@examp.com';
        this.isActive = false;
        this.course = {
            title: 'The Complete Ang course',
            rating: 4.9745,
            studants: 30123,
            price: 190.95,
            releaseDate: new Date(2016, 3, 1),
        };
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title;
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('button clicked', $event);
    }
    onDivClicked() {
        console.log('div clicked');
    }
    onKeyUP(txtv) {
        //console.log(' enter key pressed  ,text: ', $event.target.value);
        //console.log(' enter key pressed ,text:', txtv);
        console.log(this.email);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(i0.ɵɵdirectiveInject(i1.CoursesService)); };
CoursesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CoursesComponent, selectors: [["courses"]], decls: 32, vars: 30, consts: [[4, "ngFor", "ngForOf"], [3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "ngModel", "keyup.enter", "ngModelChange"], ["txtvr", ""]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul");
        i0.ɵɵtemplate(3, CoursesComponent_li_3_Template, 2, 1, "li", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵlistener("click", function CoursesComponent_Template_div_click_4_listener() { return ctx.onDivClicked(); });
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function CoursesComponent_Template_button_click_5_listener($event) { return ctx.onSave($event); });
        i0.ɵɵtext(6, " save ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button");
        i0.ɵɵtext(8, " style binding");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "br");
        i0.ɵɵelement(10, "br");
        i0.ɵɵelementStart(11, "input", 3, 4);
        i0.ɵɵlistener("keyup.enter", function CoursesComponent_Template_input_keyup_enter_11_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(12); return ctx.onKeyUP(_r1.value); })("ngModelChange", function CoursesComponent_Template_input_ngModelChange_11_listener($event) { return ctx.email = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "hr");
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "uppercase");
        i0.ɵɵelement(16, "br");
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "number");
        i0.ɵɵelement(19, "br");
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "number");
        i0.ɵɵelement(22, "br");
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "currency");
        i0.ɵɵelement(25, "br");
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "date");
        i0.ɵɵelement(28, "br");
        i0.ɵɵelement(29, "hr");
        i0.ɵɵtext(30);
        i0.ɵɵpipe(31, "summary");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.getTitle());
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.courses);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.isActive);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("background-color", ctx.isActive ? "blue" : "white");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.email);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 13, ctx.course.title), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(18, 15, ctx.course.rating, "2.1-1"), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 18, ctx.course.studants), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(24, 20, ctx.course.price, "INS", true, "3.2-2"), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(27, 25, ctx.course.releaseDate, "mediumDate"), "");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(31, 28, ctx.txtstr), " ");
    } }, directives: [i2.NgForOf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], pipes: [i2.UpperCasePipe, i2.DecimalPipe, i2.CurrencyPipe, i2.DatePipe, i4.SummaryPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoursesComponent, [{
        type: Component,
        args: [{
                selector: 'courses',
                template: `<h4>{{ getTitle() }}</h4>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <div (click)="onDivClicked()">
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        save
      </button>
    </div>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
      style binding</button
    ><br /><br />
    <input #txtvr (keyup.enter)="onKeyUP(txtvr.value)" [(ngModel)]="email" />
    <hr />
    {{ course.title | uppercase }}<br />
    {{ course.rating | number: '2.1-1' }}<br />
    {{ course.studants | number }}<br />
    {{ course.price | currency: 'INS':true:'3.2-2' }}<br />
    {{ course.releaseDate | date: 'mediumDate' }}<br />
    <hr />
    {{ txtstr | summary }} `,
            }]
    }], function () { return [{ type: i1.CoursesService }]; }, null); })();
//# sourceMappingURL=courses.component.js.map