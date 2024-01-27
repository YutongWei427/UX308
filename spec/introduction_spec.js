import { hello,celsius2fahrenheit,kilo2Miles,numeric2letterGrade,volumeofCylinder } from '../functions.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let sHello = hello();
      expect(sHello).toBe("hello");
    });
    it("tests freezing",function(){
     let freezing = celsius2fahrenheit(0);
     expect(freezing).toBe(32);
    });
    it("tests boiling",function(){
     let boiling = celsius2fahrenheit(100);
     expect(boiling).toBe(212);
    });
    // Test for question 1
    it("tests miles",function(){
     let miles = kilo2Miles(100);
     expect(miles).toBe(62);
    });
    // Test for question 2
    it("tests letterGrade",function(){
      let letterGrade = numeric2letterGrade(75);
      expect(letterGrade).toBe("B");
    });
    // Test for question 3
    it("tests voluime",function(){
      let volume = volumeofCylinder (12,5);
      expect(volume).toBe(565);
    });
});