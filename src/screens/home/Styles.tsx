import {StyleSheet} from 'react-native';

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
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
});
