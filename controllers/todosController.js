const db = require("../database/models");

module.exports = {
  list: (req, res, next) => {
    const userId = req.params.userid;
    const folderID = req.params.folderid;
    db.Todo.findAll({
      where: {
        users_id: userId,
        folders_id: folderID,
      },
    })
      .then((todos) => {
        console.log(todos);
        return res.json({
          meta: {
            status: 200,
          },
          data: [...todos],
        });
      })
      .catch((err) => {
        console.log(err);
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
    const userId = req.params.userid;
    const folderID = req.params.folderid;
    db.Todo.create({
      name: req.body.name,
      completed: req.body.completed,
      users_id: userId,
      folders_id: folderID,
    })
      .then((todo) => {
        return res.json({
          meta: {
            status: 200,
          },
          data: {
            todo: todo.dataValues,
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
  edit: (req, res, next) => {
    db.Todo.update(
      {
        name: req.body.name,
        completed: req.body.completed,
      },
      {
        where: {
          id: {
            [db.Sequelize.Op.like]: [req.params.todoid],
          },
        },
      }
    )
      .then(() => {
        db.Todo.findAll({
          where: {
            id: {
              [db.Sequelize.Op.like]: [req.params.todoid],
            },
          },
        })
          .then((t) => {
            return res.json({
              meta: {
                status: 200,
              },
              data: {
                msg: "TODO updated correctly",
                todo: t[0].dataValues,
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
        id: {
          [db.Sequelize.Op.like]: [req.params.todoid],
        },
      },
    })
      .then((x) => {
        if (x) {
          return res.json({
            meta: {
              status: 200,
            },
            data: `Successfully deleted TODO id: ${req.params.todoid}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete TODO id: ${req.params.todoid}`,
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
  bulkDelete: (req, res, next) => {
    db.Todo.destroy({
      where: {
        folders_id: {
          [db.Sequelize.Op.like]: [req.params.folderid],
        },
      },
    })
      .then((x) => {
        if (x) {
          return res.json({
            meta: {
              status: 200,
            },
            data: `Successfully deleted ALL TODOS associated to folders id: ${req.params.folderid}`,
          });
        } else {
          return res.json({
            meta: {
              status: 406,
            },
            data: `Could not delete content associated to folder id: ${req.params.folderid}`,
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
