**DEMO**(win7/win8/win10)

[download demo](https://github.com/veluxa/sciterjs-react/raw/master/aardio/dist/sciterjs.exe)

---
use react to write Sciterjs programs that support browser and desktop;

![screen](/screen.png)

---
**Features**:

| property | support | note |
| :-- | :--: | :-- |
| js、jsx | ✔ | |
| ts、tsx | ✔ | |
| style | ✔ |  |
| className | ✔ | The browser supports className, sciter does not support **className** please use **class**  |
| class component | ✔ | lifecycle,state |
| function component | ✔ | hook |
| router | ✔ | Please use [preact-router](https://www.npmjs.com/package/preact-router) |
| hot reload | ✔ | Support browser and window desktop ([sciterjs-browser](https://github.com/veluxa/sciterjs-browser))|

---

**Notice**:
1. When writing css, use x instead of * and o instead of %. For example:

| source  | webpack | result |
| :-- | :--: | :-- |
| margin-left: x | => | margin-left: * |
| height: 100oo | => | height: 100%% |


2. If the element has a clickable event, append behavior: "**clickable**" to the element. See app.tsx

3. ~~buildaardio 编译后请在aardio资源文件上右键选择 "同步本地目录"，不然新编译的资源在aardio中运行不会生效~~ 在aardio工程里项目资源管理器中选中 layout 目录，在右侧边属性栏中选择 **本地构建**

![screen](/aardio.png)

4. Please grant scapp execute permission on macos, otherwise it will not work properly.

---
install
```sh
npm i
```

run:

1、web
```sh
npm run dev:www
```

2、web & scapp
```sh
npm run dev:scapp
```


build:

1、web
```sh
npm run build:www
```

2、sciterjs
```sh
npm run build:scapp
```

3、aardio
```sh
npm run build:aardio
```

inspector:
```sh
npm run inspector
```
