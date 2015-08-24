UtilsMixin = {
    convertCurrency: function (amount, dolarSign) {
        var dolar = dolarSign ? '$' : ''
        return dolar + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
}
