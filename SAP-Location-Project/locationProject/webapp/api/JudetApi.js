sap.ui.define([

], function () {
    'use strict';
    // return {
    //     getJudet: function () {
    //         return $.ajax('./api/Judet.json', {}).done(function (response) {
    //             return response;
    //         });
    //     },
    // };
    return {
        getRegion: function () {
            return $.ajax('https://roloca.coldfuse.io/judete', {}).done(function (response) {
                return response;
            });
        }
    };
});