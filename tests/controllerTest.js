const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it("should convert 32 Fahrenheit to 0 Celsius", function(){
        const result = apiTemperature.fahrenheitToCelcius(32);
        expect(result).to.equal(0);
    });
});

describe("celsiusToFahrenheit()", function(){
    it("should convert 0 Celsius", function(){
        const result = apiTemperature.celsiusToFahrenheit(0);
        expect(result).to.equal(32);
    });
});

describe("CelsiustoFahrenheit() with 100 Celsius", function(){
    it("should convert 100 Celsius to 212 Fahrenheit", function(){
        const celsius = 100;
        const result = apiTemperature.celsiusToFahrenheit(celsius);
        expect(result).to.equal(212);
    });
});