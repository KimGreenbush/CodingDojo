const faker = require("faker");

class Company {
    constructor() {
        this._id = `${faker.random.uuid()}`;
        this.companyName = `${faker.company.companyName()}`;
        this.address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()} ${faker.address.country()}`;
    }
}

module.exports = Company;