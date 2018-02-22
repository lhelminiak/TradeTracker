import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import firebase from 'react-native-firebase';
export default class ScrollList extends React.Component {

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

                <SectionList
                    sections={[
                        {title: 'Open Trades', data: ['Hey Look']},
                        {title: 'Closed Trades', data: ['Alyssa', 'Brooke', 'Rachel', 'Margaret', 'Mia?', 'Some girl named Carley somewhere', 'Gabby Pinto',
                            'Morgan cant forget her too', 'Drake cuz your gay', 'Never Marta tho thats weird',
                            'Alexa Ostrega', 'Sorry I typed all this love you' ]},
                    ]}

                    refreshing={true}
                    onRefresh={() => this.onRefresh()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={({separator}) =>
                        <View style={styles.separator}>{separator}
                        </View>}
                    renderItem={({item}) =>
                        <Text style={styles.item}>{item}
                        </Text>}
                    renderSectionHeader={({section}) =>
                        <Text style={styles.sectionHeader}>{section.title}
                        </Text>}
                    keyExtractor={(item, index) => index}

                />

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    sectionHeader: {
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 4,
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        backgroundColor: '#34a8ff',
    },
    separator: {
        height: 1,
        backgroundColor: '#65c3cc'

    },


    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
