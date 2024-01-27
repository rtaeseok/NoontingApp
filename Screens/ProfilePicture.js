import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  //   TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function ProfilePicture({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.container}>
            <Image source={require('../assets/noon.png')} style={styles.logo} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>뒤로</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>프로필 사진 등록하기</Text>
      <Text style={styles.title2}>이성에게 보여질 사진을 등록해주세요</Text>
      {/* <Text style={styles.subtitle}>닉네임</Text> */}

      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Birth')}
        disabled={!isNicknameValid()}> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AllowNotification')}>
        {/* <View
          style={[
            styles.continueButton,
            isNicknameValid() ? null : styles.disabledButton,
          ]}> */}
        <View style={[styles.continueButton]}>
          <Text style={styles.continueButtonText}>다음</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    marginTop: heightPercentage(80),
    marginLeft: widthPercentage(20),
    marginBottom: heightPercentage(40),
  },
  logo: {
    width: widthPercentage(47),
    height: heightPercentage(23),
  },
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '800',
    marginLeft: widthPercentage(20),
  },
  title2: {
    fontSize: fontPercentage(13),
    fontWeight: '700',
    marginLeft: widthPercentage(20),
    color: '#EEC01D',
    marginTop: heightPercentage(15),
  },
  subtitle: {
    fontSize: fontPercentage(13),
    fontWeight: '700',
    marginLeft: widthPercentage(20),
    color: '#000000',
    marginTop: heightPercentage(50),
  },
  location: {
    width: widthPercentage(12),
    height: heightPercentage(16),
    marginLeft: widthPercentage(20),
  },
  inputContainer: {
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(20),
    height: heightPercentage(56),
    width: widthPercentage(355),
  },
  input: {
    borderColor: 'gray',
    borderWidth: widthPercentage(2),
    color: '#A1A0A9',
    fontSize: fontPercentage(18),
    paddingBottom: heightPercentage(10),
    borderRightColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderTopColor: '#ffffff',
    borderBottomColor: '#EFC01A',
  },
  continueButton: {
    backgroundColor: '#EFC01A',
    height: heightPercentage(56),
    width: widthPercentage(355),
    borderRadius: widthPercentage(15),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(506),
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: fontPercentage(18),
  },

  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  row: {
    flexDirection: 'row',
  },
  back: {
    color: '#686876',
    marginTop: heightPercentage(85),
    fontSize: fontPercentage(14),
    textDecorationLine: 'underline',
    marginLeft: widthPercentage(280),
  },
});

export default ProfilePicture;
