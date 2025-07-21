import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Notes from './Components/Notes'
import ViewNotes from './Components/ViewNotes'
import Footer from './Components/Footer'

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
