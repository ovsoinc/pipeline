const EventEmitter = require('events');

module.exports = class Module extends EventEmitter {
	constructor(config) {
		super();

		Object.assign(this, config);
	}
}
