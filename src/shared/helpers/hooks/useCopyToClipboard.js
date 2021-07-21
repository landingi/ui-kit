import { useState, useEffect, useCallback } from 'react'

/**
* useCopyToClipboard
* @param {object} props - props
* @param {string} props.text - text to copy
* @return {object}
*/
const useCopyToClipboard = text => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => () => setCopied(false), [text])

  const copyToClipboard = str => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    el.select()
    const success = document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
    return success
  }

  const handleCopy = useCallback(() => {
    if (!isCopied) setCopied(copyToClipboard(text))
  }, [text])

  return [isCopied, handleCopy]
}

export default useCopyToClipboard
