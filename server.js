const { response } = require('express');
const express = require('express');
const app = express(); 
const data = require("./data.json");

    app.use(express.json());

        app.get("/clients", function(req, response){
             response.json(data);
        });


        app.get("/clients/:id", function(req, response){
            const { id } = req.params
            const client = data.find(client => client.id == id);
            response.json(client); 
       });

       // app.get("/clients/:id", function(request, response){});  
        app.post("/clients", function(requeri, response){
            const { name, email } = req.body;

            response.json({name, email}); 
        });

         app.put("/clients/:id", function(req, response){
            const{ id } = req.params
            const client = data.find(client => client.id = id);

            const { name } = requeri.body;
            client.name = name; 

            response.json(client);
         });

        
        app.delete("/clients/:id", function(request, response){}); 

    app.listen(3000, function(){
        console.log("server is running");
    });