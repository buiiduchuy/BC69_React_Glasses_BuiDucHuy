import { ChooseGlasses } from "./Components/ChooseGlasses"

function App() {
  return (
    <div className="bg" style={{height:'100vh'}}>
      <h2 className="text-center p-3 mb-5">Try Glassess App Online</h2>
     <div className="container p-5">
      <div className='row' >
        <ChooseGlasses/>
      </div>
     </div>
    </div>
  )
}

export default App
