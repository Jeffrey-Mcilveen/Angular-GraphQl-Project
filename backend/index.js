const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors')
const dotenv = require('dotenv');
const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')
const { ApolloServer } = require('apollo-server-express')

dotenv.config();
var url = process.env.MONGO_URL;
mongoose.connect(url,
{
    usenewUrlparser:true,
    useUnifiedTopology:true   
}).then(success => {
    console.log(`MongoDB is Connected! ${success}` )
}).catch(err =>{
    console.log(`Mongodb Error: ${err}`)
})


const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
})


const app = express();
app.use(bodyParser.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server

server.applyMiddleware({app})

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`));