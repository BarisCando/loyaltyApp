import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {Promotion} from '../../models/promotions';
import RenderHtml from 'react-native-render-html';
import ModalBase from '../modal/Modal';
import {Alltags} from '../../models/tag';
import axios from 'axios';

const Promotions = ({
  promotions,
  index,
  tagData,
}: {
  tagData: Alltags[];
  promotions: Promotion;
  index: number;
}) => {
  const htmlString = promotions?.Title;
  const {width} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);

  const onTagPressed = (item: Promotion) => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => onTagPressed(promotions)}
        style={[styles.promotionContainer, {marginLeft: index === 0 ? 40 : 0}]}>
        <View style={styles.position}>
          <FastImage
            source={{uri: promotions?.ImageUrl}}
            style={styles.image}
          />
          <View style={styles.imageContainer}>
            <FastImage
              source={{uri: promotions?.BrandIconUrl}}
              resizeMode="contain"
              style={{
                width: 40,
                height: 50,
              }}
            />
          </View>
          <RenderHtml contentWidth={width} source={{html: htmlString}} />
        </View>
        <View style={styles.designedViewContainer}>
          <View
            style={[
              styles.designedView,
              {backgroundColor: `${promotions?.PromotionCardColor}`},
            ]}></View>
        </View>
      </TouchableOpacity>
      {modalVisible ? (
        <ModalBase
          tags={tagData}
          promotions={promotions}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  promotionContainer: {
    width: 305,
    marginTop: 40,
    height: 388,
    marginHorizontal: 15,
    borderColor: '#ECEEEF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  designedViewContainer: {
    height: '10%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 250,
    right: 240,
    overflow: 'hidden',
    borderRadius: 99,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    borderBottomLeftRadius: 100,
    borderRadius: 20,
    width: 303,
    height: 305,
  },
  position: {
    height: 368,
    top: 0,
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
    borderRadius: 20,
  },
  designedView: {
    width: '98%',
    transform: [{rotate: '3deg'}],
    height: 32,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
