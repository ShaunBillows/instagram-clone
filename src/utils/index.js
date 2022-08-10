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

export const createUser = async (username, email, password, setUser) => {
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
    setUser(data.username)
    if (data.username) {
        return response.status
    }
    } catch(err) {
        console.log(err);
    }
}

export const login = async (username, password, setUser) => {
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
    console.log(data);
    setUser(data.username)
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