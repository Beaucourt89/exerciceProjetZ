import moment from "moment";
moment().format();

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };

const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");
};

const yearsSinceDate = (date) => {
  let a = moment();
  let b = moment([date]).format();

  return a.diff(b, "years");
};

const getDayFromDate = (date) => {
  return moment(date).format("dddd");
};

const daysSinceDate = (date) => {
  let a = moment();
  let b = moment([date]).format();

  return a.diff(b, "days") - 4; // 1
};
