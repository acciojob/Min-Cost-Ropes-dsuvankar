function mincost(arr)
{ 
	arr.sort((a,b)=>a-b);
	console.log(arr);
	
	let totalcost = 0;
	while(arr.length>1){
	    let first = arr.shift()
	    let second = arr.shift();
	    
	    let cost = first+second;
	    totalcost += cost;
	    arr.push(cost)
	    
	    arr.sort((a, b)=>a-b)
	}
	
	return totalcost;
  
}

module.exports=mincost;
