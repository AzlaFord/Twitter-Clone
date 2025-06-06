import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (user_id,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*1000,
        httpOnly:true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        
    })
}