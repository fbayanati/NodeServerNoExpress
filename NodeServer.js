
const http = require('http');

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;

    if ( url === "/" ) {

        res.write( '<html><body>' );
        res.write( '<h1>Welcome to app 01 !</h1>' );
        res.write( '<h3>Hello Hello Hello !</h3>' );
        res.write( '<form action="/create-user" method="POST">' );
        res.write( '   <input type="text" name="message"></input>' );
        res.write( '   <button type="submit">Submit</button>' );
        res.write( '</form>');
        res.write( '</body></html>' );
        return res.end();

    } else if ( url === '/users' ) {

        res.write( '<html><body>' );
        res.write( '<ul>' );
        res.write( '<li>User 01 !</li>' );
        res.write( '<li>User 02 !</li>' );
        res.write( '<li>User 03 !</li>' );
        res.write( '<li>User 04 !</li>' );
        res.write( '<li>User 05 !</li>' );
        res.write( '</ul>' );
        res.write( '</body></html>' );
        return res.end();

    }  else if ( url === '/create-user' && method === "POST" ) {

        console.log( 'In create user' );
        const dataArray = [];
        req.on ('data', ( chunk ) => {
            dataArray.push( chunk );
            console.log( chunk );
        });
        req.on( 'end', ( ) => {
            const passingMsg = Buffer.concat( dataArray ).toString();
            const theMsg = passingMsg.split('=')[1];
            console.log( theMsg );
        })
        res.setHeader( 'location', '/' );
        res.statusCode = 302;
        return res.end();

    }
});

server.listen(3000);


