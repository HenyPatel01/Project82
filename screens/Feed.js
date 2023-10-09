import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet, 
    SafeAreaView,
    Platform,
    StatusBar,
    Image 
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';


export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderItem = ({ item: post }) => {
        return <PostCard post={post} />
    }

    keyExtractor = (item, index) => index.toString()

    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}> 
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})