import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function AllowPhone({navigation}) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.icon}>📬</Text>
      </TouchableOpacity>

      <Text style={styles.title}>연락처 접근을 허용해주세요</Text>
      <Text style={styles.title2}>눈팅에 가입된 연락처 정보를 기반으로</Text>
      <Text style={styles.title2}>지인을 차단할 수 있어요</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('AllowNotification')}>
        <View style={[styles.continueButton]}>
          <Text style={styles.continueButtonText}>연락처 접근 허용하기</Text>
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
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 40,
  },
  icon: {
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 250,
    marginBottom: 50,
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 25,
  },
  title2: {
    fontSize: 13,
    fontWeight: '700',
    color: '#EEC01D',
    textAlign: 'center',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#EFC01A',
    height: 56,
    width: 355,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 254,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
});

export default AllowPhone;
