const {Link} = require("../../models");


const getLinks = (req,res,next) =>{
    Link.findAll({where:{userId: req.params.id}})
    .then((link)=> res.send(link))
    .catch((e) => res.send(e));
  }

  const addLink = (req,res,next)=>{
  const {origilianLink,shortLink,userId} = req.body
  Link.create({origilianLink,shortLink,userId})
      .then((lnk) => {
        res.status(201).send(user);
      })
      .catch((e) => res.send(e));


  }
  

module.exports = {
    getLinks,
    addLink
      
  };

