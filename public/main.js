(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-record/add-record.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-record/add-record.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-record/add-record.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-record/add-record.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header text-center\">Add Record</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n\n  <form [formGroup]=\"addRecord\" class=\"form-horizontal\" (submit)=\"onRecordSubmit()\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-body\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.date}\">\n          <label class=\"col-sm-2 control-label\" for=\"date\">Date</label>\n          <div class=\"col-sm-8\">\n            <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" placeholder=\"YYYY-MM-DD\" formControlName=\"date\" id=\"date\"\n              class=\"form-control\" (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.date\">\n              {{formErrors.date}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.nurse}\">\n          <label class=\"col-sm-2 control-label\" for=\"nurse\">Nurse</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"nurse_name\" formControlName=\"nurse\" id=\"nurse\" class=\"form-control\"\n              (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.nurse\">\n              {{formErrors.nurse}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.type}\">\n          <label class=\"col-sm-2 control-label\" for=\"type\">Type</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Type\" [(ngModel)]=\"type\" formControlName=\"type\" id=\"type\" class=\"form-control\"\n              (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.type\">\n              {{formErrors.type}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.category}\">\n          <label class=\"col-sm-2 control-label\" for=\"category\">Category</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Category\" [(ngModel)]=\"category\" formControlName=\"category\" id=\"category\"\n              class=\"form-control\" (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.category\">\n              {{formErrors.category}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.reading1}\">\n          <label class=\"col-sm-2 control-label\" for=\"reading1\">Reading#1</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Reading\" [(ngModel)]=\"reading1\" formControlName=\"reading1\" id=\"reading1\"\n              class=\"form-control\" (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.reading1\">\n              {{formErrors.reading1}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.reading2}\">\n          <label class=\"col-sm-2 control-label\" for=\"reading2\">Reading#2</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Reading\" [(ngModel)]=\"reading2\" formControlName=\"reading2\" id=\"reading2\"\n              class=\"form-control\" (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.reading2\">\n              {{formErrors.reading2}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.bp}\">\n          <label class=\"col-sm-2 control-label\" for=\"bp\">Blood Pressure</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" placeholder=\"Blood Pressure\" [(ngModel)]=\"bp\" formControlName=\"bp\" id=\"bp\" class=\"form-control\"\n              (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.bp\">\n              {{formErrors.bp}}\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.food_allergy}\">\n          <label class=\"col-md-2 control-label\">Food Allergy</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\" style=\"margin-right: 10px\">\n              <input type=\"radio\" [(ngModel)]=\"food_allergy\" formControlName=\"food_allergy\" value=\"no\" (blur)=\"logValidationErrors()\">No\n            </label>\n            <label class=\"radio-inline\">\n              <input type=\"radio\" [(ngModel)]=\"food_allergy\" formControlName=\"food_allergy\" value=\"yes\" (blur)=\"logValidationErrors()\">Yes\n            </label>\n          </div>\n          <span class=\"help-block\" *ngIf=\"formErrors.food_allergy\">\n            {{formErrors.food_allergy}}\n          </span>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.diabetic}\">\n          <label class=\"col-md-2 control-label\">Diabetic</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\" style=\"margin-right: 10px\">\n              <input type=\"radio\" [(ngModel)]=\"diabetic\" formControlName=\"diabetic\" value=\"no\" (blur)=\"logValidationErrors()\">No\n            </label>\n            <label class=\"radio-inline\">\n              <input type=\"radio\" [(ngModel)]=\"diabetic\" formControlName=\"diabetic\" value=\"yes\" (blur)=\"logValidationErrors()\">Yes\n            </label>\n          </div>\n          <span class=\"help-block\" *ngIf=\"formErrors.diabetic\">\n            {{formErrors.diabetic}}\n          </span>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.heart_disease}\">\n          <label class=\"col-md-2 control-label\">Heart Disease</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\" style=\"margin-right: 10px\">\n              <input type=\"radio\" [(ngModel)]=\"heart_disease\" formControlName=\"heart_disease\" value=\"no\" (blur)=\"logValidationErrors()\">No\n            </label>\n            <label class=\"radio-inline\">\n              <input type=\"radio\" [(ngModel)]=\"heart_disease\" formControlName=\"heart_disease\" value=\"yes\" (blur)=\"logValidationErrors()\">Yes\n            </label>\n          </div>\n          <span class=\"help-block\" *ngIf=\"formErrors.heart_disease\">\n            {{formErrors.heart_disease}}\n          </span>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.surgery}\">\n          <label class=\"col-md-2 control-label\">Surgery</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\" style=\"margin-right: 10px\">\n              <input type=\"radio\" [(ngModel)]=\"surgery\" formControlName=\"surgery\" value=\"no\" (blur)=\"logValidationErrors()\">No\n            </label>\n            <label class=\"radio-inline\">\n              <input type=\"radio\" [(ngModel)]=\"surgery\" formControlName=\"surgery\" value=\"yes\" (blur)=\"logValidationErrors()\">Yes\n            </label>\n          </div>\n          <span class=\"help-block\" *ngIf=\"formErrors.surgery\">\n            {{formErrors.surgery}}\n          </span>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.accident}\">\n          <label class=\"col-md-2 control-label\">Accident</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\" style=\"margin-right: 10px\">\n              <input type=\"radio\" [(ngModel)]=\"accident\" formControlName=\"accident\" value=\"no\" (blur)=\"logValidationErrors()\">No\n            </label>\n            <label class=\"radio-inline\">\n              <input type=\"radio\" [(ngModel)]=\"accident\" formControlName=\"accident\" value=\"yes\" (blur)=\"logValidationErrors()\">Yes\n            </label>\n          </div>\n          <span class=\"help-block\" *ngIf=\"formErrors.accident\">\n            {{formErrors.accident}}\n          </span>\n        </div>\n      </div>\n      <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n      <div class=\"panel-footer text-center\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addRecord.valid\">Add Record</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-record/add-record.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-record/add-record.component.ts ***!
  \****************************************************/
/*! exports provided: AddRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordComponent", function() { return AddRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRecordComponent = /** @class */ (function () {
    function AddRecordComponent(fb, recordService, router, flashMessage) {
        this.fb = fb;
        this.recordService = recordService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validationMessages = {
            'date': {
                'required': 'Date is required.'
            },
            'nurse': {
                'required': 'Nurse name is required.'
            },
            'type': {
                'required': 'Type of test is required.'
            },
            'category': {
                'required': 'Category of test is required.'
            },
            'reading1': {
                'required': 'Atleast 1 reading is required.'
            },
            'reading2': {
                'required': 'If no reading#2. Please put -(dash).'
            },
            'bp': {
                'required': 'Blood Pressure is required.'
            },
            'food_allergy': {
                'required': 'Please Specify Food Allergy.'
            },
            'diabetic': {
                'required': 'Please Specify Diabetic.'
            },
            'heart_disease': {
                'required': 'Please Specify Heart Disease'
            },
            'surgery': {
                'required': 'Please Specify Surgery'
            },
            'accident': {
                'required': 'Please Spcify Accident'
            }
        };
        this.formErrors = {
            'date': '',
            'nurse': '',
            'type': '',
            'category': '',
            'reading1': '',
            'bp': '',
            'food_allergy': '',
            'diabetic': '',
            'heart_disease': '',
            'surgery': '',
            'accident': ''
        };
    }
    AddRecordComponent.prototype.onRecordSubmit = function () {
        var _this = this;
        var newRecord = {
            patient_id: this.ID,
            date: this.date,
            nurse_name: this.nurse_name,
            type: this.type,
            category: this.category,
            reading1: this.reading1,
            reading2: this.reading2,
            food_allergy: this.food_allergy,
            bp: this.bp,
            diabetic: this.diabetic,
            heart_disease: this.heart_disease,
            surgery: this.surgery,
            accident: this.accident
        };
        this.recordService.addRecord(this.ID, newRecord).subscribe(function (record) {
            _this.records = record;
            _this.flashMessage.show("Record added sucessfully", { cssClass: 'alert-success text-center', timeout: 3000 });
            _this.router.navigate(['/records']);
        });
    };
    AddRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addRecord = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nurse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reading1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reading2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            food_allergy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diabetic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            heart_disease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surgery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            accident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.addRecord.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.addRecord);
        });
        this.ID = JSON.parse(localStorage.getItem("ID"));
    };
    AddRecordComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.addRecord; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    AddRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-record',
            template: __webpack_require__(/*! ./add-record.component.html */ "./src/app/add-record/add-record.component.html"),
            styles: [__webpack_require__(/*! ./add-record.component.css */ "./src/app/add-record/add-record.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _records_service__WEBPACK_IMPORTED_MODULE_2__["RecordsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], AddRecordComponent);
    return AddRecordComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-patients/view-patients.component */ "./src/app/view-patients/view-patients.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./records.service */ "./src/app/records.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "./src/app/edit-patient/edit-patient.component.ts");
/* harmony import */ var _edit_record_edit_record_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-record/edit-record.component */ "./src/app/edit-record/edit-record.component.ts");
/* harmony import */ var _view_patients_patient_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-patients/patient-filter.pipe */ "./src/app/view-patients/patient-filter.pipe.ts");
/* harmony import */ var _records_record_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./records/record-filter.pipe */ "./src/app/records/record-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'patient', component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'patients', component: _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_17__["ViewPatientsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'records', component: _records_records_component__WEBPACK_IMPORTED_MODULE_18__["RecordsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'addRecord', component: _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_20__["AddRecordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'editPatient', component: _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_21__["EditPatientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'editRecord', component: _edit_record_edit_record_component__WEBPACK_IMPORTED_MODULE_22__["EditRecordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_17__["ViewPatientsComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_18__["RecordsComponent"],
                _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_20__["AddRecordComponent"],
                _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_21__["EditPatientComponent"],
                _edit_record_edit_record_component__WEBPACK_IMPORTED_MODULE_22__["EditRecordComponent"],
                _view_patients_patient_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["PatientFiterPipe"],
                _records_record_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["RecordFiterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_patient_service__WEBPACK_IMPORTED_MODULE_13__["PatientService"], _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _records_service__WEBPACK_IMPORTED_MODULE_19__["RecordsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.URL = 'api/';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.URL + "register", user, {
            headers: headers
        });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.URL + "authenticate", user, {
            headers: headers
        });
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.get(this.URL + "profile", {
            headers: headers
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        return helper.isTokenExpired(localStorage.getItem('id_token'));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron text-center\">\n  <h1>DMC PORTAL</h1>\n  <p class=\"lead\">Please Choose One Of The Following Options!</p>\n  <div class=\"btn-toolbar\" role=\"toolbar\">\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" [routerLink]=\"['/patients']\">View Patients</button>\n    <button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block\" [routerLink]=\"['/patient']\">Add Patient</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"patient\">\n  <h2 class=\"page-header text-center\">Edit Patient</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n  <form [formGroup]=\"editPatientForm\" (submit)=\"editPatient()\">\n    <div class=\"form-group\" [ngClass]=\"{'is-invalid':formErrors.first_name}\">\n      <label>First Name</label>\n      <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"patient.first_name\" formControlName=\"first_name\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.first_name\">\n        {{formErrors.first_name}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.last_name}\">\n      <label>Last Name</label>\n      <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"patient.last_name\" formControlName=\"last_name\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.last_name\">\n        {{formErrors.last_name}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.email}\">\n      <label>Email</label>\n      <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"patient.email\" formControlName=\"email\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" value={{patient.email}} required>\n      <span class=\"help-block\" *ngIf=\"formErrors.email\">\n        {{formErrors.email}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.DOB}\">\n      <label>Date of Birth</label>\n      <input type=\"date\" [(ngModel)]=\"patient.DOB\" formControlName=\"DOB\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        value={{patient.DOB}} required>\n      <span class=\"help-block\" *ngIf=\"formErrors.DOB\">\n        {{formErrors.DOB}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.address}\">\n      <label>Address</label>\n      <input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"patient.address\" formControlName=\"address\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.address\">\n        {{formErrors.address}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.city}\">\n      <label>City</label>\n      <input type=\"text\" placeholder=\"City\" [(ngModel)]=\"patient.city\" formControlName=\"city\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.city\">\n        {{formErrors.city}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.province}\">\n      <label>Province</label>\n      <input type=\"text\" placeholder=\"Province\" [(ngModel)]=\"patient.province\" formControlName=\"province\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.province\">\n        {{formErrors.province}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.postal_code}\">\n      <label>Postal Code</label>\n      <input type=\"text\" placeholder=\"Postal Code\" [(ngModel)]=\"patient.postal_code\" formControlName=\"postal_code\"\n        class=\"form-control\" (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.postal_code\">\n        {{formErrors.postal_code}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.phone}\">\n      <label>Phone Number</label>\n      <input type=\"number\" placeholder=\"Phone Number\" [(ngModel)]=\"patient.phone\" formControlName=\"phone\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.phone\">\n        {{formErrors.phone}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.department}\">\n      <label>Department</label>\n      <input type=\"text\" placeholder=\"Department\" [(ngModel)]=\"patient.department\" formControlName=\"department\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.department\">\n        {{formErrors.department}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.doctor}\">\n      <label>Doctor</label>\n      <input type=\"text\" placeholder=\"Doctor's Name\" [(ngModel)]=\"patient.doctor\" formControlName=\"doctor\" class=\"form-control\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.doctor\">\n        {{formErrors.doctor}}\n      </span>\n    </div>\n    <div class=\"text-center\">\n      <button type=\"submit\" class=\"btn btn-primary \" [disabled]=\"!editPatientForm.valid\">Update Patient</button>\n    </div>\n  </form>\n</div>\n<hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">"

/***/ }),

/***/ "./src/app/edit-patient/edit-patient.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-patient/edit-patient.component.ts ***!
  \********************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return EditPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPatientComponent = /** @class */ (function () {
    function EditPatientComponent(patientService, recordService, fb, flashMessage, router) {
        this.patientService = patientService;
        this.recordService = recordService;
        this.fb = fb;
        this.flashMessage = flashMessage;
        this.router = router;
        this.formErrors = {
            'first_name': '',
            'last_name': '',
            'DOB': '',
            'email': '',
            'address': '',
            'city': '',
            'province': '',
            'postal_code': '',
            'phone': '',
            'department': '',
            'doctor': '',
        };
        this.validationMessages = {
            'first_name': {
                'required': 'First Name is Required'
            },
            'last_name': {
                'required': 'Last Name is Required'
            },
            'DOB': {
                'required': 'Date Of Birth is Required'
            },
            'email': {
                'required': 'Email is Required',
                'email': 'Please Provide Correct Email'
            },
            'address': {
                'required': 'Address is Required'
            },
            'city': {
                'required': 'City is Required'
            },
            'province': {
                'required': 'Province is Required'
            },
            'postal_code': {
                'required': 'Postal Code is Required'
            },
            'phone': {
                'required': 'Phone is Required'
            },
            'department': {
                'required': 'Department is Required'
            },
            'doctor': {
                'required': 'Doctors Name is Required'
            },
        };
    }
    EditPatientComponent.prototype.editPatient = function () {
        var _this = this;
        var patient = {
            first_name: this.patient.first_name,
            last_name: this.patient.last_name,
            DOB: this.patient.DOB,
            email: this.patient.email,
            address: this.patient.address,
            city: this.patient.city,
            province: this.patient.province,
            postal_code: this.patient.postal_code,
            phone: this.patient.phone,
            department: this.patient.department,
            doctor: this.patient.doctor
        };
        this.patientService.updatePatient(this.ID, patient).subscribe(function (patient) {
            _this.flashMessage.show(patient.msg, { cssClass: 'alert-success text-center', timeout: 3000 });
            _this.router.navigate(['/patients']);
        });
    };
    EditPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.apiData$.subscribe(function (patient) {
            if (patient) {
                _this.patient = patient;
                _this.recordService.saveID(patient._id);
            }
        });
        this.ID = JSON.parse(localStorage.getItem("ID"));
        this.patientService.getSinglePatient(this.ID).subscribe(function (data) {
            _this.patient = data;
        });
        this.editPatientForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doctor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.editPatientForm.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.editPatientForm);
        });
    };
    EditPatientComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.editPatientForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    EditPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-patient',
            template: __webpack_require__(/*! ./edit-patient.component.html */ "./src/app/edit-patient/edit-patient.component.html"),
            styles: [__webpack_require__(/*! ./edit-patient.component.css */ "./src/app/edit-patient/edit-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            _records_service__WEBPACK_IMPORTED_MODULE_2__["RecordsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditPatientComponent);
    return EditPatientComponent;
}());



/***/ }),

/***/ "./src/app/edit-record/edit-record.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-record/edit-record.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-record/edit-record.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-record/edit-record.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header text-center\">Edit Record</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n  <form [formGroup]=\"editRecord\" class=\"form-horizontal\" (submit)=\"onRecordUpdate()\">\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.date}\">\n        <label class=\"col-sm-2 control-label\" for=\"date\">Date</label>\n        <div class=\"col-sm-8\">\n          <input type=\"date\" [(ngModel)]=\"record.date\" name=\"date\" placeholder=\"YYYY-MM-DD\" formControlName=\"date\" id=\"date\"\n            class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.date\">\n            {{formErrors.date}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.nurse}\">\n        <label class=\"col-sm-2 control-label\" for=\"nurse\">Nurse</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"record.nurse_name\" formControlName=\"nurse\" id=\"nurse\"\n            class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.nurse\">\n            {{formErrors.nurse}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.type}\">\n        <label class=\"col-sm-2 control-label\" for=\"type\">Type</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Type\" [(ngModel)]=\"record.type\" formControlName=\"type\" id=\"type\" class=\"form-control\"\n            (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.type\">\n            {{formErrors.type}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.category}\">\n        <label class=\"col-sm-2 control-label\" for=\"category\">Category</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Category\" [(ngModel)]=\"record.category\" formControlName=\"category\" id=\"category\"\n            class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.category\">\n            {{formErrors.category}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.reading1}\">\n        <label class=\"col-sm-2 control-label\" for=\"reading1\">Reading#1</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Reading\" [(ngModel)]=\"record.reading1\" formControlName=\"reading1\" id=\"reading1\"\n            class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.reading1\">\n            {{formErrors.reading1}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.reading1}\">\n        <label class=\"col-sm-2 control-label\" for=\"reading2\">Reading#2</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Reading\" [(ngModel)]=\"record.reading2\" formControlName=\"reading2\" id=\"reading2\"\n            class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.reading2\">\n            {{formErrors.reading2}}\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.bp}\">\n        <label class=\"col-sm-2 control-label\" for=\"bp\">Blood Pressure</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" placeholder=\"Blood Pressure\" [(ngModel)]=\"record.bp\" formControlName=\"bp\" id=\"bp\" class=\"form-control\"\n            (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.bp\">\n            {{formErrors.bp}}\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.food_allergy}\">\n        <label class=\"col-md-2 control-label\">Food Allergy</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\" style=\"margin-right: 10px\">\n            <input type=\"radio\" [(ngModel)]=\"record.food_allergy\" formControlName=\"food_allergy\" value=\"NO\" (blur)=\"logValidationErrors()\">No\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" [(ngModel)]=\"record.food_allergy\" formControlName=\"food_allergy\" value=\"YES\" (blur)=\"logValidationErrors()\">Yes\n          </label>\n        </div>\n        <span class=\"help-block\" *ngIf=\"formErrors.food_allergy\">\n          {{formErrors.food_allergy}}\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.diabetic}\">\n        <label class=\"col-md-2 control-label\">Diabetic</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\" style=\"margin-right: 10px\">\n            <input type=\"radio\" [(ngModel)]=\"record.diabetic\" formControlName=\"diabetic\" value=\"NO\" (blur)=\"logValidationErrors()\">No\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" [(ngModel)]=\"record.diabetic\" formControlName=\"diabetic\" value=\"YES\" (blur)=\"logValidationErrors()\">Yes\n          </label>\n        </div>\n        <span class=\"help-block\" *ngIf=\"formErrors.diabetic\">\n          {{formErrors.diabetic}}\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.heart_disease}\">\n        <label class=\"col-md-2 control-label\">Heart Disease</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\" style=\"margin-right: 10px\">\n            <input type=\"radio\" [(ngModel)]=\"record.heart_disease\" formControlName=\"heart_disease\" value=\"NO\" (blur)=\"logValidationErrors()\">No\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" [(ngModel)]=\"record.heart_disease\" formControlName=\"heart_disease\" value=\"YES\" (blur)=\"logValidationErrors()\">Yes\n          </label>\n        </div>\n        <span class=\"help-block\" *ngIf=\"formErrors.heart_disease\">\n          {{formErrors.heart_disease}}\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.surgery}\">\n        <label class=\"col-md-2 control-label\">Surgery</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\" style=\"margin-right: 10px\">\n            <input type=\"radio\" [(ngModel)]=\"record.surgery\" formControlName=\"surgery\" value=\"NO\" (blur)=\"logValidationErrors()\">No\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" [(ngModel)]=\"record.surgery\" formControlName=\"surgery\" value=\"YES\" (blur)=\"logValidationErrors()\">Yes\n          </label>\n        </div>\n        <span class=\"help-block\" *ngIf=\"formErrors.surgery\">\n          {{formErrors.surgery}}\n        </span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.accident}\">\n        <label class=\"col-md-2 control-label\">Accident</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\" style=\"margin-right: 10px\">\n            <input type=\"radio\" [(ngModel)]=\"record.accident\" formControlName=\"accident\" value=\"NO\" (blur)=\"logValidationErrors()\">No\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" [(ngModel)]=\"record.accident\" formControlName=\"accident\" value=\"YES\" (blur)=\"logValidationErrors()\">Yes\n          </label>\n        </div>\n        <span class=\"help-block\" *ngIf=\"formErrors.accident\">\n          {{formErrors.accident}}\n        </span>\n      </div>\n    </div>\n    <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n    <div class=\"panel-footer text-center\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!editRecord.valid\">Update Record</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-record/edit-record.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-record/edit-record.component.ts ***!
  \******************************************************/
/*! exports provided: EditRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecordComponent", function() { return EditRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRecordComponent = /** @class */ (function () {
    function EditRecordComponent(recordService, router, flashMessage, fb) {
        this.recordService = recordService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.fb = fb;
        this.validationMessages = {
            'date': {
                'required': 'Date is required.'
            },
            'nurse': {
                'required': 'Nurse name is required.'
            },
            'type': {
                'required': 'Type of test is required.'
            },
            'category': {
                'required': 'Category of test is required.'
            },
            'reading1': {
                'required': 'Atleast 1 reading is required.'
            },
            'reading2': {
                'required': 'If no reading#2. Please put -(dash).'
            },
            'bp': {
                'required': 'Blood Pressure is required.'
            },
            'food_allergy': {
                'required': 'Please Specify Food Allergy.'
            },
            'diabetic': {
                'required': 'Please Specify Diabetic.'
            },
            'heart_disease': {
                'required': 'Please Specify Heart Disease'
            },
            'surgery': {
                'required': 'Please Specify Surgery'
            },
            'accident': {
                'required': 'Please Spcify Accident'
            }
        };
        this.formErrors = {
            'date': '',
            'nurse': '',
            'type': '',
            'category': '',
            'reading1': '',
            'bp': '',
            'food_allergy': '',
            'diabetic': '',
            'heart_disease': '',
            'surgery': '',
            'accident': ''
        };
    }
    EditRecordComponent.prototype.onRecordUpdate = function () {
        var _this = this;
        var Urecord = {
            patient_id: this.record.patient_id,
            date: this.record.date,
            nurse_name: this.record.nurse_name,
            type: this.record.type,
            category: this.record.category,
            reading1: this.record.reading1,
            reading2: this.record.reading2,
            food_allergy: this.record.food_allergy,
            bp: this.record.bp,
            diabetic: this.record.diabetic,
            heart_disease: this.record.heart_disease,
            surgery: this.record.surgery,
            accident: this.record.accident
        };
        this.recordService.editRecord(this.record.patient_id, this.record._id, Urecord).subscribe(function (record) {
            _this.flashMessage.show(record.msg, { cssClass: 'alert-success text-center', timeout: 3000 });
            _this.router.navigate(['/records']);
        });
    };
    EditRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordService.apiData$.subscribe(function (record) {
            if (record) {
                _this.record = record;
            }
        });
        this.ID = localStorage.getItem('ID');
        this.editRecord = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nurse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reading1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reading2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            food_allergy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            diabetic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            heart_disease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            surgery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.editRecord.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.editRecord);
        });
    };
    EditRecordComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.editRecord; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    EditRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-record',
            template: __webpack_require__(/*! ./edit-record.component.html */ "./src/app/edit-record/edit-record.component.html"),
            styles: [__webpack_require__(/*! ./edit-record.component.css */ "./src/app/edit-record/edit-record.component.css")]
        }),
        __metadata("design:paramtypes", [_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditRecordComponent);
    return EditRecordComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>DMC Home</h1>\n  <p class=\"lead\">Please Choose One Of The Following Options</p>\n</div>\n<div class=\"btn-toolbar\">\n  <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" [routerLink]=\"['/login']\">Login</button>\n  <button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block\" [routerLink]=\"['/register']\">Register</button>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header text-center\">Login</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n  <form [formGroup]=\"login\" (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.username}\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" formControlName=\"username\" (blur)=\"logValidationErrors()\" class=\"form-control\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.username\">\n        {{formErrors.username}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.username}\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" formControlName=\"password\" (blur)=\"logValidationErrors()\" class=\"form-control\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.password\">\n        {{formErrors.password}}\n      </span>\n    </div>\n    <div class=\"text-center\">\n      <input type=\"submit\" class=\"btn btn-outline-primary btn-lg\" [disabled]=\"!login.valid\" value=\"Login\">\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, fb) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.fb = fb;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("Welcome " + data.user.name + ". Don't Forget to LogOut", { cssClass: 'alert-success text-center', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger text-center', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.login; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n\n        <a class=\"navbar-brand\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onHomeClick()\">Doctors\n            Medical College</a>\n\n        <ul class=\"navbar-nav ml-auto\">\n\n            <li class=\"nav-item\">\n                <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                    class=\"btn btn-secondary navbar-btn\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n                <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                    class=\"btn btn-secondary navbar-btn\" [routerLink]=\"['/register']\">Register</a>\n            </li>\n\n            <li class=\"navbar-item\">\n                <a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                    class=\"btn btn-outline-info navbar-btn\" [routerLink]=\"['/patients']\">Patients</a>\n            </li>\n            <li class=\"navbar-item\">\n                <a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                    class=\"btn btn-outline-info navbar-btn\" [routerLink]=\"['/profile']\">Profile</a>\n            </li>\n            <li class=\"navbar-item\">\n                <a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n                    class=\"btn btn-outline-info navbar-btn\" (click)=\"onLogoutClick()\" [routerLink]=\"['/login']\">Logout</a>\n            </li>\n\n        </ul>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.user = null;
        this.flashMessage.show("Logged Out Sucessfully", { cssClass: 'alert-success text-center', timeout: 3000 });
    };
    NavbarComponent.prototype.onHomeClick = function () {
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/dashboard']);
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/patient.service.ts":
/*!************************************!*\
  !*** ./src/app/patient.service.ts ***!
  \************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
        this.apiData = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.apiData$ = this.apiData.asObservable();
        this.URL = 'api/';
    }
    //Retriving Patients
    PatientService.prototype.getPatients = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken).set('Content-Type', 'application/json');
        return this.http.get(this.URL + "patients", { headers: headers });
    };
    //Add Patient
    PatientService.prototype.addPatient = function (newPatient) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
        return this.http.post(this.URL + "patients", newPatient, { headers: headers });
    };
    //Delete Patient
    PatientService.prototype.deletePatient = function (id) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.delete(this.URL + "patient/" + id, { headers: headers });
    };
    PatientService.prototype.getSinglePatient = function (id) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.get(this.URL + "patient/" + id, { headers: headers });
    };
    //Update Patient
    PatientService.prototype.updatePatient = function (id, Patient) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
        return this.http.put(this.URL + "patient/" + id, Patient, { headers: headers });
    };
    PatientService.prototype.setData = function (data) {
        this.apiData.next(data);
    };
    PatientService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/patients/patients.component.css":
/*!*************************************************!*\
  !*** ./src/app/patients/patients.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patients/patients.component.html":
/*!**************************************************!*\
  !*** ./src/app/patients/patients.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header text-center\">Add Patient</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n\n  <form [formGroup]=\"addPatientForm\" (submit)=\"addPatient()\" novalidate>\n    <div class=\"form-group has-error\" [ngClass]=\"{'has-error':formErrors.first_name}\">\n      <label>First Name</label>\n      <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"first_name\" formControlName=\"first_name\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.first_name\">\n        {{formErrors.first_name}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.last_name}\">\n      <label>Last Name</label>\n      <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"last_name\" formControlName=\"last_name\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.last_name\">\n        {{formErrors.last_name}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.email}\">\n      <label>Email</label>\n      <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" formControlName=\"email\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.email\">\n        {{formErrors.email}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.DOB}\">\n      <label>Date of Birth</label>\n      <input type=\"date\" [(ngModel)]=\"DOB\" formControlName=\"DOB\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.DOB\">\n        {{formErrors.DOB}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.address}\">\n      <label>Address</label>\n      <input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"address\" formControlName=\"address\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.address\">\n        {{formErrors.address}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.city}\">\n      <label>City</label>\n      <input type=\"text\" placeholder=\"City\" [(ngModel)]=\"city\" formControlName=\"city\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.city\">\n        {{formErrors.city}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.province}\">\n      <label>Province</label>\n      <input type=\"text\" placeholder=\"Province\" [(ngModel)]=\"province\" formControlName=\"province\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.province\">\n        {{formErrors.province}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.postal_code}\">\n      <label>Postal Code</label>\n      <input type=\"text\" placeholder=\"Postal Code\" [(ngModel)]=\"postal_code\" formControlName=\"postal_code\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.postal_code\">\n        {{formErrors.postal_code}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.phone}\">\n      <label>Phone Number</label>\n      <input type=\"number\" placeholder=\"Phone Number\" [(ngModel)]=\"phone\" formControlName=\"phone\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.phone\">\n        {{formErrors.phone}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.department}\">\n      <label>Department</label>\n      <input type=\"text\" placeholder=\"Department\" [(ngModel)]=\"department\" formControlName=\"department\" class=\"form-control\"\n        (blur)=\"logValidationErrors()\" required>\n      <span class=\"help-block\" *ngIf=\"formErrors.department\">\n        {{formErrors.department}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.doctor}\">\n      <label>Doctor</label>\n      <input type=\"text\" placeholder=\"Doctor's Name\" [(ngModel)]=\"doctor\" formControlName=\"doctor\" class=\"form-control\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.doctor\">\n        {{formErrors.doctor}}\n      </span>\n    </div>\n\n    <div class=\"text-center\">\n      <input type=\"submit\" class=\"btn btn-secondary \" [disabled]=\"!addPatientForm.valid\" value=\"Add Patient\">\n    </div>\n  </form>\n\n</div>\n\n<hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">"

/***/ }),

/***/ "./src/app/patients/patients.component.ts":
/*!************************************************!*\
  !*** ./src/app/patients/patients.component.ts ***!
  \************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientsComponent = /** @class */ (function () {
    function PatientsComponent(patientService, flashMessage, router, fb) {
        this.patientService = patientService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            'first_name': '',
            'last_name': '',
            'DOB': '',
            'email': '',
            'address': '',
            'city': '',
            'province': '',
            'postal_code': '',
            'phone': '',
            'department': '',
            'doctor': '',
        };
        this.validationMessages = {
            'first_name': {
                'required': 'First Name is Required'
            },
            'last_name': {
                'required': 'Last Name is Required'
            },
            'DOB': {
                'required': 'Date Of Birth is Required'
            },
            'email': {
                'required': 'Email is Required',
                'email': 'Please Provide Correct Email'
            },
            'address': {
                'required': 'Address is Required'
            },
            'city': {
                'required': 'City is Required'
            },
            'province': {
                'required': 'Province is Required'
            },
            'postal_code': {
                'required': 'Postal Code is Required'
            },
            'phone': {
                'required': 'Phone is Required'
            },
            'department': {
                'required': 'Department is Required'
            },
            'doctor': {
                'required': 'Doctors Name is Required'
            },
        };
    }
    PatientsComponent.prototype.addPatient = function () {
        var _this = this;
        var newPatient = {
            first_name: this.first_name,
            last_name: this.last_name,
            DOB: this.DOB,
            email: this.email,
            address: this.address,
            city: this.city,
            province: this.province,
            postal_code: this.postal_code,
            phone: this.phone,
            department: this.department,
            doctor: this.doctor
        };
        this.patientService.addPatient(newPatient).subscribe(function (patient) {
            _this.patients = patient;
            _this.flashMessage.show("Patient Sucessfully added", { cssClass: 'alert-success text-center', timeout: 3000 });
            _this.router.navigate(['/dashboard']);
        });
    };
    PatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addPatientForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            doctor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.addPatientForm.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.addPatientForm);
        });
    };
    PatientsComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.addPatientForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    PatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/patients/patients.component.html"),
            styles: [__webpack_require__(/*! ./patients.component.css */ "./src/app/patients/patients.component.css")],
        }),
        __metadata("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header text-center\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/records.service.ts":
/*!************************************!*\
  !*** ./src/app/records.service.ts ***!
  \************************************/
/*! exports provided: RecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsService", function() { return RecordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordsService = /** @class */ (function () {
    function RecordsService(http) {
        this.http = http;
        this.apiData = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.apiData$ = this.apiData.asObservable();
        this.URL = 'api/patient/';
    }
    RecordsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    RecordsService.prototype.saveID = function (id) {
        localStorage.removeItem("ID");
        localStorage.setItem("ID", JSON.stringify(id));
    };
    RecordsService.prototype.getRecords = function (id) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.get("" + this.URL + id + "/records", { headers: headers });
    };
    RecordsService.prototype.addRecord = function (id, newRecord) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
        return this.http.post("" + this.URL + id + "/records", newRecord, { headers: headers });
    };
    RecordsService.prototype.deleteRecord = function (pid, id) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.delete("" + this.URL + pid + "/record/" + id, { headers: headers });
    };
    RecordsService.prototype.getSingleRecord = function (pid, id) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
        return this.http.get("" + this.URL + pid + "/record/" + id, { headers: headers });
    };
    RecordsService.prototype.editRecord = function (pid, id, record) {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
        return this.http.put("" + this.URL + pid + "/record/" + id, record, { headers: headers });
    };
    RecordsService.prototype.setData = function (data) {
        this.apiData.next(data);
    };
    RecordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordsService);
    return RecordsService;
}());



/***/ }),

/***/ "./src/app/records/record-filter.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/records/record-filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: RecordFiterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordFiterPipe", function() { return RecordFiterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecordFiterPipe = /** @class */ (function () {
    function RecordFiterPipe() {
    }
    RecordFiterPipe.prototype.transform = function (records, searchRecord) {
        if (!records || !searchRecord) {
            return records;
        }
        return records.filter(function (patient) {
            return patient.date.indexOf(searchRecord) !== -1;
        });
    };
    RecordFiterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'recordFilter'
        })
    ], RecordFiterPipe);
    return RecordFiterPipe;
}());



/***/ }),

/***/ "./src/app/records/records.component.css":
/*!***********************************************!*\
  !*** ./src/app/records/records.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/records/records.component.html":
/*!************************************************!*\
  !*** ./src/app/records/records.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header text-center\">Records For Patient</h2>\n</div>\n<div class=\"container\">\n  <div class=\"column\">\n    <div class=\"text-right\">\n      <input type=\"date\" [(ngModel)]=\"searchRecord\" placeholder=\"Search By Date\" width=\"300px\">\n    </div>\n    <table class=\"table table-bordered table-hover table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\" width=\"10%\">Date</th>\n          <th scope=\"col\" class=\"text-center\">Nurse</th>\n          <th scope=\"col\" class=\"text-center\">Type</th>\n          <th scope=\"col\" class=\"text-center\">Category</th>\n          <th scope=\"col\" class=\"text-center\">Reading#1</th>\n          <th scope=\"col\" class=\"text-center\">Reading#2</th>\n          <th scope=\"col\" class=\"text-center\">Blood Pressure</th>\n          <th scope=\"col\" class=\"text-center\">Food Allergy</th>\n          <th scope=\"col\" class=\"text-center\">Diabetic</th>\n          <th scope=\"col\" class=\"text-center\">Heart Disease</th>\n          <th scope=\"col\" class=\"text-center\">Surgery</th>\n          <th scope=\"col\" class=\"text-center\">Accident</th>\n          <th scope=\"col\" class=\"text-center\">Operations</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let record of records | recordFilter:searchRecord\">\n          <th scope=\"row\">{{record.date}}</th>\n          <td>{{record.nurse_name}}</td>\n          <td>{{record.type}}</td>\n          <td>{{record.category}}</td>\n          <td>{{record.reading1}}</td>\n          <td>{{record.reading2}}</td>\n          <td>{{record.bp}}</td>\n          <td>{{record.food_allergy}}</td>\n          <td>{{record.diabetic}}</td>\n          <td>{{record.heart_disease}}</td>\n          <td>{{record.surgery}}</td>\n          <td>{{record.accident}}</td>\n          <td>\n            <div class=\"btn-toolbar\">\n              <button style=\"width:100%\" class=\"btn btn-outline-info\" (click)=\"editRecord(ID,record._id)\">Edit</button>\n            </div>\n            <div class=\"btn-toolbar\">\n              <button style=\"width:100%\" class=\"btn btn-outline-danger\" (click)=\"deleteRecord(ID,record._id)\">Delete</button>\n            </div>\n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-outline-success btn-lg btn-block\" (click)=\"redirect()\">Add Record</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/records/records.component.ts":
/*!**********************************************!*\
  !*** ./src/app/records/records.component.ts ***!
  \**********************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(patientService, recordService, flashMessage, router) {
        this.patientService = patientService;
        this.recordService = recordService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    //Delete Record
    RecordsComponent.prototype.deleteRecord = function (pid, id) {
        var _this = this;
        var records = this.records;
        if (window.confirm("Are you sure you want to delete this Record?")) {
            this.recordService.deleteRecord(pid, id).subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < records.length; i++) {
                        if (records[i]._id == id) {
                            records.splice(i, 1);
                        }
                    }
                    _this.flashMessage.show('Deleted Sucessfully', { cssClass: 'alert-success text-center', timeout: 3000 });
                }
            });
        }
    };
    RecordsComponent.prototype.editRecord = function (pid, id) {
        var _this = this;
        this.recordService.getSingleRecord(pid, id).subscribe(function (record) {
            _this.records = record;
            _this.recordService.setData(record);
            _this.router.navigate(['/editRecord']);
        });
    };
    RecordsComponent.prototype.redirect = function () {
        this.router.navigate(['/addRecord']);
    };
    RecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Patient Data from view-patient component
        this.patientService.apiData$.subscribe(function (patient) {
            if (patient) {
                _this.patient = patient;
                _this.recordService.saveID(patient._id);
            }
        });
        this.ID = JSON.parse(localStorage.getItem("ID"));
        //Get all records 
        this.recordService.getRecords(this.ID).subscribe(function (records) {
            _this.records = records;
        });
    };
    RecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-records',
            template: __webpack_require__(/*! ./records.component.html */ "./src/app/records/records.component.html"),
            styles: [__webpack_require__(/*! ./records.component.css */ "./src/app/records/records.component.css")]
        }),
        __metadata("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            _records_service__WEBPACK_IMPORTED_MODULE_2__["RecordsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header text-center\">Register</h2>\n  <hr style=\"border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 22px 0 21px; height: 0;\">\n  <form [formGroup]=\"register\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.name}\">\n      <label>Full Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" formControlName=\"name\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.name\">\n        {{formErrors.name}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.email}\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" formControlName=\"email\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.email\">\n        {{formErrors.email}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.username}\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" formControlName=\"username\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.username\">\n        {{formErrors.username}}\n      </span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':formErrors.password}\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" formControlName=\"password\" class=\"form-control\" (blur)=\"logValidationErrors()\"\n        required>\n      <span class=\"help-block\" *ngIf=\"formErrors.password\">\n        {{formErrors.password}}\n      </span>\n    </div>\n    <div class=\"text-center\">\n      <input type=\"submit\" class=\"btn btn-outline-primary btn-lg\" [disabled]=\"!register.valid\" value=\"Register\">\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router, fb) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            'name': '',
            'email': '',
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Please provide Valid Email'
            },
            'username': {
                'required': 'Username is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.register = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now Registered and Can LogIN", { cssClass: 'alert-success text-center', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger text-center', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.register; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                _this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                    var messages = _this.validationMessages[key];
                    for (var errorKey in abstractControl.errors) {
                        if (errorKey) {
                            _this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/view-patients/patient-filter.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/view-patients/patient-filter.pipe.ts ***!
  \******************************************************/
/*! exports provided: PatientFiterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientFiterPipe", function() { return PatientFiterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientFiterPipe = /** @class */ (function () {
    function PatientFiterPipe() {
    }
    PatientFiterPipe.prototype.transform = function (patients, searchPatient) {
        if (!patients || !searchPatient) {
            return patients;
        }
        return patients.filter(function (patient) {
            return patient.first_name.toLowerCase().indexOf(searchPatient.toLowerCase()) !== -1;
        });
    };
    PatientFiterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'patientFilter'
        })
    ], PatientFiterPipe);
    return PatientFiterPipe;
}());



/***/ }),

/***/ "./src/app/view-patients/view-patients.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view-patients/view-patients.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.btn{\r\n    width: 70px;\r\n}"

/***/ }),

/***/ "./src/app/view-patients/view-patients.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-patients/view-patients.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header text-center\">Patients</h2>\n</div>\n<div class=\"container\">\n  <div class=\"column\">\n    <div class=\"text-right\">\n      <input type=\"text\" [(ngModel)]=\"searchPatient\" placeholder=\"Search By First Name\" width=\"300px\">\n    </div>\n    <table class=\"table table-bordered table-hover table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Name</th>\n          <th scope=\"col\" class=\"text-center\">DOB</th>\n          <th scope=\"col\" class=\"text-center\">Email</th>\n          <th scope=\"col\" class=\"text-center\">Address</th>\n          <th scope=\"col\" class=\"text-center\">Phone</th>\n          <th scope=\"col\" class=\"text-center\">Department</th>\n          <th scope=\"col\" class=\"text-center\">Doctor</th>\n          <th scope=\"col\" class=\"text-center\">Operations</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let patient of patients | patientFilter:searchPatient\">\n          <th scope=\"row\">{{patient.first_name}} {{patient.last_name}}</th>\n          <td>{{patient.DOB}}</td>\n          <td>{{patient.email}}</td>\n          <td>{{patient.address}},{{patient.city}},{{patient.province}},{{patient.postal_code}}</td>\n          <td>{{patient.phone}}</td>\n          <td>{{patient.department}}</td>\n          <td>{{patient.doctor}}</td>\n          <td>\n            <div class=\"btn-toolbar\">\n              <button style=\"width:100%\" class=\"btn btn-outline-info\" (click)=\"getSinglePatient(patient._id)\">Records</button>\n              <button style=\"width:100%\" class=\"btn btn-outline-warning\" (click)=\"editPatient(patient._id)\">Edit</button>\n              <button style=\"width:100%\" class=\"btn btn-outline-danger\" (click)=\"deletePatient(patient._id)\">Delete</button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-patients/view-patients.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-patients/view-patients.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientsComponent", function() { return ViewPatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patient.service */ "./src/app/patient.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPatientsComponent = /** @class */ (function () {
    function ViewPatientsComponent(patientService, flashMessasge, router) {
        this.patientService = patientService;
        this.flashMessasge = flashMessasge;
        this.router = router;
    }
    ViewPatientsComponent.prototype.deletePatient = function (id) {
        var _this = this;
        var patients = this.patients;
        if (window.confirm("Are you sure you want to Delete this patient and all of its associated Records?")) {
            this.patientService.deletePatient(id)
                .subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < patients.length; i++) {
                        if (patients[i]._id == id) {
                            patients.splice(i, 1);
                        }
                    }
                    _this.flashMessasge.show('Deleted Sucessfully', { cssClass: 'alert-success text-center', timeout: 3000 });
                }
            });
        }
    };
    ViewPatientsComponent.prototype.getSinglePatient = function (id) {
        var _this = this;
        this.patientService.getSinglePatient(id).subscribe(function (data) {
            _this.patients = data;
            _this.patientService.setData(data);
            _this.router.navigate(['/records']);
        });
    };
    ViewPatientsComponent.prototype.editPatient = function (id) {
        var _this = this;
        this.patientService.getSinglePatient(id).subscribe(function (data) {
            _this.patients = data;
            _this.patientService.setData(data);
            _this.router.navigate(['/editPatient']);
        });
    };
    ViewPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatients().subscribe(function (patients) {
            if (!patients.success) {
                _this.patients = patients;
                return true;
            }
            if (_this.patients.length <= 0) {
                _this.flashMessasge.show('No Patients Found', { cssClass: 'alert-danger text-center', timeout: 3000 });
                return false;
            }
        });
    };
    ViewPatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-patients',
            template: __webpack_require__(/*! ./view-patients.component.html */ "./src/app/view-patients/view-patients.component.html"),
            styles: [__webpack_require__(/*! ./view-patients.component.css */ "./src/app/view-patients/view-patients.component.css")],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewPatientsComponent);
    return ViewPatientsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\mapd713\HealthCare Project\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map