## How it works

- coorporate with `routes`, `models`.
- test with `Postman` plugin/app.

##

- findOrCreate
- findByPk
- findAll
- create
- update

## Important Methods:

- `Model.findAll()` finds all instances
- `Model.findAll({where: {.......}})` finds all instances that match the where condition
- `Model.findOne({where: {....}})` finds first match for the where condition
- `Model.findByPk(id)` finds by an id number. Sequelize will coerce strings into ints, 
so you can simply use the req.params.id and not worry about casting to a Number before sending to Sequelize
- `Model.findOrCreate({where: {.....}})` will find an entry OR create it if necessary. 
returns Instance as first argument, and created boolean as the second. 
Good for making sure you don't make a bunch of duplicates
- if the above queries return nothing, return value will be null


## Reference:

- [1702 Express/Sequelize/Associations Review](https://github.com/ianmunrobot/1702-express-review)