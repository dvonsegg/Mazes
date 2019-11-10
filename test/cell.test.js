const Cell = require('../src/cell');

describe('Building initial Cell setup', () => {
  it('builds a cell', () => {
      expect(new Cell(1,1,true,false,true,false)).toBeDefined();
    })
    it('recognizes empty cell', () => {
      expect(new Cell()).toBeUndefined();
    })
});