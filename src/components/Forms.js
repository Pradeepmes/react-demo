
import {useState} from 'react'
import axios from "axios"

export const Form =()=>{

    const [formdata,setFormdata]= useState({
        name:'',
        email:'',
        age:'',
        dob:'',
        hobbies:'',
        sex:'',



    })

    const changeHandler=(e)=>{
        //const { name, value } = e.target;
         setFormdata(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));

    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(formdata);

        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts",formdata)
            console.log(response)

          } catch(err){

          }
    }


    return(
        <form onSubmit={handleSubmit}>
        <div>
            <p>
                <label>name</label>
                <input type='text' name='name' value={formdata.name} onChange={changeHandler}/>
            </p>

             <p>
                <label>email</label>
                <input type='email' name='email' value={formdata.email} onChange={changeHandler}/>
             </p>
             <p>
                <label>number</label>
                <input type='number' name='age' value={formdata.age} onChange={changeHandler}/>
             </p>
             <p>
                <label>DOB</label>
                <input type='date' name='dob' value={formdata.dob} onChange={changeHandler}/>
             </p>

             <p>
                <label>Hobbies</label>
               <label>
                    <input
                            type="checkbox"
                            name="hobbies"
                            value="reading"
                            checked={formdata.hobbies.includes('reading')}
                            onChange={changeHandler}
                        />
                    Reading
                </label><br/>

                <label>
                    <input
                            type="checkbox"
                            name="hobbies"
                            value="traveling"
                            checked={formdata.hobbies.includes('traveling')}
                            onChange={changeHandler}
                        />
                    traveling
                </label><br/>
                <label>
                    <input
                            type="checkbox"
                            name="hobbies"
                            value="sports"
                            checked={formdata.hobbies.includes('sports')}
                            onChange={changeHandler}
                        />
                    sports
                </label><br/>
             </p>

             <p>
                <label>sex</label>
                <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={formdata.sex === 'male'}
                            onChange={changeHandler}
                        />
                <input
                            type="radio"
                            name="sex"
                            value="female"
                            checked={formdata.sex === 'female'}
                            onChange={changeHandler}
                        />
             </p>

             <p>
               <select name="country" value={formdata.country} onChange={changeHandler}>
                        <option value="">--Select--</option>
                        <option value="ind">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                    </select>
             </p>

            <button type='submit'>submit</button>
        </div>
        </form>
    )
}
