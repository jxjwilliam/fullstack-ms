## sequelize

- sequelize-cli, 
- sequelize-auto


```shell script
$ npx sequelize-cli init
```


```shell script
$ npx sequelize-cli model:generate - name Account - attributes firstName:string,lastName:string,email:string
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
| Account | GET  | /api/users | 取所有`用户信息` |
