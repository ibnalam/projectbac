let sequrepost = (req, res,next)=> {
    console.log(req.headers);

    if(req.headers.authorization == "wewe"){
        next()
    }else{
        res.send({error: "you are not a valid user"})
    }
}


module.exports = sequrepost 