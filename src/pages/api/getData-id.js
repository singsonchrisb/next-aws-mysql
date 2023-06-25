import { query } from "@/lib/db";
// import { query } from "../../lib/db";

export default async function handler(req, res) {
    try {
        const querySql = "SELECT product_id, product_name, product_image FROM products where";
        const valuesParams = [];
        const data = await query({query: querySql, values: valuesParams });
        res.status(200).json({ products: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}