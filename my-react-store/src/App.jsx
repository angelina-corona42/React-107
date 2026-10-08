import './App.css' // IMPORTS  
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() { // LOGIC 
  
  return (
    <div>
      <h1>Hello from react!</h1>
      <Navbar></Navbar> {/* Component can be auto closed and auto imports the component from the file path */}
      <Footer></Footer> {/* Component can be auto closed and auto imports the component from the file path */}
    </div>
  )
}

export default App // EXPORTS
