import React, { useState, useEffect } from 'react'
import { Button, View, StyleSheet } from 'react-native';
import { getArticles } from '../../../api';

export default function Pagination() {
    const [articles, setArticles] = useState('');

    const [next, setNext] = useState(false)
    const [previous, setPrevious] = useState(true)
    const [page, setPage] = useState(1);
    const pagesNom = Math.ceil(articles['hydra:totalItems'] / 5);

    useEffect(() => {
        setNext(false)
        setPrevious(false)
        pageCheck(page)
        const fetchData = () => {
            getArticles(page, (res) => {
                setArticles(res.data);
            });
        }
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
            <Button
                style={styles.btn}
                onPress={() => {
                    setPage(1);
                }}
                title="<<"
                disabled={previous}
            />
            <Button
                style={styles.btn}
                onPress={() => {
                    setPage(page - 1);
                }}
                title="<"
                disabled={previous}
            />
            <Button
                style={styles.btn}
                onPress={() => {
                    setPage(page + 1);
                }}
                title=">"
                disabled={next}
            />
            <Button
                style={styles.btn}
                onPress={() => {
                    setPage(pagesNom);
                }}
                title=">>"
                disabled={next}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    pagination: {
        flexDirection: "row",
        margin: 50,
    }
}) 