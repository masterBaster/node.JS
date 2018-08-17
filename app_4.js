module.exports = class Square {
    constructor(width){
        this.width = width;
    }

    area(){
        return this.width **2;
    }

    cuboid(){
        return this.width * this.width *this.width;
    }
};