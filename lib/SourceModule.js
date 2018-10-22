const Module = require('./Module');

module.exports = class SourceModule extends Module {
	constructor() {
		super();
	}

	start() {
		throw new Error("Start method not defined!");
	}

	stop() {
		throw new Error("Stop method not defined!");
	}
}
