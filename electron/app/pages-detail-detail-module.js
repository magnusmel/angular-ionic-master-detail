(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-detail-module"],{

/***/ "./src/app/pages/detail/detail-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail/detail-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentRoutingModule", function() { return DetailComponentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail */ "./src/app/pages/detail/detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _detail__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"]
    }
];
var DetailComponentRoutingModule = /** @class */ (function () {
    function DetailComponentRoutingModule() {
    }
    DetailComponentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DetailComponentRoutingModule);
    return DetailComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detail/detail.html":
/*!******************************************!*\
  !*** ./src/app/pages/detail/detail.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Master Detail Pattern Ionic 4 with Angular Routing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <ion-card *ngIf=\"item\">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]=\"item?.image\">\n          </ion-avatar>\n          <h2>{{ item?.title }}</h2>\n        </ion-item>\n      \n        <img src=\"https://placeimg.com/640/480/nature\">\n      \n        <ion-card-content>\n          <p>{{ item?.description }}</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-item>\n          <ion-button icon-left clear small class=\"action-button\">\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n            <div>12 Likes</div>\n          </ion-button>\n          <ion-button icon-left clear small>\n            <ion-icon name=\"text\"></ion-icon>\n            <div>4 Comments</div>\n          </ion-button>\n          <ion-note slot=\"end\">\n              11h ago\n          </ion-note>\n          </ion-item>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail/detail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/detail/detail.module.ts ***!
  \***********************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail */ "./src/app/pages/detail/detail.ts");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/pages/detail/detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailComponentRoutingModule"]
            ],
            declarations: [_detail__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]],
            entryComponents: [_detail__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]],
        })
    ], DetailModule);
    return DetailModule;
}());



/***/ }),

/***/ "./src/app/pages/detail/detail.scss":
/*!******************************************!*\
  !*** ./src/app/pages/detail/detail.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button {\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/detail/detail.ts":
/*!****************************************!*\
  !*** ./src/app/pages/detail/detail.ts ***!
  \****************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/item-service */ "./src/app/providers/item-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, itemService) {
        this.route = route;
        this.itemService = itemService;
    }
    DetailComponent.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
        console.log('this.route.snapshot', this.route.snapshot);
        var itemId = this.route.snapshot.paramMap.get('id');
        console.log('itemId', itemId);
        this.item = this.itemService.getItem(itemId);
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./detail.html */ "./src/app/pages/detail/detail.html"),
            styles: [__webpack_require__(/*! ./detail.scss */ "./src/app/pages/detail/detail.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _providers_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-detail-module.js.map