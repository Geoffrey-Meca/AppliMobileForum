import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../../../assets/styles/styles';
import { AntDesign } from '@expo/vector-icons';

export default function Pagination({ fetchData, page, setPage, totalItems, maxItems }) {
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(true);
    const pagesNom = Math.ceil(totalItems / maxItems);

    useEffect(() => {
        fetchData()
        setNext(false)
        setPrevious(false)
        pageCheck(page)
    }, [totalItems, page]);

    const pageCheck = (page) => {
        if (page == pagesNom) {
            setPage(pagesNom)
            setNext(true)
        }
        if (page == 1) {
            setPrevious(true)
        }
    }

    return (
        <View style={styles.paginationContainer}>
            <TouchableOpacity
                style={styles.btnPagination}
                onPress={() => {
                    setPage(1);
                }
                }
                disabled={previous}
            ><Text><AntDesign name="banckward" size={24} color="black" /></Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.btnPagination}
                onPress={() => {
                    setPage(page - 1);
                }
                }
                title="<"
                disabled={previous}
            ><Text><AntDesign name="caretleft" size={24} color="black" /></Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.btnPagination}
                onPress={() => {
                    setPage(page + 1);
                }
                }
                disabled={next}
            ><Text><AntDesign name="caretright" size={24} color="black" /></Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.btnPagination}
                onPress={() => {
                    setPage(pagesNom);
                }
                }
                disabled={next}
            ><Text><AntDesign name="forward" size={24} color="black" /></Text></TouchableOpacity>
        </View>
    )
}
