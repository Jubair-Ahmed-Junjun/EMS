import React,{useState} from 'react';
import './Employee.css';

const Employee = (props) => {

    const [showMessage, setShowMessage] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [picture, setPicture] = useState("");

    const nameChangeHandler = (e) => {
        const newName = e.target.value;
        //console.log(newName);
        setName(newName);
    }
    const emailChangeHandler = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const ageChangeHandler = (e) => {
        const newAge = e.target.value;
        setAge(newAge);
    }
    const genderChangeHandler = (e) => {
        const newGender = e.target.value;
       // console.log(newGender);
        setGender(newGender);
    
    }
    const DOBChangeHandler = (e) => {
        const newDOB = e.target.value;
        setDOB(newDOB);
    }
      const hobbiesChangeHandler = (e) => {
        const newHobbies = e.target.value;
        setHobbies(newHobbies);
    }

        const pictureChangeHandler = (e) => {
        const newPicture= e.target.value;
        setPicture(newPicture);
    }
   const submitHandler = (e) => {
        e.preventDefault();
        const newData = {
            name: name,
            email: email,
            age: age,
            gender: gender,
            DOB : DOB,
            hobbies:hobbies,
            picture:picture,   
        }
        props.data(newData);
        setShowMessage((prevData)=>!prevData);
        setName("");
        setEmail("");
        setAge("");
        setGender("");
        setDOB("");
        setHobbies("");
        setPicture("");  
    }
   return (
        <div>
            {showMessage && <div>
                <h2>|| Employee insert successfully! ||</h2>
            </div>}

            {!showMessage &&
            
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label>Employee Name</label><span>:</span>
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Employee Email</label><span>:</span>
                    <input type="email" value={email} onChange={emailChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Age</label><span>:</span>
                    <input type="text" value={age} onChange={ageChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Male</label><span>:</span>
                    <input name ="gender" type="radio" value="male" onChange={genderChangeHandler}/>
                    <label>Female</label><span>:</span>
                    <input name = "gender"  type="radio" value="female" onChange={genderChangeHandler}/>
                </div>

                <div className="form-control">
                    <label>DOB</label><span>:</span>
                    <input type="date" value={DOB} onChange={DOBChangeHandler}/>
                </div>
                
              <div className="form-control">
                    <label>Hobbies</label><span>:</span>
                    <input className="form-check-input"  type="checkbox" value="Travelling" onChange={hobbiesChangeHandler}/> Travelling
                    <input className="form-check-input" type="checkbox" value="Learn to code" onChange={hobbiesChangeHandler}/>Learn to code
                    <input className="form-check-input" type="checkbox" value="Reading Book" onChange={hobbiesChangeHandler}/>Reading Book
                </div>  

                <div className="form-control">
                    <label>Picture</label><span>:</span>
                    <input  name="picture" type="file" value={picture} onChange={pictureChangeHandler} />
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>}
        </div>
    );
}

export default Employee;
