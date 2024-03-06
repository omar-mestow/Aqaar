export const useReauthorization = () => {
  const { apiBase, api } = useRuntimeConfig()


  const reAuthorize = async () => useFetch(`${api.AuthLoginApi}`, {
    baseURL: apiBase,
    method: 'POST',
    body: {
      email: "admin@example.com",
      password: "123Pa$$word!",
    },
    onResponse({ request, response, options }) {
      
      // Process the response data
      if (response._data.succeeded) {
        // console.log(response._data)
        localStorage.removeItem('mainToken')
        localStorage.removeItem('refreshMainToken')
        localStorage.setItem('mainToken', response._data.data.token)
        localStorage.setItem('refreshMainToken', response._data.data.refreshToken);
        useMainToken().value = response._data.data.token
        useRefreshMainToken().value = response._data.data.refreshToken
        // console.log("********************* done *********************")
      }
      return response._data
    }
  })

  return {
    reAuthorize
  }
}