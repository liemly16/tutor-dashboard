const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://35.240.232.107:5000'
    : 'http://localhost:5000'

console.log('in api-url, process env: ', process.env.NODE_ENV)

export default apiUrl
