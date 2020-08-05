import React from 'react';
import Typography from '@material-ui/core/Typography';
export default (props)=>{
//     "my_amount": "我的额度",
//   "used_amount": "已用额度",
//   "available_amount": "可用额度",
    return <div className="dovbox">
        <label>
            <span>我的额度：</span>
            <span>22</span>
        </label>
        <label>
            <span>已用额度：</span>
            <span>12</span>
        </label>
        <label>
            <span>可用额度：</span>
            <span>10</span>
        </label>
    </div>
}