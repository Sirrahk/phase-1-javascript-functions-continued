// saturdayFun w/ default parameter
function saturdayFun(saturdayActivity = "roller-skate"){
    let activityMessage = `This Saturday, I want to ${saturdayActivity}!`
    return activityMessage;
}

//mondayWork w/ default parameters and function expressions

const mondayWork = function(workActivity= "go to the office"){
    let workMessage = `This Monday, I will ${workActivity}.`
    return workMessage;
}
//wrapAdjective, scope, annoymous functions, inner functuons

function wrapAdjective(visualFlair){
    const wrapAdjectiveMessage = function (adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
    return wrapAdjectiveMessage;

}