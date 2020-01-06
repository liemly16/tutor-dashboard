const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://tutor-back-end-admin.herokuapp.com'
    : 'http://localhost:5000'

console.log('in api-url, process env: ', process.env.NODE_ENV)

export default apiUrl
