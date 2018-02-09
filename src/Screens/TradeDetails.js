import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

import firebase from 'react-native-firebase';

export default class TradeDetail extends React.Component {

    static navigationOptions = {
        title: 'Trade Details',
    };


    constructor() {
        super();
        this.state = {
            // firebase things?
        };
    }

    componentDidMount() {
        // firebase things?
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Trade details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});