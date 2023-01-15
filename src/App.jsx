import Navbar from './components/Navbar'
import Post from './components/Post'
import data from './data'
import './App.css'

function App() {
  const travelData = data.map(place => {
      return <Post
        key = {place.id}
        {...place}
      />
  })

  return (
    <div className="App">
      <Navbar />
      {travelData}
    </div>
  )
}

export default App
