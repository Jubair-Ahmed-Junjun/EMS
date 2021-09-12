import React from 'react';
import './View.css';
const View = (props) => {
    const {clickRemove} = props;
    const {clickEdit} = props;
    const l = props.view.length; 
    return (
        <div>
            { l==0 ? <h2>|| No Employee! ||</h2> : 
            
            <table border="1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Hobbies</th>
                        <th>Picture</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.view.map((view, index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{view.name}</td>
                        <td>{view.email}</td>
                        <td>{view.age}</td>
                        <td>{view.gender}</td>                 
                        <td>{view.DOB}</td> 
                        <td>{view.hobbies}</td> 
                        <td><img src ="./image/image.png" className="photo" /></td>                    
                        <td>
                            <button type="button" className="edit" onClick={()=>clickEdit(index)}>Edit</button>
                            <button type="button" className="delete" onClick={()=>clickRemove(index)}>Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>}
        </div>
    );
}
export default View;
