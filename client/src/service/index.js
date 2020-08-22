import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  ButtonGroup,
  Link,
  Button,
} from '@material-ui/core'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from '@material-ui/styles'
import { Home as HomeIcon } from '@material-ui/icons'
import { Drawer1, Menu2, footers } from '../components'
import theme from './theme'
import ServiceDemo from './demo'
import { BusinessRouters } from '../routers'
import { navList as navs1 } from '../01-risk-management/routers'
import { navList as navs2 } from '../02-core_business/routers'
import { navList as navs3 } from '../03-supplier/routers'
import { navList as navs4 } from '../04-customer/routers'
import { navList as navs5 } from '../05-financing/routers'

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})

const getMap = () => {
  const Routers = [navs1, navs2, navs3, navs4, navs5]
  return BusinessRouters.reduce((map, br, idx) => {
    if (!Routers[idx]) return map
    const { component, ...others } = br
    map.set(others, Routers[idx])
    return map
  }, new Map())
}

const patch = (routers) => {
  const certificate = BusinessRouters[BusinessRouters.length - 1]
  const { path, title, icon: Icon } = certificate
  return routers.push(
    <ButtonGroup
      key={title}
      ariant="contained"
      aria-label="outlined primary button group"
    >
      <Button color="inherit" startIcon={<Icon />} component={Link} href={path}>
        {title}
      </Button>
    </ButtonGroup>
  )
}

export default function () {
  const classes = useStyles()

  const all5 = getMap()
  console.log('✋ ✌', all5, null, 4)

  const routers = []
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of all5) {
    const { path, title, icon: CompIcon } = key
    routers.push(
      <ButtonGroup key={title}>
        <Menu2 routers={value} base={path} title={title} Icon={CompIcon} />
      </ButtonGroup>
    )
  }

  patch(routers)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/" color="inherit" variant="h6">
              <HomeIcon />
            </Link>
            <Drawer1 />
            {routers}
          </Toolbar>
        </AppBar>
        <ServiceDemo />
        <footers.Footer2 />
      </Container>
    </ThemeProvider>
  )
}
