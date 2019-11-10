// # instantiate a 10x10 grid 
// grid = Grid.new(10, 10) 
// # get the cell at row 1, 
// column 2 cell = grid[1, 2] 
// # iterate over all the cells in the grid 
// grid.each_cell do |cell| 
// # do something to the cell end

function Cell() {
    const row;
    const column;
    const north;
    const south;
    const east;
    const west;
    
    function intialize(row, column) {
        this.row = row;
        this.column = column;
        const links = {};
    }

    function link(cell, bidi) {
        this.bidi = true;

    }

    function unlink(cell, bidi){
        this.bidi = true;
    }
}

module.exports = Cell;