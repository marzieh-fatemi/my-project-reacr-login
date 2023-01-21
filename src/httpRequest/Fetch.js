import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Fetch() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('') 
    const [post,setPosts]=useState([])
    const [searchTitle,setSearchTitle]=useState("")
    const [open, setOpen] = React.useState(false);
    

  const handleOpen = () =>{
    setOpen(true);
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
        <h5 onClick={handleOpen} key={item.id}> {item.title}</h5>
        )
        )
        }
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
          >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
            post.map((item)=>
             item.title
            )
            }
          </Typography>
         </Box>
         </Modal> 
        </div>
        );
  
}

export default Fetch