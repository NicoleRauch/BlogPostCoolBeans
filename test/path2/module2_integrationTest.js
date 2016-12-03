'use strict';

var expect = require('must');

var module2 = require("../../lib/path2/module2");


describe('module 2 integration test', function () {
    it("returns 5 * 3", function() {
        expect(module2.func()).to.be(15);
    });
});
