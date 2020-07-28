(function() {
  const navigation = document.querySelector(".page-navigation");
  const links = Array.from(navigation.querySelectorAll("li a"));
  const path = window.location.pathname;
  if (path == "/") {
    navigation.querySelector("a[href='index.html']").classList.add("active")
  } else {
    links.forEach(function(link) {
      if (link.href.includes(path)) link.classList.add("active");
    });
  }
})()