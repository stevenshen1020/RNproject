import { Navigation } from 'react-native-navigation';

import Home from './home/index';
import UnlockHome from './unlock/index';
import MineHome from './mine/index';

// 注册所有的页面
export function registerScreens() {
  Navigation.registerComponent('home',() => home);
  Navigation.registerComponent('unlock',() => unlock);
  Navigation.registerComponent('mine',() => mine);
}