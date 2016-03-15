# Orientation-js
Detect device orientation.

## [DEMO](http://weilao.github.io/orientation-js/demo.html)

## Usage
### In stylesheets
```css
.portrait .stuff{
  background-color: red;
}

.landscape .stuff{
  background-color: blue;
}
```
### In scripts
```js
if(Orientation.isPortrait()){
  // do something
}

if(Orientation.isLandscape()){
  // do something
}
```