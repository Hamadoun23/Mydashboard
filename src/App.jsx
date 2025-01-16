import Sidebar from './composants/Sidebar'
import Navbar from './composants/Navbar'
import Layout from './composants/Layout'
import Array from './composants/Array'


function App() {

  return (
    <div className="flex ">
    {/* Sidebar */}
    <div className="w-56 h-full bg-gray-200">
      <Sidebar />
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Layout - This might be your filter or search controls */}
      <Layout />

      {/* Array/Table component */}
      <Array />
    </div>
  </div>
  )
}

export default App
