sap.ui.define([
    "stk/starterkit/model/formatter"
], function (formatter){
    "use strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        // Act
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formatted: " + sName);
    }

    QUnit.test("Should format 'Dawid Cichon' to 'D. Cichon'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Dawid",
            lastName: "Cichon",
            expected: "D. Cichon"
        });
    });

    QUnit.test("Should format 'Dawid Cichon' to 'D. Cichon'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Dawid",
            lastName: "Cichon-Mrass",
            expected: "D. Cichon"
        });
    });
}
)