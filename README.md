# pipeline

A modular pipeline architecture

## [Module](lib/Module.js)

A superclass for all modules. Inherents `EventEmitter`.

### [SourceModule](lib/SourceModule.js)

A superclass for modules that emit output and receive no inputs.

``` javascript
const Greeter = SourceModule.create(async function(name) {
	setInterval(() => {
		this.emit('output', `Hello, ${name}!`);
	}, 1000);
});

const greeter = new Greeter('Monty');

// Hello, Monty!
```

### [TransformModule](lib/TransformModule.js)

A superclass for all modules that transform an input to produce a single output.

``` javascript
const LessThan = TransformModule.create(async (x, y) => x < y);

const lessThan = new LessThan(10);

// 9 => true
// 11 => false
```

## [Pipeline](lib/Pipeline.js)

``` javascript
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
```

```
2
41
26
25
47
39.5
27.5
34.5
0.5
39
15.5
3
39.5
2.5
22
```
