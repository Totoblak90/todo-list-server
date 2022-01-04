const db = require("../database/models");
const { validationResult } = require("express-validator");

module.exports = {
  list: (req, res, next) => {
    db.Folder.findAll({
      where: {
        users_id: +req.params.userid,
      },
    })
      .then((value) => {
        res.json({
          meta: {
            status: 200,
          },
          data: {
            folders: [...value],
          },
        });
      })
      .catch((err) => console.log(err));
  },
  create: (req, res, next) => {
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
      db.Folder.create({
        users_id: req.body.user_id,
        name: req.body.name,
      })
        .then((value) => {
          res.json({
            meta: {
              status: 200,
            },
            data: {
              folder: {
                ...value.dataValues,
              },
            },
          });
        })
        .catch((err) => console.log(err));
    }
  },
  edit: (req, res, next) => {
    db.Folder.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: {
            [db.Sequelize.Op.like]: [req.params.id],
          },
        },
      }
    )
      .then((value) => {
        if (value[0]) {
          return res.json({
            meta: {
              status: 200,
            },
            data: {
              message: "Edited correctly",
            },
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: {
              message: "Invalid id",
            },
          });
        }
      })
      .catch((err) => console.log(err));
  },
  delete: (req, res, next) => {
    db.Folder.destroy({
      where: {
        id: {
          [db.Sequelize.Op.like]: [req.params.id],
        },
      },
    })
      .then((x) => {
        if (x) {
          return res.json({
            meta: {
              status: 200,
            },
            data: `Successfully deleted folder id: ${req.params.id}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete folder id: ${req.params.id}`,
          });
        }
      })
      .catch((err) => console.log(err));
  },
};
