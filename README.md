# ts-next-nilswg-blog
This is nilswg's personal portfolio website.

### Setting up
```bash
npm install
```

### Create your key
This service you can choose own, and modify file: pages/api/message.ts.

Here, I use Line Nofify API. So, you can set your key here like this.

<a href="https://notify-bot.line.me/doc/en/">Line Notify API</a>

```bash
### @file: env.local
### Just an exmaple, don't use it directly.
LINE_NOTIFY_TOKEN=yd8u6TmdC6e7CNOwz8aGV3ONHDjulTrnSJhXRZujboq
```

Of course, you need a Line Account, and create a group to receive message.