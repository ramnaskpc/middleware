const handleV1 = (request, response)=>{
    return response.status(200).send({
        message:"hello from v1"
    })
}

const handleV2 = (request, response)=>{
    return response.status(200).send({
        message:"Hello from v2"
    })
}

module.exports = {
    handleV1, handleV2
}