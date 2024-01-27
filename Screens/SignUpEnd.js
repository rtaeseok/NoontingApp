import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function SignUpEnd({navigation}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>이제 눈팅을 즐길</Text>
      <Text style={styles.title2}>모든 준비가 끝났어요!</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/noon.png')} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MenuTab')}>
        <View style={[styles.continueButton]}>
          <Text style={styles.continueButtonText}>눈팅 시작하기</Text>
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
  logo: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: widthPercentage(160),
    height: heightPercentage(80),
    marginBottom: heightPercentage(7),
  },
  title: {
    marginTop: heightPercentage(200),
    fontSize: fontPercentage(23),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: heightPercentage(7),
  },
  title2: {
    // marginTop: heightPercentage(200),
    fontSize: fontPercentage(23),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: heightPercentage(80),
    // marginBottom: heightPercentage(7),
  },
  continueButton: {
    // backgroundColor: '#EFC01A',
    backgroundColor: '#000',
    height: heightPercentage(56),
    width: widthPercentage(355),
    borderRadius: widthPercentage(15),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(278),
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: fontPercentage(18),
  },
});

export default SignUpEnd;
