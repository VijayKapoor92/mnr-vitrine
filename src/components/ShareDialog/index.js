import React from 'react';
import {MNR_URL} from '../../utils/constants';
import {grey} from '@material-ui/core/colors/index';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Button,
    InputAdornment,
    Slide
} from '@material-ui/core';
import { Language } from '@material-ui/icons';

const Transition = (props) =>
    <Slide direction="up" {...props} />;

const ShareDialog = ({open, url, onClose, onShare}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Compartilhe seu perfil</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Compartilhe sua página com seus contatos, é fácil.
                    Confirme se o link abaixo está correto e clique em <strong>Compartilhar</strong>&nbsp;
                    e pronto! Depois é só compartilhar com quem quiser!
                </DialogContentText>
                <TextField
                    id="input-url"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Language style={{color: grey[500]}}/>
                            </InputAdornment>
                        )
                    }}
                    value={MNR_URL + url}
                    margin="normal"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Fechar
                </Button>
                <Button onClick={onShare} color="primary">
                    Compartilhar
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default ShareDialog;