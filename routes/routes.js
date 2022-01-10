const express = require('express')
const route = express.Router()

route.get('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err)
        } else {
            conn.query('SELECT * FROM books', (err, rows) => {
                if(err) {
                    return res.send(err)
                } else {
                    res.json(rows)
                }
            })
        }
    })
})

route.post('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err)
        } else {
            conn.query('INSERT INTO books set ?', [req.body], (err, rows) => {
                if(err) {
                    return res.send(err)
                } else {
                    // res.json(rows)
                    res.send('book saved')
                }
            })
        }
    })
})

route.delete('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err)
        } else {
            conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows) => {
                if(err) {
                    return res.send(err)
                } else {
                    // res.json(rows)
                    res.send('book deleted')
                }
            })
        }
    })
})

route.put('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err)
        } else {
            conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
                if(err) {
                    return res.send(err)
                } else {
                    res.send('book updated')
                }
            })
        }
    })
})

module.exports = route