"use strict";

const soldier = {
    health: 400,
    armor: 233,
    setJohn: function() {
        console.log("hello")
    }
};
const john = Object.create(soldier)
// Object.setPrototypeOf(john, soldier)
// john.__proto__ = soldier;
john.setJohn()