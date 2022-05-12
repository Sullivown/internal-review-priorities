function convertToFunction(text) {
	const func = new Function('value', text);
	return func;
}
export default convertToFunction;
