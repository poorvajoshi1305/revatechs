import React,{useState} from 'react';
import './ContactForm.css';
import contactImage from './Images/contactBackground.jfif'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function ContactForm() {

    // const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [question,setQuestion] = useState('');


    const submit = ()=>{

        if(!fullname){
            return alert("Please provide your name");
        }
        if(!email){
            return alert("Please provide your email");
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            return alert("Email is invalid");
        }

        if(!question){
            return alert("Please provide your query");
        }

        axios.post('/api/contactUs/',{
            fullname:fullname,
            email:email,
            query:question
        }).then((res)=>{
            console.log(res.data);
            alert("Query received , we will soon getback to you");
            setFullname("");
            setEmail("");
            setQuestion("");
        })


    }



    return (
        <div className="contact-form">
           <img className="contact-bg" width="100%" height="100%" src={contactImage} alt="contact-here"/>
           <div className="form">
               <h2>Contact Us</h2>
               {/* <input placeholder="Name" className="form-input" type="text" onChange={(e)=>setName(e.target.value)} value={name}/> */}
               <input placeholder="Fullname" className="form-input" type="text" onChange={(e)=>setFullname(e.target.value)} value={fullname}/>
               <input placeholder="Email" className="form-input" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
               <textarea placeholder="Question" rows="6" cols="50" className="form-input-query" onChange={(e)=>setQuestion(e.target.value)} value={question}/>
               <button onClick={()=>submit()} className="contact-submit">Submit</button>
           </div>
        </div>
    )
}

export default ContactForm
