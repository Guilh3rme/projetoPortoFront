import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';

const InputModal = ({ open, onClose, onAddItem }) => {
    const [newItem, setNewItem] = useState({
        imagem: '',
        nome: '',
        data: '',
        permissoes: '',
        bercos: '',
        status: 'Ativo',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleAddItem = () => {
        onAddItem(newItem);
        setNewItem({
            imagem: '',
            nome: '',
            data: '',
            permissoes: '',
            bercos: '',
            status: '',
        });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Adicionar Item</DialogTitle>
            <DialogContent>
                <TextField label="Imagem" name="imagem" value={newItem.imagem} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Nome" name="nome" value={newItem.nome} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Data de Adição" name="data" value={newItem.data} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Permissões" name="permissoes" value={newItem.permissoes} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Berços Editáveis" name="bercos" value={newItem.bercos} onChange={handleChange} fullWidth margin="normal" />
                <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                    label="Status"
                    name="status"
                    value={newItem.status}
                    onChange={handleChange}
                >
                    <MenuItem value="Ativo">Ativo</MenuItem>
                    <MenuItem value="Inativo">Inativo</MenuItem>
                </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleAddItem}>Adicionar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default InputModal;