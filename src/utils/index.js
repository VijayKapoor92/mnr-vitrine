export const

    mask_cnpj = str => {
        if (str && str.length === 14)
            return str.substr(0, 2) + '.' + str.substr(2, 3) + '.' +
                str.substr(5, 3) + '/' + str.substr(8, 4) + '-' +
                str.substr(str.length - 2, 2);
    },

    mask_telefone = str => {
        let mask = str;

        if (str && str.includes('('))
            mask = mask.replace('(', '');

        if (str && str.includes(')'))
            mask = mask.replace(')', '');

        if (str && str.includes(' '))
            mask = mask.replace(' ', '');

        if(str && str.includes('-'))
            mask = mask.replace('-', '');

        if (mask && mask.length === 10)
            return '(' + mask.substr(0, 2) + ') ' +
                mask.substr(2, 4) + '-' + mask.substr(6, 4);
        else
            return str;

    },

    format_number = number => {
        if (number === '0')
            return '';

        if (number.charAt(0) === ',')
            return '0' + number.trim();

        return number;
    },

    InputProps = {
        disableUnderline: true,
    },

    whichPlatform = () => {
        const agent = navigator.userAgent;

        if(agent.match(/Android/i)) {
            return 'android';
        } else if(agent.match(/webOS/i)) {
            return 'webos';
        } else if(agent.match(/iPhone/i)) {
            return 'iphone';
        } else if(agent.match(/iPod/i)) {
            return 'ipod';
        } else if(agent.match(/iPad/i)) {
            return 'ipad';
        } else if(agent.match(/Windows Phone/i)) {
            return 'windows phone';
        } else if(agent.match(/SymbianOS/i)) {
            return 'symbian';
        } else if(agent.match(/RIM/i) || agent.match(/BB/i)) {
            return 'blackberry';
        } else {
            return false;
        }
    },

    isNull = object =>
        object === null
    ,

    Mail = function() {

        let to = null,
            cc = null,
            bcc = null,
            subject = null,
            body = null;

        this.setTo = function(emails) {
            to = emails;
        };

        this.setCC = function(emails) {
            cc = emails;
        };

        this.setBCC = function(emails) {
            bcc = emails;
        };

        this.setSubject = function(text) {
            subject = text;
        };

        this.setBody = function(text) {
            body = encodeURIComponent(text);
        };

        this.make = function() {
            let string = "mailto:" + to + "?";
            if (!isNull(cc)) {
                string += "&cc=" + cc;
            }
            if (!isNull(bcc)) {
                string += "&bcc=" + bcc;
            }
            if (!isNull(subject)) {
                string += "&subject=" + subject;
            }
            if (!isNull(body)) {
                string += "&body=" + body;
            }
            return string;
        };

        this.send = function() {
            window.document.location.href = this.make();
        };
    }
;