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
var post_service_1 = require('./post.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var PostsComponent = (function () {
    function PostsComponent(postService, routeParams) {
        this.postService = postService;
        this.routeParams = routeParams;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var thread_id = +this.routeParams.get('thread_id');
        this.postService.getReplies(thread_id)
            .then(function (posts) { return _this.posts = posts; });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'my-posts',
            template: "<h3>Replies</h3>\n\t<ul *ngFor=\"let post of posts\">\n\t\t<li>{{ post.subj }}</li>\n    <li>{{ post.body }}</li>\n\t</ul>"
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_deprecated_1.RouteParams])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map