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

const menuList = [
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

const navList = [
  {
    nav: '用户中心',
    main: [
      {
        path: "账户信息",
        icon: SupervisedUserCircle,
      },
      {
        path: "交易信息",
        icon: ContactMail,
      },
      {
        path: "人员管理",
        icon: WrapText,
      },
      {
        path: "企业信息",
        icon: Textsms,
      },
      {
        path: "个人信息",
        icon: FilterVintage,
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
      },
      {
        path: "已经买入资产",
        icon: ContactMail,
      },
      {
        path: "资产管理",
        icon: WrapText,
      },
      {
        path: "未承兑资产",
        icon: Textsms,
      },
      {
        path: "已承兑资产",
        icon: FilterVintage,
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

export { menuList, navList }
