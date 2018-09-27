// import { AlertModule } from 'vux'

export default function ({
  $axios,
  redirect,
  app,
  store
}) {
  $axios.onRequest(config => {
    if (store.state.Authorization) {
        config.headers.common.Authorization = store.state.Authorization;
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 401:
        redirect('/login');
        break
      case 400:
        console.log('400');
        break;
      case 500:
        console.log('500');
        break;
      default:
        console.log('401');
    }
  })
}
