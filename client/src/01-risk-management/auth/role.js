import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'
import Fetcher from '../../helpers/Fetcher'
import { Toast } from '../../components/misc'

const useStyles = makeStyles(theme => ({}))

export default function () {
  const classes = useStyles()
  const [columns, setColumns] = useState([])
  const [toast, setToast] = useState(true)

  useEffect(() => {
    const cols = [
      { title: 'name', field: 'Name' },
      { title: 'desc', field: 'Description' },
      { title: 'timestamp', field: 'Updated' },
    ]
    setColumns(cols)
  }, [])

  const renderRole = roles => {
    return (
      <MaterialTable
        title={'Roles'}
        columns={columns}
        data={roles}
      />
    )
  }

  return (
    <>
      <Fetcher action='/auth/role'>
        {data => renderRole(data)}
      </Fetcher>
      {toast && <Toast message="Role List" />}
    </>
  )
}