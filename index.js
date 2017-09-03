function iterativeLog(array) {
	array.forEach((element, index) => console.log(`${index}: ${element}`))
}

function iterate(callback) {
	let nameArray = ["daniel", "liz"]
	nameArray.forEach(element => callback(element))
	return nameArray
}

function doToArray(array, callback) {
	array.forEach(element => callback(element))
}