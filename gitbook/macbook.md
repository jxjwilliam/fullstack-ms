### command

---

```bash
$ brew tap heroku/brew && brew install heroku
$ heroku login

$ brew services stop mongodb-community

$ brew services restart nginx (stop, start)

$ brew install mariadb; //brew uninstall mysql;
```

### mariadb vs mysql

### brew install

---

- heroku
- nginx
- mysqld (8.0)
- mongodb

### [nginx.conf](https://stackoverflow.com/questions/32576317/why-does-nginx-return-404-from-mean-server-when-loading-assets)

---

```text
   1 server {
   2     listen 80;
   3
   4     server_name mydomain.com;
   5
   6     location ~ ^/myApp/(libs/|img/|js/|css/) {
   7         root /path/to/myApp/public;
   8         access_log off;
   9         expires max;
  10     }
  11
  12     location /myApp {
  13         proxy_pass http://mean-stack-ip:8080;
  14         proxy_http_version 1.1;
  15         proxy_set_header Upgrade $http_upgrade;
  16         proxy_set_header Connection 'upgrade';
  17         proxy_set_header Host $host;
  18         proxy_cache_bypass $http_upgrade;
  19     }
  20 }

```
