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
var boards_component_1 = require('./boards.component');
var board_service_1 = require('./board.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var threads_component_1 = require('./threads.component');
var thread_service_1 = require('./thread.service');
var posts_component_1 = require('./posts.component');
var post_service_1 = require('./post.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Medium';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  <router-outlet></router-outlet>",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, board_service_1.BoardService, thread_service_1.ThreadService, post_service_1.PostService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/boards',
                name: 'Boards',
                component: boards_component_1.BoardsComponent,
                useAsDefault: true
            },
            {
                path: '/:board_id/catalog',
                name: 'Threads',
                component: threads_component_1.ThreadsComponent
            },
            {
                path: '/posts/:thread_id',
                name: 'Posts',
                component: posts_component_1.PostsComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map