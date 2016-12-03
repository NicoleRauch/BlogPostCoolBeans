var module1 = require("../path1/module1");

module.exports = {
    func: function() {
        return module1.func() * 3;
    }
};
