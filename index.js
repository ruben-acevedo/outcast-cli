const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const getLocationInfo = require("./utils/getLocationInfo");
const forecast = require("./utils/forecast");
let arg;

if (!argv.today && !argv.week) {
  throw new Error("no arguments found, try: --today or --week");
}
if (argv._.length === 0) {
  throw new Error("Please inform location");
}

const location = argv._.join(" ");
if (argv.today) arg = argv.today;
else arg = argv.week;

const main = async () => {
  const locationInfo = await getLocationInfo(location);
  const response = await forecast(locationInfo.coordinates);
  console.log(response);
};

main();
