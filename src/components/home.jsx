import styles from  "./styles/home.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../context/userContext";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import { circularProgressClasses } from "@mui/material";
import {v4 as uuid} from "uuid";
import "./styles/test.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { pink } from '@mui/material/colors';
import CancelIcon from '@mui/icons-material/Cancel';


const dummyArr = [];

export const Home = () => {
  const [nameError, setNameError] = useState(false);
  const [signError, setSignError] = useState(false);
  const [userData, setUserData] = useState([]);
  const [codeError, setCodeError] = useState(false);  
  const [region, setRegion] = useState("");
  const [starter, setStarter] = useState("");
  const [final, setFinal] = useState([])

  const [user, setUser] = useState({
    name: '',
    code: '',
    range:0,
    region:""
  });

  // dummyArr.push(user);
  // console.log(dummyArr)
  const navigate = useNavigate();

  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  // Use data from context 
  const { totalCost, itemsQuantity,handleCompleteDetails} = useContext(UserContext)
  
  // console.log(itemsQuantity)
  

  //handle form inputs..
  const handleInput = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  } 

 
  // handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setCodeError(false); 
    setSignError(false);


 
    //Validating user inputs

    if(user.name === ""){
      setNameError(true);
    }

  

    if(user.sign === ""){
      setSignError(true);
    }

    if(user.name ){
      console.log("here")
      setUserData(user)
      // handleUser(user)
      const obj = {
        name: user.name,
        code: user.code,
        range: user.range,
        region: user.region,
        starter:starter,
        items:itemsQuantity,
        totalCost:totalCost
      }
      // console.log(obj)
      handleCompleteDetails(obj)
      navigate("/modal");
    }
    
  }
  
  const kanto = [
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" , alt:"Bulbasaur"},
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png", alt:"Charmander"},  
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", alt:"Squirtle"},
  ]

  const jhoto = [
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png", alt :"Chikorita"},
    {img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png', alt :"Cyndaquil"},
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png", alt :"Totodile"}
  ]

  const hoenn = [
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png", alt :"Treecko"},
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/255.png", alt:"Torchic"},
    {img:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png", alt:"Mudkip"}
  ]


  const handleImage = (e) =>{
   
    setStarter(e.target.alt)
    
  }
 

  const handleItems = (e) =>{ 
    navigate("/order")
  }

  const handleDelItem = (e) => {
    // console.log(e)
  }

  
  return (
      <div className = {styles.background}>
          <h1 className = {styles.h1}>Pokemon App</h1>
          <Box
              
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit = {handleSubmit}
          className = {styles.box}
        >
        <p className = {styles.p}>Fill this form</p>
        <p className = {styles.description}>We'll use this info to dominate the poke world! Muhahahahah </p>
      <div>
        <TextField  
          style ={{width: '100%'}}
          fullWidth
          shrink = "true"
          color = "primary"
          error = {nameError}
          onChange = {handleInput}
          required
          id="outlined-required"
          label="Full name"
          name = "name"
          value = {user.name}
        />
      </div>
      <div>
        <TextField  
          style ={{width: '100%'}}
          fullWidth
          shrink = "true"
          color = "primary"
          error = {codeError}
          onChange = {handleInput}
          required
          id="outlined-required"
          label="Code name"
          name = "code"
          value = {user.code}
        />
      </div>
      <Box sx={{ m: 3 }} />
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="Slider"
        defaultValue={0}
        max={100}
        onChange = {handleInput}
        name = "range"
        value = {user.range}
        className = {styles.range}
      />
      <Typography gutterBottom style = {{textAlign:"left", marginLeft:"10px"}} >How far is your nearest pokemon center? (in KMs)</Typography>
    
      <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Starting Region</InputLabel>
        
        <Select
          error = {signError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Starting Region"
          onChange={handleInput}
          name = "region"
          value = {user.region}
          
        >
          <MenuItem value={"Kanto"}>Kanto</MenuItem>
          <MenuItem value={"Jhoto"}>Jhoto</MenuItem>
          <MenuItem value={"Hoenn"}>Hoenn</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className = {styles.regionImage}>
          {user.region === "Kanto" ? kanto.map((item) => {
            return(
              <div key = {uuid()} >
                 <img className = {styles.buttonRound}  onClick = {handleImage} tabIndex="0" alt = {item.alt}   width="120" height="100"src={item.img}  />
              </div>
            )
          }): user.region === "Jhoto" ? jhoto.map((item) => {
            return(
              <div key = {uuid()} >
                 <img  className = {styles.buttonRound} onClick = {handleImage} tabIndex="0"  alt = {item.alt}   width="120" height="100" src={item.img}  />
              </div>
            )
          }): user.region === "Hoenn" ? hoenn.map((item) => {
            return(
              <div  key = {uuid()}  >
                 <img className = {styles.buttonRound} onClick = {handleImage} tabIndex="0" alt = {item.alt}   width="120" height="100" src={item.img}  />
              </div>
            )
          }): null}
      </div>

      <div className = {styles.packItems}>
        <p>What do you want to pack  </p>
        <AddCircleIcon fontSize="large" onClick = {handleItems} sx={{ color: pink[500] }}/>
      </div>

      <div className = {styles.showItems}>
          {itemsQuantity.map((item, index) => {
            {/* console.log(item) */}
            return(
                <div className = {styles.itemsDiv}>
                  <p className = {styles.itemDivPtag}>{item} <CancelIcon  sx = {{color: pink[500]}} /></p>
                </div>
              )
          })}
      </div>


      <div className = {styles.totalCost}>
        <h4>Total cost:</h4>
        <h4>${totalCost}</h4>
      </div>
      <Button  style ={{width: '100%'}} sx={{ m: 1}} type  = "submit" variant = "contained">Submit</Button>
    </Box>
      </div>
  )
}
