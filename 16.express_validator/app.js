//16. dk, parola ile ilgili
//çift = kullanılır eşitlikte
const express=require('express')
const app = express();
const port = 3000;
const router = express.Router();
const { check,validationResult,param } = require('express-validator');
const oldPasswords=['1234','yasin123','123123']

const validator = [check('email').exists({ checkNull:true}).withMessage('Email alanı yok').isEmail({allow_ip_domain:true}).withMessage('Email geçersiz'),


check('email','Email boş olamaz').notEmpty({ ignore_whitespace: true}),
check('password','Bu parolarara izin verilmiyor').not().isIn(['123456','admin']),
check('password').custom((value) => {
    const isExists = oldPasswords.find((item) => {
        return item == value;
    })
    if(isExists) {
        return false
    }
    return true;
   

}).withMessage('Bu parolayı 3 ay önce kullandın')
];  


const otherValidator = [param('id','20 değeri olamaz').custom(value => {
    if(value=="20"){
        return false
    }
    return true

}),param('id').isInt()]



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)

router.get('/',(req,res,next) => {
     res.send('Selam');
})

router.get('/test/:id',otherValidator,(req,res,next) => {
    const {id} = req.params;
    const errors = validationResult(req);
    console.log('errors',errors)
    if(errors.isEmpty()){
        res.json({msg: 'Değer başarıyla alındı'}).status(200)
        res.send(id);
        console.log('hata yok');
    }
    else{
        res.json(errors).status(400)
        console.log('hata var');
    }
   
})

router.post('/login',validator,(req,res,next)=> {
    //const {email,password} = req.body;

    const errors = validationResult(req);
    console.log('errors',errors)
    if(errors.isEmpty()){
        res.json({msg: 'Giriş başarılı'}).status(200)

        console.log('hata yok');
    }
    else{
        res.json(errors).status(400)
        console.log('hata var');
    }
   
} )

app.listen(port,() => {
    console.log('çalışıyor')
})