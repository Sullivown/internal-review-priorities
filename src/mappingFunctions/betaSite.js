function betaSite(value) {
	let score = 0;

	if (value === 2) {
		score = 1;
	}
	if (value === 3) {
		score = 0.8;
	}
	if (value === 4) {
		score = 0.6;
	}
	if (value === 5) {
		score = 0.4;
	}
	if (value === 6) {
		score = 0.2;
	}

	return score;
}

export default betaSite;
