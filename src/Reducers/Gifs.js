
const initialState = {
    loading:false,
    failure:false,
    success:false,
    gifs:null
}

export const GifReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'gifLoading':
            return {...state, loading:true, failure:false, success:false}
        case 'gifFailure':
            return {...state, loading:false, failure:true, success:false}
        case 'gitSuccess':
            return {...state, loading:false, failure:false, success:true, gifs:action.payload}
        default:
            return state
    }
}