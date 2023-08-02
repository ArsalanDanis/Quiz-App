
import './App.css';
import Quiz from './comonents/Quiz';
import { qsnData } from './comonents/qsn';

const App=()=>{
  return (
    <>
     <div className="App">
        <Quiz data={qsnData} />
      </div>
    
    </>
  )
}

export default App;

