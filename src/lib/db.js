import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  // PlanetScale;
  // process.env.MYSQL_DATABASE_URL
  // const dbconnection = await mysql.createConnection(
    // host: 'oro-awsrds-db.ciammy6tnekz.ap-southeast-1.rds.amazonaws.com',
		// user: 'admin',
		// password: 'GodIsWithMe8888',
		// database: 'reactjs_invsales',
    const dbconnection = await mysql.createConnection({
      // host: '127.0.0.1',
      // database: 'react_testdb',
      // port: '3306',
      // user: 'root',
      // password:'sqelroot'
      // socketPath: '/Application/xampp/tmp/mysql/myslq.sock' // use for xamp
      host: 'oro-awsrds-db.ciammy6tnekz.ap-southeast-1.rds.amazonaws.com',
      database: 'reactjs_invsales',
      // port: '3306',
      user: 'admin',
      password:'GodIsWithMe8888'

    });

  // onst { host, port, user, password, database } = serverRuntimeConfig.dbConfig;
  //   const connection = await mysql.createConnection({ host, port, user, password });

  //Digital ocean ubuntu
  // const dbconnection = await mysql.createConnection({
  //   host: process.env.MYSQL_HOST,
  //   database: process.env.MYSQL_DATABASE,
  //   user: process.env.MYSQL_USER,
  //   password: process.env.MYSQL_PASSWORD,
  // });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
