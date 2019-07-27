import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
  } from 'react-native';

export default function MyScreen() {
  return (
    <View style={styles.container}>
        <Text>Get started by opening</Text>
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'JuliePP'},
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'JuliePP'},
            ]}
            renderItem={({item}) => <Text style={styles.colums}>{item.key}</Text>}
            numColumns={3}
            keyExtractor={(item, index) => index}
        />
    </View>
  );
}

MyScreen.navigationOptions = {
    title: 'My',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        margin: 1,
        fontSize: 18,
        height: 74,
        backgroundColor: 'red',
    },
    colums: {
        flex: 1, 
        flexDirection: 'column',
        margin: 1,
        padding: 10,
        fontSize: 18,
        height: 74,
        backgroundColor: 'blue',
    },
});