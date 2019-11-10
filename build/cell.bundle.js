"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// # instantiate a 10x10 grid 
// grid = Grid.new(10, 10) 
// # get the cell at row 1, 
// column 2 cell = grid[1, 2] 
// # iterate over all the cells in the grid 
// grid.each_cell do |cell| 
// # do something to the cell end
var Cell = function () {
    function Cell(row, column, north, south, east, west) {
        _classCallCheck(this, Cell);

        this.row = row;
        this.column = column;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.links = {};
    }

    _createClass(Cell, [{
        key: "intialize",
        value: function intialize(row, column) {
            this.row = row;
            this.column = column;
            this.links = {};
        }
    }, {
        key: "link",
        value: function link(cell) {
            var bidi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.links[cell] = true;
            if (bidi === true) {
                this.link(this, false);
            }
            return this;
        }
    }, {
        key: "unlink",
        value: function unlink(cell) {
            var bidi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.links.delete(cell);
            if (bidi === true) {
                this.unlink(this, false);
            }
            return this;
        }
    }, {
        key: "links",
        value: function links(keys) {
            this.keys = keys;
        }
    }, {
        key: "isLinked",
        value: function isLinked(cell) {
            this.links.isKey(cell);
        }
    }, {
        key: "neighbors",
        value: function neighbors() {
            var list = [];
            if (this.north === true) {
                list.push(this.north);
            }
            if (this.south === true) {
                list.push(this.south);
            }
            if (this.east === true) {
                list.push(this.east);
            }
            if (this.west === true) {
                list.push(this.west);
            }
        }
    }]);

    return Cell;
}();

module.exports = Cell;
