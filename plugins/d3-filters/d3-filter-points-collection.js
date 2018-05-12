!function() {
    'use strict';

    /**
     * Method is using `svg` `marker` terminology to create a new object
     * with starting and end coordinates / objects
     *
     * @param {Array} collection
     */
    d3.divideToStartingAndEndPoints = function(collection) {
        var points = {};

        points['marker-start'] = collection.filter(function(d, i) {
            return (i === 0 || i % 2 === 0);
        });

        points['marker-end'] = collection.filter(function(d, i) {
            return !(i === 0 || i % 2 === 0);
        });

        return points;
    };

    /**
     * Method is using `svg` `marker` terminology to create a new object
     * only with starting coordinates / objects
     *
     * @param {Array} collection
     */
    d3.createCollectionOnlyByStartingPoints = function(collection) {
        return collection.filter(function(d, i) {
            return (i === 0 || i % 2 === 0);
        });
    };
}();
