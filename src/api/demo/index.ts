enum Api {
  demoApiUrl = '/page',
}

export const getDemoApi = (params: any) => usePage(Api.demoApiUrl, params)
