const convertFrom = document.getElementById('convert-from')
const convertTo = document.getElementById('convert-to')
const buttonConvert = document.getElementById('button-convert')

const dolar = 4.83
const euro = 5.31
const libra = 6.37
const dolarCanadense = 3.85


const convertValues = () => {
    const inputValue = document.getElementById('input-value').value
    let currentValue = document.getElementById('current-value')
    let currencyValue = document.getElementById('currency-value')

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

    if(convertTo.value === 'C$ Dólar Canadense') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-CA',
            { style: 'currency', currency: 'CAD' }
        ).format((inputValue / dolarCanadense).toFixed(2))
    }

    if(convertTo.value === '£ Libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format((inputValue / libra).toFixed(2))
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

    if (convertTo.value === 'C$ Dólar Canadense') {
        currencyImg.src = './assets/imgs/Canadá.png'
        currencyText.innerHTML = 'Dólar Canadense'
    }

    if (convertTo.value === '£ Libra') {
        currencyImg.src = './assets/imgs/Reino Unido.png'
        currencyText.innerHTML = 'Libra'
    }

    convertValues()
}


buttonConvert.addEventListener('click', convertValues)
convertTo.addEventListener('change', changeInfoCurrency)



