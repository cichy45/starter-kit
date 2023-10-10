sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkitdc.controller.CreateCustomer", {
            onInit: function () {

            },
            onCreate: function () {
                var sId = this.byID("CustomerID").getValue();
                var sName = this.byID("CustomerName").getValue();
                this.getView().getModel().create("/Customers", {
                    CustomerID: sId,
                    CompanyName: sName
                });
            }
        });
    });
