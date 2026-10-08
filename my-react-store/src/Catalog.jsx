import './Catalog.css' // IMPORT
import Footer from './components/Footer'

function Catalog() { // LOGIC
    
  return ( // MUST RETURN SOMETHING
    <div>
      <h1>Catalog</h1>
      <Footer></Footer> {/* Component can be auto closed and auto imports the component from the file path */}
    </div>
  )
}

export default Catalog // EXPORT