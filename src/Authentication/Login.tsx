import React, { useRef } from "react";
import { TextInput as RNTextInput, Image} from "react-native";
import { Container, Button, Text, Box } from "./../components";
import { AuthNavigationProps } from "../components/Navigation";
import  TextInput  from "../Authentication/components/Form/TextInput";
import CheckBox from "./components/Form/Checkbox"; 
import { BorderlessButton } from "react-native-gesture-handler";
import { useFormik } from "formik";

import * as Yup from 'yup';
import Footer from "./components/components/Footer";

 const LoginSchema = Yup.object().shape({
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
 });



const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        values,
        setFieldValue,
      } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: "", password: "", remember: true },
        onSubmit: () => navigation.navigate("Home"),
      });
     
      const password = useRef<RNTextInput>(null); 

      const footer = (
        <Footer
          title="Don’t have an account?"
          action="Sign Up here"
          onPress={() => navigation.navigate("SignUp")}
        />
      );
    

    return (
            <Container pattern={3} {...{footer}}>
                <Box padding="xl"> 
                <Box alignItems="center">
                <Text 
                      variant="title1"
                      textAlign="center"
                      marginBottom="m"
                    >
                    Welcome back!
                </Text>
                <Image source={require("../images/welcome.png")} />
                <Text
                    marginTop="l"
                    fontSize={15}
                    textAlign="center"
                    marginBottom="m"
                >
                    Login to your account using your credential 
                </Text>
                </Box>
                 <Box>
                          <Box marginBottom="s" padding="s" >
                            <TextInput 
                                icon="mail"
                                placeholder="Enter your e-mail address"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                error={errors.email}
                                touched={touched.email}
                                autoCompleteType="email"
                                autoCapitalize="none" 
                                returnKeyType="next"
                                returnKeyLabel="next"
                                onSubmitEditing={() => password.current?.focus()}
                            />
                          </Box>  

                           <Box padding="s" >
                            <TextInput
                                ref={password}
                                icon="key"
                                placeholder="Enter your password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                error={errors.password}
                                touched={touched.password}
                                secureTextEntry={true}
                                autoCompleteType="password"
                                autoCapitalize="none" 
                                returnKeyType="go"
                                returnKeyLabel="go"
                                onSubmitEditing={ () => handleSubmit()}
                            />

                            <Box flexDirection="row" 
                                    margin="s"
                                    marginHorizontal="s"
                                    justifyContent="space-between">
                                    <CheckBox label="remember me" checked={values.remember} 
                                               onChange={ ( ) => setFieldValue("remember", !values.remember)} />
                                    <BorderlessButton 
                                            onPress={() => navigation.navigate("ForgotPassword")}
                                    >
                                    <Text color="primary">Forgot Password?</Text>
                                    </BorderlessButton>
                            </Box>
                            <Box alignItems="center" marginTop="m"> 
                                <Button 
                                    variant="primary"
                                    onPress={ handleSubmit}
                                    label="Log into your account"
                                />                     
                            </Box>
                         </Box>

                        </Box>
                </Box>
            </Container>
)};


export default Login; 