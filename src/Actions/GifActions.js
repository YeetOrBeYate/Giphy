import axios from 'axios'

// I usually put api keys in environment variables, but since this is going to need to run
// out the box I'll just leave it here for now
const apiKey = 'cGruXJIEb8W8c44Uy0xWjIkO5OfbjYS5'

const loading = ()=>{
    return {type:'gifLoading'}
}

export const searchGiphy = (searchObject)=>{

    return function(dispatch){

        dispatch(loading())
        return axios.get(`//api.giphy.com/v1/gifs/search?q=${searchObject.string}&api_key=${apiKey}`)

        .then(res=>{
            console.log("request made",res.data.data)
            let gifs = res.data.data
            dispatch(
                {type:'gifSuccess', payload:gifs}
            )
        })

        .catch(err=>{
            console.log("request failed",err)
            dispatch(
                {type:'gifFailure'}
            )
        })
    }
}