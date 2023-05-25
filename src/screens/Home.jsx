import {ScrollView, View} from 'react-native';
import Post from '../components/PostCard.jsx'
const postImage1 = { uri: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg' };
const postImage2 = { uri: 'https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' };
const postImage3 = { uri: 'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' };
const postImage4 = { uri: 'https://images.unsplash.com/photo-1684347417078-ae5716d0d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' };
const postImage5 = { uri: 'https://images.unsplash.com/photo-1682289570915-5d6e41ade8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' };
const postImage6 = { uri: 'https://images.unsplash.com/photo-1683924071523-d438728de269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' };


export default function Home() {
  
  return (
    <ScrollView >
     <Post postImage={postImage1}/>
     <Post postImage={postImage2}/>
     <Post postImage={postImage3}/>
     <Post postImage={postImage4}/>
     <Post postImage={postImage5}/>
     <Post postImage={postImage6}/>
    </ScrollView>
  )

}
