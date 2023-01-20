import React, { useState, useEffect } from 'react'
import { TouchableOpacity , View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Pagination({ fetchData, page, setPage, totalItems, maxItems }) {
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(true);
    const pagesNom = Math.ceil(totalItems / maxItems);

    useEffect(() => {
        setNext(false)
        setPrevious(false)
        pageCheck(page)
        fetchData()
    }, [page]);

    const pageCheck = (page) => {
        if (page == pagesNom) {
            setPage(pagesNom)
            setNext(true)
        }
        else if (page == 1) {
            setPrevious(true)
        }
    }

    return (
        <View style={styles.pagination}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    setPage(1);
                }
                }
                disabled={previous}
            ><Text><AntDesign name="banckward" size={24} color="black" /></Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    setPage(page - 1);
                }
                }
                title="<"
                disabled={previous}
            ><Text><AntDesign name="caretleft" size={24} color="black" /></Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    setPage(page + 1);
                }
                }
                disabled={next}
            ><Text><AntDesign name="caretright" size={24} color="black" /></Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    setPage(pagesNom);
                }
                }
                disabled={next}
            ><Text><AntDesign name="forward" size={24} color="black" /></Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        textAlign: "center",
        backgroundColor: '#CAF0F8',
        height: "auto",
        flex: 1,
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 3,
        borderColor: "black"

    },
    pagination: {
        flexDirection: "row",
        margin: 50,
    }
}) 