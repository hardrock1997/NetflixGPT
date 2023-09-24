 
 
 const checkValidDataForSignIn=(email, password)=>{
    //Empty fileds checks
    if(email.length===0) return 'Email cannot be Empty'
    if(password.length===0) return 'Password cannot be Empty'

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // Format checks
    if(!isEmailValid) return 'Email Id is not valid'
    if(!isPasswordValid) return 'Password is not valid'

    return null
}
const checkValidDataForSignUp=(email,password,name) =>{
    //Empty field checks
    if(name.length===1) return 'Name is invalid'
    if(email.length===0) return 'Email cannot be Empty'
    if(password.length===0) return 'Password cannot be Empty'

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // Format checks
    if(!isEmailValid) return 'Email Id is not valid'
    if(!isPasswordValid) return 'Password is not valid'
    return null

}

export {checkValidDataForSignIn,checkValidDataForSignUp}