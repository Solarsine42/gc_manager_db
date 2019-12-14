const request = require("supertest");
const { app } = require("../../server");
const knex = require("../../db/knex");

describe("customers routes testing", () => {
  beforeEach(done => {
    return knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe("get all customers", () => {
    it("should fetch all customers successfully", async () => {
      const res = await request(app).get("/customers");

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(300);
    });
  });

  describe("get one customer", () => {
    it("should fetch one customer successfully", async () => {
      const id = 1;
      const res = await request(app).get(`/customers/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body.email).toEqual("margiebarber@pharmacon.com");
    });
  });

  describe("add one customer", () => {
    it("should add one customer successfully", async () => {
      const newCustomer = {
        name: "Joe Schmoe",
        company: "BLAH",
        email: "blah@pharmacon.com",
        phone: "+1 (978) 466-3835",
        address: "580 Court Square, Blandburg, Arizona, 597",
        created_at: "2017-05-22T02:53:41 +07:00",
        updated_at: "2016-01-15T08:36:33 +07:00"
      };
      const res = await request(app)
        .post("/customers")
        .send(newCustomer);

      expect(res.status).toEqual(200);
      expect(res.body.email).toEqual("blah@pharmacon.com");
    });
  });

  describe("update one customer", () => {
    it("should update one customer successfully", async () => {
      // Setup
      const id = 1;
      const updatedCustomer = {
        name: "Blah Blah",
        company: "BLAH",
        email: "blah@pharmacon.com",
        phone: "+1 (978) 466-3835",
        address: "580 Court Square, Blandburg, Arizona, 597",
        created_at: "2017-05-22T02:53:41 +07:00",
        updated_at: "2016-01-15T08:36:33 +07:00"
      };

      // Do the work
      const res = await request(app)
        .patch(`/customers/${id}`)
        .send(updatedCustomer);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body.name).toEqual("Blah Blah");

      // Test the database
      const customers = await knex("customers");
      expect(customers.find(cust => cust.id === id).name).toEqual("Blah Blah");
    });
  });

  describe("remove one customer", () => {
    it("should remove one customer successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/customers/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body.name).toEqual("Margie Barber");

      const customers = await knex("customers");
      expect(customers[0].id).toEqual(2);
    });
  });
});
