/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function Request({navigation}) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const [convertScreen, setConvertScreen] = useState(1);
  const renderScreen = (value, idx) => {
    setConvertScreen(value);
    console.log('idx=', idx);
    setSelectedIdx(idx);
  };
  const One = () => {
    return (
      <View>
        <Text style={styles.message}>대화 및 식사 신청을 수락하면</Text>
        <Text style={styles.messagetwo}>
          상대방이 보낸 하트젤리를 받을 수 있어요
        </Text>

        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profile}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'coloum'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.type}>
                <Text style={styles.texttype}>식사 신청</Text>
              </View>
              <View style={styles.daycount}>
                <Text style={styles.daytext}>D-7</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>닉네임</Text>
              <Text style={styles.age}>| 26세</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.jelly}>나에게 보낸 하트젤리</Text>
              <Image
                source={require('../assets/Heart.png')}
                style={styles.smallheart}
              />
              <Text style={styles.smalljelly}>10</Text>
            </View>
          </View>
          <View style={styles.refuse}>
            <Text style={styles.refuseText}>거절</Text>
          </View>
          <View style={styles.accept}>
            <Text style={styles.acceptText}>수락</Text>
          </View>
        </View>

        <View style={styles.boxtwo}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profile}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'coloum'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.typetwo}>
                <Text style={styles.texttype}>대화 신청</Text>
              </View>
              <View style={styles.daycount}>
                <Text style={styles.daytext}>D-7</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>닉네임</Text>
              <Text style={styles.age}>| 26세</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.jelly}>나에게 보낸 하트젤리</Text>
              <Image
                source={require('../assets/Heart.png')}
                style={styles.smallheart}
              />
              <Text style={styles.smalljelly}>10</Text>
            </View>
          </View>
          <View style={styles.refuse}>
            <Text style={styles.refuseText}>거절</Text>
          </View>
          <View style={styles.accept}>
            <Text style={styles.acceptText}>수락</Text>
          </View>
        </View>
      </View>
    );
  };
  const Two = () => {
    return (
      <View>
        <Text style={styles.message}>상대방이 7일 이내 수락하지 않으면</Text>
        <Text style={styles.messagetwo}>
          내가 보낸 하트젤리가 자동으로 환급됩니다
        </Text>

        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profile}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'coloum'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.type}>
                <Text style={styles.texttype}>식사 신청</Text>
              </View>
              <View style={styles.daycount}>
                <Text style={styles.daytext}>D-7</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>닉네임</Text>
              <Text style={styles.age}>| 26세</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.jelly}>내가 보낸 하트젤리</Text>
              <Image
                source={require('../assets/Heart.png')}
                style={styles.smallheart}
              />
              <Text style={styles.smalljelly}>10</Text>
            </View>
          </View>
          <View style={styles.format} />
        </View>

        <View style={styles.boxtwo}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profile}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'coloum'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.typetwo}>
                <Text style={styles.texttype}>대화 신청</Text>
              </View>
              <View style={styles.daycount}>
                <Text style={styles.daytext}>D-7</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>닉네임</Text>
              <Text style={styles.age}>| 26세</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.jelly}>내가 보낸 하트젤리</Text>
              <Image
                source={require('../assets/Heart.png')}
                style={styles.smallheart}
              />
              <Text style={styles.smalljelly}>10</Text>
            </View>
          </View>
          <View style={styles.format} />
        </View>
      </View>
    );
  };

  const Display = a => {
    switch (a) {
      case 1:
        return <One />;
      case 2:
        return <Two />;
      default:
        return <One />;
    }
  };

  const navList = [
    {
      content: '받은 신청 목록',
      idx: 1,
    },
    {
      content: '보낸 신청 목록',
      idx: 2,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>신청 목록</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Store')}>
          <View style={styles.store}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.heart}
            />
            <Text style={styles.text}>100</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        {navList.map((item, idx) => (
          <Text
            key={idx}
            onPress={() => renderScreen(idx + 1, idx)}
            style={{
              fontWeight: '800',
              fontSize: 15,
              color: selectedIdx === idx ? '#EFC01A' : '#9DA3AE',
              marginRight: 20,
            }}>
            {item.content}
          </Text>
        ))}
      </View>
      <View style={styles.selectline} />
      <View style={styles.line} />
      <ScrollView>{Display(convertScreen)}</ScrollView>
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
    marginLeft: widthPercentage(20),
    marginBottom: heightPercentage(30),
  },
  store: {
    flexDirection: 'row',
  },
  back: {
    width: widthPercentage(9),
    height: heightPercentage(16),
  },
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '700',
  },
  heart: {
    width: widthPercentage(19),
    height: heightPercentage(17),
    marginTop: heightPercentage(2),
    marginLeft: widthPercentage(215),
  },
  smallheart: {
    width: widthPercentage(11),
    height: heightPercentage(10),
    marginTop: heightPercentage(5),
    marginLeft: widthPercentage(5),
  },
  profile: {
    width: widthPercentage(65),
    height: heightPercentage(65),
    marginLeft: widthPercentage(20),
  },
  text: {
    fontSize: fontPercentage(15),
    fontWeight: '600',
    color: '#000',
    marginLeft: widthPercentage(5),
    marginTop: heightPercentage(1),
  },
  texttype: {
    fontSize: fontPercentage(10),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  name: {
    fontSize: fontPercentage(15),
    fontWeight: '500',
    color: '#000',
    marginLeft: widthPercentage(15),
    marginTop: fontPercentage(5),
  },
  age: {
    fontSize: fontPercentage(12),
    fontWeight: '400',
    color: '#989898',
    marginLeft: widthPercentage(5),
    marginTop: heightPercentage(5),
  },
  daytext: {
    fontSize: fontPercentage(10),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  jelly: {
    fontSize: fontPercentage(12),
    fontWeight: '300',
    color: '#1C1C1C',
    marginLeft: widthPercentage(15),
    marginTop: heightPercentage(5),
  },
  smalljelly: {
    fontSize: fontPercentage(12),
    fontWeight: '300',
    color: '#1C1C1C',
    marginLeft: widthPercentage(2),
    marginTop: heightPercentage(5),
  },
  message: {
    fontSize: fontPercentage(15),
    fontWeight: '300',
    color: '#727272',
    alignSelf: 'center',
    marginTop: heightPercentage(15),
  },
  messagetwo: {
    fontSize: fontPercentage(15),
    fontWeight: '300',
    color: '#727272',
    alignSelf: 'center',
    marginTop: heightPercentage(5),
  },
  line: {
    backgroundColor: '#F0F0F0',
    height: heightPercentage(1),
    width: '100%',
  },
  selectline: {
    backgroundColor: '#EFC01A',
    height: heightPercentage(2),
    width: widthPercentage(85),
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(20),
  },
  box: {
    backgroundColor: '#F7F8F9',
    height: heightPercentage(95),
    width: widthPercentage(365),
    borderRadius: widthPercentage(10),
    alignSelf: 'center',
    marginTop: heightPercentage(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxtwo: {
    backgroundColor: '#F7F8F9',
    height: heightPercentage(95),
    width: widthPercentage(365),
    borderRadius: widthPercentage(10),
    alignSelf: 'center',
    marginTop: heightPercentage(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  refuseText: {color: '#FFFFFF', fontSize: 12, fontWeight: '500'},
  acceptText: {color: '#FFFFFF', fontSize: 12, fontWeight: '800'},
  refuse: {
    backgroundColor: '#55575B',
    height: heightPercentage(31),
    width: widthPercentage(36),
    borderRadius: widthPercentage(5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentage(35),
    justifyContent: 'center',
  },
  accept: {
    backgroundColor: '#EFC01A',
    height: heightPercentage(31),
    width: widthPercentage(36),
    borderRadius: widthPercentage(5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentage(5),
    justifyContent: 'center',
  },
  type: {
    backgroundColor: '#04BD00',
    height: heightPercentage(17),
    width: widthPercentage(50),
    borderRadius: widthPercentage(100),
    marginLeft: widthPercentage(15),
    justifyContent: 'center',
  },
  typetwo: {
    backgroundColor: '#DA51BC',
    height: heightPercentage(17),
    width: widthPercentage(50),
    borderRadius: widthPercentage(100),
    marginLeft: widthPercentage(15),
    justifyContent: 'center',
  },
  daycount: {
    backgroundColor: '#7F7F7F',
    height: heightPercentage(17),
    width: widthPercentage(32),
    borderRadius: widthPercentage(100),
    marginLeft: widthPercentage(5),
    justifyContent: 'center',
  },
  format: {
    flexDirection: 'column',
  },
});

export default Request;
