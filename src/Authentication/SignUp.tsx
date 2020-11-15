import React, { useRef } from "react";
import { Image } from "react-native";
import { Container, Button, Text, Box } from "./../components";
import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "./components/Form/TextInput";

import { useFormik } from "formik";

import * as Yup from 'yup';
import Footer from "./components/components/Footer";

 const SignUpSchema = Yup.object().shape({
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    passwordConfirmation: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .equals([Yup.ref("password")], "Passwords don't match"), 
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
 });

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        // values,
        // setFieldValue,
      } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email: "", password: "", passwordConfirmation: "" , remember: true },
        onSubmit: (values) => console.log(values),
      });
     
      const password = useRef< typeof TextInput>(null); 
      const passwordConfirmation = useRef <typeof TextInput>(null);



      const footer = (
        <Footer
          title="Already have an account?"
          action="Sign In here"
          onPress={() => navigation.navigate("Login")}
        />
      );
    
      //social login is the row of icons 

    return (
            <Container pattern={3} {...{footer}}>
                <Box padding="xl" > 
                <Box alignItems="center">
                <Text 
                      variant="title1"
                      textAlign="center"
                      marginBottom="s"
                      paddingTop="l"
                    >
                    Create account
                </Text>
                <Image source={require("../images/welcome.png")} />
                <Text
                    fontSize={15}
                    textAlign="center"
                    marginBottom="s"
                >
                  Let us know your e-mail and password 
                  
                </Text>
                </Box>
                        <Box marginTop="l">
                          <Box marginBottom="s" paddingBottom="s" >
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

                           <Box marginBottom="s" >
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
                                    onSubmitEditing={() => passwordConfirmation.current?.focus()}
                                />


                                <Box marginTop="m">
                                <TextInput
                                    ref={password}
                                    icon="key"
                                    placeholder="Confirm your password"
                                    onChangeText={handleChange("passwordConfirmation")}
                                    onBlur={handleBlur("passwordConfirmation")}
                                    error={errors.passwordConfirmation}
                                    touched={touched.passwordConfirmation}
                                    secureTextEntry={true}
                                    autoCompleteType="password"
                                    autoCapitalize="none" 
                                    returnKeyType="go"
                                    returnKeyLabel="go"
                                    onSubmitEditing={ () => handleSubmit()}
                                />
                             </Box>

                     
                            <Box alignItems="center" marginTop="m"> 
                                <Button 
                                    variant="primary"
                                    onPress={ handleSubmit}
                                    label="Create your account"
                                />                     
                            </Box>


                         </Box>

                        </Box>

                {/* </Formik>                    */}
              
                </Box>
            </Container>
)};


export default SignUp; 