import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import Employee from './components/Employee';
import View from './components/View';
import EditEmployee from './components/EditEmployee';


const Dummy = [];
let id = 0;
function App() {
  
  const [showMessage, setShowMessage] = useState(false);
  const [view, setView] = useState(Dummy);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);

  const showEmployeeHandler = () => {
    setShowEmployee((prevState) => prevState = true);
    setShowMessage((prevState)=>prevState =  false);
    setShowEditEmployee((prevState)=>prevState =  false);
  }

  const showViewHandler = () => {
    setShowEmployee((prevState) => prevState = false);
    setShowMessage((prevState)=>prevState =  false);
    setShowEditEmployee((prevState)=>prevState =  false);
  }

  const onDataHandler = (getData) => {
    setView((prevData)=>{
      return [getData, ...prevData];
    });
  }

  const updateDataHandler = (newData, id) => {
    view.splice(id, 1, newData);
    setView((p)=>{return [...p]});
  }

  const editDataHandler = (e) =>{
    id = e;
    setShowEditEmployee((prevState)=>prevState=true);
  }

  const removeDataHandler = (e) => {
    
    view.splice(e, 1);
    setView((p)=>{return [...p]});
    setShowMessage((prevState)=>prevState =  true);
  }

  return (
    <div className="App">
      <hr/>
      <h1>CRUD App</h1>
      <hr/>
      <Home onClickShowEmployee={showEmployeeHandler} onclickShowView={showViewHandler}/>
      
      {showMessage && <div>
        <hr/>
        <h2>|| Employee delete successsfully! ||</h2>
      </div>}
      
      <hr/>
      {!showEmployee && !showEditEmployee ? <View view={view} clickRemove={removeDataHandler} clickEdit={editDataHandler}/>:""}
      {showEmployee && !showEditEmployee ? <Employee data={onDataHandler} />:""}
      {showEditEmployee && <EditEmployee findData={view[id]} id={id} updateData={updateDataHandler} />}
      <hr/>
    </div>
  );
}

export default App;
