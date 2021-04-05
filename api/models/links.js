const S = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../db/index.js");

class Link extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Link.init(
  {
    origilianLink: {
        type: S.STRING,
        allowNull: false,
      },
    shortLink: {
        type: S.STRING,
        allowNull: false,
      },
    userId: {
      type: S.STRING,
    }, 

  },
  {
    sequelize: db,
    modelName: "Link",
  }
);



module.exports = Link;
