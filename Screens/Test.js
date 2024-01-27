import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

function Test({navigation}) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleLeftPress = () => {
    setImageIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleDetailPress = () => {
    navigation.navigate('상세페이지');
  };

  const handleRightPress = () => {
    const maxIndex = 2;
    setImageIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };

  const images = [
    require('../assets/swipe1.png'),
    require('../assets/swipe2.png'),
    require('../assets/swipe3.png'),
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
          <Image source={require('../assets/yamyam.png')} style={styles.logo} />
        </TouchableOpacity>

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

      <View style={styles.box}>
        <Image
          source={require('../assets/location.png')}
          style={styles.location}
        />
        <Text style={styles.locationText}>검색 위치:</Text>
        <Text style={styles.locationBold}>서초동</Text>
        <Text style={styles.changeText}>변경</Text>
        <Image
          source={require('../assets/button.png')}
          style={styles.nextbutton}
        />
      </View>

      {/* 이미지 슬라이드 부분 */}
      <View style={styles.imageContainer}>
        <Image source={images[imageIndex]} style={styles.swipe} />
      </View>

      {/* 버튼 부분 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLeftPress} style={styles.button}>
          <Text>왼쪽</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDetailPress} style={styles.button}>
          <Text>상세 페이지</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRightPress} style={styles.button}>
          <Text>오른쪽</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    marginTop: 80,
    marginLeft: 15,
  },
  logo: {
    width: 104,
    height: 17,
    borderRadius: 0,
  },
  location: {
    width: 12,
    height: 16,
    borderRadius: 0,
    marginLeft: 15,
  },
  heart: {
    width: 19,
    height: 17,
    borderRadius: 0,
    marginTop: 2,
    marginLeft: 205,
  },
  swipe: {
    alignSelf: 'center',
    width: 365,
    height: 525,
    borderRadius: 15,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginLeft: 5,
    marginTop: 1,
  },
  box: {
    width: 365,
    height: 46,
    backgroundColor: '#F2F6F6',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginLeft: 10,
  },
  locationBold: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginLeft: 5,
  },
  store: {
    flexDirection: 'row',
  },
  changeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A3A8B0',
    marginLeft: 175,
  },
  nextbutton: {
    width: 6,
    height: 11,
    borderRadius: 0,
    marginLeft: 7,
  },
});

export default Test;
