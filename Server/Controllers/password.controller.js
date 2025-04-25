const bcrypt = require("bcrypt")

const createPasswordHash = async (request, response)=>{
    try{
        if(!request.body?.password){
            return response.status(400).send({
                message:"Password is required"
            })
        }
        const {password} = request.body;
        const res = await bcrypt.hash(password,10);
        return response.status(200).send({
            message:"Password hash created successfully",
            hash:res
        })


    }catch(error){
        console.log(error)
        return response.status(500).send({
            message:error.message || "some error occured while creating the password hash"
        })

    }

}

const comparePasswordHash = async (request, response)=>{
    try{
        if(!request.body?.password || !request.body?.hash){
            return response.status(400).send({
                message:"Password and hash are required"

            })
        }

        const {password, hash} = request.body;
        const is_matched = await bcrypt.compare(password, hash)
        if(is_matched){
            return response.status(200).send({
                message:"Password matched successfully",is_matched
            })
        }
        return response.status(400).send({
            message:"password did not match", is_matched
        })
    }catch (error){
        return response.status(500).send({
            message:error.message|| "some error occurred while comapring the password hash."
        })
    }
}


module.exports = {
    createPasswordHash,
    comparePasswordHash
}