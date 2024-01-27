import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function Start({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.semititle}>쉬는 날에 시간 낭비 걱정 없이</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>우리는</Text>
        <Text style={styles.title2}> 점심시간</Text>
        <Text style={styles.title}>에</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>소개팅 한다</Text>
      </View>
      <Image source={require('../assets/noon.png')} style={styles.noon} />
      <View style={styles.row}>
        <Text style={styles.message}>이미 가입 하셨나요? </Text>
        <Text style={styles.message2}>기존 회원 로그인</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Email')}>
        <View style={styles.startbutton}>
          <Text style={styles.startmessage}>눈팅 시작하기</Text>
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
    marginTop: heightPercentage(200),
    marginBottom: heightPercentage(30),
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: heightPercentage(7),
  },
  semititle: {
    fontSize: fontPercentage(16),
    fontWeight: '500',
  },
  startmessage: {
    fontSize: fontPercentage(18),
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '700',
    marginTop: heightPercentage(2),
  },
  message: {
    fontSize: fontPercentage(13),
    color: '#8E8E8E',
    marginTop: heightPercentage(121),
  },
  message2: {
    fontSize: fontPercentage(16),
    color: '#4A8EFF',
    fontWeight: '700',
    marginTop: heightPercentage(120),
  },
  title2: {
    fontSize: fontPercentage(23),
    fontWeight: '700',
    color: '#EFC01A',
  },
  noon: {
    width: widthPercentage(218),
    height: heightPercentage(108),
    alignSelf: 'center',
    marginTop: heightPercentage(50),
  },
  startbutton: {
    width: widthPercentage(355),
    height: heightPercentage(56),
    backgroundColor: '#EFC01A',
    borderRadius: widthPercentage(15),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(20),
  },
});

export default Start;
