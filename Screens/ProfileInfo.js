/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Button,
  Modal,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../ResponsiveSize';

const images = [
  require('../assets/profileimage1.png'),
  require('../assets/profileimage2.png'),
];

function ProfileInfo({navigation}) {
  const swiperRef = React.createRef();

  const handleSlideChange = index => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(index - swiperRef.current.state.index);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('MenuTab')}> */}
          <Image source={require('../assets/back.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>프로필</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Report')}>
          <Image
            source={require('../assets/report.png')}
            style={styles.report}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper
            style={styles.wrapper}
            ref={swiperRef}
            showsButtons={true}
            loop={false}
            paginationStyle={{bottom: 10}}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            onIndexChanged={index => handleSlideChange(index)}>
            {images.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image
            source={require('../assets/distance.png')}
            style={styles.distance}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontWeight: '400',
              marginLeft: 5,
            }}>
            1km 거리
          </Text>
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 25,
            fontWeight: '700',
            marginLeft: 20,
            marginTop: 10,
          }}>
          닉네임 ・ 26세
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image source={require('../assets/Rate.png')} style={styles.rate} />
          <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontWeight: '300',
              marginLeft: 7,
            }}>
            응답률 71%
          </Text>
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontWeight: '300',
              marginLeft: 7,
            }}>
            누적 하트젤리 1,500개
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#F3F3F3',
            marginTop: 20,
            marginBottom: 20,
          }}></View>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            fontWeight: '600',
            marginLeft: 20,
          }}>
          자기소개
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '400',
            marginLeft: 20,
            marginTop: 15,
          }}>
          안녕하세요 ~~~~~~~~
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '400',
            marginLeft: 20,
            marginTop: 5,
          }}>
          안녕하세요 ~~~~~~~~
        </Text>
        <View
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#F3F3F3',
            marginTop: 20,
            marginBottom: 20,
          }}></View>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            fontWeight: '600',
            marginLeft: 20,
          }}>
          기본 정보
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            학력
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 255,
            }}>
            해외 주요대
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            직장
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 285,
            }}>
            대기업
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            직업
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 300,
            }}>
            개발
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            거주 지역
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 220,
            }}>
            서울 서초구
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            직장 지역
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 220,
            }}>
            서울 서초구
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#F3F3F3',
            marginTop: 20,
            marginBottom: 20,
          }}></View>

        <Text
          style={{
            color: '#000',
            fontSize: 17,
            fontWeight: '600',
            marginLeft: 20,
          }}>
          추가 정보
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            키
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 275,
            }}>
            200 cm
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            체형
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 290,
            }}>
            통통
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            MBTI
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 270,
            }}>
            ESTJ
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            흡연
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 290,
            }}>
            매일
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            음주
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 245,
            }}>
            월 1회 이상
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            종교
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 290,
            }}>
            무교
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
            }}>
            자차
          </Text>
          <Text
            style={{
              color: '#777777',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 275,
            }}>
            미보유
          </Text>
        </View>

        <View style={{marginBottom: 30}}></View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleModal}
        style={{
          backgroundColor: '#EFC01A',
          width: 345,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 50,
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '800'}}>
          대화 신청하기
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* 모달 내용 */}
            <Button title="닫기" onPress={handleModal} />
          </View>
        </View>
      </Modal>
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
  },
  back: {
    width: widthPercentage(11),
    height: heightPercentage(19),
  },
  distance: {
    width: widthPercentage(10),
    height: heightPercentage(12),
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(2),
  },
  report: {
    width: widthPercentage(22),
    height: heightPercentage(19),
    marginLeft: widthPercentage(125),
  },
  title: {
    fontSize: fontPercentage(20),
    fontWeight: '700',
    marginLeft: widthPercentage(140),
  },
  header: {
    width: '100%',
    height: heightPercentage(83),
    backgroundColor: '#F3F3F3',
    marginBottom: heightPercentage(20),
    justifyContent: 'center',
  },
  top: {
    fontSize: fontPercentage(15),
    fontWeight: '700',
    marginLeft: widthPercentage(15),
  },
  bottom: {
    fontSize: fontPercentage(9),
    fontWeight: '400',
    color: '#575757',
    marginTop: heightPercentage(10),
    marginLeft: widthPercentage(15),
  },
  sliderContainer: {
    height: heightPercentage(365),
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: widthPercentage(22),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: widthPercentage(20),
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rate: {
    width: widthPercentage(9),
    height: heightPercentage(13),
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(2),
  },
  heart: {
    width: widthPercentage(14),
    height: heightPercentage(12),
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(2),
  },
});

export default ProfileInfo;
