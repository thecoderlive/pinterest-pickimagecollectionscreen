import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.pinterest_image_collection}
    source={{uri: item.pinterest_image_collection}}
    />
<Text style={styles.collection_name}>{item.collection_name}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'pinterest_image_collection': {
        'width': '29vw',
        'height': '29vw',
        'marginTop': 5,
        'borderRadius': 15,
        'marginLeft': 10
    },
    'collection_name': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 20,
        'paddingTop': 5
    }
});