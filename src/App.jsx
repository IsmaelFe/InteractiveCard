import './App.css'
import Back_Card from './components/Back_Card'
import Front_Card from './components/Front_Card'

function App() {

  return (
    <div className='container-main'>
      <div className='container-card'>
        <img src='../../public/assets/images/bg-main-mobile.png' alt='fondo'></img>
        <Back_Card />
        <Front_Card />
      </div> 
      <div className='container-form'>

      </div>
    </div>
  )
}

export default App
