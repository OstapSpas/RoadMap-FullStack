
import './App.css'
import Header from './components/Header'
import Welcome from './components/WelcomeMessage'
import Footer from './components/Footer'
import Skills from './components/Skills'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
function App() {

  return (
    <>

      <Header 
        title="Hello, my name is Ostap"
        description="I am learning React step by step."
       />
      <Skills />
      <Welcome />
      <UserCard 
        name = "Ostap"
        city = "Kosice"
        role = "FullStack"
      />


      <UserCard 
        name = "Bohdan"
        city = "London"
        role = "FrontEnd"
      />
    <Counter />
      <Footer />
      
    </>
  )
}

export default App
