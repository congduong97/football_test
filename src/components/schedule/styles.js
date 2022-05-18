import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  header: {
    backgroundColor: COLOR.grey,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    color: COLOR.white,
    fontSize: 14,
    marginLeft: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: '#2e2c2c',
    marginTop: 2,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flex: 2,
    alignItems:'center'
  },
  rightContent: {
    flex: 7,
  },
  result: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingLeft:16
  },
  time:{
      color:COLOR.white,
      fontSize:14,
  },
  status:{
      fontSize:12,
      color:COLOR.grey_1,
      marginTop:8
  },
  image:{
    height:20,
    width:20
  }
});
