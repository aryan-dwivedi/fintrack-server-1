const moongose = require("mongoose");

const billsSchema = new moongose.Schema(
  {
    water: {
        type: Number,
        default: 0
    },
    electricity: {
        type: Number,
        default: 0
    },
    internet: {
        type: Number,
        default: 0
    },
    phone: {
        type: Number,
        default: 0
    },
    tv: {
        type: Number,
        default: 0
    },
    gas: {
        type: Number,
        default: 0
    },
  },
  { timestamps: true }
);

module.exports = moongose.model("Bills", billsSchema);