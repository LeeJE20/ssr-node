const responseMessage = require("./../../constatns/responseMessage");
const statusCode = require("./../../constatns/statusCode");

// const db = require("../../db/db");
const db = require("./../../models");
const util = require("./../../lib/util");

module.exports = async (req, res) => {
  try {
    let email = "aa@aa.com";
    let password = "pwpw";
    let name = "홍길동";
    const selectQuery = `SELECT * FROM members`;
    const insertQuery = (email, password, name) => {
      return `
      INSERT INTO members (email, password, name)
      VALUE ('${email}', '${password}', '${name}')
      `;
    };

    await db.sequelize.query(insertQuery(email, password, name));
    const [results, metadata] = await db.sequelize.query(selectQuery);

    const result = results;

    res
      .status(statusCode.OK)
      .send(
        util.success(statusCode.OK, responseMessage.INSERT_SUCCESS, result)
      );
  } catch (error) {
    console.log(
      `[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`,
      `[CONTENT] ${error}`
    );

    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  } finally {
  }
};
