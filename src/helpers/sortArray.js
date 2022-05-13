import _ from 'lodash';

function sortArray(array, metric, desc) {
	console.log(metric);
	let copy = _.cloneDeep(array);
	const index = array[0].indexOf(metric);

	copy.sort((a, b) => {
		if (a[index] < b[index]) {
			return 1;
		}

		if (a[index] > b[index]) {
			return -1;
		}
		return 0;
	});

	return copy;
}

export default sortArray;
