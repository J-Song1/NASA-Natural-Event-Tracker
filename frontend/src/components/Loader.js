import loading from './../resources/loading.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <img src={loading} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
