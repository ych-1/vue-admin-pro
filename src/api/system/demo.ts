enum Api {
  demoApiUrl = '/api/demo',
}

export const getDemoApi = () => useGet(Api.demoApiUrl)

export const postDemoApi = () => usePost(Api.demoApiUrl)

export const putDemoApi = () => usePut(Api.demoApiUrl)

export const deleteDemoApi = () => useDelete(Api.demoApiUrl)
