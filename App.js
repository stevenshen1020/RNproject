import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app/screen/index';

// 执行注册页面方法
registerScreens();

// 启动app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'home',
      screen: 'home',
      title: '首页',
      icon: require('./app/assets/images/home.png'),
    },
    {
      screen: 'unlock',
      title: '开锁',
      icon: require('./app/assets/images/add.png'),
      iconInsets: {
        top: 5,
        left: 0,
        bottom: -5,
        right: 0
      },
    },
    {
      label: 'mine',
      screen: 'mine',
      title: '我的',
      icon: require('./app/assets/images/mine.png'),
    }
  ],
  appStyle: {
    navBarBackgroundColor: '#263136',//顶部导航栏背景颜色
    navBarTextColor: 'white'//顶部导航栏字体颜色
  },
  tabsStyle: {
    tabBarButtonColor: '#ccc',//底部按钮颜色
    tabBarSelectedButtonColor: '#08cb6a',//底部按钮选择状态颜色
    tabBarBackgroundColor: '#E6E6E6'//顶部条背景颜色
  }
});