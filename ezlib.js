Array.prototype.sort_by = function (name) {
    return this.sort(function (a, b) {
        if (a[name] > b[name]) {
            return 1;
        }
        if (a[name] < b[name]) {
            return -1;
        }
        return 0;
    })
}

Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)];
}
