## Lean and Populate

`Lean` faster and less memory intensive, but the result documents are plain old JavaScript objects (POJOs), not `mongoose.Document`.

```javascript
User.findOne({ email }, '+password', { lean: true }).populate()
```
