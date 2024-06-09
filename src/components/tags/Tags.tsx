import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import {Alltags} from '../../models/tag';
import FastImage from 'react-native-fast-image';

const Tags = ({
  tags,
  index,
  setTagName,
  tagName,
}: {
  tags: Alltags;
  index: number;
  setTagName: (newTagName: string) => void;
  tagName: string;
}) => {
  const onTagPressed = (item: Alltags) => {
    setTagName(item.Name);
    axios({
      method: 'GET',
      url: `https://api.extrazone.com/promotions?Id=${tags.Id}`,
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

  useEffect(() => {
    console.log(tagName, 'tagname', tagName === tags.Name);
  }, [tagName]);

  return (
    <TouchableOpacity
      onPress={() => onTagPressed(tags)}
      style={[
        styles.container,
        {
          marginLeft: index === 0 ? 15 : 5,
          borderColor: tagName === tags.Name ? 'blue' : 'red',
        },
      ]}>
      <FastImage
        source={{uri: tags.IconUrl}}
        style={{
          width: 24,
          height: 24,
          marginRight: 5,
        }}
      />
      <Text>{tags.Name}</Text>
    </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    height: 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
});
