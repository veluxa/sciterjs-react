
use react to write Sciterjs programs that support browser and desktop;

![screen](/screen.png)

---
**Features**:

| property | support | note |
| :-- | :--: | :-- |
| style | ✔ |  |
| className | ✔ | The browser supports className, sciter does not support **className** please use **class**  |
| class component | ✔ | lifecycle,state |
| function component | ✔ | hook |
| router | ✔ | Please use [preact-router](https://www.npmjs.com/package/preact-router) |

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
npm run build:www
```

2、sciterjs
```sh
npm run build:win
```

3、aardio
```sh
npm run build:aardio
```

inspector:
```sh
npm run inspector:win
```