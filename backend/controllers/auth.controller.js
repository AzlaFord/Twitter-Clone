export const  signup = async (req,res) =>{
    try {
        const {fullName,username,email,password} = req.body
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error:"Invalid email format"})
        }
    } catch (error){

    }
}

export const login = async (req,res) =>{
    res.json({
        data: "you hit the login endpoint"
    })
}

export const logout = async (req,res) =>{
    res.json({
        data: "you hit the logout endpoint"
    })
}