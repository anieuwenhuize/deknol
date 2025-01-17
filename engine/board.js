let _grid = [],
    _coords = [];

const _indexOf = (coord) => 
    _coords.indexOf(coord);

const get = (coord) => {
    let index = _indexOf(coord);
    return _grid[index];
};

const getAllBy = (coords) => {
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

const getAll = () => _grid;

const getAllByCol = (id) => {
    let row_coords = _coords.filter((coord) => {
        let row_id = coord.split('')[1];

        return id === row_id;
    });

    let row = getAllBy(row_coords);

    return row;
} 

const getAllByRow = (id) => {
    let row_coords = _coords.filter((coord) => {
        let row_id = coord.split('')[0];

        return id === row_id;
    });

    let row = getAllBy(row_coords);

    return row;
} 

const init = (width, height, coords, symbol) => {
    _grid = new Array(width * height);

    let sym = (symbol) ? symbol : '';
    reset(sym);
    _coords = coords;
};

export { getAll, getAllBy, getAllByRow, getAllByCol, get, set, reset, init };