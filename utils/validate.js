class Validate {

    isEqual(string1, string2){
        if(string1 == string2) return true;
        else return false;
    }
    /*--------------------------------------------------------------------------*/
    hasValidChars(s, characters, caseSensitive){
        function escapeSpecials(s){
            return s.replace(new RegExp("([\\\\-])", "g"), "\\$1");
        }
        return new RegExp("^[" + escapeSpecials(characters) + "]+$",(!caseSensitive ? "i" : "")).test(s);
    }
    /*--------------------------------------------------------------------------*/
    isSimpleIP(ip){
        ipRegExp = /^(([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+))$/
        return ipRegExp.test(ip);
    }
    /*--------------------------------------------------------------------------*/
    isAlphaLatin(string){
        alphaRegExp = /^[0-9a-z]+$/i
        return alphaRegExp.test(string);
    }
    /*--------------------------------------------------------------------------*/
    isNotEmpty (string){
        return /\S/.test(string);
    }
    /*--------------------------------------------------------------------------*/
    isEmpty(s){
        return !/\S/.test(s);
    }
    /*--------------------------------------------------------------------------*/
    isIntegerInRange(n,Nmin,Nmax){
        var num = Number(n);
        if(isNaN(num)){
            return false;
        }
        if(num != Math.round(num)){
            return false;
        }
        return (num >= Nmin && num <= Nmax);
    }
    /*--------------------------------------------------------------------------*/
    isNum(number){
        numRegExp = /^[0-9]+$/
        return numRegExp.test(number);
    }
    /*--------------------------------------------------------------------------*/
    isEMailAddr(string){
        emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/
        return emailRegExp.test(string);
    }
    /*--------------------------------------------------------------------------*/
    isZipCode(zipcode,country){
        if(!zipcode) return false;
        if(!country) format = 'US';
        switch(country){
            case'US': zpcRegExp = /^\d{5}$|^\d{5}-\d{4}$/; break;
            case'MA': zpcRegExp = /^\d{5}$/; break;
            case'CA': zpcRegExp = /^[A-Z]\d[A-Z] \d[A-Z]\d$/; break;
            case'DU': zpcRegExp = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/; break;
            case'FR': zpcRegExp = /^\d{5}$/; break;
            case'Monaco':zpcRegExp = /^(MC-)\d{5}$/; break;
        }
        return zpcRegExp.test(zipcode);
    }
    /*--------------------------------------------------------------------------*/
    isDate(date,format){
        if(!date) return false;
        if(!format) format = 'FR';
        
        switch(format){
            case'FR': RegExpformat = /^(([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/([2][0]|[1][9])\d{2})$/; break;
            case'US': RegExpformat = /^([2][0]|[1][9])\d{2}\-([0]\d|[1][0-2])\-([0-2]\d|[3][0-1])$/; break;
            case'SHORTFR': RegExpformat = /^([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/\d{2}$/; break;
            case'SHORTUS': RegExpformat = /^\d{2}\-([0]\d|[1][0-2])\-([0-2]\d|[3][0-1])$/; break;
            case'dd MMM yyyy':RegExpformat = /^([0-2]\d|[3][0-1])\s(Jan(vier)?|F√©v(rier)?|Mars|Avr(il)?|Mai|Juin|Juil(let)?|Aout|Sep(tembre)?|Oct(obre)?|Nov(ember)?|Dec(embre)?)\s([2][0]|[1][19])\d{2}$/; break;
            case'MMM dd, yyyy':RegExpformat = /^(J(anuary|u(ne|ly))|February|Ma(rch|y)|A(pril|ugust)|(((Sept|Nov|Dec)em)|Octo)ber)\s([0-2]\d|[3][0-1])\,\s([2][0]|[1][9])\d{2}$/; break;
        }
        
        return RegExpformat.test(date);
    }
    /*--------------------------------------------------------------------------*/
    isMD5(string){
        if(!string) return false;
        md5RegExp = /^[a-f0-9]{32}$/;
        return md5RegExp.test(string);
    }
    /*--------------------------------------------------------------------------*/
    isURL(string){
        if(!string) return false;
        string = string.toLowerCase();
        urlRegExp = /^(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
        return urlRegExp.test(string);
    }
    /*--------------------------------------------------------------------------*/
    isGuid(guid){//guid format : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx or xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        if(!guid) return false;
        GuidRegExp = /^[{|\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\)|}]?$/
        return GuidRegExp.test(guid);
    }
    /*--------------------------------------------------------------------------*/
    isISBN(number){
        if(!number) return false;
        ISBNRegExp = /ISBN\x20(?=.{13}$)\d{1,5}([- ])\d{1,7}\1\d{1,6}\1(\d|X)$/
        return ISBNRegExp.test(number);
    }
    /*--------------------------------------------------------------------------*/
    isSSN(number){//Social Security Number format : NNN-NN-NNNN
        if(!number) return false;
        ssnRegExp = /^\d{3}-\d{2}-\d{4}$/
        return ssnRegExp.test(number);
    }
    /*--------------------------------------------------------------------------*/
    isDecimal(number){// positive or negative decimal
        if(!number) return false;
        decimalRegExp = /^-?(0|[1-9]{1}\d{0,})(\.(\d{1}\d{0,}))?$/
        return decimalRegExp.test(number);
    }
}

export default new Validate();

