import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';
import axios from 'axios';

function Email({navigation}) {
  const [email, setEmail] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const isEmailValid = () => {
    return email.length >= 1;
  };

  async function sendEmailToServer() {
    await axios
      .post('http://172.30.1.45/8080/api/v1/sign', {email: email})
      .catch(function (error) {});
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.container}>
          <Image source={require('../assets/noon.png')} style={styles.logo} />
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>이메일로 시작해요</Text>
      <Text style={styles.title2}>
        눈팅을 시작하기 위해 이메일 인증이 필요해요
      </Text>
      <Text style={styles.subtitle}>이메일</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="이메일을 입력해주세요"
          keyboardType="default"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      {/* 1. 이메일 형식으로 입력하고 다음 누르면
2. /api/v1/sign 주소로 body 이메일 넘겨주기
3. 서버에서 링크 이메일로 보내고
4. 인증되면 서버에서 웹으로 200 OK
5. 웹에서 다음화면으로 넘겨줌 */}
      <TouchableOpacity
        onPress={() => sendEmailToServer()}
        // onPress={() => navigation.navigate('EmailVerify')}
        disabled={!isEmailValid()}>
        <View
          style={[
            styles.continueButton,
            isEmailValid() ? null : styles.disabledButton,
          ]}>
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
    marginTop: heightPercentage(370),
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

export default Email;
