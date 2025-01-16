let _grid = [],
    _coords = [];

const _indexOf = (coord) => 
    _coords.indexOf(coord);

const get = (coord) => {
    let index = _indexOf(coord);
    return _grid[index];
};

const getAllFor = (coords) => {
    let all = coords.map((id) => _grid[id]);
    return all;
};

const set = (coord, symbol) => {
    let index = _indexOf(coord);
    _grid[index] = symbol;
};

const reset = (symbol) => {
    _grid = _grid.map(() => symbol);
}

const getGrid = () => _grid;

const getColFor = (id) => {
    let row_coords = _coords.filter((coord) => {
        let row_id = coord.split('')[1];

        return id === row_id;
    });

    let row = getAllFor(row_coords);

    return row;
} 

const getRowFor = (id) => {
    let row_coords = _coords.filter((coord) => {
        let row_id = coord.split('')[0];

        return id === row_id;
    });

    let row = getAllFor(row_coords);

    return row;
} 

const init = (width, height, coords, symbol) => {
    _grid = new Array(width * height);

    let sym = (symbol) ? symbol : '';
    reset(sym);
    _coords = coords;
};

export { getGrid, getRowFor, getColFor, get, set, reset, init };