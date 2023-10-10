sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
   function (Controller) {
        "use strict";
        
        return Controller.extend("stk.starterkitdc.controller.CustomersList", {
            onInit: function () {

            },
            onCustomerPress: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails", {
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
                });
            },
            onCustomerCreate: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateCustomer", {
                }); 
            }
            ,
            onEmployee: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EmployeeList", {
                });
            }
        });
    });
