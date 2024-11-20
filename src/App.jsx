
import './App.css'
import RegisterForm from './components/reactHookForm/reactHookForm'
import Register from './components/registerHtml/registerHtml'

function App() {

  const user = {
    name: "juan",
    email: "juan@gmail.com",
    password: "12345678"
  }

  return (
    <>
      <Register  />
      <RegisterForm  />
    </>
  )
}

export default App
