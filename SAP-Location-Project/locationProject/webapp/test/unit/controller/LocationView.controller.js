/*global QUnit*/

sap.ui.define([
	"com/cerner/IacobXenia/locationProject/locationProject/controller/LocationView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LocationView Controller");

	QUnit.test("I should test the LocationView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});