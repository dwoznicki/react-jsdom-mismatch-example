## How to test

```bash
npm run build
npm run start
```

This should build webpack and start a simple server on http://localhost:8080.
Open the console and you should see a warning.

```
Warning: Prop `style` did not match. Server: "width: 100px;" Client: "width:100px" in div
```

Additionally, there's a simple script to see the HTML document that `prerender-loader` creates.

```
node prerender.js
```

