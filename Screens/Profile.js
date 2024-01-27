import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function Profile({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>마이페이지</Text>
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

      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <View style={styles.box}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View style={styles.vertical}>
            <Text style={styles.nickname}>닉네임</Text>
            <Text style={styles.age}>25세</Text>
          </View>
          <View style={styles.editbox}>
            <Text style={styles.edittext}>수정</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ReceivedRequest')}>
          <View style={styles.jellybox}>
            <View style={styles.vertical}>
              <Text style={styles.jellytext}>받은 신청</Text>
              <Text style={styles.jellytext2}>34</Text>
            </View>
            <Image source={require('../assets/next.png')} style={styles.next} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SentRequest')}>
          <View style={styles.jellybox}>
            <View style={styles.vertical}>
              <Text style={styles.jellytext}>보낸 신청</Text>
              <Text style={styles.jellytext2}>157</Text>
            </View>
            <Image source={require('../assets/next.png')} style={styles.next} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ReceivedHeart')}>
        <View style={styles.heartjellybox}>
          <Image
            source={require('../assets/Heart.png')}
            style={styles.heart2}
          />
          <Text style={styles.jellytext3}>
            1,750 ・ 이성에게 받은 누적 하트젤리
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image
            source={require('../assets/account.png')}
            style={styles.icon}
          />
          <Text style={styles.icontext}>계정 정보</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image
            source={require('../assets/notification.png')}
            style={styles.icon}
          />
          <Text style={styles.icontext}>알림 설정</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image source={require('../assets/block.png')} style={styles.icon} />
          <Text style={styles.icontext}>지인 차단</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image
            source={require('../assets/version.png')}
            style={styles.icon}
          />
          <Text style={styles.icontext}>버전 정보</Text>
          <View style={styles.versionbox}>
            <Text style={styles.versiontext}>1.01.01</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image source={require('../assets/policy.png')} style={styles.icon} />
          <Text style={styles.icontext}>약관 및 정책</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={styles.rowbox}>
          <Image
            source={require('../assets/inquiry.png')}
            style={styles.icon}
          />
          <Text style={styles.icontext}>카카오톡 문의</Text>
          <Image source={require('../assets/kakao.png')} style={styles.kakao} />
        </View>
      </TouchableOpacity>
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
    marginBottom: widthPercentage(30),
  },
  store: {
    flexDirection: 'row',
  },
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '700',
  },
  next: {
    width: widthPercentage(6),
    height: heightPercentage(10),
    marginLeft: widthPercentage(77),
  },
  icon: {
    width: widthPercentage(17),
    height: heightPercentage(17),
  },
  kakao: {
    width: widthPercentage(22),
    height: heightPercentage(22),
    marginLeft: widthPercentage(215),
  },
  icontext: {
    fontSize: fontPercentage(15),
    fontWeight: '400',
    marginLeft: widthPercentage(15),
  },
  nickname: {
    fontSize: fontPercentage(18),
    fontWeight: '700',
    marginLeft: widthPercentage(18),
  },
  age: {
    fontSize: fontPercentage(15),
    fontWeight: '400',
    marginLeft: widthPercentage(18),
    marginTop: heightPercentage(5),
  },
  box: {
    width: widthPercentage(355),
    height: heightPercentage(96),
    borderColor: '#E0E0E0',
    borderWidth: widthPercentage(1),
    borderRadius: widthPercentage(10),
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
    alignItems: 'center',
  },
  versionbox: {
    width: widthPercentage(51),
    height: heightPercentage(22),
    backgroundColor: '#ECECEC',
    borderRadius: widthPercentage(100),
    flexDirection: 'row',
    marginLeft: widthPercentage(215),
    alignItems: 'center',
    justifyContent: 'center',
  },
  versiontext: {
    fontSize: fontPercentage(11),
    fontWeight: '500',
  },
  vertical: {},
  row: {
    flexDirection: 'row',
  },
  rowbox: {
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(35),
  },
  jellybox: {
    width: widthPercentage(167),
    height: heightPercentage(64),
    backgroundColor: '#F2F2F4',
    borderRadius: widthPercentage(10),
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
    alignItems: 'center',
    marginTop: heightPercentage(15),
  },
  heartjellybox: {
    width: widthPercentage(355),
    height: heightPercentage(44),
    backgroundColor: '#F2F2F4',
    borderRadius: widthPercentage(10),
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(15),
  },
  editbox: {
    width: widthPercentage(45),
    height: heightPercentage(34),
    backgroundColor: '#F2F2F4',
    borderRadius: widthPercentage(10),
    flexDirection: 'row',
    marginLeft: widthPercentage(145),
    alignItems: 'center',
    justifyContent: 'center',
  },

  heart: {
    width: widthPercentage(19),
    height: heightPercentage(17),
    marginTop: heightPercentage(2),
    marginLeft: widthPercentage(201),
  },

  heart2: {
    width: widthPercentage(14),
    height: heightPercentage(12),
    marginTop: heightPercentage(1),
  },
  profilepicture: {
    width: widthPercentage(60),
    height: heightPercentage(60),
    marginLeft: widthPercentage(20),
  },
  text: {
    fontSize: fontPercentage(15),
    fontWeight: '600',
    color: '#000',
    marginLeft: widthPercentage(5),
    marginTop: heightPercentage(1),
  },
  jellytext: {
    fontSize: fontPercentage(13),
    fontWeight: '800',
    color: '#000',
    marginLeft: widthPercentage(20),
  },
  jellytext3: {
    fontSize: fontPercentage(13),
    fontWeight: '800',
    color: '#000',
    marginLeft: widthPercentage(10),
  },
  jellytext2: {
    fontSize: fontPercentage(13),
    fontWeight: '800',
    color: '#000',
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(5),
  },
  counttext: {
    fontSize: fontPercentage(16),
    fontWeight: '600',
    color: '#D4AA14',
    marginLeft: widthPercentage(115),
  },
  edittext: {
    fontSize: fontPercentage(11),
    fontWeight: '800',
    color: '#000000',
  },
  texttype: {
    fontSize: fontPercentage(10),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Profile;
