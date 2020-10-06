- `useRef` not render when change, completely separate to component function.

- access dom
- persist values across renders without causing re-rendering.
- everytime `state` changes, function will re-exectue, so use `useMemo`, `useCallback` to prevent `state` changes.
- useEffect(func, [denpendencies])
  (if dependencies=obj{}, using `useMemo` to cache )
