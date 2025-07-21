import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'
import Footer from './components/Footer'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    },
    {
      path: "/notes",
      element:
        <div>
            <Navbar/>
            <Notes/>
            <Footer/>
        </div>
    },
    {
      path: "/notes/:id",
      element:
        <div>
            <Navbar/>
            <ViewNotes/>
            <Footer/>
        </div>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
