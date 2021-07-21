const validateDomain = /([a-z\p{Script=Cyrl}\p{Script=Han}\p{Script=Latn}\p{Script=Hang}0-9][a-z\p{Script=Cyrl}\p{Script=Han}\p{Script=Latn}\p{Script=Hang}0-9/-]{1,63}\.[a-z/.]{2,6})$/gmu

/**
 * getNakedDomain - get naked domain
 * @function getNakedDomain
 * @param {string} name - url
 * @return {string} nakedDomain
 */
export const getNakedDomain = name => {
  const nakedDomain = name?.match(validateDomain, '')

  return nakedDomain
}

/**
 * getSubdomain - get naked domain
 * @function getSubdomain
 * @param {string} name - url
 * @return {string} subdomain
 */
export const getSubdomain = name => {
  const subdomain = name?.replace(validateDomain, '')

  return subdomain?.substring(0, subdomain.length - 1)
}

/**
 * isDomain - checks if the url is a domain or a subdomain
 * @function isDomain
 * @param {string} name - url
 * @return {bool} returns true or false
 */
export const isDomain = name => {
  const subdomain = getSubdomain(name)

  return subdomain?.substring(0, 3) === 'www' && subdomain.length === 3
}

/**
 * getAddDomainErrorMessage - return error message
 * @function getDomainErrorMessage
 * @param {string} code - code
 * @return {string} returns error message
 */
export const getDomainErrorMessage = code => {
  switch (code) {
    case 'DN0000':
      return 'modal.domains.valid.add.domain.error.dn0000'
    case 'DN0001':
      return 'modal.domains.valid.add.domain.error.dn0001'
    case 'DN0002':
      return 'modal.domains.valid.add.domain.error.dn0002'
    case 'DN0003':
      return 'modal.domains.valid.add.domain.error.dn0003'
    case 'c1051bb4-d103-4f74-8988-acbcafc7fdc3':
      return 'modal.domains.valid.add.domain.error.dn0004.1'
    case 'd94b19cc-114f-4f44-9cc4-4138e80a87b9':
      return 'modal.domains.valid.add.domain.error.dn0004.2'
    case '35e6a710-aa2e-4719-b58e-24b35749b767':
      return 'modal.domains.valid.add.domain.error.dn0004.3'
    case '9b2c21ae-2406-4333-87cc-754b889ee3c5':
      return 'modal.domains.valid.add.domain.error.dn0004.4'
    case 'fbdec7f1-6871-4fa8-9c85-d917e076c5a7':
    case 'DN0005':
      return 'modal.domains.valid.add.domain.error.dn0005'
    case 'DN0006':
      return 'modal.domains.valid.add.domain.error.dn0006'
    case 'DN0007':
      return 'modal.domains.valid.add.domain.error.dn0007'
  }
}
