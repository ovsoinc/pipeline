const EventEmitter = require('events');

module.exports = class Module extends EventEmitter {
	constructor() {
		super();
	}
}
