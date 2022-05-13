import convertFromFunction from '../helpers/convertFromFunction';
import copyValue from './copyValue';
import statusRef from './statusRef';

const FunctionTemplatesModule = (() => {
	const templates = {
		copyValue: convertFromFunction(copyValue),
		statusRef: convertFromFunction(statusRef),
		custom1: '',
		custom2: '',
	};

	const update = (data) => {
		console.log(data);
		templates[data.key] = data.value;
	};

	return { templates, update };
})();

export default FunctionTemplatesModule;
