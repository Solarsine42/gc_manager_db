const { Model } = require("objection");

class Teetime extends Model {
  static get tableName() {
    return "tee_times";
  }

  static get relationMappings() {
    const Customer = require("./Customer");

    return {
      customers: {
        relation: Model.ManyToManyRelation,
        modelClass: Customer,
        join: {
          from: "tee_times.id",
          through: {
            // Customers_tee_times is the join table.
            from: "cust_tee_times.tee_time_id",
            to: "cust_tee_times.customer_id"
          },
          to: "customers.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time"],

      properties: {
        id: { type: "integer" },
        time: { type: "datetime" }
      }
    };
  }
}

module.exports = Teetime;
