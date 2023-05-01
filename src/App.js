import './index.css';
import Employee from './components/Employee';
import {useState} from 'react'

function App() {
  const [role, setRole] = useState('dev');
  const showEmplyees = true;
  return (
    <div className="App bg-red-300">
      {showEmplyees ? (
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value)
        setRole(e.target.value)
      }}/>
          <Employee name='sasha' role = 'intern'/>
          <Employee name='abby' role = {role}/>
          <Employee name='John'/>

      </>) : <p>yo</p>
      }
    </div>
  );
}

export default App;
