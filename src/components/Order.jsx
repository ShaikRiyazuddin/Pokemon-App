import styles from "./styles/order.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useState, useEffect} from "react";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { useContext } from "react";
import {UserContext} from "../context/userContext";
import { useNavigate } from "react-router-dom";


export const Order = () => {

  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState(0);
  const [bag, setBag] = useState(false);
  const [quantity, setQuantity] = useState("");


  const {handleItems, handleCost} = useContext(UserContext);



    const handleSubmit = (e) => {
      e.preventDefault();
      // setQuantity(range + " " + item);
      handleItems(quantity);
      handleCost(total);
      navigate("/")
    }

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
    
    
    const handleItem = (e) => {
      const selected = e.target.value
      // if(item == "")
      if(selected == "Poke"){
        setPrice(5);
        setItem("Poke Ball")
      }
      else if(selected == "Great"){
        setPrice(10);
        setItem("Great Ball")  
      }
      else if(selected == "Super"){
        setPrice(10);
        setItem("Super Ball")
      }
      else if(selected == "Hyper"){
        setPrice(20);
        setItem("Hyper Ball")
      }
    }

    const handleToggleButton = (e) => {
        setBag(e.target.checked);
        setTotal(total + 2)
    }
    const handleRange = (e,value) => {
        setRange(value)
    }

    const calculate = () => {
        if(price != 0 && range != 0){
          setTotal(price*range) 
          setQuantity(range + " " + item);
        }
    }

    useEffect(() => {
        calculate();
    },[item,price,range])



  return (
    <div className={styles.background}>
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
            <p className = {styles.p}>Place your order</p>
            <p>We'll use this information to pack your order!</p>
            <p>Muhahahahahaha</p>

            <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Choose Item</InputLabel>
        
        <Select
        //   error = {signError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Choose Item"
          onChange={handleItem}
          name = "region"
        //   value = {user.region}
          
        >
          <MenuItem value={"Poke"}>Poke Ball</MenuItem>
          <MenuItem value={"Great"}>Great Ball</MenuItem>
          <MenuItem value={"Super"}>Super Ball</MenuItem>
          <MenuItem value={"Hyper"}>Hyper Ball</MenuItem>
        </Select>
      </FormControl>
      </div>
        <Box sx={{ m: 3 }} />
        <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="Slider"
            defaultValue={0}
            max={10}
            onChange = {handleRange}
            value={range}
            className = {styles.range}
            />
            <Typography gutterBottom style = {{textAlign:"left", marginLeft:"6px", marginTop:"8px"}} >Select Quantity</Typography>

            <div className={styles.toggle}>
                <p>I need a bag for that!</p>
                <Switch onChange = {handleToggleButton}/>
            </div>
            <div className={styles.cost}>
                <p>Cost:</p>
                <h4>${total}</h4>
            </div>
            <Button type = "submit" variant = "contained" color= "warning">ADD TO CART</Button>
        </Box>  
    </div>

  )
}
