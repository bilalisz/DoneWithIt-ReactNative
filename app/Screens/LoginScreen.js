import React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { Formik } from "formik";

import AppColor from "../../config/AppColor";
import {
  AppButton,
  AppFormField,
} from "../components";
import { validationSchema } from "../../config/validation";

// const validationSchema= Yup.object().shape({
//     email:Yup.string().required().email().label("Email"),
//     password:Yup.string().required().min(5).label("Password")

// })

function LoginScreen(props) {
  const { onChangeScreen} = props;

  const userInfo = { email: "", password: "" };
  const handleSubmit = ({ email, password }) => {
    if (email && password){
      onChangeScreen(true);
      console.log({email,password})
    }
    
  };

  return (
    <ScrollView>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={userInfo}
        onSubmit={(value) => handleSubmit(value)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => {
          
          return (
            <>
              <AppFormField
                name="email"
                Eicon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
              />

              <AppFormField
                name="password"
                Ficon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                textContentType="password"
                secureTextEntry
              />
              <View style={styles.buttonWrapper}>
                <AppButton
                  title="Login"
                  onPress={handleSubmit}
                  bg={AppColor.primary}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonWrapper: {
    padding: 10,
  },
});
export default LoginScreen;
