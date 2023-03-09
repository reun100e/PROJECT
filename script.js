window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  const content = document.querySelector("#content");
  loader.style.display = "none";
  content.style.display = "block";
});


// Code for loading animation and revealing webpage when it finsh loading.

// The above event listener function runs the fucntion passed 2nd argument when the webpage loads completely.
// The 2nd function changes the CSS display style of loaded to "none" and content to "block".