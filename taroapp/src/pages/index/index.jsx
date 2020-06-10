/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid, AtButton } from "taro-ui";

import GoodsList from "../../components/goodsList";
import "./index.less";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      solidTagList: [
        { name: "英特尔处理器", active: true, value: "interCPU" },
        { name: "AMD处理器", active: true, value: "amdCPU" }
      ],
      data: [
        {
          image: require("../../images/icon/cpu.jpg"),
          value: "CPU"
        },
        {
          image: require("../../images/icon/zhuban.jpg"),
          value: "主板"
        },
        {
          image: require("../../images/icon/cb.jpg"),
          value: "板U套装"
        },
        {
          image: require("../../images/icon/xk.jpg"),
          value: "显卡"
        },
        {
          image: require("../../images/icon/nc.jpg"),
          value: "内存"
        },
        {
          image: require("../../images/icon/yp.jpg"),
          value: "硬盘"
        },
        {
          image: require("../../images/icon/dy.jpg"),
          value: "电源"
        },
        {
          image: require("../../images/icon/jx.jpg"),
          value: "机箱、风扇"
        },
        {
          image: require("../../images/icon/sanre.jpg"),
          value: "散热器"
        },
        {
          image: require("../../images/icon/xsq.jpg"),
          value: "显示器"
        },
        {
          image: require("../../images/icon/waise.jpg"),
          value: "电脑外设"
        },
        {
          image: require("../../images/icon/xkzj.jpg"),
          value: "其他相关"
        }
      ]
    };
  }
  handleSolidClick(data) {
    const { solidTagList } = this.state;
    const findIndex = solidTagList.findIndex(item => item.name === data.name);
    solidTagList[findIndex].active = !solidTagList[findIndex].active;
    console.log(solidTagList);

    this.setState({ solidTagList });
  }
  apigame() {
    Taro.request({
      url: "http://localhost:8081/api/games"
    }).then(res => console.log(res));
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "IVA电脑硬件价格表"
  };

  render() {
    return (
      <View>
        <View className="example-item">
          <AtGrid columnNum={4} data={this.state.data} />
          <AtButton loading onClick={this.apigame.bind(this)} type="primary">
            按钮文案
          </AtButton>
          {/* {this.state.solidTagList.map((item, index) => (
            <AtTag
              type='primary'
              key={index}
              name={item.name}
              active={item.active}
              circle
              onClick={this.handleSolidClick.bind(this)}
            >
              {item.name}
            </AtTag>
          ))} */}
        </View>
        <GoodsList></GoodsList>
      </View>
    );
  }
}
