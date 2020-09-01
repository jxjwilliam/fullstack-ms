HISTORY to fix:

- When http://localhost:8066/auth, get warning:
<blockquote>
  GET http://localhost:8066/favicon.ico 404 (Not Found)
</blockquote>    

to fix:

```shell script
$ touch favicon.ico
```


### auth server

1. login / logout
2. register
3. authentication
4. refresh tokens



### [Https status](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

```text
100 Continue
101 Switching Protocols
103 Early Hints
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
307 Temporary Redirect
308 Permanent Redirect
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
422 Unprocessable Entity
425 Too Early
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
451 Unavailable For Legal Reasons
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
```

- http: 409 is the correct status code for duplicate resource or resource already exists.
- `res.redirect(307, '/auth/register')`: 307 Temporary Redirect (since HTTP/1.1) In this occasion, the request should be repeated with another URI, but future requests can still use the original URI.2 
In contrast to 303, the request method should not be changed when reissuing the original request. For instance, a `POST` request must be repeated using another POST request.

### authentication and authorization

According to standard, client should send `token` to server via HTTP request in a header called `Authorization` with the form `Bearer [JWT_TOKEN]`.
```text
headers: { 'Authorization': 'Bearer ...token...',  'Content-Type': 'application/json'}
```

   
