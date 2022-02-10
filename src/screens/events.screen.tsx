import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { getScaledNumber } from '../library/utils';
import { CricantoHeader, CricantoInput } from '../components';

import Ticket from '../res/images/Ticket.svg';
import Search from '../res/images/Search.svg';

const Event = () => {
    const navigation = useNavigation();

    return (
        <CricantoHeader
            containerStyle={styles.container}
            headerTitle="Events">
            <CricantoInput
                style={styles.searchInput}
                placeholder="Search by events, teams"
                Icon={Search}
            />
            <Ticket />
            <Ticket />
            <Ticket />
        </CricantoHeader>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        marginVertical: getScaledNumber(15),
        // width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: getScaledNumber(30),
        marginVertical: getScaledNumber(20),
        justifyContent: 'space-between',
    },
});

export default Event;
