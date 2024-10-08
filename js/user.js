export class User {
    constructor() {
        this.users = [];
    }

    login(user) {
        return user;
    }

    register(user) {
        this.addUser(user);
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter((u) => u !== user);
    }

    getUsers() {
        return this.users;
    }
}
