const getTimeStamp = () => {
	return new Date().toISOString();
}
const info = (namespace: string, message: string, object?: any) => {
	if(object) {
		console.info(`${getTimeStamp()} | [INFO] | ${namespace} ${message} ${object}`);
	} else {
		console.info(`${getTimeStamp()} | [INFO] | ${namespace} ${message}`);
	}
}
const error = (namespace: string, message: string, object?: any) => {
	if(object) {
		console.error(`${getTimeStamp()} | [ERROR] | ${namespace} ${message} ${object.message}`);
	} else {
		console.error(`${getTimeStamp()} | [ERROR] | ${namespace} ${message}`);
	}
}
const warning = (namespace: string, message: string, object?: any) => {
	if(object) {
		console.warn(`${getTimeStamp()} | [WARN] | ${namespace} ${message} ${object.message}`);
	} else {
		console.warn(`${getTimeStamp()} | [WARN] | ${namespace} ${message}`);
	}
}

export { info, error, warning }