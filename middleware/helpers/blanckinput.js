let blanckinput = (text1,text2=null)=> {
   
    // if(text){
    //     return true
    // }else {
    //     return false
    // }
    console.log(text1,text2);
    


    let error = {
        // name: "nam nai",
        // prority: "prority nai "
    }
    // error.name= "nam nai"
    // error.prority= "prority nai"

    if(!text1){
        error.name= "nam nai"
    }
    if(!text2){
        error.prority= "prority nai"
    }
    console.log('====================================');
    console.log(error);
    console.log('====================================');

    return error
}


module.exports = blanckinput