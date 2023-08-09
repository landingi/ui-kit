const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qsValue}`

  window.history.pushState({ path: newurl }, '', newurl)
}

export const getQueryStringValue = (
  key: string,
  queryString = window.location.search
) => {
  const values = new URLSearchParams(queryString)

  return values.get(key)
}

export const setQueryStringValue = (
  key: string,
  value: string | number,
  queryString = window.location.search
) => {
  const values = new URLSearchParams(queryString)

  values.append(key, value.toString())

  setQueryStringWithoutPageReload(`?${values}`)
}
