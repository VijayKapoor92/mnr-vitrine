import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import View from './components/View';
import ShareDialog from './components/ShareDialog';
import * as api from './utils/api';
import {MNR_HOST, MNR_URL_CADASTRO} from './utils/constants';
import {Mail} from './utils';

const getPathQuery = () => {
    const url = new URL(window.location.href);
    return url.search.split('url')[1].replace('=', '');
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            promo: false,
            pagina: 1,
            paginas: 1,
            catalogo: [],
            cliente: {},
            query: '',
            anchorEl: null,
            anchorMenu: null,
            menu: 1, //1: empresas || 2: produtos
            open: true,
            search: false,
            autocomplete: {
                term: '',
                empresas: [],
                produtos: []
            },
            loading: false,
            openSuggestions: false,
            openDialog: false,
            hover: false
        };
        this.timeout = null;
    }

    componentWillMount(){
        const url = getPathQuery();
        this.getDadosCliente(url);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWilUnmount(){
        // window.removeEventListener('scroll', this.handleScroll);
    }

    getDadosCliente = url =>
        api.getDadosCliente(url)
        .then(res => {
            if (res[0]) {
                this.setState({cliente: res[0]});
                this.getCatalogo(1, "", 0, res[0]);
            }
        });

    getCatalogo = (pagina = 1, query = "", promo, cliente) => {
        api.getCatalogo(pagina, query, promo, cliente).then(res => {
            if (res.catalogo && res.catalogo.length > 0)
                this.setState(state => ({
                    catalogo: state.catalogo.concat(res.catalogo),
                    paginas: res.catalogo[0].tl_paginas && state.paginas === parseInt(res.catalogo[0].tl_paginas, 10) ? state.paginas : parseInt(res.catalogo[0].tl_paginas, 10)
                }));
        });
    };

    getEmpresasAutoComplete = term =>
        api.getEmpresas(term)
        .then(res =>
            this.setState(state => ({
                autocomplete: {
                    term,
                    empresas: res,
                    produtos: []
                },
                loading: false,
                openSuggestions: true
            })));

    handleScroll = () => {
        const { query, pagina, paginas, promo, cliente } = this.state;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(document.documentElement.scrollHeight !== document.documentElement.clientHeight
            && pagina < paginas)
            if((scrollTop + document.documentElement.clientHeight) >= document.documentElement.scrollHeight)
                this.handlePagination(pagina + 1, query, promo, cliente);
    };

    handlePagination = (pagina, query, promo, cliente) => {
        this.setState(state => ({
            pagina: state.pagina + 1
        }));
        this.getCatalogo(pagina, query, promo, cliente);
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleTextfieldChange = e => {
        this.setState({query: e.target.value})
    };

    handleSearch = (e, query, pagina, promo, action = '') => {
        const {cliente} = this.state;
        if (e.which === 13 || action === 'submit')
            api.getCatalogo(pagina, query, promo, cliente)
            .then(({catalogo}) => {
                if (catalogo.length > 0)
                    this.setState(state => ({
                        catalogo: catalogo,
                        paginas: catalogo[0].tl_paginas && state.paginas === parseInt(catalogo[0].tl_paginas, 10) ? state.paginas : parseInt(catalogo[0].tl_paginas, 10)
                    }));
                else
                    this.setState({
                        catalogo: [],
                        paginas: 1
                    });
            });
    };

    handleTogglePromo = e => {
        const { query, cliente } = this.state;
        const { checked } = e.target;
        this.setState({ promo: checked });
        setTimeout(() =>
                api.getCatalogo(1, query, checked, cliente)
                .then(({catalogo}) => {
                    if (catalogo.length > 0)
                        this.setState(state => ({
                            catalogo: catalogo,
                            paginas: catalogo[0].tl_paginas && state.paginas === parseInt(catalogo[0].tl_paginas, 10) ? state.paginas : parseInt(catalogo[0].tl_paginas, 10)
                        }));
                    else
                        this.setState({
                            catalogo: [],
                            paginas: 1
                        });
                })
            , 1000);
    };

    /*handleScroll = () => {
        const { query, pagina, paginas, promo, cliente } = this.state;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(document.documentElement.scrollHeight !== document.documentElement.clientHeight
            && pagina < paginas)
            if((scrollTop + document.documentElement.clientHeight) >= document.documentElement.scrollHeight)
                this.handlePagination(pagina + 1, query, promo, cliente);
    };*/

    handlePopoverOpen = e => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    handleFocusSearch = e => {
        this.setState({search: true});
        if (e.target.value !== '')
            this.handleOpenSuggestions(e);
    };

    handleOpenMenu = e =>
        this.setState({anchorMenu: e.currentTarget, search: true});

    handleCloseMenu = (option = 1) =>
        this.setState({
            anchorMenu: null,
            menu: option
        });

    handleChangeTerm = e => {
        const term = e.target.value;

        if (term.length === 0) {
            this.handleStopLoader();
            this.handleCloseSuggestions(e);
        }

        if (this.timeout !== null)
            clearTimeout(this.timeout);

        if (term.length > 0) {
            this.handleStartLoader();
            this.timeout = setTimeout(() => this.getEmpresasAutoComplete(term), 1000)
        } else {
            this.handleCloseSuggestions(e);
        }

    };

    handleOpenSuggestions = e =>
        this.setState({openSuggestions: true});

    handleCloseSuggestions = e =>
        setTimeout(() =>
                this.setState({
                    openSuggestions: false,
                    search: false
                })
            , 80);

    handleStartLoader = () => {
        this.setState({loading: true});
    };

    handleStopLoader = () => {
        this.setState({loading: false});
    };

    handleOpenDialog = () => {
        this.setState({ openDialog: true });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: false });
    };

    handleSharePage = (url = "", to = "", subject = "") => {
        const email = new Mail();
        email.setTo("");
        email.setBody("Prezado Parceiro,\n\nPertenço ao um seleto grupo de empresas fornecedoras do segmento de transportes no portal www.mercadonarede.com.br.\n\nVisite o meu perfil clicando no link " + url + " ou copie o link (CTRL-C) e cole (CTRL-V) na barra de endereço do seu navegador de internet.\n\n\nAtenciosamente,");
        email.setSubject("Conheça meu perfil no Mercado na Rede");
        email.send();

        setTimeout(() => this.handleCloseDialog(), 800);
    };

    handleClickCadastrar = () =>
        window.location.href = MNR_URL_CADASTRO;

    handleLigarCliente = nr_telefone =>
        window.location.href = `tel: ${nr_telefone}`;

    handleClickSuggestion = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank');
    };

    handleHover = hover =>
        this.setState({ hover });

    handleKeyPress = (e, menu) => {
        if (e.which === 13 && menu !== 1)
            window.open(`${MNR_HOST}/catalogo/fm_catalogo.asp?buscar=${e.target.value}`);
    };

    render() {
        // const { classes } = this.props;
        const { catalogo, cliente = {}, open, query, pagina, anchorEl, search, anchorMenu, menu, autocomplete, loading, openSuggestions, openDialog, promo, hover } = this.state;
        const { term, empresas, produtos } = autocomplete;
        const openPopover = Boolean(anchorEl);
        console.log(cliente);
        return (
            <View>
                <ShareDialog open={openDialog} url={cliente.nm_url} onClose={this.handleCloseDialog} onShare={this.handleSharePage}/>
                <Sidebar cliente={cliente} open={open} onDrawerClose={this.handleDrawerClose}/>
                <Header
                    loading={loading}
                    open={open}
                    onDrawerOpen={this.handleDrawerOpen}
                    onDrawerClose={this.handleDrawerClose}
                    cliente={cliente}
                    onPopoverOpen={this.handlePopoverOpen}
                    onPopoverClose={this.handlePopoverClose}
                    openPopover={openPopover}
                    anchorEl={anchorEl}
                    onFocusSearch={this.handleFocusSearch}
                    onBlurSearch={this.handleCloseSuggestions}
                    search={search}
                    anchorMenu={anchorMenu}
                    onOpenMenu={this.handleOpenMenu}
                    onCloseMenu={this.handleCloseMenu}
                    menu={menu}
                    empresas={empresas}
                    produtos={produtos}
                    onChangeTerm={this.handleChangeTerm}
                    term={term}
                    openSuggestions={openSuggestions}
                    onOpenDialog={this.handleOpenDialog}
                    onClickCadastrar={this.handleClickCadastrar}
                    onCloseSuggestions={this.handleCloseSuggestions}
                    onLigarCliente={this.handleLigarCliente}
                    onClickSuggestion={this.handleClickSuggestion}
                    onPressEnter={this.handleKeyPress}
                />
                <Main
                    open={open}
                    onChangeTextfield={this.handleTextfieldChange}
                    onSearch={this.handleSearch}
                    onToggle={this.handleTogglePromo}
                    onHover={this.handleHover}
                    catalogo={catalogo}
                    promo={promo}
                    query={query}
                    pagina={pagina}
                    hover={hover}
                    apresentarCatalogo={cliente.cs_apresentar_catalogo}
                    publico={cliente.cs_perfil_publico}
                    situacao={cliente.situacao}
                />
            </View>
        )
    }

}

export default App;
