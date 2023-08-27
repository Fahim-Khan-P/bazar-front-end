document.addEventListener("DOMContentLoaded", () => {
    const provinceSelect = document.querySelector('select[name="province"]');
    const categories = document.querySelectorAll("a.category");
  
    // get province from session storage using get Itrm method 
    const selectedProvince = sessionStorage.getItem("selectedProvince");
  
    // check the seesion storage for saved province 
    if (selectedProvince) {
      provinceSelect.value = selectedProvince;
    //   update the href of category from sessionStorage 
      updateCategoryURLs(selectedProvince);
    }
  
    provinceSelect.addEventListener("change", (e) => {
      e.preventDefault();
      const selectedProvince = provinceSelect.value;
  
    //update and save location in sessionStorage while dropdown changing  
      sessionStorage.setItem("selectedProvince", selectedProvince);
    });
  
    function updateCategoryURLs(selectedProvince) {
      categories.forEach((category) => {
        const href = `${category.getAttribute("href")}/${selectedProvince}`;
        category.setAttribute("href", href);
      });
    }
  });