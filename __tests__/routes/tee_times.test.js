const request = require("supertest");
const { app } = require("../../server");
const knex = require("../../db/knex");

describe("tee_times routes testing", () => {
  beforeEach(done => {
    return knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  // afterEach(done => {
  //   return knex.migrate.rollback().then(() => {
  //     knex.migrate.latest().then(() => {
  //       knex.seed.run().then(() => {
  //         done();
  //       });
  //     });
  //   });
  // });

  describe("get all tee_times", () => {
    it("should fetch all tee times successfully", async () => {
      const res = await request(app).get("/tee_times");

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(500);
    });
  });

  describe("get one tee time", () => {
    it("should fetch one tee time successfully", async () => {
      const id = 1;
      const res = await request(app).get(`/tee_times/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("add one tee time", () => {
    it("should add one tee time successfully", async () => {
      const newTeeTime = { time: "2019-10-10T10:10:10+07:00" };
      const res = await request(app)
        .post("/tee_times")
        .send(newTeeTime);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("update one tee time", () => {
    it("should update one tee time successfully", async () => {
      // Setup
      const id = 1;
      const updatedTeeTime = { time: "2019-10-10T10:10:10+07:00" };

      // Do the work
      const res = await request(app)
        .patch(`/tee_times/${id}`)
        .send(updatedTeeTime);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body[0].time).toEqual("2019-10-10T10:10:10+07:00");

      // Test the database
      const tee_times = await knex("tee_times");
      expect(tee_times.find(tee_time => tee_time.id === id).time).toEqual(
        "2019-10-10T10:10:10+07:00"
      );
    });
  });

  describe("remove one tee time", () => {
    it("should remove one tee time successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/tee_times/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].time).toEqual("2019-12-09T01:57:19+07:00");

      const tee_times = await knex("tee_times");
      expect(tee_times[0].id).toEqual(2);
    });
  });
});
