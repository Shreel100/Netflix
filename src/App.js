import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
}from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase';
import { login,logout, selectUser } from './features/counter/userSlice'

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch()



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="App">
      {!user ? <LoginScreen/> :
      (<Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path='/login' element = {<LoginScreen/>} />
          <Route exact path='/profile' element= {<ProfileScreen/>} />
        </Routes>
      </div>
    </Router>)}
    </div>
  );
}

export default App;
