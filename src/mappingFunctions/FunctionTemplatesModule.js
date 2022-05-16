import convertFromFunction from '../helpers/convertFromFunction';
import copyValue from './copyValue';
import statusRef from './statusRef';
import betaSite from './betaSite';
import binaryInclusion from './binaryInclusion';

const FunctionTemplatesModule = (() => {
	const templates = {
		copyValue: copyValue,
		statusRef: statusRef,
		binaryInclusion: binaryInclusion,
		betaSite: betaSite,
	};

	const update = (data) => {
		templates[data.key] = data.value;
	};

	return { templates, update };
})();

export default FunctionTemplatesModule;
