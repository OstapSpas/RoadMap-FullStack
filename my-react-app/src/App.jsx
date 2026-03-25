
import './App.css'
import Header from './components/Header'
import Welcome from './components/WelcomeMessage'
import Footer from './components/Footer'
import Skills from './components/Skills'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import Liked from './components/Liked'

import Theme from './components/Theme'

import LiveInput from './components/LivePreview'

import Form from './components/Form'
function App() {

  return (
    <>

      <Header 
        title="Hello, my name is: "
        description="I am learning React step by step."
       />
      <Skills />
      <Welcome />
    <Counter />
    <LiveInput />
    <Form/>
      {/* <Liked /> */}
      <Theme />
      <Footer />
      
    </>
  )
}

export default App
