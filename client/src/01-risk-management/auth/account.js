import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import {makeStyles} from "@material-ui/core/styles";
import moment from 'moment'
import Fetcher, {loadContent} from "../../helpers/LoadContent";

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

  const renderAccount = accounts => {
    if (!Array.isArray(accounts)) accounts = [ accounts ]
    accounts.forEach(convertTimestamp)
    return (
      <MaterialTable
        title={'Accounts'}
        columns={columns}
        data={accounts}
      />
    )
  }

  return (
    <Fetcher action={loadContent('/auth/account')}>
      {data => renderAccount(data)}
    </Fetcher>
  )
}

export default Account
