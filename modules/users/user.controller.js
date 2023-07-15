export function getUser(req,res,next,id){
    const fs = require('fs');

    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const obj = JSON.parse(data);
      for (const i in users) {
       if(id==users[i].id)
       console.log(users[i].id);
       console.log(users[i].email);
       console.log(users[i].age);
       console.log(users[i].country);
      }
    });

};
export function addUser(req,res,id){
    const inputUserId = req.body.id;
    const inputUserEmail = req.body.email;
    const inputUserAge = req.body.age;
    const inputUserCountry = req.body.country;
  
    users.push({
        name: inputUserName,
        email: inputUserEmail,
        age: inputUserAge,
        country: inputUserCountry,
    })
  
   
  res.json({Message:"add user"});

};
export function updateUser(req,res){
    res.json({name:"mmm",age:20});
  };
  export function deleteUser(req,res){
    res.json('User deleted successfully');
  };