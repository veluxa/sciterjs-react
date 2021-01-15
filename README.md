
use react to write Sciterjs programs that support browser and desktop;

![screen](/screen.png)

notice:
1. When writing css, use x instead of * and o instead of %. For example:

| source  | webpack | result |
| :-- | :--: | :-- |
| margin-left: x | => | margin-left: * |
| height: 100oo | => | height: 100%% |


2. If the element has clickable events, append behavior: "clickable" to the element. See app.jsx


install
```sh
npm i
```

run:
```sh
npm run dev
```

build:

1、web
```sh
npm run buildwww
```

2、sciterjs
```sh
npm run buildscapp
```

inspector:
```sh
npm run inspector
```