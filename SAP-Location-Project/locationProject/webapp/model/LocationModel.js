sap.ui.define(
    [],
    function () {
        'use strict';
        class LocationModel {
            constructor(regionName, cityName) {
                this.regionName = regionName;
                this.cityName = cityName;
            }
        }
        return LocationModel;
    })