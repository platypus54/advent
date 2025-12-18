console.log(cList[0])

test1 = [ ['L' , '3'],['R','39'],['R','45'],['R', '43']]
test2 = [ ['R', '5'], ['L', '5'] ]


main(cList);


function main(t){
  let combinations = new Array();

  for (var i = 0; i < t.length ; i++)
      combinations.push(data_to_combination(t[i]))

  let dial = new Dial();

  dial.move(combinations);

  dial.print_summay();

}


function data_to_combination(data_item){
  let direction = String(data_item[0]);
  let clicks = Number(data_item[1]);

  return new Combination(direction,clicks);
}
