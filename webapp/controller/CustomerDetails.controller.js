sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkitdc/model/formatter",
],
   function (Controller, Formatter, Fragment) {
        "use strict";
        return Controller.extend("stk.starterkitdc.controller.CustomerDetails", {
            formatter: Formatter,
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);

            },
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders, Orders/Order_Details, Orders/Employee",
                    },
                });
            },
            onShowContactPress: function() {
                var oNewController = new sap.ui.core.mvc.Controller("stk.starterkitdc.controller.CustomerDetails");
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "stk.starterkitdc.view.ContactInfoDialog"
                    }, oNewController );
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                  });
            },
            onCancel : function () {
                this.byId("contactDialog").close();
            }
        });
    });