!function() {
    'use strict';

    /**
     * Method is drawing a `g` container for each collection object
     *
     * @param {D3Object} container
     * @param {Array} collection
     * @param {Integer} collectionStep
     */
    d3.drawCollectionGroups = function(container, collection, collectionStep) {
        var data = collection.filter(function(item, i) {
            return (i === 0 || i % collectionStep === 0);
        });

        var groups = container
            .selectAll('g')
                .data(data)
            .enter()
                .append('g');

        return groups;
    };
}();
