var sourceMap = require('source-map');
var fs = require('fs');
var parser = require('./bugparser').BugParse;

var _LINE = 0;
var _COLUMN = 0;
var _DATA_ENTRY = '';
var _FILE_SOURCEMAP = './sourcemap/android/sourcemap.js'

process.argv.forEach(function (val, index, array) {
    const hasKey = val.indexOf('=');
    if (hasKey !== -1) {
        const key = val.substr(0, hasKey); 
        const value = val.substr(hasKey+1);
        _DATA_ENTRY = (key === 'data') ? value : _DATA_ENTRY;
    }
});

var dataObject = parser(_DATA_ENTRY);

if (_DATA_ENTRY.length) {
    const arrayLine = dataObject.line;
    const arrayColumn = dataObject.column;
    
    arrayLine.forEach((value, index) => {
        readError(value, arrayColumn[index]);
    })
    
    function readError(line, column) {
        fs.readFile(_FILE_SOURCEMAP, 'utf8', function (err, data) {
            var smc = new sourceMap.SourceMapConsumer(data);
        
            console.log(smc.originalPositionFor({
                line: parseInt(line, 0),
                column: parseInt(column, 0)
            }));
        });
    }
}
