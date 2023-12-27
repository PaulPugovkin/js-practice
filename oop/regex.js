const isHasJavaScriptString = (string) => {
    const check = Boolean(string.toLowerCase().match(/(javascript)/g))
    console.log(check)
}

isHasJavaScriptString('javascrip')
isHasJavaScriptString('hello jaVascRipt')
