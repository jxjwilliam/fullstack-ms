import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import {makeStyles} from "@material-ui/core/styles";
import moment from 'moment'
import { fetching } from "../../helpers/utils";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.spacing(4)
  }
}))

// custom table-display
const convertTimestamp = (obj) => {
  obj.timestamp = moment(obj.timestamp).format('YYYY-MM-DD')
}

function Account() {
  const classes = useStyles()
  const [accounts, setAccounts ] = useState([])
  const [columns, setColumns] = useState([])
  const ths = {
    username: "Account",
    email: "Email",
    phone: "Phone",
    'role.name': "Role Name",
    'category.name': "Category Name",
    desc: "Description",
    timestamp: 'Updated'
  }

  useEffect(() => {
    const columns = Object.keys(ths).map(th => ({ title: ths[th], field: th }));
    setColumns(columns)
  }, [])

  // /auth/account/5f49a0ca9743db411812343a
  useEffect(() => {
    fetching('/auth/account')
      .then(accounts => {
        if (!Array.isArray(accounts)) accounts = [ accounts ]
        accounts.forEach(convertTimestamp)
        setAccounts(accounts)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <MaterialTable
      title={'Accounts'}
      columns={columns}
      data={accounts}
    />
  )
}

export default Account
