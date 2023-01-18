import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Burger(props) {

    return (
        <TouchableOpacity onPress={() => props.nav.toggleDrawer()}>
            <FontAwesome5 name="bars" size={60} color="161924" />
        </TouchableOpacity>
    )
}