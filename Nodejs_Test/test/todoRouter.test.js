const app = require("../index") 
const request = require("supertest")

describe("Todo Controller" ,() => {


    it("get api" , (done) => {        
        request(app)
            .get('/todo/getTodo')
            .set('Accept', 'application/json')
            .expect(201)
            .end(function(err, res){
                if (err) console.log("ERR",err);
                else done() 
            });
    })

    it("post api " ,(done) => {
        request(app).post("/todo/addTodo").set('Accept', 'application/json').send({text:"TEST 1",done:false}).expect(201).end(function (err,res) {
            if(err) console.log(err);
            else done()
        }) 
    })


})