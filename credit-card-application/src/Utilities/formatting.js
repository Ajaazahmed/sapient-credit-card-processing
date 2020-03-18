export function formatCardNumber(value) {
    let v = value.toString().replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    let matches = v.match(/\d{4,16}/g);
    // eslint-disable-next-line no-mixed-operators
    let match = matches && matches[0] || ''
    let parts = []
    let i, len
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }
