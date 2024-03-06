export const useHttpForSiteApi = () => {
  const { apiBase } = useRuntimeConfig();
  
  // Post Data
  const post = async (endpoint, data) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: 'post',
    body: data,
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    }
  })
  

  // Put Data
  const put = async (endpoint, data) => useFetch(() => `${endpoint}`, {
    key: `${endpoint}`,
    baseURL: apiBase,
    method: 'put',
    body: data,
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    }
  })

   // Delete Data By Id (Delete Item)
   const DeleteById = async (endpointWithoutId, id) => useFetch(`${endpointWithoutId}${id}`, {
    key: `${endpointWithoutId}_${id}`,
    baseURL: apiBase,
    method: 'delete',
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`      
    }
  })

  return {
    post,
    put,
    DeleteById
  }
}