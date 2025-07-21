import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Notes from './component/Notes'
import ViewNotes from './component/ViewNotes'
import Footer from './component/Footer'

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
