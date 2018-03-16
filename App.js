/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation'
import HomeScreen from './app/screen/home/index';
import MineScreen from './app/screen/mine/index';
import ModalScreen from './app/screen/modal/index';
import UnlockScreen from './app/screen/unlock/index';



console.disableYellowBox = true;

const MainTab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "首页",
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('./app/assets/images/home.png')
                }
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        )
      }
    },
    Unlock: {
      screen: UnlockScreen,
      navigationOptions: {
        tabBarLabel: '解锁',
        header:null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={
                    require('./app/assets/images/add.png')
                }
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        }
      }
    },
    Mine: {
      screen: MineScreen,
      //以下参数也可放置在MinePage.js页面
      navigationOptions: {
        header:null,
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={
              require('./app/assets/images/mine.png')
            }
            style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
          />
        ),
        headerTitleStyle: {
          alignSelf:'center'
        }
      }
    }
  },
  {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#0F88EE', // 文字和图片选中颜色
      inactiveTintColor: '#888', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        height:50
      },
      labelStyle: {
        fontSize: 11, // 文字大小,
        marginTop: 0,
      }
    }
  }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainTab
    },
    MyModal: {
      screen: ModalScreen
    },
    Mine: {
      screen: MineScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
// export default TabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'RN 之旅123,\n' +
//     'Shake or press menu button for dev menu wahah对的ssdddh',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
