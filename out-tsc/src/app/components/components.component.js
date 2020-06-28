import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../contact-form/contact-form.component";
import * as i2 from "@angular/common";
import * as i3 from "../bootstrap-panel/bootstrap-panel.component";
import * as i4 from "../favorite/favorite.component";
import * as i5 from "../courses.component";
import * as i6 from "../authors/authors.component";
function ComponentsComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function ComponentsComponent_li_12_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r12); const course_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onRemove(course_r10); });
    i0.ɵɵtext(3, "remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 2);
    i0.ɵɵlistener("click", function ComponentsComponent_li_12_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r12); const course_r10 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onUpdate(course_r10); });
    i0.ɵɵtext(5, "update");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r10.name, " ");
} }
function ComponentsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Map View Content");
    i0.ɵɵelementEnd();
} }
function ComponentsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "List View Content");
    i0.ɵɵelementEnd();
} }
function ComponentsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Otherwise");
    i0.ɵɵelementEnd();
} }
function ComponentsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ComponentsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " List of courses:\n");
} }
function ComponentsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " No Courses Yet\n");
} }
export class ComponentsComponent {
    constructor() {
        this.title = 'app hello-world';
        this.colspan = 2;
        this.post = {
            title: 'Title',
            isFavorite: true,
        };
        this.courses = [1, 2];
        this.viewMode = 'map';
        this.coursesData = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
    }
    ngOnInit() { }
    isFavoriteChanged(isFav) {
        console.log('Favorite Changed', isFav);
    }
    onAdd(cval) {
        let leng = this.coursesData.length;
        this.coursesData.push({ id: leng + 1, name: cval });
    }
    onRemove(crs) {
        let ind = this.coursesData.indexOf(crs);
        this.coursesData.splice(ind, 1);
    }
    onUpdate(crsd) {
        crsd.name = 'updated';
    }
}
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(); };
ComponentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["app-components"]], decls: 66, vars: 15, consts: [["type", "text", "name", "crs"], ["crs", ""], [3, "click"], [4, "ngFor", "ngForOf"], [1, "nav", "nav-pills"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["coursesList", ""], ["noCousesYet", ""], [3, "hidden"], [1, "heading"], [1, "body"], [3, "isFavorite", "change"]], template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "u");
        i0.ɵɵtext(2, "contact form :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "contact-form");
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵelementStart(5, "u");
        i0.ɵɵtext(6, "ngFor :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "input", 0, 1);
        i0.ɵɵelementStart(9, "button", 2);
        i0.ɵɵlistener("click", function ComponentsComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r14); const _r0 = i0.ɵɵreference(8); ctx.onAdd(_r0.value); return _r0.value = ""; });
        i0.ɵɵtext(10, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ul");
        i0.ɵɵtemplate(12, ComponentsComponent_li_12_Template, 6, 1, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵelementStart(14, "u");
        i0.ɵɵtext(15, "ngSwitch :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "ul", 4);
        i0.ɵɵelementStart(17, "li");
        i0.ɵɵelementStart(18, "a", 2);
        i0.ɵɵlistener("click", function ComponentsComponent_Template_a_click_18_listener() { return ctx.viewMode = "map"; });
        i0.ɵɵtext(19, "Map View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "li");
        i0.ɵɵelementStart(21, "a", 2);
        i0.ɵɵlistener("click", function ComponentsComponent_Template_a_click_21_listener() { return ctx.viewMode = "list"; });
        i0.ɵɵtext(22, "List View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 5);
        i0.ɵɵtemplate(24, ComponentsComponent_div_24_Template, 2, 0, "div", 6);
        i0.ɵɵtemplate(25, ComponentsComponent_div_25_Template, 2, 0, "div", 6);
        i0.ɵɵtemplate(26, ComponentsComponent_div_26_Template, 2, 0, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵelementStart(28, "u");
        i0.ɵɵtext(29, "ngif :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(30, ComponentsComponent_div_30_Template, 1, 0, "div", 8);
        i0.ɵɵtemplate(31, ComponentsComponent_ng_template_31_Template, 1, 0, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(33, ComponentsComponent_ng_template_33_Template, 1, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(35, "div", 11);
        i0.ɵɵtext(36, "not empty");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 11);
        i0.ɵɵtext(38, "empty list");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵelementStart(40, "u");
        i0.ɵɵtext(41, "ngContainer :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "bootstrap-panel");
        i0.ɵɵelementContainerStart(43, 12);
        i0.ɵɵtext(44, "Heading");
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(45, 13);
        i0.ɵɵelementStart(46, "h2");
        i0.ɵɵtext(47, "Body");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "p");
        i0.ɵɵtext(49, "Some content here ...");
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "p");
        i0.ɵɵelementStart(51, "u");
        i0.ɵɵtext(52, "pass data and event to component :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "favorite", 14);
        i0.ɵɵlistener("change", function ComponentsComponent_Template_favorite_change_53_listener($event) { return ctx.isFavoriteChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "p");
        i0.ɵɵelementStart(55, "u");
        i0.ɵɵtext(56, "courses and authors - service component:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(57, "courses");
        i0.ɵɵelement(58, "app-authors");
        i0.ɵɵelementStart(59, "p");
        i0.ɵɵelementStart(60, "u");
        i0.ɵɵtext(61, "attribute binging :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "table");
        i0.ɵɵelementStart(63, "tr");
        i0.ɵɵelementStart(64, "td");
        i0.ɵɵtext(65, " test ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(32);
        const _r8 = i0.ɵɵreference(34);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.coursesData);
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("active", ctx.viewMode == "map");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.viewMode == "list");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngSwitch", ctx.viewMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "map");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "list");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.courses.length > 0)("ngIfThen", _r6)("ngIfElse", _r8);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("hidden", ctx.courses.length == 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", ctx.courses.length > 0);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("isFavorite", ctx.post.isFavorite);
        i0.ɵɵadvance(11);
        i0.ɵɵattribute("colspan", ctx.colspan);
    } }, directives: [i1.ContactFormComponent, i2.NgForOf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgIf, i3.BootstrapPanelComponent, i4.FavoriteComponent, i5.CoursesComponent, i6.AuthorsComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'app-components',
                templateUrl: './components.component.html',
                styleUrls: ['./components.component.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=components.component.js.map