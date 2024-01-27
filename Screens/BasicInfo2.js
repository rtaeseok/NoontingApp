import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function BasicInfo2({navigation}) {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedWorkplace, setSelectedWorkplace] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const isInfoComplete = () => {
    return selectedEducation !== '' && selectedWorkplace !== '';
  };

  const handleEducationChange = value => {
    setSelectedEducation(value);
    setModalVisible(false);
  };

  const handleWorkplaceChange = value => {
    setSelectedWorkplace(value);
    setModalVisible(false);
  };

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

      <Text style={styles.title}>기본 정보 입력하기</Text>
      <Text style={styles.title2}>
        한 번 설정한 정보는 나중에 언제든 변경할 수 있어요
      </Text>
      <Text style={styles.subtitle}>거주 지역</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerText}>거주 지역을 선택해주세요</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Picker
              selectedValue={selectedEducation}
              onValueChange={handleEducationChange}>
              <Picker.Item label="로스쿨" value="로스쿨" />
              <Picker.Item label="의학전문대학원" value="의학전문대학원" />
              <Picker.Item label="MBA" value="MBA" />
              <Picker.Item label="석/박사" value="석/박사" />
              <Picker.Item label="의학대학" value="의학대학" />
              <Picker.Item label="약학대학" value="약학대학" />
              <Picker.Item label="KAIST/POSTECH" value="KAIST/POSTECH" />
              <Picker.Item label="서연고(SKY)" value="서연고(SKY)" />
              <Picker.Item label="서울 4년제" value="서울 4년제" />
              <Picker.Item label="수도권 4년제" value="수도권 4년제" />
              <Picker.Item label="교육대" value="교육대" />
              <Picker.Item label="지방거점국립대" value="지방거점국립대" />
              <Picker.Item label="지방 4년제" value="지방 4년제" />
              <Picker.Item label="전문대" value="전문대" />
              <Picker.Item label="해외 주요대" value="해외 주요대" />
              <Picker.Item label="고등학교 졸업" value="고등학교 졸업" />
              <Picker.Item label="기타" value="기타" />
            </Picker>
          </View>
        </Modal>
      </View>
      <Text style={styles.subtitle}>직장 지역</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerText}>직장 지역을 선택해주세요</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Picker
              selectedValue={selectedWorkplace}
              onValueChange={handleWorkplaceChange}>
              <Picker.Item label="고졸" value="고졸" />
              <Picker.Item label="대졸" value="대졸" />
              <Picker.Item label="석사" value="석사" />
              <Picker.Item label="박사" value="박사" />
            </Picker>
          </View>
        </Modal>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ProfilePicture')}>
        <View
          style={[
            styles.continueButton,
            isInfoComplete() ? null : styles.disabledButton,
          ]}
          disabled={!isInfoComplete()}>
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
    marginTop: heightPercentage(264),
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: fontPercentage(18),
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  pickerContainer: {
    borderBottomColor: '#EFC01A',
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderWidth: widthPercentage(2),
    height: heightPercentage(56),
    width: widthPercentage(355),
    justifyContent: 'center',
  },
  pickerText: {
    color: '#A1A0A9',
    fontSize: fontPercentage(18),
  },
  modalContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 30,
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

export default BasicInfo2;
