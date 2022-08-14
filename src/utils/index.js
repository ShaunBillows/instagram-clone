import { changeToken } from "./helpers";

export const signUp = async (username, email, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email
        })
    })
    const data = await response.json()
    console.log(data);
    setUser(data)
    } catch(err) {
        console.log(err);
    }
}

export const createUser = async (username, email, password, setUser, setCookie) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email
        })
    })
    const data = await response.json()
    console.log(data);
    if (response.status === 200) {
        console.log("200 recieved from createUser");
        setUser(data.username)
        console.log("new token: " + data.token);
        changeToken(setCookie, data.token)
        return response.status
    } else {
        throw new Error("Unable to create user.")
    }
    } catch(err) {
        console.log(err);
    }
}

export const login = async (username, password, setUser, setCookie) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    const data = await response.json()
    console.log(response.status);
    console.log(data.token);
    setUser(data.username)
    changeToken(setCookie, data.token)
    if (data.username) {
        return response.status
    }
    } catch(err) {
        console.log(err);
    }
}

export const readUsers = async (username, setUserDisplay) => {
    try {
        const response = await fetch("http://localhost:5001/user/find", {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            "username": username,
        })
    })
    const data = await response.json()
    console.log(response.status);
    console.log(data.allUsers);
    setUserDisplay(data.allUsers)
    if (data.username) {
        return response.status
    }
    } catch(err) {
        console.log(err);
    }
}

export const checkToken = async (cookies, setCookie, setUser) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
        method: "GET", 
        headers: {"Content-Type":"application/json", "Authorization":cookies.token},
    })
    const data = await response.json()
    console.log("token checked, new token:" + data.token);
    console.log(data.username);
    if (response.status === 200) {
        setUser(data.username)
        // changeToken(setCookie, data.token)
        return 1
    } else {
        throw new Error("Invalid credentials.")
    }
    } catch(err) {
        console.log(err);
        // setUser("")
        return 0
    }
}

export const deleteUser = async (cookies, username, password, setCookie, setUser) => {
    console.log(cookies.token);
    try {
        const response = await fetch("http://localhost:5001/user", {
        method: "DELETE", 
        headers: {
            "Content-Type":"application/json",
            "Authorization":cookies.token
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    const data = await response.json()
    // console.log("account deleterd: " + data.result);
    // console.log(data.result.deletedCount);
    if (response.status === 200) {
        logout(setCookie, setUser)
        console.log("user deleted");
        return 1
    } else {
        throw new Error("Incorrect credentials")
    }
    } catch(err) {
        console.log(err);
        return 0
    }
}

export const logout = (setCookie, setUser) => {
    changeToken(setCookie, "")
    setUser("")
}

// const UpdatePassword