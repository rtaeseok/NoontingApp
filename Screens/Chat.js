import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function Chat({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>대화</Text>
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

      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
          <View style={styles.row}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profilepicture}
            />
            <View>
              <Text style={styles.nickname}>닉네임</Text>
              <Text style={styles.message}>안녕하세요</Text>
            </View>
            <View style={styles.dot} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
          <View style={styles.row}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profilepicture}
            />
            <View>
              <Text style={styles.nickname}>닉네임</Text>
              <Text style={styles.message}>안녕하세요</Text>
            </View>
            {/* <View style={styles.dot} />  */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
          <View style={styles.row}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profilepicture}
            />
            <View>
              <Text style={styles.nickname}>닉네임</Text>
              <Text style={styles.message}>안녕하세요</Text>
            </View>
            <View style={styles.dot} />
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  title: {
    fontSize: fontPercentage(23),
    fontWeight: '700',
  },
  nickname: {
    fontSize: fontPercentage(18),
    fontWeight: '700',
    marginLeft: widthPercentage(18),
  },
  message: {
    fontSize: fontPercentage(15),
    fontWeight: '400',
    marginLeft: widthPercentage(18),
    marginTop: heightPercentage(7),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPercentage(20),
  },
  vertical: {},
  rowbox: {
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(35),
  },
  heart: {
    width: widthPercentage(19),
    height: heightPercentage(17),
    marginTop: heightPercentage(2),
    marginLeft: widthPercentage(263),
  },
  dot: {
    width: widthPercentage(10),
    height: heightPercentage(10),
    borderRadius: widthPercentage(100),
    backgroundColor: '#EFC01A',
    marginLeft: widthPercentage(200),
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
});

export default Chat;
