
async function getAccountEditDetails (user, userattribute) {
  let headerName = ''
  const userObject = []

  switch (userattribute) {
    case 'firstname':
      headerName = 'First Name'
      break
    case 'surname':
      headerName = 'Surname'
      break
    case 'email':
      headerName = 'Email'
      break
    case 'password':
      headerName = 'Password'
  }

  const editRequest = {
    userattribute: userattribute,
    header: headerName
  }

  userObject.push(user)
  userObject.push(editRequest)
  console.log(userObject)
  return userObject
}

module.exports = {
  getAccountEditDetails
}
