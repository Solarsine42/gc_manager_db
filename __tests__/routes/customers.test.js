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
      expect(res.body).toHaveLength(1);
    });
  });

  describe("add one customer", () => {
    it("should add one customer successfully", async () => {
      const newCustomer = { name: "Jimmie Joe" };
      const res = await request(app)
        .post("/customers")
        .send(newCustomer);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("update one customer", () => {
    it("should update one customer successfully", async () => {
      // Setup
      const id = 1;
      const updatedCustomer = { name: "Jimmie Joe", id: 1 };

      // Do the work
      const res = await request(app)
        .patch(`/customers/${id}`)
        .send(updatedCustomer);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual("Jimmie Joe");

      // Test the database
      const customers = await knex("customers");
      expect(customers[0].name).toEqual("Jimmie Joe");
    });
  });

  describe("remove one customer", () => {
    it("should remove one customer successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/customers/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual("Jimmie Joe");

      const customers = await knex("customers");
      expect(customers[0].id).toEqual(2);
    });
  });
});
