import React from 'react'
import MaterialTable from 'material-table'

// id, url, company_url, description, how_to_apply, company_logo
function Jobs({ jobs }) {
  const columns = [
    { title: 'title', field: 'title' },
    { title: 'type', field: 'type' },
    { title: 'company', field: 'company' },
    { title: 'location', field: 'location' },
    { title: 'created_at', field: 'created_at' },
  ]

  return (
    <div>
      <MaterialTable
        columns={columns}
        data={jobs}
        title="github jobs"
      />
    </div>
  )
}

export default Jobs
