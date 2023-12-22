let count = 0

const requestCountingMiddleware = async (c, next) => {

   if(c.req.method === "GET" && c.req.path == "/x-request-count"){
      return c.text(`${count}`)
   } else {
      count++
   }

   await next()
    
};

export { requestCountingMiddleware };