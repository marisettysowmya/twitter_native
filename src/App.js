import React from 'react'
import { Text, View } from 'react-native'
import { Login, TweetCard } from './components'
import Signup from './pages/Signup'

function App() {
  return (
    <View>
      {/* <TweetCard/> */}
      {/* <Login></Login> */}
      <Signup />
    </View>
  )
}

export default App