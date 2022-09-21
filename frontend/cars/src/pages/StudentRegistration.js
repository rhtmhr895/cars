import axios from 'axios'; 
import React, { useState } from 'react'

const StudentRegistration = () => {

        const [values, setValues] = useState({name:'', class:'', school:'', email:'', phone:''})

        const changeData =(e)=>{
            setValues({...values,[e.target.name]:e.target.value});
        }

        const handel =(e)=>{
            e.preventDefault()
            console.log(values)
            axios.post('http://localhost:5500/api/add',values).then((res)=>{
                console.log(res.data.data.store)

            }).catch((error)=>{
                console.log(error);
            }
        )}

  return (
    <div>
        <form onSubmit={handel}>
            <label>Name</label>
            <input type="text" name='name' value={values.name} onChange={changeData}/>
            <label>Class</label>
            <input type="text" name='class' value={values.class} onChange={changeData}/>
            <label>School</label>
            <input type="text" name='school' value={values.school} onChange={changeData}/>
            <label>Email</label>
            <input type="text" name='email' value={values.email} onChange={changeData}/>
            <label>Phone</label>
            <input type="text" name='phone' value={values.phone} onChange={changeData}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default StudentRegistration;