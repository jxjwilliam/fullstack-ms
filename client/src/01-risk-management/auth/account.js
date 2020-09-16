import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import moment from 'moment'
import Fetcher, { actionFetcher } from "../../helpers/Fetcher";
import { Toast } from "../../components/misc";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.spacing(4)
  }
}))

// custom table-display
const convertTimestamp = (obj) => {
  obj.timestamp = moment(obj.timestamp).format('YYYY-MM-DD')
}

export default function () {
  const classes = useStyles()
  const [columns, setColumns] = useState([])
  const [toast, setToast] = useState(true)
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
    const cols = Object.keys(ths).map(th => ({ title: ths[th], field: th }));
    setColumns(cols)
  }, [])

  const renderAccount = accounts => {
    if (!Array.isArray(accounts)) accounts = [accounts]
    accounts.forEach(convertTimestamp)
    return (
      <MaterialTable
        title={'Accounts'}
        columns={columns}
        data={accounts}
      />
    )
  }

  /**
   * action: {object}, function, string
   * e.g: action={actionFetcher('/auth/account')}
   */
  return (
    <>
      <Fetcher action={'/auth/account'}>
        {data => renderAccount(data)}
      </Fetcher>
      {toast && <Toast message={"Account List"} />}
    </>
  )
}
