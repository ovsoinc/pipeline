class Module = require('./Module');

module.exports = class TransformModule extends Module {
	constructor(...args) {
		super();

		this.tasks = [];

		this.on('input', async input => {
			const promise = this.transform(input, ...args);

			const task = {
				promise,
				isResolved: false
			};

			this.tasks.push(task);

			await promise;

			task.isResolved = true;

			if(this.tasks[0].isResolved === true) {
				const task = this.tasks.shift();

				this.emit('output', await task.promise);
			}
		});
	}

	static create(fn) {
		const module = class AnonymousTransformModule extends this {
			constructor() {
				super();
			}
		};

		module.transform = fn;
	}
}
