function convertFromFunction(func) {
	const funcString = func.toString();
	const startIndex = funcString.indexOf('{');
	const endIndex = funcString.lastIndexOf('}');

	const funcContent = funcString.substring(startIndex + 1, endIndex);

	return funcContent;
}

export default convertFromFunction;
