function betaSite(value) {
	let score = 0;
	const v = parseInt(value);

	if (v === 2) {
		score = 1;
	}
	if (v === 3) {
		score = 0.8;
	}
	if (v === 4) {
		score = 0.6;
	}
	if (v === 5) {
		score = 0.4;
	}
	if (v === 6) {
		score = 0.2;
	}
	console.log(value, score);

	return score;
}

export default betaSite;
