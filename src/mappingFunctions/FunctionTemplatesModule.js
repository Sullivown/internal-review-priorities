import convertFromFunction from '../helpers/convertFromFunction';
import copyValue from './copyValue';
import statusRef from './statusRef';
import betaSite from './betaSite';
import binaryInclusion from './binaryInclusion';

const FunctionTemplatesModule = (() => {
	const templates = {
		copyValue: convertFromFunction(copyValue),
		statusRef: convertFromFunction(statusRef),
		binaryInclusion: convertFromFunction(binaryInclusion),
		betaSite: convertFromFunction(betaSite),
	};

	const update = (data) => {
		templates[data.key] = data.value;
	};

	return { templates, update };
})();

export default FunctionTemplatesModule;
