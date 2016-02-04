# React Initicon
> Initial Icons for React

![IN](https://drive.google.com/uc?export=view&id=0BwAfqxmTWrImSjJJdG1CWHdTaEU)
![IT](https://drive.google.com/uc?export=view&id=0BwAfqxmTWrImREkwUFRwSGM0cjA)
![IC](https://drive.google.com/uc?export=view&id=0BwAfqxmTWrImanU0WU1WSnNhME0)
![ON](https://drive.google.com/uc?export=view&id=0BwAfqxmTWrImRXVWZDJyWWhzbHc)

[Initicon Demo](https://bradbumbalough.github.io/react-initicon)

## Usage
```JavaScript
<Initicon
  size={100}
  text="Test Account"
  seed={23}
  single={false}
/>
```

## Browser
```HTML
<script src="https://rawgit.com/bradbumbalough/react-initicon/master/index.js"></script>
```

## Installation
`npm install --save react-initicons`

## Node.js
```JavaScript
var Initicon = require('react-initicon');
```

## React Native
```JavaScript
var Initicon = require('react-initicon/native');
```

## Props
|Key |Type |Description |
|--- |--- |--- |
|`text`|String|The text to use to make initials|
|`size`|Number|The pixel height / width of the icon|
|`seed`|Number|Number uses to seed the random hue generator|
|`color`|String|Override the background color with any valid CSS color value|
|`single`|Boolean|Whether to only use a single initial or now|
|`saturation`|String|Specify the `hsl` saturation value|
|`brightness`|String|Specify the `hsl` lightness (brightness) value|
