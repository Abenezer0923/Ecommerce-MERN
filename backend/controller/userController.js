import asyncHandler from "../middleware/asyncHandler.js";


//@desc Auth user  and get token
// @route POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
   res.send('auth user'); 
}) 

// @desc Register user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
   res.send('register user');
})

// @desc Logout user / clear cokkie
// @route POST /api/users/logout
// @access Privet

const logoutUser = asyncHandler(async (req, res) => {
   res.send('logout user is done');
}) 

 // @desc Get user profile
// @route Get /api/users/profile
// @access Public

const getUserProfile = asyncHandler(async (req, res) => {
   res.send('register user');
})

 // @desc get user profile
// @route Get /api/users/profile
// @access Privet/admin

const updateUserProfile = asyncHandler(async (req, res) => {
   res.send('update user profile');
})


 // @desc get user 
// @route Get /api/users/
// @access Privet/admin

const getUser = asyncHandler(async (req, res) => {
   res.send('update user profile');
})


 // @desc get user by id
// @route Get /api/users/:id
// @access Privet/admin

const getUserById = asyncHandler(async (req, res) => {
   res.send('get users by ID');
})
  // @desc delete user  by id 
// @route DELETE /api/users/:id
// @access Privet/admin

const deleteUser = asyncHandler(async (req, res) => {
   res.send('delete user ');
})

   // @desc update user  
// @route PUT /api/users/:id
// @access Privet/admin

const updateUser = asyncHandler(async (req, res) => {
   res.send('update user ');
})

export {
   authUser,
   registerUser,
   logoutUser,
   getUser,
   getUserById,
   getUserProfile,
   updateUser,
   updateUserProfile,
   deleteUser,

}


