import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements'
import firebase from 'react-native-firebase';
import ScrollList from "../Components/ScrollList";
import SearchStocks from "../Components/SearchStocks";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
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
                <SearchStocks/>

                <Button
                    title="Go To Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <ScrollList/>


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
    },




});
