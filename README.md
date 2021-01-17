
use react to write Sciterjs programs that support browser and desktop;

![screen](/screen.png)

---
**Features**:

> [x] style
>
> [x] className
>
> [x] class component (Lifecycle,State)
>
> [ ] function component (hook is not currently available)

---

**Notice**:
1. When writing css, use x instead of * and o instead of %. For example:

| source  | webpack | result |
| :-- | :--: | :-- |
| margin-left: x | => | margin-left: * |
| height: 100oo | => | height: 100%% |


2. If the element has a clickable event, append behavior: "clickable" to the element. See app.jsx

3. **buildaardio 编译后请在aardio资源文件上右键选择 "同步本地目录"，不然新编译的资源在aardio中运行不会生效**

---
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

3、aardio
```sh
npm run buildaardio
```

inspector:
```sh
npm run inspector
```