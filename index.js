function superbowlWin(record){
  for(let game of record){
    if(game.result === "W"){
      return game.year;
    }
  }
}

const outcome = record.find(superbowlWin);
console.log(outcome);





