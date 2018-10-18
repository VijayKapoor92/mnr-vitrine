import React, {Fragment} from 'react';
import {
    Typography,
    List,
    ListItemIcon,
    ListItem
} from '@material-ui/core';
import {
    Person,
    Smartphone,
    Phone,
    Mail,
    LocationOn
} from '@material-ui/icons';
import {MNR_CONTACT_PHOTO_PATH, MNR_NO_CONTACT_PHOTO_PATH} from '../../utils/constants';
import {styles} from './styles';
import {withStyles} from '@material-ui/core/styles';
import {mask_telefone} from '../../utils';

const ContactPhoto = withStyles(styles)(({classes, src}) => {
    return (
        <PhotoContainer>
            <img
                src={src}
                alt="Contato"
                className={classes.photo}
                onError={e => e.target.src = MNR_NO_CONTACT_PHOTO_PATH}
            />
        </PhotoContainer>
    )
});

const ContactInfo = withStyles(styles)(({classes, cliente}) => {
    const { nm_contato, nr_telefone, nr_celular, nm_email, te_endereco, te_complemento, nm_bairro, nm_cidade, sg_uf, nr_cep } = cliente;
    return (
        <List>
            <Item
                icon={<Person/>}
                title={nm_contato}
            />
            <Item
                icon={<Phone/>}
                title={mask_telefone(nr_telefone)}
            />
            <Item
                icon={<Smartphone/>}
                title={nr_celular}
            />
            <Item
                icon={<Mail/>}
                title={nm_email}
            />
            <Item
                icon={<LocationOn/>}
                title={`${te_endereco} - ${te_complemento}`}
                subtitle={`${nm_bairro}, ${nm_cidade} - ${sg_uf}, ${nr_cep}`}
            />
        </List>
    )
});

const PhotoContainer = withStyles(styles)(({classes, children}) => (
    <div className={classes.photoContainer}>
        {children}
    </div>
));

const Item = withStyles(styles)(({classes, title, subtitle, icon}) => {
    return (
        <Fragment>
        {title && title.length > 0 && (
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <div className={classes.listItemBody}>
                    <Typography>{title}</Typography>
                    {subtitle && subtitle.length > 0 && (
                        <Typography>
                            {subtitle}
                        </Typography>
                    )}
                </div>
            </ListItem>
        )}
        </Fragment>
    )
});

const Contato = ({cliente}) => {
    const { nm_foto_contato } = cliente;
    let nm_foto = MNR_NO_CONTACT_PHOTO_PATH;
    if (nm_foto_contato !== null)
        nm_foto = `${MNR_CONTACT_PHOTO_PATH}/${nm_foto_contato}-foto.jpg`;
    return (
        <Fragment>
            <div style={{height: '45%'}}>
                <ContactPhoto src={nm_foto} />
                <ContactInfo cliente={cliente} />
            </div>
        </Fragment>
    )
};

export default Contato;