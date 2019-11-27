sap.ui.define([
], function () {
    'use strict';
    return {
        getCity: function (autoKey) {
            const URL = 'https://roloca.coldfuse.io/orase/' + autoKey;
            return $.ajax(URL, {}).done(function (response) {
                return response;
            });
        }
    };
});