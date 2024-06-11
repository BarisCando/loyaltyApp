import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Alltags} from '../../models/tag';
import {Promotion} from '../../models/promotions';

const ModalBase = ({
  tags,
  promotions,
  setModalVisible,
}: {
  tags: Alltags[];
  promotions: Promotion;
  setModalVisible: (newTagName: boolean) => void;
}) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        activeOpacity={1}
        onPressOut={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalOverlay} />

        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            {tags.map(item => {
              if (item.id === promotions.Id) {
                return (
                  <>
                    <View
                      key={item.id || promotions.Id}
                      style={styles.detailContainer}>
                      <TouchableOpacity
                        style={styles.imageButton}
                        onPress={() => setModalVisible(false)}>
                        <Image
                          style={styles.image}
                          source={require('../../assets/images/Back.png')}
                        />
                      </TouchableOpacity>

                      <Image
                        style={styles.detailImage}
                        source={{uri: promotions.ImageUrl}}
                      />
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.logoImage}
                          source={{uri: promotions.BrandIconUrl}}
                        />
                      </View>
                      <ScrollView>
                        <View style={{paddingHorizontal: 5, marginTop: 20}}>
                          <Text
                            style={{
                              color: 'grey',
                              fontSize: 18,
                              textAlign: 'left',
                            }}>
                            {item.description}
                          </Text>
                        </View>
                      </ScrollView>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Hemen Katıl</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              } else {
                null;
              }
            })}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  detailContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoImage: {
    resizeMode: 'contain',
    borderRadius: 99,
    width: 50,
    height: 50,
  },
  detailImage: {
    width: '100%',
    height: 355,
    borderBottomLeftRadius: 100,
  },
  imageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 300,
    left: 5,
    overflow: 'hidden',
    borderRadius: 99,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  imageButton: {
    left: 20,
    zIndex: 99,
    position: 'absolute',
    top: 100,
  },
  image: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
  button: {
    bottom: 50,
    position: 'absolute',
    borderRadius: 99,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 345,
    height: 56,
  },
  buttonText: {color: 'white', fontSize: 14, fontWeight: '700'},
  modal: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderColor: '#d9d9d9',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 40,
    flex: 1,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalBase;
