const http= require('http');
  
const server = http.createServer((req,res)=>{
//console.log(req);
res.setHeader('Content-Type', 'text/css');
res.statusCode=500;  
res.write("Hello");
  res.end(" fine-ass boy!!")
  
})
const port= 5000;
server.listen(port, ()=>console.log('Server is listening on port', port));