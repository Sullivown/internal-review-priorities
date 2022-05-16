function convertToFunction(text) {
	console.log(text);
	const func = new Function('value', text);
	return func;
}
export default convertToFunction;
