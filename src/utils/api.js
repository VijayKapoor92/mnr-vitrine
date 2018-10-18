import {MNR_HOST} from './constants';

const
    host =
        process.env.NODE_ENV === 'production'
            ? "/mnr-api/api.php"
            : "http://192.168.1.111/mnr-api/api.php"
    ,

    mode =
        process.env.NODE_ENV !== 'production'
            ? 'cors'
            : undefined
    ,

    getRequestHeaders = () => new Headers({
        'Accept': 'application/json'
    })
;

export const

    getCatalogo = (pagina, query, promo, {nr_cgc, cs_tipo}) => {
        return fetch(
            `${host}/catalogo?cnpj=${nr_cgc}&tipo=${cs_tipo}&p=${pagina}&q=${query}&promo=${promo ? 1 : 0}`,
            {
                method: 'GET',
                headers: getRequestHeaders(),
                mode
            }
        )
        .then(response => response.json())
        .catch(err => console.error(err))
    },

    getEmpresas = term => {
        return fetch(
            `${MNR_HOST}/social/exe_j.php?term=${term}`,
            {
                method: 'GET',
                mode
            }
        )
        .then(response => response.json())
        .catch(err => console.error(err))
    },

    getProdutos = term => {
        return false;
    },

    getDadosCliente = (url) => {
        return fetch(
            `${host}/catalogo?url=${url}`,
            {
                method: 'GET',
                headers: getRequestHeaders(),
                mode
            }
        )
        .then(response => response.json())
        .catch(err => console.error(err))
    }
;