const S = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../db/index.js");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
        type: S.STRING,
        allowNull: false,
      },
    lastname: {
        type: S.STRING,
        allowNull: false,
      },
    email: {
      type: S.STRING,

    }, 
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      return bcrypt.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
