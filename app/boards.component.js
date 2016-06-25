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
var board_service_1 = require('./board.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var BoardsComponent = (function () {
    function BoardsComponent(router, boardService) {
        this.router = router;
        this.boardService = boardService;
    }
    BoardsComponent.prototype.getBoards = function () {
        var _this = this;
        this.boardService.getBoards().then(function (boards) { return _this.boards = boards; });
    };
    BoardsComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    BoardsComponent.prototype.gotoCatalog = function (board) {
        var link = ['Threads', { board_id: board.board_id }];
        this.router.navigate(link);
    };
    BoardsComponent = __decorate([
        core_1.Component({
            selector: 'my-boards',
            template: "\n  <nav *ngFor=\"let board of boards\">\n  \t<p (click)=\"gotoCatalog(board)\">{{ board.name }}</p>\n  </nav>"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, board_service_1.BoardService])
    ], BoardsComponent);
    return BoardsComponent;
}());
exports.BoardsComponent = BoardsComponent;
//# sourceMappingURL=boards.component.js.map