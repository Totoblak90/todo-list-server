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
      .catch((err) => {
        return res.json({
          meta: {
            status: 500,
          },
          data: {
            ok: false,
            error: err,
            msg: "Unknown problem, check the error msg",
          },
        });
      });
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
      db.Folder.create(
        {
          users_id: req.body.users_id,
          name: req.body.name,
        },
        {
          include: {
            association: "Todos",
          },
        }
      )
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
        .catch((err) => {
          return res.json({
            meta: {
              status: 500,
            },
            data: {
              ok: false,
              error: err,
              msg: "Unknown problem, check the error msg",
            },
          });
        });
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
        db.Folder.findAll({
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.id],
            },
          },
        })
          .then((folder) => {
            if (value[0]) {
              return res.json({
                meta: {
                  status: 200,
                },
                data: {
                  message: "Edited correctly",
                  folder: folder[0].dataValues,
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
          .catch((err) => {
            return res.json({
              meta: {
                status: 500,
              },
              data: {
                ok: false,
                error: err,
                msg: "Unknown problem, check the error msg",
              },
            });
          });
      })
      .catch((err) => {
        return res.json({
          meta: {
            status: 500,
          },
          data: {
            ok: false,
            error: err,
            msg: "Unknown problem, check the error msg",
          },
        });
      });
  },
  delete: (req, res, next) => {
    db.Todo.destroy({
      where: {
        folders_id: req.params.id,
      },
    })
      .then((y) => {
        if (y) {
          db.Folder.destroy({
            where: {
              id: {
                [db.Sequelize.Op.like]: [req.params.id],
              },
            },
          })
            .then((x) => {
              if (x && y) {
                return res.json({
                  meta: {
                    status: 200,
                  },
                  data: `Successfully deleted folder id: ${req.params.id} and all of it's content`,
                });
              } else {
                return res.json({
                  meta: {
                    status: 406,
                  },
                  data: `Could not delete folder id: ${req.params.id} but the content was deleted, we're sorry ;(`,
                });
              }
            })
            .catch((err) => {
              return res.json({
                meta: {
                  status: 500,
                },
                data: {
                  ok: false,
                  error: err,
                  msg: "Unknown problem, check the error msg",
                },
              });
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
      .catch((err) => {
        return res.json({
          meta: {
            status: 500,
          },
          data: {
            ok: false,
            error: err,
            msg: "Unknown problem, check the error msg",
          },
        });
      });
  },
};
