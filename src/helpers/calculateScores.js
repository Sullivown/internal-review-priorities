import _ from 'lodash';

function calculateScores(data, mappings) {
	console.log('Calculating scores....');
	const dataCopy = _.cloneDeep(data);
	dataCopy[0].push('total');
	const headings = dataCopy[0];

	dataCopy.shift();

	let processedData = [];
	processedData.push(headings);

	for (let i = 0; i < dataCopy.length; i++) {
		// Calculate score for individual rows
		let temp = [];
		for (let j = 0; j < dataCopy[i].length; j++) {
			const currentCol = headings[j];
			const metricFunction = mappings[currentCol];
			let output;
			if (metricFunction) {
				output = metricFunction(dataCopy[i][j]);
			} else {
				output = '-';
			}

			temp.push(output);
		}

		// Total all scores for a given row
		const totalScore = temp.reduce((total, item) => {
			if (mappings[item] !== null && Number.isInteger(item)) {
				return total + item;
			}
			return total;
		}, 0);

		temp.push(totalScore);

		processedData.push(temp);
	}

	return processedData;
}

export default calculateScores;
