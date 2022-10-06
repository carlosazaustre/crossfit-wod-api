const normalizeString = (string) => string.trim().toLowerCase();
const checkParam = (workout, param) => normalizeString(workout).includes(normalizeString(param));

module.exports = {
  normalizeString,
  checkParam
}