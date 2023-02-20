//sequelize operators kısmı: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ 
const { Sequelize, Op} = require('sequelize')
const sequelize = new Sequelize('nodejs_orm','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

const User=require('./models/user')
const Phones=require('./models/phone')

User.hasMany(Phones)   //phones modeli bir çok değere sahip
Phones.belongsTo(User)  //phones modeli User modeline ait



//Bağlantı Fonksyionu
const onConnect = async() => {
    try {
        await sequelize.authenticate();
        console.log('bağlandı')
        User.sync({force:false})  //modulden veritabanı oluşturma
        Phones.sync({force:false})

    }
    catch(error){
        console.log('hata',error)
    }
}

const phoneGetUserRelations = async() => {
   const result = await Phones.findAll({
     include: {
        model: User,
        where: {
            age : {
                [Op.lt]: 24,   //yaşı 24den küçük olanları
                //[Op.lte]: 20  //yaşı 20 aşağı ve 20 olanları 
            }
        }
     }
   })
   console.log('result_user_bilgi',result[0].dataValues.User);
}
phoneGetUserRelations();



const userGetPhoneRelations = async() =>{
    const result = await User.findAll({
         include:{
            model: Phones,
            where: {
                phoneNumberType: {
                    [Op.eq]:'Ev'
                }
            }
         }
    })

   console.log('result_phone_bilgi',result[0].dataValues.Phones);
    //const getPhonesCount = await result[0].countPhones();
    //const getPhones = await result[0].getPhones();
    //const createNewPhone = await result[0].createPhone({ phoneNumber:'213213', phoneNumberType: 'is'});
    //console.log('createNewPhone',createNewPhone)
    //console.log('getPhonesCount',getPhonesCount);
    //console.log('getPhones',getPhones);
    //console.log('result',result[0].dataValues.Phones)
}
userGetPhoneRelations();


//onConnect();


/* //sql like
const whereLike = async() => {
    const result = await User.findAll({
       where: {
        firstName : {
            [Op.substring]: 'in', //içinde in geçenler
        }
       }
    });  
    console.log('result',result);
}    
whereLike(); */

/* //sql not equal
const whereNotEqual = async() => {
    const result = await User.findAll({
       where: {
        id : {
            [Op.ne]: 1, //id'si 1 olmayanlar
        }
       }
    });  
    console.log('result',result);
}    
whereNotEqual(); */


/* //sql greater then 
const whereGreaterThen = async() => {
    const result = await User.findAll({
       where: {
        age : {
            [Op.gt]: 20,   //yaşı 20den büyük olanları
            //[Op.gte]: 20  //yaşı 20 üzeri ve 20 olanları 
        }
       }
    });  
    console.log('result',result);
}    
whereGreaterThen();
 */

/* //sql less than
const whereLessThen = async() => {
    const result = await User.findAll({
       where: {
        age : {
            [Op.lt]: 20,   //yaşı 20den küçük olanları
            //[Op.lte]: 20  //yaşı 20 aşağı ve 20 olanları 
        }
       }
    });  
    console.log('result',result);
}    
whereLessThen();
 */

/* //sql in
const whereIn = async() => {
    const result = await User.findAll({
       where: {
        age : {
            [Op.in]: [20,10], 
        }
       }
    });  
    console.log('result',result);
}    
whereIn(); */

/* //sql between
const whereBetween = async() => {
    const result = await User.findAll({
       where: {
        age : {
            [Op.between]: [20,25],
        }
       }
    });  
    console.log('result',result);
}    
whereBetween();  */

//sql notBetween
/* const whereNotBetween = async() => {
    const result = await User.findAll({
       where: {
        age : {
            [Op.notBetween]: [10,23],
        }
       }
    });  
    console.log('result',result);
}    
whereNotBetween(); */



//sql and 
/* const whereAnd= async() => { 
    const result = await User.findAll({
    where: {
        [Op.and]: [{    //A ile başlayan ve id:8 olan
            firstName: {
                [Op.startsWith]: 'A'
            },
        },
        {
            id:8
        }
    
    ]
    }
 });
      console.log('result',result);
}
whereAnd(); */

//sql Or

/* const whereOr= async() => { 
    const result = await User.findAll({
    where: {
        [Op.or]: [{    //A ile başlayan veya id:8 olan
            firstName: {
                [Op.startsWith]: 'A'
            },
        },
        {
            id:8
        }
    
    ]
    }
 });
      console.log('result',result);
}
whereOr(); */














//Bu kısım OP kullanılmadan yapılan sql orm bağlantısı (19.ders)
//------------------------------------------------------

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


/* //update user
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
    onUpdateUser(); */
 


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

