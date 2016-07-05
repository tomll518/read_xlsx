var fs = require("fs");
var read_xlsx = require("../read_xlsx");

var buf = fs.readFileSync("./test.xlsx");

read_xlsx.getWorkbook(buf).then(function(workbook){
	var sheetNames = workbook.getSheetNames();
	console.log(sheetNames);
	
	workbook.getSheet("Sheet1").then(function(sheet){
		var a1Sheet = sheet.findCell("A1");
		var a1Str = a1Sheet.getContents();
		console.log(a1Str)
	});
});