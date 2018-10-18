import React, { Fragment } from 'react';
import {
    GridList,
    GridListTile,
    Typography,
    Badge
} from '@material-ui/core';
import {
    MonetizationOn,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import SearchBar from '../SearchBar';
import {
    MNR_NO_CATALOGO_PHOTO_PATH,
    MNR_CATALOGO_PRODUTO_PHOTO_PATH, MNR_DRAWER_WIDTH,
} from '../../utils/constants';
import classNames from 'classnames';
import {grey, red, blue} from '@material-ui/core/colors/index';
import { styles } from './styles';
import {withStyles} from '@material-ui/core/styles';
import {format_number} from '../../utils';

const Catalogo = ({classes, catalogo, onHover, hover, open, apresentarCatalogo}) => {
    return (
        <GridList cols={4} cellHeight={250} style={{marginTop: 30, marginBottom: 10, color: 'black', marginLeft: 190, marginRight: 1, paddingLeft: open ? 95 : 75}}>
            {parseInt(apresentarCatalogo) === 1 && catalogo.length > 0 ? catalogo.map(({nm_produto, cd_referencia, cs_importado, nm_foto, nm_marca, vl_preco_promocional, vl_unitario}, index) => {
                if (nm_foto === null)
                    nm_foto = MNR_NO_CATALOGO_PHOTO_PATH;
                else
                    nm_foto = `${MNR_CATALOGO_PRODUTO_PHOTO_PATH}/${nm_foto}.jpg`;

                return (
                    <GridListTile
                        key={index}
                        cols={1}
                        className={classes.gridListTile}
                        onMouseEnter={() => onHover(true)}
                        onMouseLeave={() => onHover(false)}
                        style={{
                            marginBottom: 100
                        }}
                    >
                        <div style={{position: 'relative', top: 0, width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            {vl_preco_promocional !== null ? (
                                <Badge badgeContent={<MonetizationOn style={{color: red[800], fontSize: 28}}/>} color="inherit" classes={{ badge: classes.badge }}>
                                    <img src={nm_foto} alt="Foto produto" onError={e => e.target.src = MNR_NO_CATALOGO_PHOTO_PATH} style={{position: 'relative', maxWidth: 100, maxHeight: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', borderRadius: 15}}/>
                                </Badge>
                            ) : (
                                <img src={nm_foto} alt="Foto produto" onError={e => e.target.src = MNR_NO_CATALOGO_PHOTO_PATH} style={{position: 'relative', maxWidth: 100, maxHeight: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', borderRadius: 15}}/>
                            )}
                        </div>
                        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, top: 105,textAlign: 'center'}}>
                            <Typography style={{width: '100%', marginBottom: 10, color: grey[800]}}>{nm_produto}</Typography>
                            <Typography style={{color: grey[700]}}>{cd_referencia} - {nm_marca}</Typography>
                            {vl_preco_promocional === null ? (
                                <Typography style={{marginTop: 10, color: blue[800]}}>
                                    <span style={{fontSize: 14}}>{vl_unitario === '0' ? '' : (cs_importado === '2' || cs_importado === '3') && 'R$'}&nbsp;</span>
                                    <span style={{fontSize: 24}}>{(cs_importado === '2' || cs_importado === '3') && format_number(vl_unitario.trim())}</span>
                                </Typography>
                            ) : (
                                <Fragment>
                                    <Typography style={{textDecoration: 'line-through', marginTop: 5, color: grey[500]}}>
                                        <span style={{fontSize: 10}}>{(cs_importado === '2' || cs_importado === '3') && 'R$'}&nbsp;</span>
                                        <span style={{fontSize: 16}}>{vl_unitario === '0' ? '' : (cs_importado === '2' || cs_importado === '3') && format_number(vl_unitario.trim())}</span>
                                    </Typography>
                                    <Typography style={{marginTop: 5, color: red[800]}}>
                                        <span style={{fontSize: 14}}>{(cs_importado === '2' || cs_importado === '3') && 'R$'}&nbsp;</span>
                                        <span style={{fontSize: 24}}>{(cs_importado === '2' || cs_importado === '3') && format_number(vl_preco_promocional.trim())}</span>
                                    </Typography>
                                </Fragment>
                            )}
                        </div>
                    </GridListTile>
                )}): (
                <div style={{width: '100%', height: 100, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: grey[500], textAlign: 'center'}}>
                            <SentimentVeryDissatisfied style={{fontSize: 25}}/>
                        </div>
                        <div style={{fontWeight: 700, color: grey[500], fontSize: 20}}>
                            Não há registros
                        </div>
                    </div>
                </div>
            )}
        </GridList>
    )
};

const Main = ({classes, open, publico, situacao, onChangeTextfield, onSearch, onToggle, onHover, catalogo, promo, query, pagina, hover, apresentarCatalogo}) => {
    const show = !(publico === '0' || (situacao === '0' || situacao === '3'));
    return (
        <main
            className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
            })}
        >
            {show ? (
                <Fragment>
                    <div style={{display: 'flex', justifyContent: 'center', marginLeft: MNR_DRAWER_WIDTH, zIndex: 'inherit'}}>
                        <SearchBar
                            onChangeTextfield={onChangeTextfield}
                            onSearch={onSearch}
                            query={query}
                            pagina={pagina}
                            promo={promo}
                            onToggle={onToggle}
                            open={open}
                        />
                    </div>
                    <Catalogo classes={classes} catalogo={catalogo} onHover={onHover} hover={hover} apresentarCatalogo={apresentarCatalogo}/>
                </Fragment>
            ): (
                <Fragment>
                {publico === '0' && (
                    <div style={{marginLeft: MNR_DRAWER_WIDTH}}>Desculpe, essa página foi removida pela Empresa responsável</div>
                )}
                {(situacao === '0' || situacao === '3') && (
                    <div style={{marginLeft: MNR_DRAWER_WIDTH}}>Desculpe, essa página não está acessível</div>
                )}
                </Fragment>
            )}
        </main>
    )
};

export default withStyles(styles)(Main);