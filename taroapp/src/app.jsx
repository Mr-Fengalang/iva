/* eslint-disable import/first */
import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.less";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/index/index",
      "pages/personalTransaction/index",
      "pages/attention/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "今日报价",
          iconPath: "./images/tab/signboard.png",
          selectedIconPath: "./images/tab/signboard_active.png"
        },
        {
          pagePath: "pages/personalTransaction/index",
          text: "个人交易",
          iconPath: "./images/tab/dollar.png",
          selectedIconPath: "./images/tab/dollar_active.png"
        },
        {
          pagePath: "pages/attention/index",
          text: "我的关注",
          iconPath: "./images/tab/attention.png",
          selectedIconPath: "./images/tab/attention_active.png"
        }
      ],
      color: "#333",
      selectedColor: "#333",
      backgroundColor: "#fff",
      borderStyle: "white"
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
