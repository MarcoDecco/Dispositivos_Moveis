import React, { useState } from 'react';
import { ItemService } from '../services/ItemService';
import { Item } from '../models/Item';
import { ItemView } from '../views/ItemView';
import { ItemModal } from '../components/ItemModal';
import { ConfirmRemoveModal } from '../components/ConfirmRemoveModal';

export function ItemController(){
    const [items, setItems] = useState<Item[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState<Item[]>([]);
    const [descricao, setDescricao] = useState('');

    const [removeModalVisible, setRemoveModalVisible] = useState('');
    const [itemToRemove, setItemToRemove] = useState<Item | undefined>(undefined);

    const openAddModal = () => {
        setNome('');
        setDescricao('');
        setModalVisible(true);
    };

    const closeAddModal = () => {
        setModalVisible(false);
    };

    const handleSave = () => {
        if (!nome || !descricao){
            alert('Por favor, preencha os campos.');
            return;
        }
        ItemService.addItem(nome, descricao);
        setItems(ItemService.getItems());
        setModalVisible(false);
    };

    const handleRemovePress = (item: Item) => {
        setItemToRemove(item);
        setRemoveModalVisible(true);
    };

    const handleConfirmRemove = () => {
        if(itemToRemove){
            ItemService.removeItem(itemToRemove);
            setItems(ItemService.getItems());
        }
        setRemoveModalVisible(false);
        setItemToRemove(undefined);
    };

    const handleCancelRemove = () => {
        setRemoveModalVisible(false);
        setItemToRemove(undefined);
    };

    return (
        <>
            <ItemView
                items={items}
                onOpenModal={openAddModal}
                onRemovePress={handleRemovePress}
            />

            <ItemModal
                visible={modalVisible}
                onDismiss={closeAddModal}
                nome={nome}
                setNome={setNome}
                descricao={descricao}
                setDescricao={setDescricao}
                onSave={handleSave}
            />

            <ConfirmRemoveModal
                visible={removeModalVisible}
                onDismiss={handleCancelRemove}
                item={itemToRemove}
                onConfirm={handleConfirmRemove}
            />
        </>
    )
}