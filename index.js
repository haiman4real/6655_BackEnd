const http = require("http");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const server = http.createServer((req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    
    /*

        

        we can Navigate to different pages via different requests. 
        if / then goto index.html
        if /about about then goto about.html
        if /api then laod the JSON file  /  ;) this might be something you need for your exam. 



    */
   
    
    
    if (req.url === '/') {
        // read public.html file from public folder
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
                    (err, content) => {
                                    
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(content);
                        }
              );
     }

    else if (req.url === '/style.css') {
        // read style.css file from public folder
        fs.readFile(path.join(__dirname, 'public', 'style.css'),
                    (err, content) => {
                                    
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'text/css' });
                            res.end(content);
                        }
              );
     }

    else if (req.url === '/img/selfImage.png') {
        // read image directpry file from public folder
        fs.readFile(path.join(__dirname, 'public/img', 'selfImage.png'),
                    (err, content) => {
                                    
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'image/png' });
                            res.end(content);
                        }
              );
     }

    else if (req.url === '/img/blog.jpeg') {
    // read image directpry file from public folder
    fs.readFile(path.join(__dirname, 'public/img', 'blog.jpeg'),
                (err, content) => {
                                
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        res.end(content);
                    }
            );
    }

    else if (req.url === '/img/pineapple.jpeg') {
    // read image directpry file from public folder
    fs.readFile(path.join(__dirname, 'public/img', 'pineapple.jpeg'),
                (err, content) => {
                                
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        res.end(content);
                    }
            );
    }

    else if (req.url === '/img/portfolio.png') {
        // read image directpry file from public folder
        fs.readFile(path.join(__dirname, 'public/img', 'portfolio.png'),
                    (err, content) => {
                                    
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'image/png' });
                            res.end(content);
                        }
              );
     }

    else if (req.url==='/api')
    {

        // const { MongoClient } = require('mongodb');

        // async function main() {
        //     /**
        //      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
        //      * See https://docs.mongodb.com/drivers/node/ for more details
        //      */
        //     const uri = "mongodb+srv://haiman4real:lLGp7WPDstB4H2vi@emmaogunwobi.26qae1f.mongodb.net/newsarticles?retryWrites=true&w=majority";

        //     /**
        //      * The Mongo Client you will use to interact with your database
        //      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
        //      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
        //      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
        //      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
        //      */
        //     const client = new MongoClient(uri);

        //     try {
        //         // Connect to the MongoDB cluster
        //         await client.connect();

        //         // Make the appropriate DB calls

        //         // Find the listing named "Infinite Views" that we created in create.js
        //         await findOneListingByName(client, "Joe Flint");
        //         await findAll(client);

        //     } finally {
        //         // Close the connection to the MongoDB cluster
        //         await client.close();
        //     }
        // }

        // main().catch(console.error);

        // async function findOneListingByName(client, nameOfListing) {
        //     // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
        //     const result = await client.db("newsarticles").collection("allnews").findOne({ author: nameOfListing });

        //     if (result) {
        //         console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        //         console.log(result);
        //     } else {
        //         console.log(`No listings found with the name '${nameOfListing}'`);
        //     }
        // }

        // async function findAll(client) {
        //     // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
        //     const cursor = await client.db("newsarticles").collection("allnews").find();

        //     const results = await cursor.toArray();

        //     console.log(results);

        //     res.setHeader("Access-Control-Allow-Origin", "*");
        //     res.writeHead(200, { 'Content-Type': 'application/json' });
        //     res.write(results);
        //     res.end();

        //     // Print the results
        //     // if (results.length > 0) {
        //     //     console.log(`Found:`);
        //     //     results.forEach((result, i) => {
        //     //         const date = new Date(result.publishedAt).toDateString();

        //     //         console.log();
        //     //         console.log(`${i + 1}. name: ${result.author}`);
        //     //         console.log(`   _id: ${result._id}`);
        //     //         // console.log(`   bedrooms: ${result.bedrooms}`);
        //     //         // console.log(`   bathrooms: ${result.bathrooms}`);
        //     //         console.log(`   most recent review date: ${date}`);
        //     //     });
        //     // } else {
        //     //     console.log(`No listings found`);
        //     // }
        // }


        // mongodb+srv://haiman4real:<password>@emmaogunwobi.26qae1f.mongodb.net/?retryWrites=true&w=majority
        
        // const uri = "mongodb+srv://haiman4real:lLGp7WPDstB4H2vi@emmaogunwobi.26qae1f.mongodb.net/?retryWrites=true&w=majority";
        // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        // client.connect(err => {
        // const collection = client.db("newsarticles").collection("allnews");
        // const results = collection.toArray();
        // console.log(results);
        // perform actions on the collection object
            // res.setHeader("Access-Control-Allow-Origin", "*");
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.end(collection);
        // client.close();
        // });

        fs.readFile(
            path.join(__dirname, 'public', 'newsarticles.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
                                    res.setHeader("Access-Control-Allow-Origin", "*");
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }
    else{
        res.end("<h1> 404 nothing is here</h1>");
    }

    /*

        But what if we have  1000 pages/urls ? do we need to write 1000 if-else statements?

    /*/
});

const PORT= process.env.PORT || 5512;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));