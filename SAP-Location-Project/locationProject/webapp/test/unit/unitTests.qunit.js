/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/cerner/IacobXenia/locationProject/locationProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});