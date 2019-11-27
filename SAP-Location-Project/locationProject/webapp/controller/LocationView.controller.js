sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../api/JudetApi",
		"../api/CityApi",
		"../model/LocationModel"
	], function (Controller, JSONModel, JudetApi, CityApi, LocationModel) {
		"use strict";

		return Controller.extend("com.cerner.IacobXenia.locationProject.locationProject.controller.LocationView", {

			_data: {
				dtValue: new Date()
			},
			oLocationModel: {},

			onInit: async function () {
				const oModel = new JSONModel(this._data);
				this.getView().setModel(oModel, 'systemDate');
				const oRegionModel = await this._getRegion();
				this.getView().setModel(oRegionModel, 'region');
				this.oLocationModel = new LocationModel();
			},

			_getRegion: async () => {
				let aRegion;
				await JudetApi.getRegion().then(function (oResult) {
					if (oResult) {
						aRegion = oResult;
					}
				});
				const firstRegion = { auto: "", nume: "" };
				const newArrayRegion = [firstRegion].concat(aRegion);
				return new JSONModel(newArrayRegion);
			},

			onSelectedRegion: function (oEvent) {
				const autoKey = oEvent.oSource.getSelectedItem().getProperty("key");
				const regionName = oEvent.oSource.getSelectedItem().getProperty("text");
				if (autoKey !== "" || regionName !== "") {
					this._fillRegionAndCity(autoKey, regionName);
				}
				else {
					this._setDefaults();
				}
			},

			onSelectedCity: function (oEvent) {
				this._selectedCity(oEvent.oSource.getSelectedItem().getProperty("text"));

			},

			_selectedCity: function (cityName) {
				this.oLocationModel.cityName = cityName;
				this.getView().setModel(new JSONModel(this.oLocationModel), "location");
			},

			_fillRegionAndCity: async function (autoKey, regionName) {
				let aCity;
				await CityApi.getCity(autoKey).then(function (oResult) {
					if (oResult) {
						aCity = oResult;
					}
				});
				const firstCity = { nume: "" };
				const newArrayCity = [firstCity].concat(aCity);
				const oCityModel = new JSONModel(newArrayCity);
				this.getView().setModel(oCityModel, 'city');
				this.oLocationModel.regionName = regionName;
				this._selectedCity(newArrayCity[0].nume);
			},

			_setDefaults: function () {
				this.oLocationModel.regionName = "";
				this.oLocationModel.cityName = "";
				this.getView().getModel("location").updateBindings();
				this.getView().getModel('city').setData({ "nume": " " });
			}
		});
	});