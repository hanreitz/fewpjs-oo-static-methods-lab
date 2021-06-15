class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize (string) {
    const exemptWords = ['the','a','an','but','of','and','for','at','by','from']
    const stringArray = string.split(' ')
    const resultArray = []
    for (let i = 0; i < stringArray.length; i++) {
      if (i === 0 || !exemptWords.find(e => e === stringArray[i])) {
        resultArray.push(this.capitalize(stringArray[i]))
      } else {
        resultArray.push(stringArray[i])
      }
    }
    return resultArray.join(' ')
  }
}