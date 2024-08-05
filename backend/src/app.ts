import { error } from "console";
import * as http from "http";

import { createConnection } from "mysql";
const config = require('./db_config');
const port = 5001; // ポート番号
var mysql = require('mysql');

// httpサーバーを設定する
const server = http.createServer(
  (request, response) => {
    // const connection = createConnection(config.mysql_setting);

    const connection = createConnection({
      ...config.mysql_setting,
      authPlugins: {
        mysql_native_password: (plugin: any, connection: any) => connection.auth(plugin)
      }
    });

//
    // let body = '';
    // request.on('data', (chunk) => {
    //   body += chunk;
    // });

    // request.on('end', () => {
    //   console.log('Request body:', body);
    //   const { email, password } = JSON.parse(body);

    //   connection.query(config.getUser,email,
    //     fanction (error, results, fields)){
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    //     const user = results.map((result: any) => {
    //       return {
    //         mail: result.mail,
    //         password: result.password
    //       };
    //     })[0]; // todo:emailのカラムをユニークにする

    //     if (user && user.password === password) {
    //       response.end('Login success');
    //     } else {
    //       response.end('Login failed');
    //     }
    //   }

    // });


    connection.query(config.getUsers,
      function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        const users = results.map((result: any) => {
          return {
            mail: result.mail,
            password: result.password
          };
        });
        const output_user = function (tmp_user: any) {
          console.log("user mail: " + tmp_user.mail + ", password: " + tmp_user.password);
        }
        users.map(output_user);


        for (var u of users) {
          if (u.mail == "test1") {
            console.log("test1's password: " + u.password);
          }
        }
  });
    // サーバーにリクエストがあった時に実行される関数
    response.end("Hello! Node.js with TypeScript");
  }
);
// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);
// ログを出力する
console.log(`http://localhost:${port} へアクセスください`);