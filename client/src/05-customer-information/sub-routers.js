import {Layout} from '../components'
import {
  Group,
  Help,
  MonetizationOn,
  RateReview,
  OfflineBolt,
  SettingsInputSvideo,
  DataUsage
} from '@material-ui/icons'
import {Menu1, Content1} from './C1'
import {Menu2, Content2} from './C2'
import {Menu3, Content3} from './C3'
import {Menu4, Content4} from './C4'
import {Menu5, Content5} from './C5'
import {DataViewMenu, DataViewContent} from './DataView';
import {HelpMenu, HelpContent} from './Helper'
import {subRouters} from './common';

const C1 = Layout(Menu1, Content1);
const C2 = Layout(Menu2, Content2);
const C3 = Layout(Menu3, Content3);
const C4 = Layout(Menu4, Content4);
const C5 = Layout(Menu5, Content5);
const Helper = Layout(HelpMenu, HelpContent);
const DataView = Layout(DataViewMenu, DataViewContent);

const Routers = [
  {
    path: subRouters['客户基本信息'],
    title: '客户基本信息',
    icon: Group,
    component: C1,
  },
  {
    path: subRouters['财务信息'],
    title: '财务信息',
    icon: MonetizationOn,
    component: C2,
  },
  {
    path: subRouters['评级限额信息'],
    title: '评级限额信息',
    icon: RateReview,
    component: C3,
  },
  {
    path: subRouters['风险信息'],
    title: '风险信息',
    icon: OfflineBolt,
    component: C4,
  },
  {
    path: subRouters['关联信息'],
    title: '关联信息',
    icon: SettingsInputSvideo,
    component: C5,
  },
  {
    path: subRouters['现有数据'],
    title: '现有数据',
    icon: DataUsage,
    component: DataView,
  },
  {
    path: subRouters['帮助'],
    title: '帮助',
    icon: Help,
    component: Helper,
  },
];

export default Routers;
