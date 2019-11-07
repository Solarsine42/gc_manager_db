const { Model } = require("objection");

class Customer extends Model {
  static get tableName() {
    return "customers";
  }

  static get relationMappings() {
    const Teetime = require("./Teetime");

    return {
      teetimes: {
        relation: Model.ManyToManyRelation,
        modelClass: Teetime,
        join: {
          from: "customers.id",
          through: {
            // users_appointments is the join table.
            from: "cust_tee_times.customer_id",
            to: "cust_tee_times.tee_time_id"
          },
          to: "tee_times.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "company", "phone", "address", "email"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        company: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Customer;
