"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var distance_service_1 = require("../services/distance.service");
describe("Longitude and Lattitude Validators", function () {
    test("Negative out of range longitude and lattitude must not pass", function () {
        expect((0, distance_service_1.calculateDistance)(-181, -91)).toBe(0);
    });
    test("Positive out of range longitude and lattitude must not pass", function () {
        expect((0, distance_service_1.calculateDistance)(181, 91)).toBe(0);
    });
    test("should return a value", function () {
        expect((0, distance_service_1.calculateDistance)(50, 50)).toBeTruthy();
    });
});
