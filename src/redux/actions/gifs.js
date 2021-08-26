export const searchGiphyActipn = ({ string }) => ({
  type: 'searchGifs',
  payload: {
    request: {
      method: 'get',
      url: `/search?q=${string}&api_key=cGruXJIEb8W8c44Uy0xWjIkO5OfbjYS5`
    }
  },
  setLoading: {
    action: 'set',
    type: 'searchGifs'
  }
})