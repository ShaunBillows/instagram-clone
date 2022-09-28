import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import { createUser, login } from "../utils";
import LoginForm from "../components/LoginForm";
import LoginCreateForm from "../components/LoginCreateForm";
import LoginIncorrectModal from "../components/LoginIncorrectModal";
import LoginCorrectModal from "../components/LoginCorrectModal";
import { useNavigate } from 'react-router-dom'
Modal.setAppElement("#root");

const Login = ({ setUser, user, setCookie }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  const [createAccount, setCreateAccount] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  // switch login/create account funcs

  const handleSwitchLogin = () => {
    setCreateAccount(() => !createAccount);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  // // modal funcs

  const openModal = () => {
    setIsOpen(true);
  };

  // create account funcs

  const handleEnterCreate = async (event) => {
    if (event.key === "Enter") {
        await handleCreateAccount()
    }
  };

  const handleClickCreate = async () => {
    await handleCreateAccount()
  };

  const handleCreateAccount = async () => {
    const status = await createUser(
        username,
        email,
        password,
        setUser,
        setCookie
      );
      if (status !== 200) {
        // setErrMsg("Incorrect credentials.");
        openModal();
      } else {
        setEmail("");
        setPassword("");
        setUsername("");
        navigate("/home")
      }
  }

  // login funcs

  const handleEnterLogin = async (event) => {
    if (event.key === "Enter") {
      handleLogin()
    }
  };

  const handleClickLogin = async () => {
    console.log("login clicked");
    handleLogin()
  };

  const handleLogin = async () => {
    const status = await login(username, password, setUser, setCookie);
    if (status !== 200) {
      // setErrMsg("Incorrect credentials.");
      openModal();
    } else {
      setEmail("");
      setPassword("");
      setUsername("");
      navigate("/home")
    }
  }

  return (
    <LoginFormCont>
      {!user && (
        <>
          {createAccount ? (
            <LoginCreateForm
              handleSwitchLogin={handleSwitchLogin}
              setEmail={setEmail}
              setPassword={setPassword}
              setUsername={setUsername}
              handleEnterCreate={handleEnterCreate}
              handleClickCreate={handleClickCreate}
              username={username}
              email={email}
              password={password}
            />
          ) : (
            <LoginForm
              handleSwitchLogin={handleSwitchLogin}
              setPassword={setPassword}
              setUsername={setUsername}
              handleEnterLogin={handleEnterLogin}
              handleClickLogin={handleClickLogin}
              username={username}
              password={password}
            />
          )}
        </>
      )}

      {user && <LoginCorrectModal user={user} />}
      <LoginIncorrectModal
        openModal={openModal}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
      />
    </LoginFormCont>
  );
};

export default Login;

const LoginFormCont = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
