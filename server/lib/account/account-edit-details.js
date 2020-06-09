const userObject = []

async function getAccountEditDetails (user, userattribute) {
  var headerName = ''

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
  return userObject
}

module.exports = {
  getAccountEditDetails
}
