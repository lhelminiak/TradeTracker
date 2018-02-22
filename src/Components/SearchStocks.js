import React from 'react';
import { SearchBar } from 'react-native-elements'
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

import firebase from 'react-native-firebase';

export default class SearchStocks extends React.Component {
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
            <View style={styles.searchBarContainer}>
                <SearchBar
                    showLoading
                    platform="ios"
                    cancelButtonTitle="Cancel"
                    placeholder='Search' />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    searchBarContainer: {
        flex: 1,
        width: '100%'
    },

    // search: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     width:'100%'
    //
    // },
});