const convertFrom = document.getElementById('convert-from')
const convertTo = document.getElementById('convert-to')
const buttonConvert = document.getElementById('button-convert')




const convertValues = async () => {
    const inputValue = document.getElementById('input-value').value 
    let currentValue = document.getElementById('current-value')
    let currencyValue = document.getElementById('currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high    

    currentValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputValue)

    if (convertTo.value === 'US$ Dólar Americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format((inputValue / dolar).toFixed(2))
    }

    if (convertTo.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format((inputValue / euro).toFixed(2))
    }

    if (convertTo.value === '₿ Bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format((inputValue / bitcoin).toFixed(2))
    }
}




const changeInfoCurrency = () => {
    let currencyImg = document.getElementById('currency-img')
    let currencyText = document.getElementById('currency-text')
    currencyImg.style.borderRadius = '50%'


    if (convertTo.value === '€ Euro') {
        currencyImg.src = './assets/imgs/Euro.svg'
        currencyText.innerHTML = 'Euro'
    }

    if (convertTo.value === 'US$ Dólar Americano') {
        currencyImg.src = './assets/imgs/Estados-Unidos.svg'
        currencyText.innerHTML = 'Dólar Americano'
    }


    if (convertTo.value === '₿ Bitcoin') {
        currencyImg.src = './assets/imgs/bitcoin.png'
        currencyText.innerHTML = 'Bitcoin'
    }

    convertValues()
}


buttonConvert.addEventListener('click', convertValues)
convertTo.addEventListener('change', changeInfoCurrency)



