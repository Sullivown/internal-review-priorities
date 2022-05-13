import FunctionTemplatesModule from '../mappingFunctions/FunctionTemplatesModule';

const FunctionMappingFactory = (categories) => {
	// Takes an array of categories (column headings) and returns a function mapping object
	let functionMap;
	let categoriesToWeight;

	const init = () => {
		const templates = FunctionTemplatesModule.templates;

		// Get total number of categoies to add a weight of more than 0
		categoriesToWeight = categories.reduce((total, item) => {
			if (item in templates) {
				total += 1;
			}
			return total;
		}, 0);

		// Create function mappings
		const funcMapObj = categories.reduce((obj, item) => {
			console.log(item);
			if (item in templates) {
				console.log('in here');
				obj[item] = {
					algorithm: item,
					weight: parseFloat((1 / categoriesToWeight).toFixed(2)),
				};
			} else {
				obj[item] = { algorithm: 'copyValue', weight: 0 };
			}
			return obj;
		}, {});

		funcMapObj.totalWeight = 1;

		functionMap = funcMapObj;
	};

	init();

	return { functionMap };
};

export default FunctionMappingFactory;
