// code your solution here
function saturdayFun(thing = "roller-skate"){
    let Sat = `This Saturday, I want to ${thing}!`;
    return Sat;
};

function mondayWork(thing2 = "go to the office"){
    let Mon = `This Monday, I will ${thing2}.`;
    return Mon;
};

function wrapAdjective(special = "char"){
    return function(words){
        return `You are ${special}${words}${special}!`;
    };
};  