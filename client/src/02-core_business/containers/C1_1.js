import React from 'react'
import Typography from '@material-ui/core/Typography'

export default (props) => {
  console.log(props)
  return (
    <div className="dovbox">
      <Typography>
        <span>我的额度：</span>
        <span>22</span>
      </Typography>
      <Typography>
        <span>已用额度：</span>
        <span>12</span>
      </Typography>
      <Typography>
        <span>可用额度：</span>
        <span>10</span>
      </Typography>
    </div>
  )
}
