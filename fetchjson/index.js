"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var data = response.data;
    var id = data.id;
    var title = data.title;
    var completed = data.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of ").concat(title, "\n    And is ").concat(completed ? "finished" : "not finished", "\n  "));
};
