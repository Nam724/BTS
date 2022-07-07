import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
export const height = Dimensions.get('screen').height; // 2000
export const width = Dimensions.get('screen').width; // 1000
export const colorPack = {
    representative: '#ECE6CC',
    highlight_light: '#BAB5A0',
    highlight_dark: '#A3965A',
    text_dark: '#1E1F57',
    text_light: '#53616E',
    deactivated: '#707070',
}


export const styles = StyleSheet.create({
// TEXT STYLES
    normalText:{
        // fontFamily:'Arial',
        fontSize:width*0.04, // 30
        color: colorPack.text_light,
        textAlign:'center',
    },
    highlightText:{
        // fontFamily:'Arial',
        fontSize:width*0.05, // 40
        color: colorPack.text_dark,
        textAlign:'center',
    },
    deactivatedText:{
        // fontFamily:'Arial',
        fontSize:width*0.04, // 30
        color: colorPack.deactivated,
        textAlign:'center',
    },
// CONTAINER STYLES
    container:{
        width: width,
        height: height,
        backgroundColor:colorPack.representative,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        height: height * 80/2000,
        width: width,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map:{
        height: height * 1000/2000,
        width: width,
    },
    restaurantContainer: {
        height: height * 710/2000,
        width:width,
        backgroundColor:colorPack.highlight_light,
    },
    locationInfoContainer:{
        height: height * 106/2000,
        paddingLeft: width * 30/1000,
        paddingRight: width * 70/1000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderColor: colorPack.highlight_light,
        borderBottomWidth: width * 5/1000, 
        backgroundColor: colorPack.representative,
    },
    restaurantListContainer:{
        height: height * 604/2000,
    },
    restaurantList:{
        height: height * 150/2000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 30/1000,
        borderColor: colorPack.highlight_light,
        borderBottomWidth: width * 5/1000, 
    },
    restaurantName:{
        width: width * 450/1000,
        textAlign: 'left',
    },
    restaurantFee:{
        width: width * 300/1000,
        textAlign: 'left',
    },
    restaurantMembers:{

    },


// modal
    restaurantInfoModal:{
        
    },
    restaurantInfoContainerModal:{
        position:'absolute',
        marginTop: height * 80/2000,
        height: height * 1100/2000,
        width:width,
        backgroundColor: colorPack.representative,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingBottom: height * 100/2000,
    },

    restaurantPageModal:{
        position:'absolute',
        marginTop: height * 260/2000,
        height: height * 1210/2000,
        width:width,
        backgroundColor: colorPack.representative,
        alignItems:'center',
        flexDirection:'column',
        paddingBottom: height * 100/2000,
    },


    buttonContainerModal:{
        height: height * 60/2000,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'stretch',
    },
    modalButton:{
        width: width * 400/1000,
        height: height * 100/2000,
        backgroundColor: colorPack.highlight_light,
        borderRadius: height * 50/2000,
        justifyContent:'center',
        marginHorizontal:width*20/1000,
        alignItems:'center',
    },
    getRestaurantInfoModal:{
        height: height * 100/2000,
        width:width,
        // backgroundColor: colorPack.highlight_dark,
        alignItems:'center',
    },

    // restaurantPage

    restaurantButtonContainer:{
        flexDirection:'row',
    },
    restaurantButton_1:{
        height: height * 211/2000,
        width: width * 0.25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colorPack.highlight_dark,

    },
    restaurantButton_2:{
        height: height * 211/2000,
        width: width * 0.25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colorPack.highlight_light,

    },

    // sign in page
    goToSignUpInButton:{
        width: width * 700/1000,
        height: height * 100/2000,
        backgroundColor: colorPack.highlight_light,
        borderRadius: height * 50/2000,
        justifyContent:'center',
        marginHorizontal: width * 150/1000,
    },
    textInputBox:{
        width: width * 700/1000,
        height: height * 100/2000,
        borderRadius: height * 30/2000,
        borderColor: colorPack.highlight_light,
        borderWidth: width* 10/2000,
        marginVertical: height * 35/2000,
        marginHorizontal: width * 150/1000,
        textAlign:'center',
        textAlignVertical:'center',
    },
    textInputBox_restaurant_menu:{
        width: width * 600/1000,
        
        borderRadius: height * 30/2000,
        borderColor: colorPack.highlight_light,
        borderWidth: width* 10/2000,
        marginVertical: height * 35/2000,
        marginHorizontal: width * 50/1000,
        textAlign:'center',
        textAlignVertical:'center',
        lineHeight: height * 50/2000,
        padding:width*20/1000
    },
    textInputBox_restaurant_price:{
        width: width * 250/1000,
        height: height * 100/2000,
        borderRadius: height * 30/2000,
        borderColor: colorPack.highlight_light,
        borderWidth: width* 10/2000,
        marginVertical: height * 35/2000,
        marginHorizontal: width * 50/1000,
        textAlign:'center',
        textAlignVertical:'center',
        padding:width*20/1000
    },


});

