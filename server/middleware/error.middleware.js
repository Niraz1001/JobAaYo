
const errormiddleware = (err,req,res,next)=>{
    console.log(err);
    res.status(200).send({success:false, messagee: "something went wrong", err});
}

export default errormiddleware;