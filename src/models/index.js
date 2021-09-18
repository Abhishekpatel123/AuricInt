const mongoose = require("mongoose");


const Schema = new mongoose.Schema(
  {
    season: String,
    seasonType: Number,
    slateId: Number,
    week: Number,
    _lastUpdatedDate: Date,
    dfsSlateGames: Array,
    dfsSlatePlayers: Array,
    isMultiDaySlate: Boolean,
    numberOfGames:Number,
    operator: String,
    operatorDay: Date,
    operatorGameType: String,
    operatorName: String,
    operatorSlateId: Number,
    operatorStartTime: Date,
    removedByOperator: Boolean,
    salaryCap: Number,
    slateRosterSlots: Array,
    id: String,
  },
  { timestamps: true }
);

const Model = mongoose.model("assignment", Schema);

module.exports = Model;
