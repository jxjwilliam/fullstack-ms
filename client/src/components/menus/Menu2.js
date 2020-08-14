import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles'
import {Link, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

export default function() {
  return (
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      <Link href="_book" color="inherit" variant="h6">Gitbook</Link>
    </Typography>
  )
}
