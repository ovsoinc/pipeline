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
```

### [TransformModule](lib/TransformModule.js)

A superclass for all modules that transform an input to produce a single output.

``` javascript
const LessThan = TransformModule.create(async (x, y) => x < y);

const lessThan = new LessThan(10);

// 9 => true
// 11 => false
```
