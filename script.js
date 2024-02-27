function volume_sphere() {
    //Write your code here
  let radius=document.getElementById('radius').value;
	//4/3 π r³
	let volume=(4/3)*3.14*(radius**3);
	document.getElementById('volume').value=volume;
 
} 



window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
