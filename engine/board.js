let _grid = [],
    _coords = [];

const _indexOf = (coord) => 
    _coords.indexOf(coord);

const get = (coord) => {
    let index = _indexOf(coord);
    return _grid[index];
};

const set = (coord, symbol) => {
    let index = _indexOf(coord);
    _grid[index] = symbol;
};

const reset = (symbol) => {
    _grid = _grid.map(() => symbol);
}

const getGrid = () => _grid;

const init = (width, height, coords, symbol) => {
    _grid = new Array(width * height);
    let sym = (symbol) ? symbol : '';
    reset(symbol);
    _coords = coords;
};

export { getGrid, get, set, reset, init };