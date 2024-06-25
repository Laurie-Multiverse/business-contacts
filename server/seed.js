const { sequelize, Contact } = require("./db");

const contacts = [
    {
      name: 'Jane',
      email: 'jane@example.com',
      phone: '555-555-5555',
      department: 'Engineering',
      position: 'Software Engineer'
    },
    {
      name: 'John',
      email: 'john@example.com',
      phone: '555-555-5555',
      department: 'IT',
      position: 'Network Admin'
    },
    {
      name: 'Jill',
      email: 'jill@example.com',
      phone: '555-555-5555',
      department: 'Marketing',
      position: 'Marketing Manager'
    },
    {
      name: 'Jack',
      email: 'jack@example.com',
      phone: '555-555-5555',
      department: 'HR',
      position: 'HR Manager'
    },
    {
      name: 'Joe',
      email: 'joe@example.com',
      phone: '555-555-5555',
      department: 'Sales',
      position: 'Sales Manager'
    },
    {
      name: 'Josephine',
      email: 'josephine@example.com',
      phone: '555-555-5555',
      department: 'Finance',
      position: 'Finance Manager'
    },
  ];

async function seed() {
    await sequelize.sync({ force: true });
    await Contact.bulkCreate(contacts);
    console.log(`Seeded database with ${contacts.length} contacts`);
};

module.exports = seed;