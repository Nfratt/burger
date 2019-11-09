const orm = require('../config/orm.js')

const burger={
    all:function(){
    return orm.all('burgers');;
},
create: function(cols,vals){
    return orm.create('burgers',cols,vals);
},
create: function(objcolvals,condition){;
    return orm.update('burgers',objcolvals,condition);
},
delete:function(condition){
    return orm.delete('burgers',condition)
}
};
//  export link
module.exports= burger;