let is_subscribed = true;
let age = 18;
let user_points = 100;



if(is_subscribed === true && age >= 18 && user_points >= 100){

    console.log("WOW!!! YOU ARE AMAZING!")

}else if(is_subscribed === true && age >= 18 && user_points < 100){

console.log("You are subscribed and of age");

}else if(is_subscribed === true && age < 18 && user_points < 100){


    console.log("You are subscribed, but not old enough");

}else if(is_subscribed === false && age >= 18 && user_points < 100){


    console.log("You are not subscirbed, SUBSCRIBE NOW!!!!");

}else{


    console.log("You're too young, and you're not subscribed");

}
