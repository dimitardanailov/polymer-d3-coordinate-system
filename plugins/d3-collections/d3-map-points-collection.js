!function() {
    'use strict';

    /**
     * @see https://bl.ocks.org/dimitardanailov/bb12fef05c5ed56e793728ed8e84bb81
     *
     * @param {ArrayObject} lines
     */
    d3.endPoints = function(data) {
        var topPoints = d3.topPoints(data);
        var endPoints = d3.bottomPoints(data);

        return topPoints.concat(endPoints);
    };

    /**
     * https://bl.ocks.org/dimitardanailov/bb12fef05c5ed56e793728ed8e84bb81
     *
     * @param {ArrayObject} lines
     */
    d3.topPoints = function(data) {
        return data.map(function(line, i) {
            return {
                'x': line.x1,
                'y': line.y1,
                'marker': 'marker-start',
                'lineIndex': i
            };
        });
    };

    /**
     * https://bl.ocks.org/dimitardanailov/bb12fef05c5ed56e793728ed8e84bb81
     *
     * @param {ArrayObject} lines
     */
    d3.bottomPoints = function(data) {
        return data.map(function(line, i) {
            return {
                'x': line.x2,
                'y': line.y2,
                'marker': 'marker-end',
                'lineIndex': i
            };
        });
    };
}();
