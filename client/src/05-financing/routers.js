import {
  Apps,
  ContactMail,
  ContactSupport,
  Description,
  FilterVintage,
  People,
  PersonPin,
  Shop,
  SupervisedUserCircle,
  Textsms,
  TrackChanges,
  WrapText
} from "@material-ui/icons";
import Available from "./containers/Available";
import {InChargeSigned, InChargeAvailable, InChargeFinancing, InChargeAcceptance} from './containers/Operator'
import {ReviewSigned, ReviewAvailable, ReviewFinancing, ReviewAcceptance } from "./containers/Reviewer";
import StuffManagement from './containers/StuffManagement'

const base = '融资管理'

const navList = [
  {
    path: '用户中心',
    icon: People,
  },
  {
    path: 'POC管理',
    icon: Apps,
  },
  {
    path: 'POC融资',
    icon: Shop
  },
  {
    path: '人员管理',
    icon: ContactSupport
  },
  {
    path: '企业设置',
    icon: SupervisedUserCircle
  },
]

const mainList = [
  {
    nav: '用户中心',
    main: [
      {
        path: "账户信息",
        icon: SupervisedUserCircle,
        component: Available
      },
      {
        path: "交易信息",
        icon: ContactMail,
        component: InChargeSigned,
      },
      {
        path: "人员管理",
        icon: WrapText,
        component: InChargeAvailable
      },
      {
        path: "企业信息",
        icon: Textsms,
        component: InChargeFinancing
      },
      {
        path: "个人信息",
        icon: FilterVintage,
        component: InChargeAcceptance,
      },
      {
        path: "邀请企业",
        icon: TrackChanges,
      },
    ]
  },
  {
    nav: 'POC管理',
    main: [
      {
        path: "签收POC",
        icon: TrackChanges,
      },
      {
        path: "可用POC",
        icon: FilterVintage,
      },
    ]
  },
  {
    nav: 'POC融资',
    main: [
      {
        path: "资产买入",
        icon: SupervisedUserCircle,
        component: ReviewSigned,
      },
      {
        path: "已经买入资产",
        icon: ContactMail,
        component: ReviewAvailable,
      },
      {
        path: "资产管理",
        icon: WrapText,
        component: ReviewFinancing,
      },
      {
        path: "未承兑资产",
        icon: Textsms,
        component: ReviewAcceptance,
      },
      {
        path: "已承兑资产",
        icon: FilterVintage,
        component: StuffManagement,
      },
      {
        path: "利率设置",
        icon: TrackChanges,
      },
    ]
  },
  {
    nav: '人员管理',
    main: [
      {
        path: "人员管理1",
        icon: SupervisedUserCircle,
      },
      {
        path: "人员管理2",
        icon: ContactMail,
      },
      {
        path: "人员管理3",
        icon: WrapText,
      },
    ]
  },
  {
    nav: '企业设置',
    main: [
      {
        path: "签收POC",
        icon: Description,
      },
      {
        path: "可用POC",
        icon: PersonPin,
      },
    ]
  },
]

export { base, navList, mainList }
