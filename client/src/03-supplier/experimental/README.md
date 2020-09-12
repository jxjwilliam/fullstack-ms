## TODO


- notification
- loading, error, data
- file upload 

### [Patterns for data fetching in React](https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/)

- Autonomous (自主性, 独立存在的, Server-provided data):
```text
<meta http-equiv="refresh" content="30">
```
- HOC
- Render Props
- Hooks


### fetching

- Generic (authentication)

```text
headers: { 
    'authorization': `Bearer ${authToken}`, 
    'Content-type':'application/json', 
    'Accept':'application/json', 
}
```

- file upload form  (authentication)

```text
headers: { 
    'authorization': `Bearer ${authToken}`, 
    'Content-type':'Content-Type: multipart/form-data', 
    'Accept':'application/json', 
}
```

- proxy (e.g. sms)  (NO authentication)

```text
headers: { 
    'Content-type':'application/json', 
    'Accept':'application/json', 
}
```

- Individual cases (NO authentication) === proxy
