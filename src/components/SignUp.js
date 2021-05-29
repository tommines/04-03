import React from "react";
import {HStack, Box, InputGroup, InputLeftElement,
  Input, Button,Link, Text, useToast} from "@chakra-ui/core";
   import {FaUserAlt,FaMailBulk, FaLock, FaWeixin, FaQq} from "react-icons/fa";
   import { useFormik } from 'formik'
   import axios from 'axios'
export default function SignUp() {
  const toast = useToast()
  const formik = useFormik({
    initialValues: {username:"", email: "", password:"" },
    onSubmit: async (values) => {
      console.log(values)
      try {
        const { data } =  await axios.post('https://conduit.productionready.io/api/users', {
          user: values,
        })
        console.log(data)
        toast({
          title: "注册成功",
          status: "success",
          isClosable: true,
        })
      } catch (error) {
          console.log(error)
          toast({
            title: "注册失败",
            status: "error",
            isClosable: true,
          })
      }
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <InputGroup>
            <InputLeftElement  pointerEvents="none" children={<FaUserAlt />} />
            <Input placeholder="你的昵称" borderRadius="4px 4px 0 0" borderBottom="none" _focus={{ boxShadow: "none" }} _hover = {{  borderColor: "none" }} fontSize={12}  {...formik.getFieldProps('username')} 
            name="username"
            />
          </InputGroup>
          <InputGroup>
          <InputLeftElement children={<FaMailBulk />} />
          <Input type="email" placeholder="你的邮箱" borderRadius="0px" borderBottom="none" _focus={{ boxShadow: "none"}}
          _hover = {{  borderColor: "none" }}
          fontSize={12}
          {...formik.getFieldProps('email')}
          name="email"
           />
        </InputGroup>
          <InputGroup>
          <InputLeftElement children={<FaLock />} />
          <Input type="passowrd" placeholder="设置密码" borderRadius="0 0 4px 4px" _focus={{ boxShadow: "none" }} _hover = {{  borderColor: "none" }} 
          fontSize={12}
          {...formik.getFieldProps('password')}
          name="password"
          />
        </InputGroup>
      </Box>
        <Button
          type="submit"
          boxShadow="xl"
          w="100%"
          colorScheme="green"
          _hover={{ bgColor: "#3db922" }}
          borderRadius="25px"
          mt={25}
        >
          注册
        </Button>
        <HStack spacing={8} justifyContent="center" >
          <Text fontSize="12px" pt="15px">点击 “注册” 即表示您同意并愿意遵守简书
          </Text>
          </HStack>
          <HStack justifyContent="center" >
          <Link fontSize="12px" color="#3194d0">
          用户协议
        </Link>  <Text fontSize="12px" color="#b5b5b5">
          和
        </Text> <Link fontSize="12px" color="#3194d0">
          隐私政策
        </Link> 。
         </HStack>
        <HStack align="center" mt="50px" px="20px">
          <Box bgColor="#b5b5b5" h="1px" flex="1" />
          <Text fontSize="12px" color="#b5b5b5" >
            社交账号登录
          </Text>
          <Box bgColor="#b5b5b5" h="1px" flex="1" />
        </HStack>
          <HStack spacing={8} pt="15px" pb="50px" justify="center" >
            <FaWeixin color="#00bb29" fontSize="28px"/>
            <FaQq color="#498ad5" fontSize="28px" />
          </HStack>
    </form>
  );
}
