const json = require("../../data.json");
const Model = require("../models");

exports.getAllOperators = async (req, res) => {
  // by database
  try {
    // const data = await Model.aggrigae([
    // {
    // $project: {
    //       operator: 1,
    //       _id : 0
    //   }
    // ]);
    // const allOperator = [...new Set(data)];

    const result = json.map((elem) => elem.operator);
    const allOperator = [...new Set(result)];
    res.status(200).send(allOperator);
  } catch (error) {
    res.status(500).send({ message: "server error " });
  }
};

exports.operatorGameType = async (req, res) => {
  console.log("starting");
  try {
    // by db
    // const data = await Model.aggregate([
    //   {
    //     $project: {
    //       operatorGameType: 1,
    //       _id : 0
    //     },
    //   },
    // ]);

    const result = json.map((item) => {
      return {
        operatorGameType: item.operatorGameType,
        operator: item.operator,
      };
    });

    let allOperatorGameType = {};

    result.forEach((item) => {
      if (allOperatorGameType[item.operator]) {
        allOperatorGameType[item.operator].push(item.operatorGameType);
        allOperatorGameType[item.operator] = [
          ...new Set(allOperatorGameType[item.operator]),
        ];
      } else {
        allOperatorGameType[item.operator] = [item.operatorGameType];
      }
    });
    res.status(200).send(allOperatorGameType);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "server error " });
  }
};

exports.getOperatorName = async (req, res) => {
  console.log("starting", req.query);
  const { operator, operatorGameType } = req.query;

  try {
    // by db
    // const data = await Model.aggregate([
    //   {
    //     $match: {
    //       operator,
    //       operatorGameType,
    //     },
    //     $project: {
    //       operatorName: 1,
    //       _id: 0,
    //     },
    //   },
    // ]);

    const result = json
      .filter((item) => {
        if (
          item.operator === operator &&
          item.operatorGameType === operatorGameType
        ) {
          return item;
        }
      })
      .map((item) => item.operatorName);
    const allOperatorName = [...new Set(result)];
    res.status(200).send({ allOperatorName, count: allOperatorName.length });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "server error " });
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const { operator, operatorGameType, operatorName } = req.query;
    const result = json
      .filter((item) => {
        if (
          item.operator === operator &&
          item.operatorGameType === operatorGameType &&
          item.operatorName === operatorName
        )
          return item;
      })
      .map((item) => item.dfsSlatePlayers);
    let players = [];

    result.forEach((item) => {
      players = [...players, ...item];
    });

    res.status(200).send({ players, count: players.length });
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "server error " });
  }
};

exports.highPointPlayer = (req, res) => {
  const { operator, operatorGameType, operatorName } = req.query;
  console.log(req.query);
  try {
    const result = json
      .filter((item) => {
        if (
          item.operator === operator &&
          item.operatorGameType === operatorGameType &&
          item.operatorName === operatorName
        )
          return item;
      })
      .map((item) => item.dfsSlatePlayers);
    let players = [];

    result.forEach((item) => {
      players = [...players, ...item];
    });

    let highIndex = 0;
    players.forEach((item, idx) => {
      if (item?.fantasyPoints && item.fantasyPoints > highIndex) {
        highIndex = idx;
      }
    });

    res.status(200).send({ highestPointofPlayer: players[highIndex] });
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "server error " });
  }
};
