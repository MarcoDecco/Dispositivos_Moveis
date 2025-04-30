import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, IconButton, FAB } from 'react-native-paper';
import { Item } from '../models/Item';

interface ItemViewProps {
    items: Item[];
    onOpenModal: () => void;
    onRemovePress: (item: Item) => void;
}

export function ItemView({ items, onOpenModal, onRemovePress}: ItemViewProps)
    return(
        <View style={StyleSheet.container}>
            {items.length === 0 ? (
                <text style={StyleSheet.noItems} >Nenhum item</text>
            ) : (
                items.map((item, index) =>(
                    <Card style={StyleSheet.card} key={index}>
                        <Card.Content>
                            <Title>{item.nome}</Title>
                            <Paragraph>{item.descricao}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon="delete"
                                onPress={() => onRemovePress(item)}
                            />
                        </Card.Actions>
                    </Card>
                ))
        )}
        </View>
    )