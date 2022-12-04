const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    
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
        fs.readFile(
            path.join(__dirname, 'public', 'newsarticles.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    // Please note the content-type here is application/json
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