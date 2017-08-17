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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(210);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_minesweeper_mine_mine_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__ = __webpack_require__(260);
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
            __WEBPACK_IMPORTED_MODULE_5__pages_minesweeper_mine_mine_component__["a" /* MineController */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_minesweeper_minesweeper_component__["a" /* MinesweeperController */]
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

/***/ 259:
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
        this.isMine = false;
        this.adjacentMines = 0;
        window.console.log(this.mine);
    }
    MineController.prototype.ngOnChanges = function (changes) {
        if (changes.mine && changes.mine.currentValue) {
            this.isMine = this.mine.isMine;
            this.adjacentMines = this.mine.adjacentMines;
        }
    };
    MineController.prototype.setAdjacentMines = function (minesCount) {
        this.adjacentMines = minesCount;
    };
    MineController.prototype.toString = function () {
        if (this.isMine) {
            return '*';
        }
        else if (this.adjacentMines > 0) {
            return this.adjacentMines + '';
        }
        return '';
    };
    return MineController;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MineController.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MineController.prototype, "mine", void 0);
MineController = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mine',template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\mine\mine.template.html"*/'<div class="mine" [style.width.vw]="width" [style.height.vw]="width" [class.disabled]="mine.adjacentMines === 0">\n\n {{ toString() }}\n\n</div>'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\mine\mine.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], MineController);

//# sourceMappingURL=mine.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinesweeperController; });
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
    function MinesweeperController(navCtrl) {
        this.navCtrl = navCtrl;
        this.icon = 'happy';
        var a = new __WEBPACK_IMPORTED_MODULE_2__minelogic__["a" /* MineLogic */]();
        this.mines = a.mines;
    }
    MinesweeperController.prototype.tapEvent = function () {
        this.icon = this.icon === 'happy' ? 'sad' : 'happy';
    };
    MinesweeperController.prototype.pressEvent = function () {
        this.icon = this.icon === 'happy' ? 'sad' : 'happy';
    };
    return MinesweeperController;
}());
MinesweeperController = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'minesweeper',template:/*ion-inline-start:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\minesweeper.template.html"*/'<ion-header>\n  <ion-navbar class="main-toolbar">\n    <button ion-button menuToggle icon-only>\n      <ion-icon color="light" name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      My Minesweeper\n    </ion-title>\n  </ion-navbar>\n\n  <ion-navbar>\n    <ion-title>\n      <ion-icon [name]="icon" [color]="color" style="font-size:25px;"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="no-scroll">\n  <div *ngFor="let row of mines" style="font-size:30px; font-family:Consolas" >\n    <mine *ngFor="let mine of row" [mine]="mine" [width]="100/mines.length"></mine>\n    <!--span (press)="pressEvent()" (tap)="tapEvent()"  *ngFor="let mine of row" >{{ mine }}</span-->\n  </div>\n\n  <ion-icon name="happy"></ion-icon>\n  <ion-icon name="sad"></ion-icon>\n  <ion-icon name="sad"></ion-icon> <br>\n  <div class="red">\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, sit porro. Dolores, hic similique accusantium deserunt reprehenderit in laudantium nostrum laborum suscipit, modi exercitationem pariatur cum sit aut ex quibusdam!\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\juan.jose.sandoval\Desktop\minesweeper\src\pages\minesweeper\minesweeper.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MinesweeperController);

//# sourceMappingURL=minesweeper.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Box */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineLogic; });
var Box = (function () {
    function Box() {
        this.isMine = false;
        this.adjacentMines = 0;
    }
    Box.prototype.setAdjacentMines = function (minesCount) {
        this.adjacentMines = minesCount;
    };
    Box.prototype.toString = function () {
        if (this.isMine) {
            return '*';
        }
        else if (this.adjacentMines > 0) {
            return "" + this.adjacentMines;
        }
        return '-';
    };
    return Box;
}());

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
                this.mines[i][j] = new Box();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_minesweeper_minesweeper_component__ = __webpack_require__(260);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ })

},[191]);
//# sourceMappingURL=main.js.map