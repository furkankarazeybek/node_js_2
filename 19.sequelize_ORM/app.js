//sequelize.or
const { Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodejs_orm','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

const User=require('./models/user')


//Bağlantı Fonksyionu
const onConnect = async() => {
    try {
        await sequelize.authenticate();
        console.log('bağlandı')
        User.sync({force:false})
    }
    catch(error){
        console.log('hata',error)
    }
}

//Bağlantı
//onConnect();

//Model SelectAll
/* const getUsers = async () => {
    const result = await User.findAll();
    console.log('result length: ',result.length)
    result.forEach((item) => {
        console.log('item: ',item.dataValues)
    })
} 

//all users
getUsers();

*/

//find SelectById
/* const findOneUser=async () => {
    const result = await User.findByPk(2);  //primary_key değerine göre get
    const whereResult = await User.findOne({   //where result ile get işlemi
        where: {
            id: 1
        }
    });
    console.log('result',result.dataValues);
    console.log('whereResult',whereResult.dataValues);

}
//find one user
findOneUser();  */

/* //create user
const onCreateUser = async () => {
    const result = await User.create({ firstName:'Mert',surName:"Yılmaz",age:10 });
    console.log('result',result.dataValues)
}

// create user
onCreateUser();  */

/* const onMultipleCreate = async () => {
    const multipleResult = await User.bulkCreate([{firstName:'Sarp',surName:"Yılmaz",age:17},{firstName:'Akif',surName:"Yılmaz",age:25}]);
    console.log('multipleResult',multipleResult)

}

//create multipleUser
onMultipleCreate(); */


//update user
   const onUpdateUser = async () => {
   const result = await User.update({age:25},{
     where: {
        id: {
            id:1
            //[Op.eq] : 1  //opeators querying kullanıldığında https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
        }
     }
   })
   console.log('result',result)
 }
    //update user
    onUpdateUser();
 


//delete user
/* const onDeleteUser = async() => {
    const result = await User.destroy({
        where : {
            id: 6
        }
    })
    console.log('result',result)
}

onDeleteUser(); */

