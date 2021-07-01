const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  try {
    const users = await table.select().firstPage();
    return formattedReturn(200, users);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, { msg: "something went wrong!" });
  }
};
