# react-toggle-flags

A component which will help toggling boolean flags easily in your app.

## Install

```sh
npm install react-toggle-flags
```

## Usage:

### Show control pannel

```js
import  ToggleFlagsToolbar,{Flag} from 'react-toggle-flags';
import  'style!css!react-toggle/style.css';
import  'style!css!react-toggle-flags/style.css';

const demo = <ToggleFlagsToolbar flags={["flag1","flag2"]}/>
```

### Read flag value in app

```js
import {Flag} from 'react-toggle-flags';

if(Flag('flag1')){
  ...
}
```
### Development

```sh
npm start
```

### Compatibility

* [LocalStorage](http://caniuse.com/#feat=namevalue-storage)

### Screenshot

![screenshot](docs/screenshot.png)

## License

MIT