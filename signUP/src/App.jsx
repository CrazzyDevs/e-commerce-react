
import './App.css'
import Home from './Components/Home'
import  Main from './Components/main'
import { AuthProvider } from './Context/AuthContext'

const App = () => {
  return (
      <AuthProvider>
        <Main />
      </AuthProvider>
  )

}
export default App
