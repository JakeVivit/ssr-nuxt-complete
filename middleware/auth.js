export default function ({store, redirect}) {
    if(!store.state.Authorization){
        return redirect('/login')
    }
}