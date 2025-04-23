const logger = (request, response, next) => {
    const method = request.method;
    const url = request.url;
    const startedTime = new Date().getTime();
    response.on("finish", () => {
        const finistedTime = new Date().getTime();
        const completedTime = finistedTime - startedTime;
        console.log(`${method} ${url} ${response.statusCode} - ${completedTime} --ms`);
    })
    next(); 
}

module.exports = logger; 