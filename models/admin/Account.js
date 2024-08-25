const mysql = require('mysql2/promise')
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
const dbl = require('../../middleware/dbdata')

/**
 * ######################  SELECT ROWS IN SQL #################################
 * ############################################################################
 */

/** GET ACCOUNTS BY AREA ID FILTER */

exports.getAccountDataBySchoolId = async(req, res) => {
   try{
      // const dbh = await mysql.createConnection({
      //    host: process.env.DATABASE_HOST,
      //    user: process.env.DATABASE_USER,
      //    database: process.env.DATABASE,
      //    password: process.env.DATABASE_PASSWORD,
      //    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
      //    // port: process.env.DATABASE_PORT,
      // })

      const dbh = await mysql.createConnection(dbl())

      const school_id = await req.id;
      const [result, fields] = await dbh.execute("SELECT * FROM users	 WHERE `school_id` = ?", [school_id])
      
      dbh.end()
      return result;
   }catch(e) {
      console.log(e.message)
   }
}

/** END BLOCK ----------------------------------------  */