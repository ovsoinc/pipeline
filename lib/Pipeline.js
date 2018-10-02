const Module = require('./Module');

module.exports = class Pipeline {
	constructor(modules) {
		this.modules = modules;

		for(let i = 1; i < modules.length; i++) {
			modules[i - 1].on('output', output => {
				modules[i].emit('input', output);
			});
		}
	}
}
