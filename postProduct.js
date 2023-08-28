const categories = [
  {
    name: "Mobile",
    subcategories: [
      {
        name: "Mobile Phones",
        attributes: []
      },
      {
        name: "Mobile Phone Accessories",
        attributes: [
          {
            name: "Compatibility",
            placeholder: "Placeholder..."
          },
          {
            name: "Type of Accessory",
            placeholder: "Placeholder..."
          },
          {
            name: "Functionality",
            placeholder: "Placeholder..."
          },
          {
            name: "Features",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "Wearables",
        attributes: [
          {
            name: "Features",
            placeholder: "Placeholder..."
          },
          {
            name: "Functionality",
            placeholder: "Placeholder..."
          },
          {
            name: "Compatibility",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "SIM Cards",
        attributes: []
      },
      {
        name: "Mobile Phone Services",
        attributes: []
      }
    ]
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Desktop Computers",
        attributes: [
          {
            name: "Title",
            placeholder: "Placeholder..."
          },
          {
            name: "Description",
            placeholder: "Placeholder..."
          },
          {
            name: "Brand and Model",
            placeholder: "Placeholder..."
          },
          {
            name: "Specifications",
            placeholder: "Placeholder..."
          },
          {
            name: "Operating System",
            placeholder: "Placeholder..."
          },
          {
            name: "Display (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Form Factor",
            placeholder: "Placeholder..."
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Placeholder..."
          },
          {
            name: "Battery Life (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Graphics Performance",
            placeholder: "Placeholder..."
          },
          {
            name: "Storage Expansion",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "Laptops",
        attributes: [
          {
            name: "Title",
            placeholder: "Placeholder..."
          },
          {
            name: "Description",
            placeholder: "Placeholder..."
          },
          {
            name: "Brand and Model",
            placeholder: "Placeholder..."
          },
          {
            name: "Specifications",
            placeholder: "Placeholder..."
          },
          {
            name: "Operating System",
            placeholder: "Placeholder..."
          },
          {
            name: "Display (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Form Factor",
            placeholder: "Placeholder..."
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Placeholder..."
          },
          {
            name: "Battery Life (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Graphics Performance",
            placeholder: "Placeholder..."
          },
          {
            name: "Storage Expansion",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "Laptop & Computer Accessories",
        attributes: [
          {
            name: "Title",
            placeholder: "Placeholder..."
          },
          {
            name: "Description",
            placeholder: "Placeholder..."
          },
          {
            name: "Brand and Model",
            placeholder: "Placeholder..."
          },
          {
            name: "Specifications",
            placeholder: "Placeholder..."
          },
          {
            name: "Operating System",
            placeholder: "Placeholder..."
          },
          {
            name: "Display (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Form Factor",
            placeholder: "Placeholder..."
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Placeholder..."
          },
          {
            name: "Battery Life (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Graphics Performance",
            placeholder: "Placeholder..."
          },
          {
            name: "Storage Expansion",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "Tablets & Accessories",
        attributes: [
          {
            name: "Title",
            placeholder: "Placeholder..."
          },
          {
            name: "Description",
            placeholder: "Placeholder..."
          },
          {
            name: "Brand and Model",
            placeholder: "Placeholder..."
          },
          {
            name: "Specifications",
            placeholder: "Placeholder..."
          },
          {
            name: "Operating System",
            placeholder: "Placeholder..."
          },
          {
            name: "Display (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Form Factor",
            placeholder: "Placeholder..."
          },
          {
            name: "Ports and Connectivity",
           placeholder: "Placeholder..."
          },
          {
            name: "Battery Life (Laptop)",
            placeholder: "Placeholder..."
          },
          {
            name: "Graphics Performance",
            placeholder: "Placeholder..."
          },
          {
            name: "Storage Expansion",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "TVs",
        attributes: []
      },
      {
        name: "Cameras",
        attributes: [
          {
            name: "Title",
            placeholder: "Placeholder..."
          },
          {
            name: "Description",
            placeholder: "Placeholder..."
          },
          {
            name: "Brand and Model",
            placeholder: "Placeholder..."
          },
          {
            name: "Specifications",
            placeholder: "Placeholder..."
          },
          {
            name: "Sensor Type",
            placeholder: "Placeholder..."
          },
          {
            name: "Resolution",
            placeholder: "Placeholder..."
          },
          {
            name: "Optical Zoom",
            placeholder: "Placeholder..."
          },
          {
            name: "Digital Zoom",
            placeholder: "Placeholder..."
          },
          {
            name: "Video Recording",
            placeholder: "Placeholder..."
          },
          {
            name: "Connectivity",
            placeholder: "Placeholder..."
          },
          {
            name: "Battery Life",
            placeholder: "Placeholder..."
          }
        ]
      },
      {
        name: "Audio",
        attributes: []
      }
    ]
  },
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Men's Fashion",
        attributes: []
      },
      {
        name: "Women's Fashion",
        attributes: []
      },
      {
        name: "Kids & Babies",
        attributes: []
      },
      {
        name: "Shoes",
        attributes: []
      },
      {
        name: "Bags & Accessories",
        attributes: []
      }
    ]
  }
];

console.log(categories);

const populateCategoryOptions = () => {
  const selectElement = document.getElementById("productCategory");

  categories.forEach((category, index) => {
    const optionElement = document.createElement("option");
    const optionValue = index + 1;
    optionElement.value = optionValue;
    optionElement.textContent = category.name;
    selectElement.appendChild(optionElement);
  });
};

populateCategoryOptions();



const populateSubCategoryOptions = () => {
  const categorySelect = document.getElementById("productCategory");
  const subCategorySelect = document.getElementById("productSubCategory");
  const attributesContainer = document.getElementById("attributesContainer");

  // Clear previous options
  subCategorySelect.innerHTML = "";
  attributesContainer.innerHTML = "";

  // Get the selected category
  const selectedCategoryIndex = parseInt(categorySelect.value) - 1;
  const selectedCategory = categories[selectedCategoryIndex];

  // Check if the selected category is found
  if (selectedCategory) {
    // Iterate over the subcategories of the selected category
    selectedCategory.subcategories.forEach((subcategory) => {
      const optionElement = document.createElement("option");
      optionElement.value = subcategory.name;
      optionElement.textContent = subcategory.name;
      subCategorySelect.appendChild(optionElement);
    });
  }
};

const populateAttributes = () => {
  const categorySelect = document.getElementById("productCategory");
  const subCategorySelect = document.getElementById("productSubCategory");
  const attributesContainer = document.getElementById("attributesContainer");

  // Clear previous attributes
  attributesContainer.innerHTML = "";

  // Get the selected category and sub-category
  const selectedCategoryIndex = parseInt(categorySelect.value) - 1;
  const selectedSubCategoryName = subCategorySelect.value;
  const selectedCategory = categories[selectedCategoryIndex];

  // Find the selected sub-category
  const selectedSubCategory = selectedCategory.subcategories.find(
    (subcategory) => subcategory.name === selectedSubCategoryName
  );

  // Check if the selected sub-category is found
  if (selectedSubCategory) {
    // Iterate over the attributes of the selected sub-category
    selectedSubCategory.attributes.forEach((attribute) => {
      const labelElement = document.createElement("label");
      labelElement.textContent = attribute.name;
      labelElement.className = "form-label";
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.name = attribute.name.toLowerCase().replace(/ /g, "_");
      inputElement.placeholder = attribute.placeholder;
      inputElement.className = "form-control";
      attributesContainer.appendChild(labelElement);
      attributesContainer.appendChild(inputElement);
    });
  }
};

const categorySelect = document.getElementById("productCategory");
categorySelect.addEventListener("change", populateSubCategoryOptions);

const subCategorySelect = document.getElementById("productSubCategory");
subCategorySelect.addEventListener("change", populateAttributes);

populateSubCategoryOptions();
populateAttributes();