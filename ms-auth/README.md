HISTORY to fix:

- When http://localhost:8066/auth, get warning:
<blockquote>
  GET http://localhost:8066/favicon.ico 404 (Not Found)
</blockquote>    

to fix:

```shell script
$ touch favicon.ico
```
