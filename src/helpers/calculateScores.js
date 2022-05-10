import _ from 'lodash';
import sortArray from './sortArray';

function calculateScores(data, mappings) {
	console.log('Calculating scores....');
	const dataCopy = _.cloneDeep(data);
	const headings = [...dataCopy[0]];

	let processedData = [];
	processedData.push([...dataCopy[0]]);
	processedData[0].push('total');

	dataCopy.shift();

	for (let i = 0; i < dataCopy.length; i++) {
		// Calculate score for individual rows
		let temp = [];
		for (let j = 0; j < dataCopy[i].length; j++) {
			const currentCol = headings[j];

			const metricFunction = mappings[currentCol].algorithm
				? mappings[currentCol].algorithm
				: null;

			let output;
			if (metricFunction) {
				output = metricFunction(dataCopy[i][j]);
				if (Number.isInteger(output)) {
					output *= mappings[currentCol].weight;
				}
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

	const sortedData = sortArray(processedData);

	return sortedData;
}

export default calculateScores;
