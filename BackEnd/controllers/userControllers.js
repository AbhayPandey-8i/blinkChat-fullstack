import { User } from "../models/userModel"
import bcrypt from "bcryptjs"

//register
export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" })

    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Incorrect Password" })
    }

    const user = await User.findOne(username)

    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10)

    //profilePhoto
    const maleProfilePhoto = `https://api.dicebear.com/7.x/lorelei/svg?seed=${username}&backgroundColor=b6e3f4&hair=variant01,variant02,variant03&earringsProbability=0`

    const femaleProfilePhoto = `https://api.dicebear.com/9.x/lorelei/svg?seed=${username}&backgroundColor=ffdfbf&beardProbability=0&earringsProbability=100&hairAccessories=flowers&hairAccessoriesProbability=100&mouth=happy01,happy02&eyes=variant02,variant04`

    await User.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePhoto: gender === male ? maleProfilePhoto : femaleProfilePhoto
    })

  } catch (error) {
    console.log(error)
  }
}
