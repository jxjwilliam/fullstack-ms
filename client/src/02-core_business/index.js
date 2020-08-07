import React, {Component, Fragment} from 'react';
import {
  Container,
  Typography,
  Link,
} from '@material-ui/core';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Routers from './sub-routers'
import {BASE} from './common'
import {Drawer, bars} from '../components'
import {NavList, RouteList} from '../helpers/reusable'
import {getMenu1Action, getMenu2Action} from '../state/actions'

class CoreBusinessSupplier extends Component {

  constructor(props) {
    super(props)
    props.getMenu1Action();
    this.state = {}
    this.title = '核心企业及供应商';
  }

  render() {
    return (
      <Fragment>
      <Container fixed>
        <bars.Bar2>
          <Drawer/>
          <Typography>
            <Link href={BASE} color="inherit" variant="h6">{this.title}</Link>
          </Typography>
          <NavList navs={Routers}/>
        </bars.Bar2>
        <div>
          <RouteList
            routes={Routers}
            redirect={{from: BASE, to: `${BASE}/盟信额度/额度查询`}}
          />
        </div>
      </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  menu1: state.menu1,
  menu2: state.menu2,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {getMenu1Action, getMenu2Action}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreBusinessSupplier);
