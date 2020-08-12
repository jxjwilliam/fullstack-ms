import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link, Route, Switch} from "react-router-dom";
import React, {Fragment} from "react";
import {FTemplate} from "../containers";
import {BASE} from "../06-financing/routers";

function getMenu(key, items) {
  function menu() {
    const list = items.map(item => {
      const CompIcon = item.icon
      return (
        <ListItem
          button
          component={Link}
          to={`${BASE}/${key}/${item.path}`}
          key={item.path}
        >
          <ListItemIcon>
            <CompIcon />
          </ListItemIcon>
          <ListItemText primary={item.path} />
        </ListItem >
      )
    })
    return (
      <Fragment>
        {list}
      </Fragment>
    )
  }
  return menu;
}

function getContent(key, items) {
  return function () {
    return (
      <Switch>
        {items.map(item => {
          const { path } = item;
          const url = `${BASE}/${key}/${path}`
          return (
            <Route
              path={url}
              // component={item.component}
              render={FTemplate}
              key={item.path}
            />
          )
        })}
      </Switch>
    )
  }
}
