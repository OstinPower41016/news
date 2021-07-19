import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerCard: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  dateText: {
    color: '#ccc',
    fontSize: 14,
  },
  title: {
    paddingVertical: 10,
  },
  description: {
    paddingTop: 10,
  },
  imageNews: {
    width: '100%',
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
  },
  icon: {width: 16, height: 16},
  viewIcon: {marginRight: 5},
  viewCounts: {color: '#3366FF'},
  headerIconButton: {marginRight: 20},
  contentCard: {paddingBottom: 10},
});

export default styles;
