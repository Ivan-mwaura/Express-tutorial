const express = require('express')
const app = express();
let {people} = require('./data')

//set up our static pages
app.use(express.static('./methods-public'))
//parse the form data
app.use(express.urlencoded({extended:false}))
//enable parsing of json body requests
app.use(express.json())


//postman route

app.post('/api/people/postman',(req, res)=>{
    const {name}= req.body
        console.log(name)
    if(!name){
        return res.status(400)
        .json({success:true, msg:'please provide name value'})
    }
    
    res.status(200).json({success:true, data:[...people, name]})
})


app.put('/api/people/:id', (req, res)=>{
    const {name} = req.body
    const {id}= req.params

  const person = people.find((person)=>person.id === Number(id))

  if(!person){
    return res.status(404)
        .json({success:true, msg:`no person with the id ${id}`})
  }
  const newPeople = people.map((person)=>{
    if(person.id === Number(id)){
        person.name = name
    }
     return person     
  })
  res.status(200).json({success:true, data:newPeople})

})

app.delete('/api/people/:id', (req, res)=>{

  const {id}= req.params

  const person = people.find((person)=>person.id === Number(id))

  if(!person){   
    return res.status(404)
        .json({success:true, msg:`no person with the id ${id}`})
  }
  const newPeople = people.filter((person) => person.id !== Number(id))

  return res.status(200).json({success:true, data:newPeople})
})
 
app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})