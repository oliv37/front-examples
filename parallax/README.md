## Parallax effect

background css property :
* **background-color** the background color
* **background-image** url("") : specifies an image to use as the background of an element
* **background-repeat** repeat the images horizontally or vertically
* **background-position** x y : the image position (top | bottom | center | left | right)
* **background-attachment** scroll | fixed | local : specifies the image position in the viewport
* **background-size** contain | cover | width height 
cover : Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area, 
contain : Scale the image to the largest size such that both its width and its height can fit inside the content area

parallax effect : 
* background-image: url(...)
* background-position: center;
* background-attachment: fixed
* background-size: cover
* background-repeat: no-repeat (useless ?)

With background-attachment = fixed, cover will scale the background image according to the viewport
With background-attachment = scroll, cover will scale the background image according to the container