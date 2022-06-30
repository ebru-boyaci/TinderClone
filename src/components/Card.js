import * as React from 'react' 
import { StyleSheet, Text,View, ImageBackground } from 'react-native';


const Card = () => {

  return (
          <View style= {styles.card}>
             <ImageBackground style={styles.imageStyle}
                source={{
                  uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
                }}
                >
                <View style={styles.cardInner}>
                  <Text style={styles.name}>Elon Musk</Text>
                  <Text style={styles.bio}>
                      A dude with a rocket is looking for a gal with fuel
                  </Text>
                </View>
              </ImageBackground>
          </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  card:{
    width: '95%',
    height: '70%',
  },
  imageStyle: {
    width:'100%',
    height:'100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  }
});

export default Card;
