
!function() {
    'use strict';

    /**
     * @see http://bl.ocks.org/mbostock/1342359
     * @see http://www.w3schools.com/graphics/svg_feoffset.asp
     */
    d3.blur = function(svg) {
        var filter = svg.append('defs')
            .append('filter')
                .attr('id', 'blur')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', '200%')
                .attr('height', '200%');

        filter.append('feOffset')
                .attr('result', 'offOut')
                .attr('in', 'SourceGraphic')
                .attr('dx', 0)
                .attr('dy', 0);

        filter.append('feGaussianBlur')
                .attr('result', 'blurOut')
                .attr('in', 'offOut')
                .attr('stdDeviation', 10);

        filter.append('feBlend')
                .attr('in', 'SourceGraphic')
                .attr('in2', 'blurOut')
                .attr('mode', 'normal');

        return filter;
    };

    /**
     * @see http://www.w3schools.com/graphics/svg_feoffset.asp
     */
    d3.shadow = function(svg) {
        var filter = svg.append('defs')
            .append('filter')
                .attr('id', 'shadow')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', '100%')
                .attr('height', '100%');

        filter.append('feOffset')
                .attr('result', 'offOut')
                .attr('in', 'SourceAlpha')
                .attr('dx', 10)
                .attr('dy', 10);

        filter.append('feGaussianBlur')
                .attr('result', 'blurOut')
                .attr('in', 'offOut')
                .attr('stdDeviation', 5);

        filter.append('feBlend')
                .attr('in', 'SourceGraphic')
                .attr('in2', 'blurOut')
                .attr('mode', 'normal');

        return filter
    };

    /**
     * @see http://stackoverflow.com/questions/14865915/how-to-lower-the-opacity-of-the-alpha-layer-in-an-svg-filter/14871278#14871278
     */
    d3.dropShadow = function(svg) {
        var filter = svg.append('defs')
            .append('filter')
                .attr('id', 'dropshadow')
                // x, y, width and height represent values in the current coordinate system that results
                // from taking the current user coordinate system in place at the time when the
                // <filter> element is referenced
                // (i.e., the user coordinate system for the element referencing the <filter> element via a filter attribute).
                .attr('filterUnits','userSpaceOnUse');

        filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 2);

        filter.append('feOffset')
            .attr('dx', 0)
            .attr('dy', 0);

        var feComponentTransfer = filter.append('feComponentTransfer');
        feComponentTransfer
            .append('feFuncA')
                .attr('type', 'linear')
                .attr('slope', 0.5);

        var feMerge = filter.append('feMerge');
        feMerge.append('feMergeNode');
        feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

        return filter;
    };

}();
