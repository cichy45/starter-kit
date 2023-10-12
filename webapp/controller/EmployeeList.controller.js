sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkitdc/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.starterkitdc.controller.Master", {
            formatter: Formatter,
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter
                  .getRoute("EmployeeList")
            },
            onFire: function(){
                /*
                $.ajax({
                    url: "https://evilinsult.com/generate_insult.php?lang=en&type=json",
                    
                    success: function (oResponse) {
                        console.log(JSON.parse(oResponse));
                        var sBody = JSON.parse(oResponse).insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    },
                    error: function (oResponse) {
                        console.log(JSON.parse(oResponse));
                    }
                });

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("https://evilinsult.com/generate_insult.php?lang=en&type=json").then(function () {
                            console.log(oModel.getData().insult);
                            
                        }
                    )
                */
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@gmail.com"
                var sSubject = "It is time to say goodbye...";
                var sBody = "You are fired!"
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
                
            },
            onMotivate: function(oEvent){
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@gmail.com"
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!"
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
            }
        });
    });
