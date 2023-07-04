var array=[{image:"image/1.jpg",content:"fast ans furious part-1",rating:"4"},{image:"image/2.jpg",content:"fast ans furious part-2",rating:"4"}]

const b=array.keys()



for (const c of b){
	
	var div=document.getElementById("div1")
	//creating tags
	var child=document.createElement("div")
	
	var child1=document.createElement("div")

	var img=document.createElement("img")
	img.setAttribute("src",array[c].image)
	
	var head1=document.createElement("h1")
	head1.innerHTML=array[c].content
	
	child.setAttribute("class","col-3");
	
	// img.style.width="250px"
	// img.style.borderRadius="6px"
	div.style.textAlign="center"
	div.style.marginTop="50px"
	
	img.style.width="350px"
	img.style.height="350px"
	
	head1.style.marginTop="15px"
	head1.style.fontSize="16px"

	div.appendChild(child)
	child.appendChild(img)
	child.appendChild(child1)
	child1.appendChild(head1)


}
