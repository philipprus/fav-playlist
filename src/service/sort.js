export const sortByKey = (array, key) => {
    return array.sort(function(a, b) {
        var x = a.track[key]; var y = b.track[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}