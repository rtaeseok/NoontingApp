import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function AllowNotification({navigation}) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.icon}>🔔</Text>
      </TouchableOpacity>

      <Text style={styles.title}>알림 권한을 허용해주세요</Text>
      <Text style={styles.title2}>
        이성에게 하트젤리를 받거나 답장이 오는 경우
      </Text>
      <Text style={styles.title2}>알림을 통해 바로 알려드릴게요!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpEnd')}>
        <View style={[styles.continueButton]}>
          <Text style={styles.continueButtonText}>알림 권한 허용하기</Text>
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
  icon: {
    fontSize: fontPercentage(50),
    fontWeight: '800',
    textAlign: 'center',
    marginTop: widthPercentage(250),
    marginBottom: heightPercentage(50),
  },
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: heightPercentage(25),
  },
  title2: {
    fontSize: fontPercentage(13),
    fontWeight: '700',
    color: '#EEC01D',
    textAlign: 'center',
    marginTop: heightPercentage(5),
  },
  continueButton: {
    backgroundColor: '#EFC01A',
    height: heightPercentage(56),
    width: widthPercentage(355),
    borderRadius: widthPercentage(15),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: heightPercentage(254),
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: fontPercentage(18),
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
});

export default AllowNotification;
