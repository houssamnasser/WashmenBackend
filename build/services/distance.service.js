"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
var measurements_1 = require("../utils/measurements");
var calculateDistance = function (destinationLat, destinationLon) {
    var sourceLat = 33.893791;
    var sourceLon = 35.501778;
    if ((sourceLat == destinationLat && sourceLon == destinationLon) ||
        destinationLat < -90 ||
        destinationLat > 90 ||
        destinationLon < -180 ||
        destinationLon > 180) {
        return 0;
    }
    else {
        var radius = 6371;
        var dLat = (0, measurements_1.degreeToRadian)(destinationLat - sourceLat);
        var dLon = (0, measurements_1.degreeToRadian)(sourceLon - destinationLon);
        var theta = sourceLon - destinationLon;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((0, measurements_1.degreeToRadian)(sourceLat)) *
                Math.cos((0, measurements_1.degreeToRadian)(destinationLat)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = radius * c;
        return Math.round(distance);
    }
};
exports.calculateDistance = calculateDistance;
