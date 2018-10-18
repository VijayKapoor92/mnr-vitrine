import React from 'react';
// import classNames from 'classnames';
import {
    AppBar,
    Toolbar,
    TextField,
    IconButton,
    Switch
} from '@material-ui/core';
import {
    Search,
    MonetizationOn,
} from '@material-ui/icons';
import { InputProps } from '../../utils';
import { styles } from './styles.js';
import { withStyles } from '@material-ui/core/styles';

const SearchBar = ({onChangeTextfield, onSearch, query, pagina, classes, promo, onToggle, open}) => {
    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar variant="dense">
                <TextField InputProps={InputProps} placeholder='Pesquisar...' onChange={e => onChangeTextfield(e)} onKeyPress={(e) => onSearch(e, query, pagina, promo)}  fullWidth/>
                <div style={{flex: 1}}/>
                <IconButton onClick={e => onSearch(e, query, pagina, promo, 'submit')}>
                    <Search />
                </IconButton>
                <Switch
                    classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                    }}
                    checked={promo}
                    icon={<MonetizationOn />}
                    checkedIcon={<MonetizationOn />}
                    onChange={e => onToggle(e)}
                    color="primary"
                />
            </Toolbar>
        </AppBar>
    )
};

export default withStyles(styles)(SearchBar);