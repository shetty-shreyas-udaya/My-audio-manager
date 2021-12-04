import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

export const HomePage = (props) => {

const [filename,setFileName] = useState('');
const [file,setFile] = useState('');



const filehandler = (e) =>{
 setFile(e.target.files[0])
 setFileName(e.target.files[0].name)

}
    return (
        <div>
            
            <form >
                <h2>Upload your file here !!!!</h2>
                <input type="file" onChange={filehandler} />
             <Link to='/upload'>   <button type='submit' >upload</button></Link>
            </form>

        </div>
    )
}
