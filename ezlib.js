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

Array.prototype.findObjectIndex = function (label, value) {
    for (var i = 0; i < this.length; i++)
        if (this[i][label] == value) return i;
    return -1;
}

Array.prototype.findObject = function (label, value) {
    if (this.findObjectIndex(label, value) != -1) return this[this.findObjectIndex(label, value)];
    else return null;
}
