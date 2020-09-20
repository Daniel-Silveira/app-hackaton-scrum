import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import Button from "../button";
import DefaultText from "../defaultText";
import Input from "../input";
import BoxModal from "../modal/boxModal";
import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { requestAccess, requestRegisterUser } from "../../redux/user";

const Login = ({ signUp }) => {
  const { navigate } = useNavigation();
  const [auth, setAuth] = useState({});
  const {
    user: { user },
  } = useSelector((value) => value);
  const dispatch = useDispatch();

  useEffect(() => {
    user._id && navigate("Initial");
  }, [user]);

  return (
    <Container>
      <DefaultText
        type="subtitle"
        align="center"
        text={signUp ? "Cadastre-se" : "Login"}
      />
      <View>
        {signUp && (
          <Input
            value={auth.name}
            onChangeText={(text) => setAuth({ ...auth, name: text })}
            mBottom={10}
            placeholder="Nome"
          />
        )}
        <Input
          value={auth.email}
          onChangeText={(text) => setAuth({ ...auth, email: text })}
          placeholder="E-mail"
        />
        <Input
          value={auth.password}
          onChangeText={(text) => setAuth({ ...auth, password: text })}
          mTop={10}
          placeholder="Senha"
        />
      </View>
      <View>
        <Button
          text={signUp ? "Cadastrar" : "Entrar"}
          onPress={() => {
            if (signUp) {
              return dispatch(requestRegisterUser(auth));
            }
            dispatch(requestAccess(auth));
          }}
        />
        <TouchableOpacity
          onPress={() => {
            signUp
              ? navigate("Modal", {
                  component: (props) => (
                    <BoxModal size={50} headerShown={false} {...props}>
                      <Login />
                    </BoxModal>
                  ),
                })
              : navigate("Modal", {
                  component: (props) => (
                    <BoxModal size={50} headerShown={false} {...props}>
                      <Login signUp />
                    </BoxModal>
                  ),
                });
          }}
        >
          <DefaultText
            mTop={15}
            text={signUp ? "Voltar" : "Criar conta"}
            align="center"
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;
