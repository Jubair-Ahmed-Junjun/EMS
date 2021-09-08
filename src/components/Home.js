import React from 'react';
import './Home.css';

const Home = (props) => {
    const {onClickShowEmployee, onclickShowView} = props;
    return (
        <div>
            <button className="btn" onClick={onclickShowView}>All Employee</button>
            <button className="btn" onClick={onClickShowEmployee}>Create Employee</button>
        </div>
    );
}

export default Home;
