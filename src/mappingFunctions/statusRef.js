function statusRef(value) {
	let score = 0;
	if (value === 'awaiting-final-proof') {
		score = 0;
	}
	if (value === 'ready-for-internal-review') {
		score = 1;
	}
	if (value === 'ready-to-go-live') {
		score = 0;
	}
	if (value === 'started') {
		score = 0;
	}

	return score;
}

export default statusRef;
