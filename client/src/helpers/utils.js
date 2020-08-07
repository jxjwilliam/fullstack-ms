import React, {Fragment, Component} from 'react'
import {Link, Route} from 'react-router-dom'
import {HEADERS} from '../state/ActionTypes'

export const NavItem = ({to, exact, children}) => {
  return (
    <Route path={to} exact={exact} children={({match}) => (
      <li className="nav-item">
        <Link className={match ? 'nav-link active' : 'nav-link'} to={to}>{children}</Link>
      </li>
    )}/>
  )
}

// redux-form (react example)
export const defer = ms => {
  const promise = new Promise((resolve, reject) => {
    ms = ms || 2000;
    setTimeout(() => resolve(), ms);
  })
  return promise;
}

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const isEmpty = prop => {
  return prop === null || prop === undefined ||
    (prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
}

export const Loading = loadingProp => Comp => {
  return class extends Component {
    render() {
      return isEmpty(this.props[loadingProp])
        ? <Fragment>
          <div className="loader"/>
        </Fragment>
        : <Comp {...this.props}/>;
    }
  }
}

export const fetching = (url, opts = {}) => {
  let body;
  const headers = {...HEADERS, ...opts.headers}
  const method = opts.method || 'GET';
  if (opts.body) body = opts.body;

  return fetch(url, {method, headers, body}).then(res => res.json()).catch(e => alert(e));
}


export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
