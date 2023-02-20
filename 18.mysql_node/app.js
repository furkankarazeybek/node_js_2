const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'users'
})

const createDbSql = "CREATE DATABASE IF NOT EXISTS users";
const createTableSql = "CREATE TABLE IF NOT EXISTS personels (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50), surname VARCHAR(50))";
const value = [
    ['Furkan','Kara']
]
const createInsertSql='INSERT INTO personels (name,surname) VALUES ?';
const selectSql="SELECT * FROM personels";
const id=2;
const whereSql="SELECT * FROM personels where id= ?";
const deleteSql= "DELETE FROM personels where id=?";
const updateSql="UPDATE personels SET name='Ali' where id=?"


//mysql için connection kullanılır
connection.connect((err)=>{
    if(err){
        console.log('hat var',err)
    }
    //db oluşturma
    connection.query(createDbSql,(err,result) => {
        if(err) {
            console.log('hata var',err)
        }
        else {
            //tablo oluşturma
            connection.query(createTableSql,(err,result)=> {
                if(err) {
                    console.log('hata var',err)
                }
                else {

                    //read
                    /* connection.query(selectSql,(err,result,field)=> {
                        if(err) {
                            console.log('hata var',err)
                        }
                        else{
                            console.log('result',result)
                            console.log('fields',field)

                        }
                    }) */

                    //where 
                   /*  connection.query(whereSql,[id], (err,result,field)=> {
                        if(err) {
                            console.log('hata var',err)
                        }
                        else{
                            console.log('result',result)
                            console.log('fields',field)

                        }
                    })
                    */

                   /*  //insert etme
                    connection.query(createInsertSql,[value], (err,result) => {
                        if(err) {
                            console.log('hata var',err)
                        }

                        console.log('result',result)
                    })     */

                    //update
                    connection.query(updateSql,[id], (err,result,field)=> {
                        if(err) {
                            console.log('hata var',err)
                        }
                        else{
                            console.log('result',result)

                        }
                    })


                    //delete
                   /*  connection.query(deleteSql,[id], (err,result,field)=> {
                        if(err) {
                            console.log('hata var',err)
                        }
                        else{
                            console.log('result',result)

                        }
                    })
                    */
                    //console.log('result',result)  

                }
            })
            //console.log('result',result)
        }
    })
    console.log('Connect')
})