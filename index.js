const http = require("node:http")
const { app } = require("./app")
const server = http.createServer(app)

const port = 3000

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// const dbBarang = [
//     {
//         nomor: "BRG-001",
//         nama: "Barang 01"
//     },
//     {
//         nomor: "BRG-002",
//         nama: "Barang 02"
//     },
//     {
//         nomor: "BRG-003",
//         nama: "Barang 03"
//     }
// ]
// app.get('/', (req, res) => {
//     return res.json({ok:1})
// })

// app.get('/barang', (req, res) => {
//     return res.json(dbBarang)
// })

// app.get('/barang/:id', (req, res) => {
//     const barang = dbBarang.find((value, index) => req.params.id === value.nomor)
//    // return res.json({staus: `id yang dikirim dari client id ${req.params.id}`})
//     if (!barang) {
//         return res.status(404).json({detail: "Resource not found"})
//     }
//     return res.json(barang)
// })

// app.get('/barang/:id/category/:idCategory', (req, res) => {
//     return res.json({staus: `id barang = ${req.params.id}`})
// })

// app.listen(3000), () => {
//     console.log(`Aplikasi berjalan di port 3000`)
// }