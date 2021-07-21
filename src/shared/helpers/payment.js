const europeanUnionCountries = [
  'AT',
  'BE',
  'BG',
  'CY',
  'CZ',
  'DE',
  'DK',
  'EE',
  'ES',
  'FI',
  'FR',
  'GB',
  'HR',
  'HU',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SE',
  'SK',
  'SI'
]

const mapCountryCodeToCurrency = {
  EU: 'EUR',
  PL: 'PLN',
  GB: 'GBP',
  BR: 'BRL',
  REST: 'USD'
}

export const isEuropeanUnionCountry = code => europeanUnionCountries.includes(code)

export const setActiveAccountCurrency = code => {
  if (isEuropeanUnionCountry(code) && code !== 'PL' && code !== 'GB') {
    return mapCountryCodeToCurrency.EU
  }

  if (code === 'PL') {
    return mapCountryCodeToCurrency.PL
  }

  if (code === 'GB') {
    return mapCountryCodeToCurrency.GB
  }

  if (code === 'BR') {
    return mapCountryCodeToCurrency.BR
  }

  if (!isEuropeanUnionCountry(code) && code !== 'PL' && code !== 'GB') {
    return mapCountryCodeToCurrency.REST
  }
}
