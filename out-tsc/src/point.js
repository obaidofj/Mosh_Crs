export class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('X:' + this._x + 'Y:' + this._y);
    }
    get x() {
        return this._x;
    }
    set x(xval) {
        if (xval < 0)
            throw new Error('value can not be less than zero');
        this._x = xval;
    }
}
//# sourceMappingURL=point.js.map