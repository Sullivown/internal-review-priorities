import _ from 'lodash';

function sortArray(array, metric, desc) {
	let copy = _.cloneDeep(array);

	copy.sort((a, b) => {
		if (a[a.length - 1] < b[b.length - 1]) {
			return 1;
		}

		if (a[a.length - 1] > b[b.length - 1]) {
			return -1;
		}
		return 0;
	});

	return copy;
}

export default sortArray;
