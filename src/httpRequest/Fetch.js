import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
 

function Fetch() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('') 
    const [post,setPosts]=useState([])
    const [searchTitle,setSearchTitle]=useState("")
    const [open, setOpen] = React.useState(false);
    const[title,setTitle]=useState('')
    // const [titleinput,setTitleInput]=useState(title) 

   

   const handleChange = (e)=>{
    setTitle(e.target.value)

   }

  const handleOpen = detail =>{
    setOpen(true);
    setTitle(detail)
    }
    
    const updateComponentValue= ()=>{
        console.log(title) 
          
      }

  const handleClose = () => setOpen(false);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            setLoading(false)
            setPosts(response.data)
            setError('')

        })
        .catch(err =>{
            setLoading(false)
            setPosts([])
            setError(err)
        })

    },[])


  return (
    <div>
        <h3>searching fillter</h3>
        <input 
        type="text"
        placeholder='Search ...'
        onChange={(e)=>setSearchTitle(e.target.value)}
        value={searchTitle}
        />
        <br/>
        <hr></hr>
        <br/>
        {
         loading ? (<h4>Loading...</h4> ): 
        (post.filter((value)=>{
            if(searchTitle=== ""){
                return value
            }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ){
                return value;
            }
        })
        .map((item) => 
        <h5 onClick={()=>handleOpen(item.title)} key={item.id}> {item.title}</h5>
        )
        )
        }

<Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           <input type="text" defaultValue={title} onChange={handleChange}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Exit
          </Button>
          <Button onClick={updateComponentValue} autoFocus>
            Edite
          </Button>
        </DialogActions>
      </Dialog>


         
        </div>
        );
  
}

export default Fetch