const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const connectDB = async () => {
try{
    // await mongoose.connect('mongodb+srv://rickardaniel:ochoymedio12@cluster0.b44xeuo.mongodb.net/hospitalDB',{
    await mongoose.connect(process.env.DB_CDN,{
        // useNewUrlParser: true,
        // useUnifiedTopology:true,
        // useCreateIndex:true
    })
    console.log('DB ONLINE')
}catch (error){
    console.log(error);
    throw new Error('Error al inicializar la BD ver logs')
}

}
module.exports = {
    connectDB
}