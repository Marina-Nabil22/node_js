import  Express  from 'express';
import*as userController from './user.controller.js';
 userController=require("./user.controller.js")

 const userRouter =Express.Router();

userRouter.get("/user",userController.getUser)
userRouter.post('/user/add',userController.addUser)
userRouter.patch(' /user/update',userController.updateUser)
userRouter.delete('/user/delete',userController.deleteUser)
export default userRouter;
 