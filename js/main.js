//should we use jquery or pure js?
//referenced https://www.upbuild.io/blog/lighthouse-reports-multiple-pages/

let request = new XMLHttpRequest();
let file = "../report/lighthouse/schwab_com_etfs_costs-fees.report.json"
request.open("GET", file);
request.send(null)
let container = document.querySelector('container');
request.onLoad = function() {
	let data = request.response;
	populateContainer(data);
}

function populateContainer (json) {
	//an array of error Titles
	let errorTitles = Object.keys(json["audits"]);
	let errorScores = [];
	Object.values(Object.values(json["audits"])).forEach((item) => {
		Object.values(item).forEach((val, index) => {
			errorScores[index] = errorScores[index] || [];
			errorScores[index].push(val);
		});
	});
	for (let i = 0; i < errorTitles.lenth; i++) {
		let heading = document.createElement('h2');
		heading.textContent = `${errorTitles[i]} has a score of ${errorScores[i].}`;
	}
	document.querySelector('container').appendChild(heading);
}