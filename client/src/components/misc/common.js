import React, {Component, Fragment} from "react";
import {isEmpty} from "../../helpers/utils";

const Loading = loadingProp => Comp => {
  return class extends Component {
    render() {
      return isEmpty(this.props[loadingProp])
        ? <Fragment>
          <div className="loader" />
        </Fragment>
        : <Comp {...this.props} />;
    }
  }
}


// React.cloneElement(View, {table: collection});
// <View table={collection} />
const setHOCView = (Comp) => (collection) => class extends Component {
  render() {
    return <Comp table={collection} {...this.props} />
  }
}

export {
  Loading,
  setHOCView,
}
