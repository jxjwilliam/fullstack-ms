### object expression 

It's important to wrap it in parents, so that parser understands this as an `expression` rather than a block.

Also, it can be nicer to use the concise method notation inside mapdispatchtoprops, instead of arrow functions because it's harder.

```javascript
const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch({type: 'TOGGLE_TODO', id})
    }
})
```

### Redux

---

- combineReducers
- applyMiddleware
- [bindActionCreators](https://redux.js.org/api/bindactioncreators)
- compose
- Provider
- connect
- createStore
- Store
```typescript
    type Store = {
      dispatch: Dispatch
      getState: () => State
      subscribe: (listener: () => void) => () => void
      replaceReducer: (reducer: Reducer) => void
    }
```
- [redux-source-code-series-redux-thunk-source-code-analysis](https://programmer.ink/think/redux-source-code-series-redux-thunk-source-code-analysis.html)
