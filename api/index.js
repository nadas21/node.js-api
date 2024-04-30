const http = require("http")
const {read_file , write_file} = require("./Animal.js")
const {v4} =  require("uuid")


let user = http.createServer((req, res)=> {
if (req.method === "GET") {
    if (req.url === "/Animal_2108") {
       const cars = read_file("Animal.json")
       res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(cars))
    }
}
if (req.method === "POST") {
    if (req.url === "/Animal_create") {
        req.on("data" , chunk=> {
           let data = JSON.parse(chunk)


           let cars = read_file("Animal.json")


           cars.push({
            id: v4(),
            ...data
           })
           write_file("Animal.json" , cars);
           res.end("malumot qoshildi")
        }) 
    }
}
})

user.listen(3000, ()=>{
    console.log(`ishlayabdi ${3000}`);
})