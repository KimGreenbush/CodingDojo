const faker = require("faker");

class User {
    constructor() {
        this._id = `${faker.random.uuid()}`;
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.phoneNumber = `${faker.phone.phoneNumber()}`;
        this.email = `${faker.internet.email()}`;
        this.password = `${faker.internet.password()}`;
    }
}

module.exports = User;