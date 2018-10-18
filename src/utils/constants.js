export const
    MNR_HOST = process.env.NODE_ENV === 'production' ? "" : "http://192.168.1.111",
    MNR_NO_CATALOGO_PHOTO_PATH = process.env.NODE_ENV === 'production' ? "/catalago/no_image.png" : `${MNR_HOST}/catalago/no_image.png`,
    MNR_CATALOGO_PRODUTO_PHOTO_PATH = process.env.NODE_ENV === 'production' ? "/catalago/img" : `${MNR_HOST}/catalago/img`,
    MNR_CONTACT_PHOTO_PATH = process.env.NODE_ENV === 'production' ? "/social/img/foto" : `${MNR_HOST}/social/img/foto`,
    MNR_NO_CONTACT_PHOTO_PATH = process.env.NODE_ENV === 'production' ? "/mnr-social/images/avatar.png" : `${MNR_HOST}/mnr-social/images/avatar.png`,
    MNR_LOGO_PATH = process.env.NODE_ENV === 'production' ? "/social/img/logo" : `${MNR_HOST}/social/img/logo`,
    MNR_NO_LOGO_PATH = process.env.NODE_ENV === 'production' ? "/mnr-social/images/no-logo.png" : `${MNR_HOST}/mnr-social/images/no-logo.png`,
    MNR_URL = process.env.NODE_ENV === 'production' ? "http://www.mercadonarede.com.br/empresa/" : `${MNR_HOST}/mnr-social/index.php?url=`,
    MNR_URL_CADASTRO = "http://www.mercadonarede.com.br/index.php/cadastro",
    MNR_BACKGROUND_IMAGE_DEFAULT = process.env.NODE_ENV === 'production' ? "/mnr-social/images/background-default.jpg" : `${MNR_HOST}/mnr-social/images/background-default.jpg`,
    MNR_DRAWER_WIDTH = 295
;