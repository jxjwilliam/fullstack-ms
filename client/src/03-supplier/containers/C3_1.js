import React from 'react'
import { TabPanels } from '../../components'

export default function () {
  const ary = ['可用POC', '支付中POC', '已融资POC', '已支付POC', '已到期POC', '原始POC']

  return <TabPanels ary={ary} />
}
