function volume_sphere() {
    //Write your code here
 let volumeInp = document.getElementById("volume");
	let radius = document.getElementById('radius').value;
	if(isNaN(radius) || radius<0){
			volumeInp.value = NaN;
	}else{
		let volume = (4/3*Math.PI*Math.pow(radius,3));
		let fixedVolume = volume.toFixed(4);
		volumeInp.value = fixedVolume;
	}
	return false;
 
} 



window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
