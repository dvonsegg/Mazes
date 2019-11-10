// # instantiate a 10x10 grid 
// grid = Grid.new(10, 10) 
// # get the cell at row 1, 
// column 2 cell = grid[1, 2] 
// # iterate over all the cells in the grid 
// grid.each_cell do |cell| 
// # do something to the cell end
class Cell {
    constructor(row, column, north, south, east, west) {
        this.row = row;
        this.column = column;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.links = {};
    }
         intialize(row, column) {
            this.row = row;
            this.column = column;
            this.links = {};
        }
         link(cell, bidi = true) {
            this.links[cell] = true;
            if (bidi === true) {
                this.link(this, false);
            }
            return this;
        }
         unlink(cell, bidi = true) {
            this.links.delete(cell);
            if (bidi === true) {
                this.unlink(this, false);
            }
            return this;
        }
         links(keys) {
            this.keys = keys;
        }
         isLinked(cell) {
            this.links.isKey(cell);
        }
         neighbors() {
            const list = [];
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
    }

module.exports = Cell;