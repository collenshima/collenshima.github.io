const image = document.querySelectorAll(".imageshow");
const nextImageDely = 3000;
let counter = 0;
// image[counter].style.display = "block";
image[counter].style.opacity = 1;

setInterval(nextImage, nextImageDely);

function nextImage() {
	image[counter].style.zIndex = -2;
	const tempcounter = counter;
	setTimeout(function() {
		image[tempcounter].style.opacity = 0;
	}, 3000);
	// body...
	// image[counter].style.opacity = 0;

	counter = (counter + 1 ) % image.length;
	image[counter].style.opacity = 1;
	image[counter].style.zIndex = -1;
}
