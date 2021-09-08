import React,{useState} from 'react';
import './EditEmployee.css';

const EditEmployee = (props) => {

    const [showMessage, setShowMessage] = useState(false);
    const [name, setName] = useState(props.findData.name);
    const [email, setEmail] = useState(props.findData.email);
    const [age, setAge] = useState(props.findData.age);
    const [gender, setGender] = useState(props.findData.gender);
    const [DOB, setDOB] = useState(props.findData.DOB);
    const [hobbies, setHobbies] = useState(props.findData.hobbies);
    const [picture, setPicture] = useState(props.findData.picture);
 
    const nameChangeHandler = (e) => {
        const newName = e.target.value;
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
        const newPicture = e.target.value;
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
        props.updateData(newData, props.id);
        setShowMessage((prevData)=>!prevData);
    }
    return (
        <div>
            {showMessage && <div>
                <h2>|| Employee Updated successfully! ||</h2>
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
                    <label>Gender</label><span>:</span>
                    <input type="radio" value="male" onChange={genderChangeHandler}/>
                    <input type="radio" value="female" onChange={genderChangeHandler}/>
                </div>

                <div className="form-control">
                    <label>DOB</label><span>:</span>
                    <input type="date" value={DOB} onChange={DOBChangeHandler}/>
                </div>

                <div className="form-control">
                    <label>Hobbies</label><span>:</span>
                    <input className="form-check-input" type="checkbox" value="Travelling" onChange={hobbiesChangeHandler}/>
                    <input className="form-check-input" type="checkbox" value="Learn to code" onChange={hobbiesChangeHandler}/>
                    <input className="form-check-input" type="checkbox" value="Travelling" onChange={hobbiesChangeHandler}/>
                </div>    

                
                <div className="form-control">
                    <label>Picture</label><span>:</span>
                    <input  name="picture" type="file" value={picture} onChange={pictureChangeHandler} />
                </div> 

                <button type="submit" className="btn">Update Employee</button>
            </form>}
        </div>
    );
}
export default EditEmployee;
