const faker = require("faker");
const { join } = require("path");
const { writeFile } = require("fs").promises;

const Car = require("../src/entitites/car");
const CarCategory = require("../src/entitites/car-category");
const Customer = require("../src/entitites/customer");

const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
  carIds: [],
  id: faker.random.uuid(),
  name: faker.vehicle.type(),
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];

for (let i = 0; i < ITEMS_AMOUNT; i++) {
  const car = new Car({
    id: faker.random.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  });

  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: faker.random.number({ min: 18, max: 50 }),
  });

  customers.push(customer);
}

const write = (filename, data) =>
  writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

(async () => {
  await write("cars.json", cars);
  await write("carsCategories.json", carCategory);
  await write("customer.json", customers);

  console.log({ cars });
  console.log({ carCategory });
  console.log({ customers });
})();
