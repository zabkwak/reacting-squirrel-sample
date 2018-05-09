import { SocketClass } from 'reacting-squirrel/server';

export default class User extends SocketClass {

    load(data, next) {
        next(null, { id: 1, name: 'Test User' });
    }
}
