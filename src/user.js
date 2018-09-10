import { SocketClass } from 'reacting-squirrel/server';

export default class User extends SocketClass {

    async load(data, next) {
        return await this._load(); // the await is not needed => it's just for the demonstration
    }

    _load() {
        return new Promise((resolve) => resolve({ id: 1, name: 'Test User Promise' }));
    }
}
