import { StyleSheet } from 'react-native'
import { COLOR } from '../../utils'
import { ITEM_WIDTH } from './ScrollHeader'
export const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:COLOR.grey,
        marginTop:16
    },
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:ITEM_WIDTH
    },
    indicator:{
        height:2,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:COLOR.active
    },
    label:{
        color:COLOR.grey_1,
        fontSize:12
    }
})