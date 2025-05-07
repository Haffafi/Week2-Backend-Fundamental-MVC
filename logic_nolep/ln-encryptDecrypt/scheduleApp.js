const moment = require("moment");

function scheduleTask() {
  const currentDate = moment().add(7, "days").format("YYYY MM DD");
  console.log("Scheduled task for:", currentDate);
}

module.exports = { scheduleTask };
