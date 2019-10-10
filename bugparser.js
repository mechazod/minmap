
module.exports.BugParse = (dataEntry = '') => {
    var _DATA_ENTRY = dataEntry;
    var line = [];
    var column = [];

    if (_DATA_ENTRY.length) {
        var regex = /:\d*:\d*/gm;
        var found = _DATA_ENTRY.match(regex);
        
        for(var i = 0; i < found.length; i++) {
            var entryItem = found[i].substr(1).split(':');
            line.push(entryItem[0]);
            column.push(entryItem[1]);
        }
    }
    return { line, column };
}

