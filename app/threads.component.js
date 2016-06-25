"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var thread_service_1 = require('./thread.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var ThreadsComponent = (function () {
    function ThreadsComponent(threadService, routeParams) {
        this.threadService = threadService;
        this.routeParams = routeParams;
    }
    ThreadsComponent.prototype.getThreads = function () {
        var _this = this;
        this.threadService.getThreads().then(function (threads) { return _this.threads = threads; });
    };
    ThreadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var board_id = +this.routeParams.get('board_id');
        this.threadService.getThread(board_id)
            .then(function (thread) { return _this.thread = thread; });
    };
    ThreadsComponent = __decorate([
        core_1.Component({
            selector: 'my-threads',
            template: "<h3>Threads</h3>\n\t<ul *ngFor=\"let thread of threads\">\n\t\t<li>{{ thread.subj }}</li>\n\t</ul>"
        }), 
        __metadata('design:paramtypes', [thread_service_1.ThreadService, router_deprecated_1.RouteParams])
    ], ThreadsComponent);
    return ThreadsComponent;
}());
exports.ThreadsComponent = ThreadsComponent;
//# sourceMappingURL=threads.component.js.map