var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true });
var products = [
    new Product({
        imagePath: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_WWE2K18_image1600w.jpg',
        title:'WWE 2k18',
        description:'Best Wrestling GAME',
        price:29
    }),
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/6a05d7a7d6e6/59a01f345bafe3badf2fe473',
        title:'FIFA 18',
        description:'EA sports',
        price:35
    }),
    new Product({
        imagePath: 'https://www.technobezz.com/files/uploads/2018/05/Detroit-Become-Human-2.jpg',
        title:'Detroit : become human',
        description:'World of chaos',
        price:40
    }),
    new Product({
        imagePath: 'https://is2-ssl.mzstatic.com/image/thumb/Music62/v4/19/e8/f7/19e8f778-c4f4-987e-d257-be19722be9c6/cover.jpg/1200x630bb.jpg',
        title:'Tomb Raider',
        description:'Lara croft adventures',
        price:35
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Pop3.jpg/220px-Pop3.jpg',
        title:'prince of persia',
        description:'The two thrones',
        price:10
    }),
    new Product({
        imagePath: 'https://d12swbtw719y4s.cloudfront.net/images/3zZr998k/KU2dz42VriNWfT4QfOZ5/Naruto.jpeg?w=620',
        title:'Naurto ultimate ninja strom 4',
        description:'Naruto\'s saga',
        price:25
    })

];

var done = 0;
for(var i =0;i < products.length;i++){
    products[i].save(function(err , result){
        done++;
        if(done === products.length){
            exit();
        }   
    }

    );
}

function exit(){
    mongoose.disconnect();
}


