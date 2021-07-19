import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  bodyWrapper: {
    height: '100%',
  },
  bodyText: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  description: {
    paddingVertical: 10,
  },
  date: {
    color: '#ccc',
  },
  commentText: {
    marginTop: 10,
  },
  commnetUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarComment: {
    width: 40,
    height: 40,
    backgroundColor: '#d0e8ff',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  avatarCommentText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(0,0,0,.5)',
  },
  comment: {
    paddingVertical: 15,
  },
  buttonComment: {
    marginVertical: 10,
  },
  newsFormComments: {
    marginBottom: 10,
  },
});

export default styles;
