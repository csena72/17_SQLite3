const db = require('../db/db');

module.exports = class ProductoDAO {

    async createProducto({title, price, thumbnail}){
        const [id] = await db('productos').insert({
            title, 
            price, 
            thumbnail
        }).returning('id');

        return id;
    }

    async getProductos(){
        const rows = await db('productos').select('*');
        return rows;
    }

    

};