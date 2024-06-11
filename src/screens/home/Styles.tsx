import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBackground: {
    backgroundColor: '#1D1E1C',
    height: 40,
    width: 40,
    borderRadius: 99,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    height: 17,
    width: 16,
    resizeMode: 'contain',
  },
  loginButton: {
    width: 91,
    height: 40,
    backgroundColor: '#F40000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
  text: {
    fontWeight: '700',
  },
  appIcon: {
    resizeMode: 'contain',
    width: 81,
    height: 40,
  },
  image: {
    width: width,
    height: 200,
    resizeMode: 'contain',
  },
  dotContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
