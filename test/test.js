var fs = require("fs");
var read_xlsx = require("../read_xlsx");

var buf = fs.readFileSync("./test.xlsx");

read_xlsx.getWorkbook(buf).then(function(workbook){
	var sheetNames = workbook.getSheetNames();
	console.log(sheetNames);
	
	workbook.getSheet("Sheet1").then(function(sheet){
		var rowLen = sheet.getRows();
		var cellLen = sheet.getColumns();
		for(var i=0; i<rowLen; i++) {
			for(var k=0; k<cellLen; k++) {
				var cell = sheet.getCell(i,k);
				//If the cell is empty, it is possible that the cell does not exist return null!
				if(cell !== null) {
					console.log(cell.getName()+":"+cell.getContents())
				}
			}
		}
		
		//find cell by name
		var a1Sheet = sheet.findCell("A1");
		var a1Str = a1Sheet.getContents();
		console.log(a1Str)
	})["catch"](function(err) {
		console.error(err.stack);
	});
});