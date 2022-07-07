import {View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import  {DataStore} from '@aws-amplify/datastore';
import {Restaurant, Place, Member,} from '../models';
import { styles, colorPack, width, height } from '../style/style';
import MapView, { Marker } from 'react-native-maps';
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard'
import { sendSMSAsync } from 'expo-sms';


export default function Restaurant_page_finished({route, navigation}){
    
    console.log('Restaurant_page_guest', route);

    const user = route.params.user;//{username: 'test', email: ''}
    const [restaurant, setRestaurant] = useState(route.params.restaurant);
    const [place, setPlace] = useState(route.params.place);
    const setRestaurantList = route.params.setRestaurantList;
    const refreshRestaurantList = route.params.refreshRestaurantList;
    var restaurantList = route.params.restaurantList;
    

    const [member, setMember] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [menuList, setMenuList] = useState(null);
    const [menuPrice, setMenuPrice] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        getMembers(); // get member from database
        // console.log('user', user)
        // console.log('member', member)
        // console.log('restaurant', restaurant)
        // console.log('place', place)
    }, [isRegistered, modalVisible]);
    
    const getMembers = async () => {
        const members = await DataStore.query(Member, member=>member.restaurantID('eq', restaurant.id));
        console.log('members', members)
        const _membersList = []
        members.forEach(async (member, index) => {
            const _m = Members(user, member, restaurant, index)
            
            _membersList.push(_m)            
        })
        setMembersList(_membersList)

        setMember(members)

        if(member.filter(member=>member.username===user.username).length>0){
            setIsRegistered(true)
        }
    }
    const sendMoney = async () => {
        Clipboard.setString(restaurant.account);
        alert('보내실 주소가 복사되었습니다.\n카카오페이로 이동합니다.');
        Linking.openURL(restaurant.account)
    }

    const sendSMStoAuthor = async() => {
        
        
        const makerPhoneNumber = member.filter(member => member.username == restaurant.makerID)[0].phone_number;

        console.log(makerPhoneNumber)
        Linking.openURL(`sms:${makerPhoneNumber}`)
        
    }
    const [membersList, setMembersList] = useState(
        [
            
        ]
    );

    return (
        <View style={styles.container}>

        
            <View style={styles.header}>
                <Text style={styles.highlightText}>
                    {`배달 모집 완료! ${restaurant.name}`}
                </Text>
            </View>


            <View style={styles.header}>
                <Text style={styles.highlightText}>
                    {restaurant.num_members==0?`배달료 총 ${restaurant.fee}원`:`배달료: ${restaurant.fee}원 / ${restaurant.num_members}명 = ${Math.ceil(restaurant.fee/restaurant.num_members)}원`}
                </Text>
            </View>


            <View style={styles.restaurantButtonContainer}>
                <TouchableOpacity style={styles.restaurantButton_1}
                onPress={() => {
                    Linking.openURL(restaurant.url);
                }}
                disabled={!isRegistered}
                >
                    <Text style={styles.highlightText}>
                        {'배민\n바로가기'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.restaurantButton_2}
                    onPress={() => {
                        alert('준비중입니다.')
                    }}
                    disabled={!isRegistered}
                >
                    <Text style={styles.highlightText}>
                        {'나의주문\n메뉴보기'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.restaurantButton_1}
                onPress={()=>sendMoney()}
                disabled={!isRegistered}
                >
                    <Text style={styles.highlightText}>
                        {'송금하러\n가기'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.restaurantButton_2}
                    onPress={() => {
                        sendSMStoAuthor()}}
                        disabled={!isRegistered}
                >
                    <Text style={styles.highlightText}>
                        {'주문자에게\n문자보내기'}
                    </Text>
                </TouchableOpacity>

            </View>


            <View style={styles.map} >
              <MapView
              provider='google'
              style={styles.map}
              initialRegion={{longitude: place.longitude, latitude: place.latitude, latitudeDelta: 0.003, longitudeDelta: 0.003}}
              showsMyLocationButton={false}
              showsUserLocation={true}
              loadingEnabled={true}
              zoomEnabled={true}
              rotateEnabled={true}
              >
                <Marker
                    coordinate={{longitude: place.longitude, latitude: place.latitude}}
                    title={place.name}
                    description={`${place.num_restaurants}개의 레스토랑`}
                    key={place.id}
                />
              </MapView>
            
            </View>
            
            <ScrollView style={styles.restaurantListContainer}>
            {membersList}
            </ScrollView>
        </View>

    );
}


function Members(user, member, restaurant, index){

//    console.log('Members', user, member, restaurant, index)

    const backgroundColor_odd = colorPack.highlight_dark
    const backgroundColor_even = colorPack.highlight_light
    var myBackgroundColor
    if(Number(index) %2 == 0){
        myBackgroundColor = backgroundColor_even
    }
    else{
        myBackgroundColor = backgroundColor_odd
    }
    return(
        
        <TouchableOpacity style={[styles.restaurantList,{backgroundColor:myBackgroundColor}]} key={member.id}
        disabled={true}
        >

            <Text style={[styles.highlightText, styles.restaurantFee]}
            ellipsizeMode='tail'
            numberOfLines={1}
            >{member.username===user.username?'나의 주문':member.email.split('@')[0]}
            </Text>

            <TouchableOpacity 
            onPress={()=>{
                alert(`${member.menu}`)
            }}
            >
            <Text style={[styles.normalText,styles.restaurantName]}>{`${member.menu[0]} 등 ${member.menu.length}개`}</Text>
            </TouchableOpacity>


            <Text style={[styles.normalText, styles.restaurantMembers]}>{Math.ceil(member.price + (restaurant.fee/restaurant.num_members))+'원'}</Text>

        </TouchableOpacity>
    )
}