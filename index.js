index.js

const dailyRoutine = [wakeup, Eat, Sleep]

//for
for(var i=0; i<dailyRoutine.length; i++){
    console.log(dailyRoutine[i]);
}


//for of
for(let routine of dailyRoutine){
 console.log(routine);
}

//for in
for(let routine in dailyRoutine){
    console.log(routine)
}


//for-each
dailyRoutine.forEach(function(routine){
    console.log(routine);
})

dailyRoutine.forEach(function(routine,RoutineIndex){
    console.log(routine,RoutineIndex);
})
