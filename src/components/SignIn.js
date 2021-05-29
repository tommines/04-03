import React from "react";
import {HStack, Box, InputGroup, InputLeftElement,
 Input, Button,Checkbox,Link, useToast, Text} from "@chakra-ui/core";
  import {FaUserAlt, FaLock, FaWeibo, FaWeixin, FaQq} from "react-icons/fa";
  import { useFormik } from 'formik'
  import axios from 'axios'

export default function SignIn() {
  const toast = useToast()
  const formik = useFormik({
    initialValues: {email: "", password:""},
    onSubmit: async (values) => {
      console.log(values)
      try {
        const { data } =  await axios.post('https://conduit.productionready.io/api/users/login', {
          user: values,
        })
        console.log(data)
        toast({
          title: "登录成功",
          status: "success",
          isClosable: true,
        })
      } catch (error) {    
          console.log(error)
          toast({
            title: "登录失败",
            status: "error",
            isClosable: true,
          })
      }
    },
  })

   const _focus = { boxShadow: "none" }
   const _hover = {  borderColor: "none" }
  return (
    <form  onSubmit={formik.handleSubmit} > 
    <Box>
     <InputGroup>
            <InputLeftElement  pointerEvents="none" children={<FaUserAlt />} />
            <Input placeholder="请输入用户名" borderRadius="4px 4px 0 0" borderBottom="none"  _focus={ _focus}  _hover={_hover} {...formik.getFieldProps('email')}  fontSize={12} name="email"/>
          </InputGroup>
          <InputGroup>
          <InputLeftElement children={<FaLock />} />
          <Input type="passowrd" placeholder="请输入密码" borderRadius="0 0 4px 4px"  _focus={_focus}  _hover={_hover} {...formik.getFieldProps('password')} fontSize={12}  name="password" />
        </InputGroup>
      </Box> 
     <Box >
        <Checkbox  m="3" float="left" colorScheme="gray" size="sm" defaultIsChecked>
           记住我
        </Checkbox>
        <Link m="3" fontSize={12} float="right" href="#">登录遇到问题?</Link>
        </Box>
        <Button
          type="submit"
          boxShadow="xl"
          w="100%"
          colorScheme="blue"
          _hover={{ bgColor: "#187cb7" }}
          borderRadius="25px"
        >
          登录
        </Button>
          <HStack align="center" mt="50px" px="20px">
          <Box bgColor="#b5b5b5" h="1px" flex="1" />
          <Text fontSize="12px" color="#b5b5b5" >
            社交账号登录
          </Text>
          <Box bgColor="#b5b5b5" h="1px" flex="1" />
        </HStack>
          <HStack spacing={8} pt="15px" pb="50px" justify="center" >
            <FaWeibo color="#e05244" fontSize="28px" />
            <FaWeixin color="#00bb29" fontSize="28px"/>
            <FaQq color="#498ad5" fontSize="28px" />
          </HStack> 
        </form>
  )
}
