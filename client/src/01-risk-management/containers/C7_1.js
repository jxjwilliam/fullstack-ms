import React from 'react'
import {
  ChromeReaderMode,
  Warning,
  WrapText,
  Textsms,
  FilterVintage,
  TrackChanges,
  Description,
  PersonPin,
  Message,
} from '@material-ui/icons'
import { TabPanels } from '../../components'

export default function () {
  const ary = ['贷后基础管理', '贷后定期管理', '贷后实时管理', '贷后流程管理']

  const ary1 = [
    {
      path: '贷后基础管理',
      icon: WrapText,
    },
    {
      path: '贷后定期管理',
      icon: Textsms,
    },
    {
      path: '贷后实时管理',
      icon: FilterVintage,
    },
    {
      path: '贷后流程管理',
      icon: ChromeReaderMode,
    },
  ]

  const subAry1 = [
    {
      path: '贷后基础条件管理',
      icon: WrapText,
    },
    {
      path: '短息提示信息维护',
      icon: Textsms,
    },
    {
      path: '问题资产清处置信息',
      icon: FilterVintage,
    },
  ]
  const subAry2 = [
    {
      path: '财务报表管理',
      icon: TrackChanges,
    },
    {
      path: '定期检查',
      icon: Description,
    },
  ]
  const subAry3 = [
    {
      path: '风险分类',
      icon: Warning,
    },
    {
      path: '风险提示及反馈',
      icon: Textsms,
    },
    {
      path: '逾期欠息查询',
      icon: FilterVintage,
    },
    {
      path: '合账管理',
      icon: ChromeReaderMode,
    },
  ]
  const subAry4 = [
    {
      path: '贷后实时风险分类',
      icon: PersonPin,
    },
    {
      path: '贷后实时预警管理',
      icon: Message,
    },
    {
      path: '贷后定期管理',
      icon: ChromeReaderMode,
    },
  ]

  return <TabPanels ary={ary} />
}
