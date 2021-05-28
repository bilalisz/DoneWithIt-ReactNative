import React, { useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppColor from "../../config/AppColor";
import AppButton from "../components/AppButton";
import TextBox from "../components/TextBox";
import AppText from "../components/AppText";

import { validationSchema } from "../../config/validation";

// const validationSchema= Yup.object().shape({
//     email:Yup.string().required().email().label("Email"),
//     password:Yup.string().required().min(5).label("Password")

// })

function LoginScreen(props) {
    const {changeScreen,screenChange}=props
  
  const userInfo={ email: "", password: "" }
  const handleSubmit = ({email,password}) => {
      if(email && password)changeScreen(true)
    };


  return (
    <ScrollView>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={userInfo}
        onSubmit={(value) => handleSubmit(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => {
          console.log(errors);
          return (
            <>
              <TextBox
                Eicon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
              />
              <AppText text={errors.email} color={AppColor.dangerHot} />
              <TextBox
                Ficon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={handleChange("password")}
                secureTextEntry={true}
                textContentType="password"
              />
              <AppText text={errors.password} color={AppColor.dangerHot} />
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
