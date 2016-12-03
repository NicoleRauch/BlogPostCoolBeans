'use strict';

var expect = require('must');
var sinon = require('sinon').sandbox.create();

var module2 = require("../../lib/path2/module2");

var module1 = require("../../lib/path1/module1");


describe('module 2 unit test', function () {

    beforeEach(function () {
       sinon.stub(module1, "func", function () { return 13; });
    });

    it("returns 13 * 3", function() {
        expect(module2.func()).to.be(39);
    });
});
