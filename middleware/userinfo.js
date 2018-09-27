
export default function({store}) {
    if(store.state.Authorization){
        store.dispatch('getUser')
    }
}