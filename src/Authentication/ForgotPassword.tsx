import React from 'react';
import { Linking, Image } from 'react-native';
import { AuthNavigationProps } from "../components/Navigation";
import Footer from './components/components/Footer';
import TextInput from "./components/Form/TextInput";
import { Container, Box, Button, Text } from "../components";
import * as Yup from "yup";
import { useFormik } from 'formik';


const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });




const ForgotPassword = ({ navigation } : AuthNavigationProps<"ForgotPassword">) => {
      
    const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
        {
          validationSchema: ForgotPasswordSchema,
          initialValues: { email: "" },
          onSubmit: () => {
            navigation.navigate("PasswordChanged");
          },
        }
      );
    
    const footer = (
        <Footer
          title="Doesn't work?"
          action="How can we help?"
          onPress={() => Linking.openURL("mailto:ryokihara.cs@gmail.com")}
        />
      );
  

    return (
        <Container pattern={0} {...{ footer }} >
        <Box flex={1} marginTop="xl"  marginHorizontal="xl" >
         <Box marginTop="s">
         <Text variant="title1" textAlign="center" marginTop="m" marginBottom="l">
           Forgot password?
         </Text>
         <Image source={require("../images/forgot.png")}/>
   <Text variant="body" textAlign="center" marginBottom="l">
            Enter the email address associated with your account
        </Text>   
         </Box>
            <Box>
                <Box marginBottom="m">
                <TextInput
                    icon="mail"
                    placeholder="Enter your Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    error={errors.email}
                    touched={touched.email}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                />
                </Box>

                <Box alignItems="center" marginTop="m">
                <Button
                    variant="primary"
                    onPress={handleSubmit}
                    label="Reset password"
                />
                </Box>
            </Box>
         </Box>
        </Container>
    
    );
}


export default ForgotPassword;