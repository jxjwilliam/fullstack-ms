### DB

```text
create database dbms;
create user dbms_user;
ALTER USER 'dbms_user' IDENTIFIED WITH mysql_native_password  BY 'dbms~123456$'

use dbms;
grant all privileges on *.* to 'dbms_user';

use mysql;
update user set authentication_string=password('root') where user='root' and Host='localhost';

FLUSH PRIVILEGES;
```

## sequelize

- sequelize-cli,
- sequelize-auto

```shell script
$ npx sequelize-cli init
```

```shell script
$ npx sequelize-cli model:generate - name User - attributes firstName:string,lastName:string,email:string
```

```shell script
$ npx sequelize-auto -o "./models" -d dbname -h localhost -u root -p 3306 -x motdepasse -e mysql
```

## Model Query

```text
findAll
findByPk
findOne
findOrCreate
findAndCountAll
```

### API

---

| 表   | CRUD | API        | 说明             |
| ---- | ---- | ---------- | ---------------- |
| User | GET  | /api/users | 取所有`用户信息` |
