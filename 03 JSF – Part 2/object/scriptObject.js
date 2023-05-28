const Nizum ={
    firstName : 'H.M.',
    lastNmae : 'Nizum',
    bithaday : 1999,
    job : 'bal',
    friends : ['a', 'b', 'c', 'd'],
    hasDriversLicense : true,

    //Three type of function declaration in object.number three is best one. 

    calcAge1 : function(birthday){
        return 2037 - birthday
    },

    calcAge2 : function(){
        return 2037 - this.bithaday 
    },

    calcAge3 : function(){
        this.age = 2037 - this.bithaday
        return this.age
    },

    summary : function(){
        return `${this.firstName} is a ${this.calcAge3()} -years old ${Nizum.job},
         and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    },


}

console.log(Nizum.summary())