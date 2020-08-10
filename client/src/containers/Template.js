import React, {Component} from "react";

export function FTemplate({ match: { path, url } }) {
  const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
  console.log(JSON.stringify(url, null, 4));
  return <h2>{`${breadcrumbs} : `}</h2>
}

export class CTemplate extends Component {
  render() {
    const { match: { path, url } } = this.props;
    const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
    return <h2>{`${breadcrumbs} : `}</h2>
  }
}
