import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// import { StatusBar } from 'expo-status-bar';

const profileImage = { uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' };

export default function Home({postImage}) {
  const [like, setLike] = useState(false)
  const [bookmark, setBookmark] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magnam voluptas id mollitia fugiat eum quos. Deserunt impedit laboriosam totam.'

  return (
    <View style={styles.post}>
      <View style={styles.postHeader.header}>
        <Image
          source={profileImage}
          style={styles.postHeader.img}>
        </Image>
        <View style={{ paddingLeft: 10 }}>
          <Text>Sunflower</Text>
          <Text>Lake Tahoe , Califonia</Text>
        </View>
        <Entypo
          name={'dots-three-horizontal'}
          size={20}
          style={{ marginLeft: 'auto' }}>
        </Entypo>
      </View>
      <View>
        <Image
          style={{ height: 350, width: '100%' }}
          source={postImage}></Image>
        <View style={styles.postBody.body}>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={() => setLike((!like))}>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                size={20} style={like ? { color: 'red', paddingRight: 10 } : { color: 'black', paddingRight: 10 }}>
              </AntDesign>
            </Pressable>
            <MaterialCommunityIcons name={'chat-outline'} size={20} style={{ paddingRight: 10 }}></MaterialCommunityIcons>
            <Feather name={'send'} size={20} ></Feather>
            <Pressable onPress={() => setBookmark((!bookmark))} style={{ marginLeft: 'auto' }}>
              <FontAwesome
                name={bookmark ? 'bookmark' : 'bookmark-o'}
                size={20} >
              </FontAwesome>
            </Pressable>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text>liked by abdul and 12 others</Text>
            <View style={styles.postBody.textContent}>
              <Text style={{ fontWeight: "bold" }}>Sunflower </Text>
              <Text>{content.length > 55 ? (
                showMore ? (
                  <Pressable onPress={() => setShowMore(!showMore)}>
                    <Text style={{ width: 300 }}>{content}</Text>
                    <Text style={{ fontWeight: "bold" }}>Show less</Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setShowMore(!showMore)}>
                    <Text >
                      {`${content.slice(0, 55)}... `}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>Show more</Text>
                  </Pressable>
                )
              ) : (
                <Text >{content}</Text>
              )}</Text>

            </View>

            <Text>View all 5 comments</Text>

          </View>
        </View>
        {/* <View style={styles.postFooter}>
          <Image
            source={profileImage}
            style={styles.postHeader.img}>
          </Image>
          <View style={{ paddingLeft: 10, flexDirection: "row", justifyContent: "space-between", width: "85%" }}>
            <TextInput
              placeholder='add to comment....'
              style={{ flexGrow: 1 }}
            />
            <Button
              title='post'
            />
          </View>
        </View> */}
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  post:{
    borderTopWidth:1,
    borderColor:"lightgray",
    paddingBottom : 10,
    paddingTop: 10,
  },
  postHeader: {
    header: {
      padding: 10,
      paddingTop: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    img: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
  },
  postBody: {
    body: {
      padding: 10
    },
    textContent: {

      backgroundColor: 'lightgray',
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
      marginBottom: 10
    }

  },
  postFooter: {
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    padding: 10
  },
});