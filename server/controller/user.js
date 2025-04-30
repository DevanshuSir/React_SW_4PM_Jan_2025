const getData = (req, res) => {
  res.send("Hello Good Evening 🥰");
};

const getSecondData = (req, res) => {
  res.send("Hello");
};

module.exports = {
  getData,
  getSecondData,
};
