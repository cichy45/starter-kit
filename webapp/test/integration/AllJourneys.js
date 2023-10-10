sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./CustomersListJourney.js"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "stk.starterkitdc.view.",
		autoWait: true
	});
});
