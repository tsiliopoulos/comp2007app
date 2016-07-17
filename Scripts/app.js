var core;
(function (core) {
    var Person = (function () {
        function Person(name, age) {
            this.name = name;
        }
        Person.prototype.saysHello = function () {
            console.log(this.name + " says hello!");
        };
        return Person;
    }());
    function init() {
        console.log("App Started");
        var person = new Person("Tom", 47);
        person.saysHello();
    }
    // call the init function on window load
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map