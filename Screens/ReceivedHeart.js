import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function ReceivedHeart({navigation}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>받은 하트젤리</Text>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../assets/Heart.png')}
            style={styles.heart2}
          />
          <Text style={styles.jellytext3}>1,750</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View>
            <Text style={styles.nickname}>닉네임</Text>
          </View>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text style={styles.jellytext2}>+100</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View>
            <Text style={styles.nickname}>닉네임</Text>
          </View>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text style={styles.jellytext2}>+100</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View>
            <Text style={styles.nickname}>닉네임</Text>
          </View>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text style={styles.jellytext2}>+100</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View>
            <Text style={styles.nickname}>닉네임</Text>
          </View>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text style={styles.jellytext2}>+100</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profilepicture}
          />
          <View>
            <Text style={styles.nickname}>닉네임</Text>
          </View>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text style={styles.jellytext2}>+100</Text>
        </View>
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
    marginBottom: heightPercentage(20),
    alignItems: 'center',
  },
  back: {
    width: widthPercentage(11),
    height: heightPercentage(19),
  },
  touchbutton: {
    width: widthPercentage(14),
    height: heightPercentage(20),
  },
  row: {
    flexDirection: 'row',
    marginTop: heightPercentage(25),
    alignItems: 'center',
  },
  profilepicture: {
    width: widthPercentage(38),
    height: heightPercentage(38),
    marginLeft: widthPercentage(20),
  },
  header: {
    width: widthPercentage(355),
    height: heightPercentage(44),
    borderRadius: widthPercentage(10),
    backgroundColor: '#FFFCE9',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  delete: {
    width: widthPercentage(50),
    height: heightPercentage(34),
    borderRadius: widthPercentage(10),
    backgroundColor: '#F2F2F4',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: widthPercentage(95),
  },
  heart: {
    width: widthPercentage(14),
    height: heightPercentage(12),
    marginLeft: widthPercentage(205),
  },
  accept: {
    width: widthPercentage(70),
    height: heightPercentage(34),
    borderRadius: widthPercentage(10),
    backgroundColor: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: widthPercentage(7),
    flexDirection: 'row',
    alignItems: 'center',
  },
  touch: {
    width: widthPercentage(34),
    height: heightPercentage(34),
    borderRadius: widthPercentage(10),
    backgroundColor: '#F2F2F4',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: widthPercentage(7),
    alignItems: 'center',
  },
  headertext: {
    fontSize: fontPercentage(13),
    fontWeight: '500',
    color: '#383535',
    textAlign: 'center',
  },
  nickname: {
    fontSize: fontPercentage(15),
    fontWeight: '700',
    color: '#0A0B10',
    marginLeft: widthPercentage(15),
  },
  deletetext: {
    fontSize: fontPercentage(13),
    fontWeight: '700',
    color: '#3B3B3B',
    textAlign: 'center',
  },
  accepttext: {
    fontSize: fontPercentage(14),
    fontWeight: '700',
    color: '#ffffff',
    marginLeft: widthPercentage(5),
  },
  heart2: {
    width: widthPercentage(14),
    height: heightPercentage(12),
    marginTop: heightPercentage(1),
  },
  age: {
    fontSize: fontPercentage(13),
    fontWeight: '400',
    color: '#9F9FA7',
    marginLeft: widthPercentage(15),
    marginTop: heightPercentage(3),
  },
  jellytext3: {
    fontSize: fontPercentage(13),
    fontWeight: '700',
    color: '#000',
    marginLeft: widthPercentage(10),
  },
  jellytext2: {
    fontSize: fontPercentage(14),
    fontWeight: '600',
    color: '#000',
    marginLeft: widthPercentage(4),
  },
  headertext2: {
    fontSize: fontPercentage(13),
    fontWeight: '500',
    color: '#494949',
    textAlign: 'center',
    marginTop: heightPercentage(5),
  },
  title: {
    fontSize: fontPercentage(20),
    fontWeight: '700',
    marginLeft: widthPercentage(110),
  },
});

export default ReceivedHeart;
