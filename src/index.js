import Server from 'reacting-squirrel/server';

import User from './user';

const app = new Server({
    dev: true,
});

app.get('/', 'page', 'Page');

app.registerSocketClass(User);

app.start();