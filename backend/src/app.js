"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = 5001; // ポート番号
// httpサーバーを設定する
var server = http.createServer(function (request, response) {
    // サーバーにリクエストがあった時に実行される関数
    response.end("Hello! Node.js with TypeScript");
});
// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);
// ログを出力する
console.log("http://localhost:".concat(port, " \u3078\u30A2\u30AF\u30BB\u30B9\u304F\u3060\u3055\u3044"));
