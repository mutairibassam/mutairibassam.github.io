const { table } = require("airtable");
const formattedReturn = require("formattedReturn");

module.exports = async (event) => {
  try {
    const fields = JSON.parse(event.body);
    const createUser = await table.create([{ fields }]);
    return formattedReturn(200, createUser);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, { msg: "something went wrong!" });
  }
};
