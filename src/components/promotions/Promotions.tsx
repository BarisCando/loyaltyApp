import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import {Alltags} from '../../models/tag';
import FastImage from 'react-native-fast-image';
import {Promotion} from '../../models/promotions';
import RenderHtml from 'react-native-render-html';

const Promotions = ({
  promotions,
  index,
}: {
  promotions: Promotion;
  index: number;
}) => {
  const onTagPressed = (item: Promotion) => {
    axios({
      method: 'GET',
      url: `https://api.extrazone.com/campaign/${item.SeoName}/${item.Id}`,
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    })
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log(e));
  };

  const htmlString = promotions.Title;
  const {width} = useWindowDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() => onTagPressed(promotions)}
        style={[styles.promotionContainer, {marginLeft: index === 0 ? 40 : 0}]}>
        <View style={styles.position}>
          <FastImage source={{uri: promotions.ImageUrl}} style={styles.image} />
          <View style={styles.imageContainer}>
            <FastImage
              source={{uri: promotions.BrandIconUrl}}
              resizeMode="contain"
              style={{
                width: 40,
                height: 50,
              }}
            />
          </View>
          <RenderHtml contentWidth={width} source={{html: htmlString}} />
        </View>
        <View
          style={[
            styles.designedView,
            {backgroundColor: `${promotions.PromotionCardColor}`},
          ]}></View>
      </TouchableOpacity>

      <View style={{flex: 1}}></View>
    </>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light background color
  },
  promotionContainer: {
    width: 305,
    marginTop: 40,
    height: 388,
    marginHorizontal: 15,
    borderColor: '#ECEEEF',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    height: 378,
    top: 0,
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
    borderRadius: 20,
  },
  designedView: {
    width: '99%',
    transform: [{skewY: '3deg'}],
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
