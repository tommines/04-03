import React from "react";
import { Box} from "@chakra-ui/core";
import { NavLink, BrowserRouter as Router, Route  } from 'react-router-dom'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Form() {
   const  style1 = {padding:"10px", fontSize:"18px", fontWeight: "400" }
   const  active = { boxShadow: "none", color:"#ea6f5a", borderBottom: "2px solid #ea6f5a", fontWeight: "bold"  }
  return (
    <Box bg="white" boxShadow="md" borderRadius="lg" w="400px" p={4} color="#969696">
        <Router>
        <Box align="center"  p={10} >
          <NavLink to="/sign_in" style={style1}  activeStyle={active}>登录</NavLink>
          <b>·</b>
          <NavLink to="/sign_up" style={style1} activeStyle={active}>注册</NavLink> 
          </Box>
          <Box>     
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/sign_up">
              <SignUp />
            </Route>
          </Box>
          </Router>
      </Box>
  )
   
}
