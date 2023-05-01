import ActionTypes from '../actionTypes';

const sayiArttir=(value)=>{
    return{type:ActionTypes.count.SAYI_ARTTIR,payload:value}
}

const sayiAzalt=(value)=>{
    return{type:ActionTypes.count.SAYI_AZALT,payload:value}
}

const sayiAksiyon={sayiArttir,sayiAzalt};

export default sayiAksiyon;