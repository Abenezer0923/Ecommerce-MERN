import express from 'express';
const router = express.Router();
import {
    authUser,
   registerUser,
   logoutUser,
   getUser,
   getUserById,
   getUserProfile,
   updateUser,
   updateUserProfile,
   deleteUser

} from '../controller/userController.js';

router.route('/').post(registerUser).get(getUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;
