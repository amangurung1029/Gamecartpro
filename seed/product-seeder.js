var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true });
var products = [
    new Product({
        imagePath: 'https://media.contentapi.ea.com/content/dam/bf/videos/2018/05/772d085e-9d72-bd99-1dd4-2c6946bdb348.youtube/subassets/poster.jpg.adapt.crop16x9.1920w.jpg',
        title:'Battlefield V',
        description:'Battlefield V will focus extensively on party-based features and mechanics, scarcity of resources, and removing "abstractions" from game mechanics to increase realism.',
        price:49
    }),
    new Product({
        imagePath: 'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/j/u/s/just-cause-listing-thumb-ps4-19oct15-b9164.png',
        title:'Just Cause 3',
        description:'Just Cause 3 is an action-adventure video game developed by Avalanche Studios and published by Square Enix',
        price:39
    }),
    new Product({
        imagePath: 'https://cdn.gamer-network.net/2017/packshots/64301/1497360389.jpg/EG11/resize/200x-1/format/jpg/days-gone-packshot-cover-boxart.jpg',
        title:'Days Gone',
        description:'Days gone  is an upcoming action-adventure game developed  by SIE based on zombie apocalypse ',
        price:60
    }),
    
    new Product({
        imagePath: 'https://d1pqlgpcx1bu0k.cloudfront.net/static/img/GOW-OG-image.jpg',
        title:'God Of War',
        description:'God of War is a mythology-based action-adventure hack and slash video game franchise.',
        price:40
    }),

    new Product({
        imagePath: 'https://i.pinimg.com/736x/07/98/29/079829b12d2c514eec9dc50a78b05d18--ps-cover-art.jpg',
        title:'Grand Theft Auto V',
        description:'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games',
        price:55
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


