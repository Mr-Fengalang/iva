/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可

import { AtDivider } from 'taro-ui';
import data from './moke.json';
import './index.less';


export default class GoodsList extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <AtDivider content='推荐专区' fontColor='#ed3f14' lineColor='#ed3f14' />
        <View>
          {data.instructionGetList.map((item, index) => (
            <View key={index}>
              <View className='imagesize'>
                <Image src={item.img} />
              </View>
              <View className='texcenter at-row'>
                <View className='at-col at-col-12 title at-col--wrap'>
                  {item.name}
                </View>
              </View>
              <View className='texcenter'>市场价格:￥{item.realMoney}</View>
              <View className='texcenter'>优惠价格:￥{item.discountMoney}</View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
