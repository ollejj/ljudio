const bcrypt = require("bcrypt");


module.exports = (app, db) => {

    // Authentication routes

    // register user
    app.post('/api/users', async (request, response) => {
        let password = await bcrypt.hash(request.body.password, 10);
        let result = await db.query("INSERT INTO users SET ?", { ...request.body, password })
        response.json(result)
    });


    // authentication: perform login
    app.post('/api/login', async (request, response) => {
        let user = await db.query('SELECT * FROM users WHERE email = ?', [request.body.email])
        user = user[0]

        if (user && user.email && await bcrypt.compare(request.body.password, user.password)) {
            request.session.user = user
            user.loggedIn = true
            response.json({ loggedIn: true })
        } else {
            response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            response.json({ message: "no matching user" })
        }
    })

    // authentication: get logged in user
    app.get('/api/login', async (request, response) => {
        let user
        if (request.session.user) {
            user = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [request.session.user.email, request.session.user.password])
            user = user[0]
        }
        if (user && user.email) {
            user.loggedIn = true
            delete (user.password)
            response.json(user)
        } else {
            response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            response.json({ message: "not logged in" })
        }
    })

    // logga ut
    app.delete('/api/login', async (request, response) => {
        request.session.destroy(() => {
            response.json({ loggedIn: false })
        })
    })
    // Get all playlist
    app.get('/api/playlist', async (request, response) => {
        let data = await db.query('SELECT * FROM playlist')
        response.json(data)
    })

    // Add playlist
    app.post('/api/addplaylist/:id', async (request, response) => {
        let data = await db.query('INSERT INTO userplaylist (userid) VALUES ( ? )', request.params.id)
        response.json(data)
    })

    // Change playlist name
    app.post('/api/changeplaylistname/:id/:playlistid/:newname', async (request, response) => {
        let data = await db.query('UPDATE userplaylist SET playlistname = ? WHERE playlistid =?', [request.params.newname, request.params.playlistid, request.params.id])
        response.json(data)
    })

    // Get all song from specific playlist.
    app.get('/api/playlistsongs/:id', async (request, response) => {
        let data = await db.query('SELECT DISTINCT playlistid, playlistname FROM playlist WHERE playlistid = ?', request.params.id)
        response.json(data);
    })
    // Get all Playlists for user
    app.get('/api/userplaylist/:id', async (request, response) => {
        let data = await db.query('select * from userplaylist where userid = ?', request.params.id)
        response.json(data);
    })

    //Get all Songs for playlistid
    app.get('/api/playlist/:id', async (request, response) => {
        let data = await db.query('select * from playlist where playlistid = ?', request.params.id)
        response.json(data);
    })

    // Add song to playlist
    app.post("/api/playlist/:id", async (request, response) => {
        let data = await db.query('INSERT INTO playlist (playlistid, songid, playlistname, artist, title, album, length) VALUES ( ?, ?, ?, ?, ?, ?, ? )', 
            [request.params.id,
            request.body.songid,
            request.body.playlistname,
            request.body.artist,
            request.body.title,
            request.body.album.name,
            request.body.length]
        )
        response.json(data);
    })

    // Delete song from playlist
    app.delete("/api/playlist/:id/:songid", async (request, response) => {
        let result = await db.query("DELETE FROM playlist WHERE playlistid=? AND songid=?", [request.params.songid, request.params.id])
        response.json(result);
    })
 



    // Example routes

    // public get all table rows
    app.get('/api/examples', async (request, response) => {
        let data = await db.query('SELECT * FROM examples')
        response.json(data)
    })

    // public get one table row
    app.get("/api/examples/:id", async (request, response) => {
        let data = await db.query("SELECT * FROM examples WHERE id = ?", [request.params.id])
        data = data[0] // single row
        response.json(data)
    })

    // public get another table (happens to be a left joined view)
    app.get("/api/examples_with_colors", async (request, response) => {
        let data = await db.query("SELECT * FROM examples_with_colors")
        response.json(data)
    })

    // private create one row
    app.post("/api/examples", async (request, response) => {
        // check if user exists before writing
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({ error: 'not logged in' })
            return;
        }
        let result = await db.query("INSERT INTO examples SET ?", request.body)
        response.json(result)
    })

    // private update one row
    app.put("/api/examples/:id", async (request, response) => {
        // check if user exists before writing
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({ error: 'not logged in' })
            return;
        }
        let result = await db.query("UPDATE examples SET ? WHERE id = ?", [request.body, request.params.id])
        response.json(result)
    })

    // private delete one row
    app.delete("/api/examples/:id", async (request, response) => {
        // check if user exists before writing
        if (!request.session.user) {
            response.status(403) // forbidden
            response.json({ error: 'not logged in' })
            return;
        }
        let result = await db.query("DELETE FROM examples WHERE id = ?", request.params.id)
        response.json(result)
    })

    // Might need these later.
    app.get('/api/songs/', async (request, response) => {
        let data = await db.query('SELECT * FROM songs')
        response.json(data);
    })

    app.get('/api/songs/:id', async (request, response) => {
        let data = await db.query('SELECT * FROM songs WHERE id = ?', request.params.id)
        response.json(data);
    })

    app.delete('/api/songs/:id', async (request, response) => {
        let result = await db.query('DELETE FROM songs WHERE id = ?', request.params.id)
        response.json(result)
    })


}