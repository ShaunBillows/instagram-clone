import { changeToken } from "./helpers";

export const signUp = async (username, email, password, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data.user);
    setUser(data.user);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (
  username,
  email,
  password,
  setUser,
  setCookie
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      console.log("200 recieved from createUser");
      setUser(data.user);
      console.log("new token: " + data.token);
      changeToken(setCookie, data.token);
      return response.status;
    } else {
      throw new Error("Unable to create user.");
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async (username, password, setUser, setCookie) => {
    console.log("post to login");
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(response.status);
    console.log(data.token);
    setUser(data.user);
    changeToken(setCookie, data.token);
    return response.status;
  } catch (err) {
    console.log(err);
  }
};

export const readUsers = async (input, setUserDisplay) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}/admin`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: input,
        }),
      }
    );
    const data = await response.json();
    // console.log(response.status);
    // console.log(data.allUsers);
    setUserDisplay(data.allUsers);
    if (data.username) {
      return response.status;
    }
  } catch (err) {
    console.log(err);
  }
};

export const checkToken = async (cookies, setCookie, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
    });
    const data = await response.json();
    console.log("token checked, new token:" + data.token);
    console.log(data);
    if (response.status === 200) {
      setUser(data.user);
      return 1;
    } else {
        changeToken(setCookie, "")
        setUser("")
      throw new Error("Invalid credentials.");
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export const deleteUser = async (
  cookies,
  username,
  password,
  setCookie,
  setUser
) => {
  console.log(cookies.token);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(response.status);
    if (response.status === 200) {
      logout(setCookie, setUser);
      console.log("user deleted");
      return 1;
    } else {
      throw new Error("Incorrect credentials");
    }
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export const logout = (setCookie, setUser) => {
  changeToken(setCookie, "");
  setUser("");
};

export const addFriend = async (friend, cookies) => {
  try {
    console.log(friend, cookies);
    const responseFriend = await fetch(`${process.env.REACT_APP_REST_API}/friend`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
      body: JSON.stringify({
        friend: friend
      }),
    });
    const data = await responseFriend.json();
    console.log(data.user);
    const responseCreate = await fetch(`${process.env.REACT_APP_REST_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.token,
      },
      body: JSON.stringify({
        username: friend,
        password: friend,
        email: friend,
      }),
    });
    const data2 = await responseCreate.json();
    console.log(data2.user);
  } catch (err) {
    console.log(err);
  }
}