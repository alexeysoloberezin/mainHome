export default function ({app, redirect, route}) {
  const userId = app.store.state.user?.uid

  if (route.name === 'register') {
    if(userId){
      return redirect('/')
    }

    return false
  }
  if (!userId) {
    return redirect('/register')
  }
}
