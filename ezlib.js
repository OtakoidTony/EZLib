Array.prototype.sort_by = function (name) {
    return this.sort(function (a, b) {
        if (a[name] > b[name]) {
            return 1;
        }
        if (a[name] < b[name]) {
            return -1;
        }
        return 0;
    }
}
