var array=[{image:"image/1.jpeg",content:"fast and furious part-1",duration:"104 Minutes",rating:7},{image:"image/2.jpeg",content:"fast and furious part-2",duration:"107 Minutes",rating:"6"},{image:"image/3.jpg",content:"fast and furious part-3",duration:"104 Minutes",rating:6},{image:"image/4.jpg",content:"fast and furious part-4",duration:"107 Minutes",rating:6},{image:"image/5.jpeg",content:"fast and furious part-5",duration:"130 Minutes",rating:8},{image:"image/6.jpeg",content:"fast and furious part-6",duration:"130 Minutes",rating:7},{image:"image/7.jpeg",content:"fast and furious part-7",duration:"137 Minutes",rating:7},{image:"image/8.jpeg",content:"fast and furious part-8",duration:"136 Minutes",rating:7},{image:"image/9.jpeg",content:"fast and furious part-9",duration:"143 Minutes",rating:5}]

const b=array.keys()

var section=document.getElementById("section")
var container=document.createElement("div")
var row=document.createElement("div")
var head=document.createElement("header")
var headpara=document.createElement("p")
headpara.innerHTML="Fast and Furious Collections"
headpara.setAttribute("style","text-align:center;font-size:30px;font-weight:bold;color:red;")

head.setAttribute("class","col-12")
 

container.setAttribute("class","container")
row.setAttribute("class","row justify-content-center")
section.appendChild(container)
container.appendChild(row)
row.appendChild(head)
head.appendChild(headpara)

for (const c of b){
	var child=document.createElement("div")
	var child1=document.createElement("div")
	var child2icon=document.createElement("div")
	var img=document.createElement("img")
	var content1=document.createElement("h1")
	var content2=document.createElement("h1")
	
	
	child1.setAttribute("style","margin-top:20px;border-radius:8px;box-shadow:0 0 5px black;background-color:black")
	img.setAttribute("src",array[c].image)
	img.setAttribute("style","width:100%;height:350px")
	content1.innerHTML="Movie name  :   "+array[c].content
	content1.setAttribute("style","font-size:17px;text-align:center;color:white;padding:10px 0")
	content2.innerHTML="Movie duration  :   "+array[c].duration
	content2.setAttribute("style","font-size:17px;text-align:center;color:white;padding:10px 0")
	
	child2icon.innerHTML="rating  :   "
	child2icon.setAttribute("style","text-align:center;color:white;padding-bottom:10px")
	var rating=array[c].rating;
	for(i=1;i<=rating;i++){
		var content3=document.createElement("i")
		content3.setAttribute("class","bi bi-star-fill")
		content3.setAttribute("style","color:orange")
		child2icon.appendChild(content3)
	} 
	
	child.appendChild(child1)
	child1.appendChild(img)
	child1.appendChild(content1)
	child1.appendChild(content2)
	child1.appendChild(child2icon)
	row.appendChild(child)
	
	
	child.setAttribute("class","col-12 col-md-4 col-lg-3")
}
