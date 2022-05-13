import _, { head } from 'lodash';

function sortArray(array, metric, desc) {
	let copy = _.cloneDeep(array);
	let headings = copy.shift();

	const index = array[0].indexOf(metric);

	if (desc) {
		copy.sort((a, b) => {
			if (a[index] < b[index]) {
				return 1;
			}

			if (a[index] > b[index]) {
				return -1;
			}
			return 0;
		});
	} else {
		copy.sort((a, b) => {
			if (a[index] > b[index]) {
				return 1;
			}

			if (a[index] < b[index]) {
				return -1;
			}
			return 0;
		});
	}

	copy.unshift(headings);

	return copy;
}

export default sortArray;
