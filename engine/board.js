let _width = 0, 
    _height = 0,
    _grid = [];

const getAll = () => _grid;

// array.filter seems to have problems.
const _filter = (array, func) => {
    const res = [];
    for(let i=0;i<array.length;i++) {
        let item = array[i];

        if (func(item, i, array)) {
            res.push(item);
        }
    }

    return res;
}

const getRow = (index) => {

    const start = index * _width,
        end = start + _width;

    return _grid.slice(start, end);
}

const getCol = (index) => 
     _filter(_grid,  (_, idx) => {
        return (idx + index) % _width === 0;
     });


const getDiagonal = (rowIdx, colIdx) => {

    // Diagonals go from south-west to north-east orientation: /
    return _grid.filter((_, idx) => {
        
        // r0, c0 => i0             (c0 * _width)
        // r0, c1 => i1, i8         (c1 * _width)
        // r0, c2 => i2, i9, i16    (c1 * _width)
        // all differences are 7 = _width - 1
        let index = rowIdx * colIdx; 
        return idx % index === 0;
    });
}

const getAntiDiagonal = (rowIdx, colIdx) => {
    
    // orientation: \
    return _grid.filter((_, idx) => {
        

        return idx % index === 0;
    });
}

const init = (width, height) => {
    _width = width;
    _height = height;
    _grid = new Array(width * height);
};

export { getAll, init, getRow, getCol };