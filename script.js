function firstNonRepeatedChar(str) {
 // Write your code here


	let freqobj= {}
	for(let i= 0; i < str.length; i++)
		{
			if(!freqobj[str.chartAt(i)])
			{
				freqobj[str.charAt(i)] = 1
			}
			else
			{
				freqobj[str.charAt(i) = freqobj[str.charAt(i)]] + 1
			}
		}
	for(let item in freqobj)
		{
			if(freqobj[item] == 1){
				return item
			}
		}
	return null

}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 


