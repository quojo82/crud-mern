import User from "../model/userModel.js";

//create new user
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    //extract email from userData
    const { email } = userData;

    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400).json({ message: "Sorry! User Already Exist" });
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

//Get all Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

//Update User
export const update = async (req, res) => {
  try {
    const id = req.params.id;

    const userExist = await User.findOne({ _id: id });
    //check if user exists or not

    if (!userExist) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body);
    return res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const deleteUser = await User.deleteOne({ _id: id });
    return res.status(201).json({ message: `User Deleted Successfuy` });
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};
