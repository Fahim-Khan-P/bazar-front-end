document.addEventListener("DOMContentLoaded", function () {
  const provinceSelect = document.querySelector('select[name="province"]');
  const defaultHrefs = [];
  const categories = document.querySelectorAll("a.category");
  for (let i = 0; i < categories.length; i++) {
      defaultHrefs[i] = categories[i].getAttribute("href");
  }
  provinceSelect.addEventListener("change", function (e) {
      e.preventDefault();
      const selectedProvince = provinceSelect.value;
      updateHref(selectedProvince);
      console.log(selectedProvince)
  });
  function updateHref(selectedProvince) {
      for (let i = 0; i < categories.length; i++) {
          categories[i].setAttribute("href", defaultHrefs[i]);
          const href =
              categories[i].getAttribute("href") + "/" + selectedProvince;
          categories[i].setAttribute("href", href);
          console.log(href);
 }
}
});

