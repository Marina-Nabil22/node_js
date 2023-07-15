

import  Express  from 'express';
import  userRouter  from './modules/users/user.router.js';
 const app = Express();
 const fs = require('fs');

 fs.readFile('users.json', 'utf8', (err, Date) => {
   if (err) {
     console.error(err);
     return;
   }
   console.log(Date);
 });
app.use(Express.json());
app.use(userRouter);
app.listen(3000,() => console.log("app running"));

