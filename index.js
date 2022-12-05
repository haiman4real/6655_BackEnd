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

        const { MongoClient } = require('mongodb');

        async function main() {
            /**
             * Connection URI.
             */
            const uri = "mongodb+srv://haiman4real:lLGp7WPDstB4H2vi@emmaogunwobi.26qae1f.mongodb.net/newsarticles?retryWrites=true&w=majority";

            /**
             * The Mongo Client you will use to interact with your database
             */
            const client = new MongoClient(uri);

            try {
                // Connect to the MongoDB cluster
                await client.connect();

                // Make the appropriate DB calls
                await findAll(client);

            } finally {
                // Close the connection to the MongoDB cluster
                await client.close();
            }
        }

        main().catch(console.error);

        async function findAll(client) {
            const cursor = await client.db("newsarticles").collection("allnews").find().sort({publishedAt: -1});
            const results = await cursor.toArray();

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(results));
            res.end();

        }

    //  READ FROM JSON FILE
        // fs.readFile(
        //     path.join(__dirname, 'public', 'newsarticles.json'),'utf-8',
        //             (err, content) => {
                                    
        //                             if (err) throw err;
        //                             // Please note the content-type here is application/json
        //                             res.setHeader("Access-Control-Allow-Origin", "*");
        //                             res.writeHead(200, { 'Content-Type': 'application/json' });
        //                             res.end(content);
        //                 }
        //       );
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