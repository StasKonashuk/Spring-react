import './App.css'
import Header from './Header/Header'

function App({ state }) {
  return (
    <div className="App">
      <Header navItems={state.navItems} />
    </div>
  )
}

export default App
