import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function EditProfile({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuTab')}>
          <Image source={require('../assets/back.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>프로필 수정</Text>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.top}>런치박스 환급 정책 안내</Text>
          <Text style={styles.bottom}>매칭 성사되지 않으면 100% 환급!</Text>
        </View>
        <View style={styles.default}>
          <Text style={styles.buy}>하트젤리 구매</Text>
          <Text style={styles.current}>보유 하트젤리 </Text>
          <Text style={styles.number}>100개</Text>
        </View>
        <View style={styles.format}>
          <View style={styles.eventbox}>
            <View style={styles.newbox}>
              <Text style={styles.newword}>실속상품</Text>
            </View>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.eventcount}>5000개</Text>
            <Text style={styles.eventperprice}>개당 31원</Text>
            <View style={styles.pricebox}>
              <Text style={styles.originalprice}>445,000원</Text>
              <Text style={styles.percentage}>65%</Text>
            </View>
            <View style={styles.eventpricebutton}>
              <Text style={styles.eventrealprice}>155,800원</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.count}>2800개</Text>
            <Text style={styles.perprice}>개당 44원</Text>
            <View style={styles.pricebox}>
              <Text style={styles.originalprice}>249,200원</Text>
              <Text style={styles.percentage}>51%</Text>
            </View>
            <View style={styles.pricebutton}>
              <Text style={styles.realprice}>122,000원</Text>
            </View>
          </View>
          <View style={styles.eventbox}>
            <View style={styles.newbox}>
              <Text style={styles.newword}>인기상품</Text>
            </View>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.eventcount}>1000개</Text>
            <Text style={styles.eventperprice}>개당 53원</Text>
            <View style={styles.pricebox}>
              <Text style={styles.originalprice}>89,000원</Text>
              <Text style={styles.percentage}>40%</Text>
            </View>
            <View style={styles.eventpricebutton}>
              <Text style={styles.eventrealprice}>53,400원</Text>
            </View>
          </View>
        </View>
        <View style={styles.format}>
          <View style={styles.box}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.count}>500개</Text>
            <Text style={styles.perprice}>개당 66원</Text>
            <View style={styles.pricebox}>
              <Text style={styles.originalprice}>44,500원</Text>
              <Text style={styles.percentage}>26%</Text>
            </View>
            <View style={styles.pricebutton}>
              <Text style={styles.realprice}>32,900원</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.count}>240개</Text>
            <Text style={styles.perprice}>개당 78원</Text>
            <View style={styles.pricebox}>
              <Text style={styles.originalprice}>21,360원</Text>
              <Text style={styles.percentage}>12%</Text>
            </View>
            <View style={styles.pricebutton}>
              <Text style={styles.realprice}>18,800원</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.count}>100개</Text>
            <Text style={styles.perprice}>개당 88원</Text>
            <View style={styles.pricebutton}>
              <Text style={styles.realprice}>8,900원</Text>
            </View>
          </View>
        </View>
        <View style={styles.default}>
          <Text style={styles.free}>무료 하트젤리</Text>
        </View>
        <View style={styles.default}>
          <View style={styles.freebox}>
            <Text style={styles.freetext}>+100</Text>
          </View>
          <View style>
            <Text style={styles.freeheader}>매일 출석 체크</Text>
            <Text style={styles.freefooter}>
              출석하고 무료 하트젤리를 받으세요.
            </Text>
          </View>
          <Image
            source={require('../assets/button.png')}
            style={styles.checkbutton}
          />
        </View>
        <View style={styles.default}>
          <View style={styles.freebox}>
            <Text style={styles.freetext}>+500</Text>
          </View>
          <View style>
            <Text style={styles.freeheader}>친구 초대</Text>
            <Text style={styles.freefooter}>
              친구를 초대하고 하트젤리를 받으세요
            </Text>
          </View>
          <Image
            source={require('../assets/button.png')}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    marginTop: heightPercentage(80),
    marginLeft: widthPercentage(15),
    marginBottom: heightPercentage(20),
  },
  back: {
    width: widthPercentage(11),
    height: heightPercentage(19),
  },
  title: {
    fontSize: fontPercentage(20),
    fontWeight: '700',
    marginLeft: widthPercentage(125),
  },
  count: {
    fontSize: fontPercentage(18),
    fontWeight: '700',
    color: '#333333',
  },
  newword: {
    fontSize: fontPercentage(10),
    fontWeight: '500',
    color: '#FFFFFF',
  },
  eventcount: {
    fontSize: fontPercentage(18),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  perprice: {
    fontSize: fontPercentage(11),
    fontWeight: '500',
    color: '#797979',
    marginTop: heightPercentage(7),
  },
  button: {
    width: widthPercentage(6),
    height: heightPercentage(10),
    marginTop: heightPercentage(43),
    marginLeft: widthPercentage(100),
  },
  checkbutton: {
    width: widthPercentage(6),
    height: heightPercentage(10),
    marginTop: heightPercentage(43),
    marginLeft: widthPercentage(106),
  },
  freeheader: {
    fontSize: fontPercentage(14),
    fontWeight: '700',
    color: '#333333',
    marginTop: heightPercentage(30),
    marginLeft: widthPercentage(15),
  },
  freefooter: {
    fontSize: fontPercentage(12),
    fontWeight: '600',
    color: '#999999',
    marginTop: heightPercentage(7),
    marginLeft: widthPercentage(15),
  },
  eventperprice: {
    fontSize: fontPercentage(11),
    fontWeight: '500',
    color: '#B8B8B8',
    marginTop: heightPercentage(7),
  },
  realprice: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
    color: '#333333',
  },
  eventrealprice: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
    color: '#FFFFFF',
  },
  originalprice: {
    fontSize: fontPercentage(12),
    fontWeight: '500',
    color: '#B5B9BF',
    marginTop: heightPercentage(7),
    textDecorationLine: 'line-through',
  },
  heart: {
    width: widthPercentage(30),
    height: heightPercentage(27),
    marginBottom: heightPercentage(10),
  },
  percentage: {
    fontSize: fontPercentage(12),
    fontWeight: '500',
    color: '#DC5D64',
    marginTop: heightPercentage(7),
    marginLeft: widthPercentage(5),
  },
  header: {
    width: '100%',
    height: heightPercentage(83),
    backgroundColor: '#F3F3F3',
    marginBottom: heightPercentage(20),
    justifyContent: 'center',
  },
  box: {
    width: widthPercentage(111),
    height: heightPercentage(201),
    backgroundColor: '#FAFAFA',
    borderColor: '#F4F4F4',
    borderRadius: widthPercentage(15),
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  freebox: {
    width: widthPercentage(58),
    height: heightPercentage(58),
    backgroundColor: '#EFC01A',
    borderRadius: widthPercentage(20),
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  newbox: {
    width: widthPercentage(61),
    height: heightPercentage(16),
    backgroundColor: '#910060',
    borderRadius: widthPercentage(100),
    marginBottom: heightPercentage(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventbox: {
    width: widthPercentage(111),
    height: heightPercentage(201),
    backgroundColor: '#1F1E1E',
    borderColor: '#910060',
    borderWidth: widthPercentage(3),
    borderRadius: widthPercentage(15),
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pricebox: {
    flexDirection: 'row',
  },
  pricebutton: {
    marginTop: heightPercentage(7),
    flexDirection: 'row',
    width: widthPercentage(96),
    height: heightPercentage(35),
    borderRadius: widthPercentage(8),
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventpricebutton: {
    marginTop: heightPercentage(7),
    flexDirection: 'row',
    width: widthPercentage(96),
    height: heightPercentage(35),
    borderRadius: widthPercentage(8),
    backgroundColor: '#505050',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    fontSize: fontPercentage(15),
    fontWeight: '700',
    marginLeft: widthPercentage(15),
  },
  bottom: {
    fontSize: fontPercentage(9),
    fontWeight: '400',
    color: '#575757',
    marginTop: heightPercentage(10),
    marginLeft: widthPercentage(15),
  },
  buy: {
    fontSize: fontPercentage(16),
    fontWeight: '700',
    color: '#0A0B10',
    marginLeft: widthPercentage(15),
  },
  freetext: {
    fontSize: fontPercentage(14),
    fontWeight: '700',
    color: '#ffffff',
  },
  free: {
    fontSize: fontPercentage(16),
    fontWeight: '700',
    color: '#0A0B10',
    marginLeft: widthPercentage(15),
    marginTop: heightPercentage(20),
  },
  default: {
    flexDirection: 'row',
  },
  format: {
    flexDirection: 'row',
  },
  current: {
    fontSize: heightPercentage(13),
    fontWeight: '300',
    color: '#4F4F4F',
    marginTop: heightPercentage(1),
    marginLeft: widthPercentage(165),
  },
  number: {
    fontSize: fontPercentage(13),
    fontWeight: '600',
    color: '#EFC01A',
    marginTop: heightPercentage(1),
    marginLeft: widthPercentage(1),
  },
});

export default EditProfile;
