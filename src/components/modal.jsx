
import {useState, useContext} from "react";
import {UserContext} from "../context/userContext";
import styles from "./styles/modal.module.css";
import Box from '@mui/material/Box';

export const Modal = () => {

    const {userDetails} = useContext(UserContext);
    console.log(userDetails)

  return (
    <div className = {styles.background}>
          <h1 className = {styles.h1}>Modal</h1>
        <Box
                   component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        //   onSubmit = {handleSubmit}  
          className = {styles.box}
        >
            <h4>Confirm Details</h4>
            <p>Name: {userDetails.name}</p>
            <p>Code: {userDetails.code}</p>
            <p>Range : {userDetails.range}</p>
            <p>Region: {userDetails.region}</p>
            <p>Item: {userDetails.starter}</p>
            <p>Items: {userDetails.items}</p>
            <p>Total Cost: ${userDetails.totalCost}</p>

        </Box>
    </div>
  )
}
