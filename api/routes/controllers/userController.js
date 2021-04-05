const {User} = require("../../models");

const getUsers = (req,res,next) =>{
  User.findAll()
  .then((users)=> res.send(users))
  .catch((e) => res.send(e));
}

const userRegister = (req,res,next)=>{
    const {email,password,name,lastname} = req.body
   
    User.create({email,password,name,lastname})
        .then((user) => {
          res.status(201).send(user);
        })
        .catch((e) => res.send(e));
}

const login = (req,res,next)=>{
  
  return res.send(req.user)

}
const me = (req, res) => {
  if (!req.user) res.sendStatus(401)
  res.send(req.user);
};

const logout = (req, res)=>{
  req.logOut();
  res.sendStatus(200);
}

  module.exports = {
    userRegister,
    getUsers,
    login,
    me,
    logout,
      
  };
