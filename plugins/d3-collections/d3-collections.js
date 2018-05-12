!function() {
    'use strict';

    /**
     * Method is checking if collection has an empty slot for drawing
     * @param {Array} items
     * @param {Integer} maximumItems
     *
     * @return {Boolean}
     */
    d3.collectionHasEmptySlots = function(items, maximumItems) {
        if (items.length < maximumItems) {
            return true;
        } else {
            return false;
        }
    };
}();
