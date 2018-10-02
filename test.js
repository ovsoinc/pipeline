const { Pipeline, SourceModule, TransformModule } = require('./');

const Generator = SourceModule.create(async function(max) {
	setInterval(() => {
		this.emit('output', Math.floor(Math.random() * max))
	}, 100);
});

const Multiplier = TransformModule.create(async (number, multiplier) => {
	return number * multiplier;
});

const Logger = TransformModule.create(async number => {
	console.log(number);
});

new Pipeline([
	new Generator(100),
	new Multiplier(0.5),
	new Logger()
]);
