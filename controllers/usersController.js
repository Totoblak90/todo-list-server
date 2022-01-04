const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

var connectionFailResponse = (err) => {
  return {
    meta: {
      status: 500,
    },
    data: {
      msg: "Unknown error. Please check connection to database or reload.",
      error: JSON.stringify(err),
    },
  };
};

async function findUser(email) {
  let user;
  try {
    user = await db.User.findOne({
      where: {
        email,
      },
      include: [
        {
          association: "Folders",
        },
        {
          association: "Todos",
        },
      ],
    });
    return user;
  } catch (error) {
    res.json(connectionFailResponse(error));
  }
}

module.exports = {
  login: async (req, res, next) => {
    const user = await findUser(req.body.email);

    if (user) {
      var passwordCheck = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
    }

    if (user && passwordCheck) {
      user.password = undefined;

      res.json({
        meta: {
          status: 200,
        },
        data: {
          message: "Login succes!",
          user: user,
        },
      });
    } else {
      res.json({
        meta: {
          status: 401,
        },
        data: {
          message: "Incorrect credentials",
        },
      });
    }
  },
  register: async (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        meta: {
          status: 401,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    } else {
      db.User.create({
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
      })
        .then((value) => {
          value.dataValues.password = undefined;

          res.json({
            meta: {
              status: 200,
            },
            data: {
              user: {
                ...value.dataValues,
              },
            },
          });
        })
        .catch((err) => connectionFailResponse(err));
    }
  },
};
