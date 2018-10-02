const Module = require('./Module');

module.exports = class SourceModule extends Module {
	constructor() {
		super();
	}

	static create(fn) {
		return class AnonymousSourceModule extends this {
			constructor(...args) {
				super();

				fn.apply(this, args);
			}
		}
	}
}
