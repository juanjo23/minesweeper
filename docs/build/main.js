webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MineController = (function () {
    function MineController() {
        var _this = this;
        this.unhideAdjacents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onLostGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.toString = function () { return _this.adjacentMines > 0 ? "" + _this.adjacentMines : ''; };
        this.pos = { x: 0, y: 0 };
        this.isMine = false;
        this.adjacentMines = 0;
        this.showFlag = false;
        this.showContent = false;
        this.isPressed = false;
        this.wrongTap = false;
    }
    MineController.prototype.ngOnChanges = function (changes) {
        if (changes.mine && changes.mine.currentValue) {
            this.initValues();
        }
    };
    MineController.prototype.initValues = function () {
        this.isMine = this.mine.isMine;
        this.adjacentMines = !this.isMine ? this.mine.adjacentMines : 0;
        this.showContent = this.mine.showContent;
        this.isPressed = this.mine.isPressed;
        this.color = "num" + this.adjacentMines;
    };
    MineController.prototype.setAdjacentMines = function (minesCount) {
        this.adjacentMines = minesCount;
    };
    MineController.prototype.toggleFlag = function () {
        this.showFlag = !this.showFlag;
        this.showContent = false;
    };
    MineController.prototype.tapMine = function () {
        this.showContent = true;
        this.isPressed = true;
        if (!this.isGameOver() && this.adjacentMines === 0) {
            this.unhideAdjacents.emit();
        }
    };
    MineController.prototype.isGameOver = function () {
        if (this.isMine) {
            this.wrongTap = true;
            this.onLostGame.emit();
            return true;
        }
        else {
            console.log('hi');
        }
    };
    return MineController;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], MineController.prototype, "total", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", MineController)
], MineController.prototype, "mine", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], MineController.prototype, "showContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], MineController.prototype, "isPressed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], MineController.prototype, "unhideAdjacents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], MineController.prototype, "onLostGame", void 0);
MineController = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mine',template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\mine\mine.template.html"*/'<div class="mine {{color}}"\n\n  [style.width.vw]="100/total"\n\n  [style.height.vw]="100/total"\n\n  [class.pressed]="isPressed"\n\n  [class.red]="!isPressed"\n\n  [class.flag]="showFlag && !isDisabled"\n\n  [class.boom]="wrongTap"\n\n  (press)="toggleFlag($event)"\n\n  (tap)="tapMine($event)" >\n\n\n\n  <div class="text-wrapper">\n\n    <span class="text">\n\n        <span class="mine-text" *ngIf="showContent"> {{toString()}} </span>\n\n    </span>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\mine\mine.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], MineController);

var _a, _b;
//# sourceMappingURL=mine.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinesweeperController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minelogic__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MinesweeperController = (function () {
    function MinesweeperController(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.icon = 'happy';
        this.cont = 0;
        var mineLogic = new __WEBPACK_IMPORTED_MODULE_2__minelogic__["a" /* MineLogic */]();
        this.mines = mineLogic.mines;
        this.mines[0][0].showContent = true;
    }
    MinesweeperController.prototype.unhideAdjacents = function (i, j) {
        var length = this.mines.length;
        var isSafe = function (index) { return index < 0 ? false : (index > length - 1 ? false : true); };
        if (isSafe(j - 1)) {
            this.tapAndVisitNeighbors(i, j - 1);
        }
        if (isSafe(i + 1) && isSafe(j - 1)) {
            this.tapAndVisitNeighbors(i + 1, j - 1);
        }
        if (isSafe(i + 1)) {
            this.tapAndVisitNeighbors(i + 1, j);
        }
        if (isSafe(i + 1) && isSafe(j + 1)) {
            this.tapAndVisitNeighbors(i + 1, j + 1);
        }
        if (isSafe(j + 1)) {
            this.tapAndVisitNeighbors(i, j + 1);
        }
        if (isSafe(i - 1) && isSafe(j + 1)) {
            this.tapAndVisitNeighbors(i - 1, j + 1);
        }
        if (isSafe(i - 1)) {
            this.tapAndVisitNeighbors(i - 1, j);
        }
        if (isSafe(i - 1) && isSafe(j - 1)) {
            this.tapAndVisitNeighbors(i - 1, j - 1);
        }
    };
    MinesweeperController.prototype.tapAndVisitNeighbors = function (i, j) {
        if (!this.mines[i][j].isPressed) {
            this.mines[i][j].tapMine();
            if (this.mines[i][j].adjacentMines === 0) {
                this.unhideAdjacents(i, j);
            }
        }
    };
    MinesweeperController.prototype.unhideBlock = function (i, j) {
        var length = this.mines.length;
        var safe = function (index) { return index < 0 ? index + 1 : (index > length - 1 ? index - 1 : index); };
        this.mines[safe(i)][safe(j - 1)].tapMine();
    };
    MinesweeperController.prototype.openModal = function () {
        var modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
    };
    return MinesweeperController;
}());
MinesweeperController = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'minesweeper',template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\minesweeper.template.html"*/'<ion-header>\n\n  <ion-navbar class="main-toolbar">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon color="light" name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Minesweeper\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon [name]="icon" [color]="color" style="font-size:25px;"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="no-scroll">\n\n  <div *ngFor="let row of mines">\n\n    <mine *ngFor="let mine of row"\n\n      [mine]="mine"\n\n      [total]="mines.length"\n\n      [showContent]="mine.showContent"\n\n      [isPressed]="mine.isPressed"\n\n      (unhideAdjacents)="unhideAdjacents(mine.pos.x, mine.pos.y)"\n\n      (onLostGame)="openModal()" >\n\n    </mine>\n\n  </div>\n\n\n\n  <ion-icon name="happy"></ion-icon>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\minesweeper.template.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object])
], MinesweeperController);

var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\modal.content.html"*/'\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      You lost the game\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  Game lost\n\n  <ion-card-header>\n\n    Card Header\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    Sorry yo lost the game\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\modal.content.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _e || Object])
], ModalContentPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=minesweeper.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_minesweeper_mine_mine_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__["a" /* MinesweeperController */],
            __WEBPACK_IMPORTED_MODULE_5__pages_minesweeper_mine_mine_component__["a" /* MineController */],
            __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__["b" /* ModalContentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__["a" /* MinesweeperController */],
            __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__["b" /* ModalContentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineLogic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mine_mine_component__ = __webpack_require__(191);

var MineLogic = (function () {
    function MineLogic() {
        this.mines = [];
        this.MINES_MAX = 15;
        this.MINES_LENGTH = 8;
        this.joinNumbers = function (x, y) { return parseInt([x, y].join(''), 10); };
        this.initGrid();
        this.generateRandomMines();
        this.setMines();
        this.setAdjacentMines();
    }
    MineLogic.prototype.initGrid = function () {
        for (var i = 0; i < this.MINES_LENGTH; i += 1) {
            this.mines.push([]);
            for (var j = 0; j < this.MINES_LENGTH; j += 1) {
                this.mines[i][j] = new __WEBPACK_IMPORTED_MODULE_0__mine_mine_component__["a" /* MineController */]();
                this.mines[i][j].pos = { x: i, y: j };
            }
        }
    };
    MineLogic.prototype.generateRandomMines = function () {
        var randomPlaces = [];
        this.randomMines = [];
        var cont = 0;
        do {
            var xRand = Math.floor(Math.random() * this.MINES_LENGTH);
            var yRand = Math.floor(Math.random() * this.MINES_LENGTH);
            var rand = this.joinNumbers(xRand, yRand);
            if (!randomPlaces[rand]) {
                randomPlaces[rand] = true;
                this.randomMines.push(rand);
                cont += 1;
            }
        } while (cont < this.MINES_MAX);
    };
    MineLogic.prototype.setMines = function () {
        var _this = this;
        var minesPositions = this.randomMines.map(function (mineNumber) {
            var nums = (mineNumber + '').split('');
            var point = { x: 0, y: 0 };
            if (nums.length === 1) {
                point.y = parseInt(nums[0], 10);
            }
            else {
                point.y = parseInt(nums[0], 10);
                point.x = parseInt(nums[1], 10);
            }
            return point;
        });
        minesPositions.forEach(function (pos) {
            _this.mines[pos.y][pos.x].isMine = true;
        });
    };
    MineLogic.prototype.setAdjacentMines = function () {
        for (var i = 0; i < this.MINES_LENGTH; i += 1) {
            for (var j = 0; j < this.MINES_LENGTH; j += 1) {
                var minesNumber = this.countAdjacentMines(i, j);
                this.mines[i][j].setAdjacentMines(minesNumber);
            }
        }
    };
    MineLogic.prototype.countAdjacentMines = function (i, j) {
        var minesCount = 0;
        if (i > 0 && j > 0 && this.mines[i - 1][j - 1].isMine) {
            minesCount += 1;
        }
        if (i > 0 && this.mines[i - 1][j].isMine) {
            minesCount += 1;
        }
        if (i > 0 && j < this.MINES_LENGTH - 1 && this.mines[i - 1][j + 1].isMine) {
            minesCount += 1;
        }
        if (i < this.MINES_LENGTH - 1 && j > 0 && this.mines[i + 1][j - 1].isMine) {
            minesCount += 1;
        }
        if (i < this.MINES_LENGTH - 1 && this.mines[i + 1][j].isMine) {
            minesCount += 1;
        }
        if (i < this.MINES_LENGTH - 1 && j < this.MINES_LENGTH - 1 && this.mines[i + 1][j + 1].isMine) {
            minesCount += 1;
        }
        if (j > 0 && this.mines[i][j - 1].isMine) {
            minesCount += 1;
        }
        if (j < this.MINES_LENGTH - 1 && this.mines[i][j + 1].isMine) {
            minesCount += 1;
        }
        return minesCount;
    };
    return MineLogic;
}());

//# sourceMappingURL=minelogic.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_minesweeper_minesweeper_component__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertController) {
        var _this = this;
        this.alertController = alertController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_minesweeper_minesweeper_component__["a" /* MinesweeperController */];
        platform.ready().then(function () {
            _this.pages = [
                { title: 'Home' },
                { title: 'About' },
                { title: 'Contact' }
            ];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (p) {
        var alert = this.alertController.create();
        alert.setTitle(p.title);
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                window.console.log('data', data);
            }
        });
        alert.present();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\app\app.html"*/'<ion-nav id="nav" [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>\n\n<ion-menu [content]="nav">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Main Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map