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

function Birth({navigation}) {
  const [birth, setBirth] = useState('');
  //   const [education, setEducation] = useState('');
  //   const [workplace, setWorkplace] = useState('');
  //   const [occupation, setOccupation] = useState('');

  //   const handleEducationChange = text => {
  //     setEducation(text);
  //   };

  //   const handleWorkplaceChange = text => {
  //     setWorkplace(text);
  //   };

  //   const handleOccupationChange = text => {
  //     setOccupation(text);
  //   };

  const handleBirthChange = text => {
    setBirth(text);
  };

  const isBirthValid = () => {
    return birth.length < 8 && birth.length > 0;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.row2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.container}>
            <Image source={require('../assets/noon.png')} style={styles.logo} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>뒤로</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>생일 입력하기</Text>
      <Text style={styles.title2}>프로필에 나이를 표시할 수 있어요</Text>
      <Text style={styles.subtitle}>생일</Text>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="연도"
            keyboardType="phone-pad"
            onChangeText={handleBirthChange}
            value={birth}
          />
        </View>
        <View style={styles.inputContainer2}>
          <TextInput
            style={styles.input}
            placeholder="월"
            keyboardType="phone-pad"
            onChangeText={handleBirthChange}
            value={birth}
          />
        </View>
        <View style={styles.inputContainer2}>
          <TextInput
            style={styles.input}
            placeholder="일"
            keyboardType="phone-pad"
            onChangeText={handleBirthChange}
            value={birth}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('BasicInfo1')}
        disabled={!isBirthValid()}>
        <View
          style={[
            styles.continueButton,
            isBirthValid() ? null : styles.disabledButton,
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
  row: {
    flexDirection: 'row',
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
    width: widthPercentage(115),
  },
  inputContainer2: {
    marginLeft: widthPercentage(5),
    marginTop: heightPercentage(20),
    height: heightPercentage(56),
    width: widthPercentage(115),
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
  row2: {
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

export default Birth;
