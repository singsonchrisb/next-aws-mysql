import mysql from "mysql2/promise";


export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        host: '127.0.0.1',
        database: 'react_testdb',
        port: '3306',
        user: 'root',
        password:'sqelroot'  
    });

    try {
        const query = "SELECT product_id, product_name, product_image from products";
        const values =[];
        const [data] = await dbconnection.execute(query,values);
        dbconnection.end();

        res.status(200).json({ results: data });

    } catch (error) {
        res.status(500).json({ error: error.message});

    }
}