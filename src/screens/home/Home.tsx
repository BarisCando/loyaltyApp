import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './Styles';
import axios from 'axios';
import {Alltags} from '../../models/tag';
import Tags from '../../components/tags/Tags';
import Promotions from '../../components/promotions/Promotions';
import {Promotion} from '../../models/promotions';

const Home = () => {
  const [tagData, setTagData] = useState<Alltags[]>([]);
  const [promotionData, setPromotionData] = useState<Promotion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tagName, setTagName] = useState<string>('');

  const flatListRef = useRef<any>(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.extrazone.com/tags/list',
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    })
      .then(response => {
        console.log(response, 'lksfşldksflşs');

        setTagData(response.data);
      })
      .catch(e => console.log(e));

    axios({
      method: 'GET',
      url: 'https://api.extrazone.com/promotions/list?Channel=PWA',
      headers: {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    })
      .then(response => {
        setPromotionData(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.appIcon}
          source={require('../../assets/images/Daha_Daha.png')}
        />
        <View style={styles.profileContainer}>
          <View style={styles.loginButton}>
            <Text style={[styles.text, {color: '#fff'}]}>Giriş Yap</Text>
          </View>
          <View style={styles.profileBackground}>
            <Image
              style={styles.profileIcon}
              source={require('../../assets/images/Profile.png')}
            />
          </View>
        </View>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={tagData}
          horizontal
          renderItem={({item, index}) => (
            <Tags
              tags={item}
              index={index}
              setTagName={setTagName}
              tagName={tagName}
            />
          )}
        />
      </View>
      <FlatList
        data={promotionData}
        horizontal
        renderItem={({item, index}) => (
          <>
            <Promotions promotions={item} index={index} />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
