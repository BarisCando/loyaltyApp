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
  setTagId,
  tagId,
}: {
  tags: Alltags;
  index: number;
  setTagId: (newTagName: number) => void;
  tagId: number;
}) => {
  const onTagPressed = (item: Alltags) => {
    setTagId(item.id);
    onTagPressed;
  };

  return (
    <TouchableOpacity
      onPress={() => onTagPressed(tags)}
      style={[
        styles.container,
        {
          marginLeft: index === 0 ? 15 : 5,
          borderColor: tagId === tags.id ? 'red' : '#d8d8d8',
        },
      ]}>
      <FastImage
        resizeMode="contain"
        source={{uri: tags.imageUrl}}
        style={{
          width: 24,
          height: 24,
          marginRight: 5,
        }}
      />
      <Text>{tags.brandName}</Text>
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
