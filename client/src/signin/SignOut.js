import React from 'react'
import {Redirect} from "react-router-dom";
import { DEFAULT_HOME_PAGE, TOKEN } from '../constants'

//
export default function () {
  sessionStorage.removeItem(TOKEN)
  return <Redirect to={DEFAULT_HOME_PAGE} />
}
