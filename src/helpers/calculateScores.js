import _ from 'lodash';
import sortArray from './sortArray';
import convertToFunction from './convertToFunction';
import FunctionTemplatesModule from '../mappingFunctions/FunctionTemplatesModule';

function calculateScores(data, mappings) {
	const dataCopy = _.cloneDeep(data);
	const headings = [...dataCopy[0]];

	let processedData = [];
	processedData.push([...dataCopy[0]]);
	processedData[0].push('total');

	dataCopy.shift();

	const templates = FunctionTemplatesModule.templates;

	for (let i = 0; i < dataCopy.length; i++) {
		// Calculate score for individual rows
		let temp = [];
		for (let j = 0; j < dataCopy[i].length; j++) {
			const currentCol = headings[j];
			let metricFunction;

			if (mappings[currentCol]) {
				metricFunction =
					templates[mappings[currentCol].algorithm] || null;
			}

			let output;
			if (metricFunction) {
				const func = convertToFunction(metricFunction);
				output = func(dataCopy[i][j]);
				if (output !== null && !isNaN(output)) {
					output *= mappings[currentCol].weight;
					output = parseFloat(output.toFixed(3));
				}
			} else {
				output = '-';
			}

			temp.push(output);
		}

		// Total all scores for a given row
		const totalScore = temp.reduce((total, item) => {
			if (mappings[item] !== null && !isNaN(item)) {
				return total + parseFloat(item);
			}
			return parseFloat(total.toFixed(3));
		}, 0);

		temp.push(totalScore);

		processedData.push(temp);
	}

	const sortedData = sortArray(processedData);

	return sortedData;
}

export default calculateScores;
