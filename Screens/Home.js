import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

function Home({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [imageIndex, setImageIndex] = useState(0);

  const handleLeftPress = () => {
    setImageIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleDetailPress = () => {
    navigation.navigate('ProfileInfo');
  };
  const handleHeartButtonPress = () => {
    // 하트 모달창 불러오고

    // 다음 프로필로 이동
    handleRightPress;
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
        <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Image source={require('../assets/noon.png')} style={styles.logo} />
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
        <Switch
          trackColor={{false: '#767577', true: '#000000'}}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          ios_backgroundColor={isEnabled ? '#ffffff' : '#EFC01A'}
          style={styles.toggle}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Filter')}
          style={styles.locationbutton}>
          <Image
            source={require('../assets/filter.png')}
            style={styles.deletebutton}
          />
          <Text style={styles.filtertext}>필터</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={images[imageIndex]} style={styles.swipe} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
        <View style={styles.viewbox}>
          <Text style={styles.viewtext}>프로필 확인하기 </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.default}>
        <TouchableOpacity
          onPress={handleDetailPress}
          style={styles.profilebutton}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deletebutton}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLeftPress}
          style={styles.profilebutton}>
          <View style={styles.default}>
            <Image
              source={require('../assets/rewind.png')}
              style={styles.deletebutton}
            />
            <Text style={styles.profiletext}>3/3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRightPress}
          style={styles.profilebutton}>
          <Image
            source={require('../assets/swipebutton.png')}
            style={styles.deletebutton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: heightPercentage(15),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercentage(20),
  },
  button: {
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(20),
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profilebutton: {
    width: widthPercentage(80),
    height: heightPercentage(42),
    backgroundColor: '#F2F2F4',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: widthPercentage(28),
    marginTop: heightPercentage(15),
  },
  locationbutton: {
    width: widthPercentage(80),
    height: heightPercentage(42),
    backgroundColor: '#F2F2F4',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: widthPercentage(220),
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    marginTop: heightPercentage(80),
    marginLeft: widthPercentage(20),
  },
  logo: {
    width: widthPercentage(47),
    height: heightPercentage(23),
  },
  location: {
    width: widthPercentage(12),
    height: heightPercentage(16),
    marginLeft: widthPercentage(20),
  },
  heart: {
    width: widthPercentage(19),
    height: heightPercentage(17),
    marginTop: heightPercentage(2),
    marginLeft: widthPercentage(255),
  },
  deletebutton: {
    width: widthPercentage(13),
    height: heightPercentage(13),
    marginTop: 2,
  },
  swipe: {
    alignSelf: 'center',
    width: widthPercentage(355),
    height: heightPercentage(450),
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginLeft: widthPercentage(5),
    marginTop: heightPercentage(1),
  },
  profiletext: {
    fontSize: fontPercentage(14),
    fontWeight: '700',
    color: '#000000',
    marginLeft: widthPercentage(5),
  },
  filtertext: {
    fontSize: fontPercentage(12.5),
    fontWeight: '700',
    color: '#000000',
    marginTop: heightPercentage(2),
    marginLeft: widthPercentage(6),
  },
  box: {
    marginTop: heightPercentage(20),
    flexDirection: 'row',
    marginLeft: widthPercentage(20),
  },
  viewbox: {
    width: widthPercentage(355),
    height: heightPercentage(42),
    backgroundColor: '#F2F2F4',
    borderRadius: 100,
    marginTop: heightPercentage(15),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginLeft: widthPercentage(10),
  },
  viewtext: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  locationBold: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginLeft: widthPercentage(5),
  },
  store: {
    flexDirection: 'row',
  },
  changeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A3A8B0',
    marginLeft: widthPercentage(160),
  },
  nextbutton: {
    width: widthPercentage(6),
    height: heightPercentage(11),
    borderRadius: 0,
    marginLeft: widthPercentage(7),
  },
});

export default Home;
