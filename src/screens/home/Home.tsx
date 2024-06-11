import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {styles} from './Styles';
import axios from 'axios';
import {Alltags} from '../../models/tag';
import Tags from '../../components/tags/Tags';
import Promotions from '../../components/promotions/Promotions';
import {Promotion} from '../../models/promotions';
import {getPromotionsList, onTagPressed} from '../../api/api';
import {tags} from '../../api/mockData';

const Home = () => {
  const [promotionData, setPromotionData] = useState<Promotion[]>([]);
  const [tagId, setTagId] = useState<number>(33);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}: {viewableItems: any}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const flatListRef = useRef<any>(null);

  useEffect(() => {
    if (tagId === 33) {
      getPromotionsList()
        .then(data => {
          console.log(data, 'ads');

          setPromotionData(data);
        })
        .catch(error => console.error(error));
    } else {
      onTagPressed(tagId).then(data => {
        setPromotionData([data]);
      });
    }
  }, [tagId]);

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  console.log(promotionData, 'promotionData');

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
          data={tags}
          horizontal
          renderItem={({item, index}) => (
            <Tags tags={item} index={index} setTagId={setTagId} tagId={tagId} />
          )}
        />
      </View>
      <View>
        <FlatList
          data={promotionData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <Promotions promotions={item} index={index} tagData={tags} />
          )}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          ref={flatListRef}
        />
      </View>

      <View style={styles.dotContainer}>
        {promotionData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex
                    ? `${item?.PromotionCardColor}`
                    : '#ccc',
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
