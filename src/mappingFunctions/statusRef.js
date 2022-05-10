function stausRef(value) {
	let score = 0;
	if (value === 'awaiting-final-proof') {
		score = 10;
	}
	if (value === 'ready-for-internal-review') {
		score = 5;
	}
	if (value === 'ready-to-go-live') {
		score = 1;
	}
	if (value === 'started') {
		score = 3;
	}

	return score;
}

export default stausRef;
