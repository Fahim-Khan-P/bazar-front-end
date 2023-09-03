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
            placeholder: "Compatility with devices..."
          },
          {
            name: "Type of Accessory",
            placeholder: "Coler, Headphone..."
          },
          {
            name: "Functionality",
            placeholder: "Write some main functionalites..."
          }
        ]
      },
      {
        name: "Wearables",
        attributes: [
          {
            name: "Compatibility",
            placeholder: "Compatility with devices..."
          },
          {
            name: "Type of Accessory",
            placeholder: "Coler, Headphone..."
          },
          {
            name: "Functionality",
            placeholder: "Write some main functionalites..."
          }
        ]
      },
      {
        name: "SIM Cards",
        attributes: [
          {
            name: "Network name ",
            placeholder: "Etisalat, Roshan, MTN ..."
          },
          {
            name: "Sim number",
            placeholder: "Type your sim number"
          }
        ]
      },
    ]
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Desktop Computers",
        attributes: [
          {
            name: "RAM",
            placeholder: "Enter size of RAM"
          },
          {
            name: "CPU",
            placeholder: "Number of CPU"
          },
          {
            name: "Display(Monitor)",
            placeholder: "Size of Display"
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Enter type of ports"
          },
          {
            name: "Graphics Performance",
            placeholder: "Enter graphic details"
          },
          {
            name: "Storage",
            placeholder: "Enter size of storage"
          },
        ]
      },
      {
        name: "Laptops",
        attributes: [
          {
            name: "RAM",
            placeholder: "Enter size of RAM"
          },
          {
            name: "CPU",
            placeholder: "Number of CPU"
          },
          {
            name: "Display(Laptop)",
            placeholder: "Size of Display"
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Enter type of ports"
          },
          {
            name: "Graphics Performance",
            placeholder: "Enter graphic details"
          },
          {
            name: "Bettery Life",
            placeholder: "Enter bettery performance"
          },
          {
            name: "Storage",
            placeholder: "Enter size of storage"
          },
        ]
      },
      {
        name: "Laptop & Computer Accessories",
        attributes: [
          {
            name: "Specifications",
            placeholder: "Materials of body"
          },
          {
            name: "Form Factor",
            placeholder: "Enter main features here"
          },
          {
            name: "Form Factor",
            placeholder: "Placeholder..."
          },
          {
            name: "Ports and Connectivity",
            placeholder: "TEnter type of ports"
          },
          {
            name: "Graphics Performance",
            placeholder: "Enter graphic details"
          },

        ]
      },
      {
        name: "Tablets & Accessories",
        attributes: [
          {
            name: "Specifications",
            placeholder: "Materials of body"
          },
          {
            name: "Operating System",
            placeholder: "Type of operating system"
          },
          {
            name: "Display)",
            placeholder: "Size of Display"
          },
          {
            name: "Ports and Connectivity",
            placeholder: "Enter type of ports"
          },
          {
            name: "Bettery Life",
            placeholder: "Enter bettery performance"
          },
          {
            name: "Storage",
            placeholder: "Enter size of storage"
          },
        ]
      },
      {
        name: "TVs",
        attributes: [
          {
            name: "Size",
            placeholder: "Enter size of TV"
          },
          {
            name: "Dispplay Resolution",
            placeholder: "Enter resolution detials"
          },
          {
            name: "Display techonology",
            placeholder: "Type of techonology"
          },
          {
            name: "Smart Features",
            placeholder: "Enter some small features"
          },
          {
            name: "Connectivity",
            placeholder: "Enter connectivity options "
          },
          {
            name: "Sound Quality",
            placeholder: "Describe the audio features"
          },
          {
            name: "Inputs and Outputs",
            placeholder: "Available input and output options"
          },
          {
            name: "Condition",
            placeholder: "Placeholder..."
          },
          {
            name: "Usage Details",
            placeholder: "Used for gaming or..."
          }
        ]
      },
      {
        name: "Home Appliances",
        attributes: [
          {
            name: "Type of Appliance",
            placeholder: "What type of home appliance it is"
          },
          {
            name: "Size and Dimensions",
            placeholder: "Measurements of the appliance"
          },
          {
            name: "Condition",
            placeholder: "Enter condition of the appliance "
          },
          {
            name: "Features",
            placeholder: "Enter the key features and functions "
          },
          {
            name: "Color",
            placeholder: "Enter color of the appliance"
          },
          {
            name: "Usage Details",
            placeholder: "Enter usage details"
          }
        ]
      },

      {
        name: "Cameras, Camcorders & Accessories",
        attributes: [
          {
            name: "LCD Screen",
            placeholder: "Size and type of the camera's LCD screen"
          },
          {
            name: "ISO Range",
            placeholder: "Provide the camera's ISO sensitivity range"
          },
          {
            name: "Shutter Speed",
            placeholder: "Specify the shutter speed"
          },
          {
            name: "Auto Focus System",
            placeholder: "Detail the camera's autofocus system"
          },
          {
            name: "Video Recording",
            placeholder: "Enter recording capabilities"
          },
          {
            name: "Image Stabilization",
            placeholder: "Enter built-in image stabilization "
          },
          {
            name: "Connectivity",
            placeholder: "Specify connectivity options "
          },
          {
            name: "Battery Life",
            placeholder: "Mention the estimated battery life"
          },
          {
            name: "Memory Card",
            placeholder: "Detail the type of memory card"
          },
          {
            name: "Included Accessories",
            placeholder: "List any accessories that come with the camera"
          }
          ,
          {
            name: "Sensor Size",
            placeholder: "Mention the size of the camera's image sensor"
          }
          ,
          {
            name: "Megapixels",
            placeholder: ": Specify the camera's resolution"
          }
          ,
          {
            name: "Lens Compatibility",
            placeholder: "Describe the types of lenses that are compatible"
          }
        ]
      },
      {
        name: "ACs & Home Electronics",
        attributes: [

          {
            name: "Capacity/Size",
            placeholder: "Provide relevant specifications"
          },

          {
            name: "Features",
            placeholder: "List the key features of the product"
          },
          {
            name: "Compatibility",
            placeholder: "Specify compatibility with power sources"
          },
          {
            name: "Included Accessories",
            placeholder: "Mention any accessories or components "
          },
          {
            name: "Usage Details",
            placeholder: "Write usage details"
          }
        ]
      },
      {
        name: "Audio & Sound Systems",
        attributes: [

          {
            name: "Frequency Interval",
            placeholder: "Enter frequency interval"
          }
        ]
      }
    ]
  },

  {
    name: "Video Game Consoles & Accessories",
    attributes: [

      {
        name: "Storage",
        placeholder: "Enter storage capacity"
      },

      {
        name: "Games",
        placeholder: "List game types"
      },
      {
        name: "Connectivity",
        placeholder: "Specify connectivity with sources"
      },
      {
        name: "Included Accessories",
        placeholder: "Mention any accessories or components "
      },
      {
        name: "Controllers",
        placeholder: "Write controller details"
      },
      {
        name: "Resolution",
        placeholder: "Write resolution size"
      },
      {
        name: "Operating system compatibility",
        placeholder: "Write compitible devices"
      },
      {
        name: "Speed",
        placeholder: "Write speed details"
      }


    ]
  },

  {
    name: "Photocopiers",
    attributes: [

      {
        name: "Printing speed",
        placeholder: "Enter printing speed details"
      },

      {
        name: "Paper handling capacity",
        placeholder: "Enter handling speed"
      },
      {
        name: "Network Connectivity",
        placeholder: "Specify Network Connectivity with sources"
      },
      {
        name: "Duplex printing",
        placeholder: "Enter duplez print support details"
      },
      {
        name: "Document scanning",
        placeholder: "Enter scanning details"
      },
      {
        name: "Resolution",
        placeholder: "Write resolution size"
      }
    ]
  },

  {
    name: "Vehicles",
    subcategories: [
      {
        name: "Cars",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Motorbike",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Three Wheelers",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Vans",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Trucks",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Buses",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          },
          {
            name: "Number of Passengers",
            placeholder: "Indicate number of passengers"
          },

        ]
      },
      {
        name: "Heavy Duty",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          },
          {
            name: "Load Capacity",
            placeholder: "Indicate load capacity"
          },

        ]
      },
      {
        name: "Water Transport",
        attributes: [
          {
            name: "Year",
            placeholder: "Year the car was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },
          {
            name: "Test Dirve & Inspection",
            placeholder: "Details about arranging a test drive "
          },
          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          },
          {
            name: "load capacity",
            placeholder: "Indicate load capacity"
          },

        ]
      },
      {
        name: "Bicycles",
        attributes: [
          {
            name: "Year",
            placeholder: "Year that was manufactured"
          },

          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },

          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },

          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },

          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
      {
        name: "Auto Parts & Accessories",
        attributes: [
          {
            name: "Car Type",
            placeholder: "Enter the car type"
          },

          {
            name: "Part Name",
            placeholder: "Enter Part Name"
          },
        ]
      },
      {
        name: "Rental",
        attributes: [
          {
            name: "Year",
            placeholder: "Year that was manufactured"
          },

          {
            name: "Mileage",
            placeholder: "Indicate the current mileage "
          },
          {
            name: "Exterior Color",
            placeholder: "Mention the color of the car's"
          },
          {
            name: "Interior features",
            placeholder: "Describe the interior features"
          },
          {
            name: "Engine and Transmission",
            placeholder: "Provide information about the engine "
          },
          {
            name: "Fuel Type",
            placeholder: "Specify the type of fuel"
          },
          {
            name: "Drive Type",
            placeholder: "Specify the type of drive"
          },
          {
            name: "Vehical History",
            placeholder: "Highlight any relevant vehicle history"
          },
          {
            name: "Features",
            placeholder: "List important features"
          },
          {
            name: "Tires and Wheels",
            placeholder: "Describe the condition of tires"
          },

          {
            name: "Ownership Documentation",
            placeholder: "Mention the availability of title, registration"
          }

        ]
      },
    ],
  },

  {
    name: "Property",
    subcategories: [
      {
        name: "Land For Sale",
        attributes: [
          {
            name: "Type of property",
            placeholder: "Describe property type"
          },
          {
            name: "Location",
            placeholder: "Describe the Location"
          },
          {
            name: "Size",
            placeholder: "Describe the width and hieght"
          },
        ]
      },
      {
        name: "Apartaments For Sale",
        attributes: [
          {
            name: "Type of property",
            placeholder: "Describe property type"
          },
          {
            name: "Location",
            placeholder: "Describe the Location"
          },
          {
            name: "Size",
            placeholder: "Describe the width and hieght"
          },
        ]
      },
      {
        name: "Houses For Sale",
        attributes: [
          {
            name: "Type of property",
            placeholder: "Describe property type"
          },
          {
            name: "Location",
            placeholder: "Describe the Location"
          },
          {
            name: "Size",
            placeholder: "Describe the width and hieght"
          },
        ]
      },
      {
        name: "Commercial Properties For Sale",
        attributes: [
          {
            name: "Type of property",
            placeholder: "Describe property type"
          },
          {
            name: "Location",
            placeholder: "Describe the Location"
          },
          {
            name: "Size",
            placeholder: "Describe the width and hieght"
          },
        ]
      },
      {
        name: "New Projects",
        attributes: [
          {
            name: "Type of property",
            placeholder: "Describe property type"
          },
          {
            name: "Location",
            placeholder: "Describe the Location"
          },
          {
            name: "Size",
            placeholder: "Describe the width and hieght"
          },
        ]
      },
    ]
  },
  {
    name: "Home & living",
    subcategories: [{
      name: "Living Room Furniture",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the furniture"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the furniture"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the furniture"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the furniture"
      }
      ]
    },
    {
      name: "Kitchen & Dining Furniture",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the furniture"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the furniture"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the furniture"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the furniture"
      }
      ]
    },
    {
      name: "Bedroom Furniture",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the furniture"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the furniture"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the furniture"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the furniture"
      }
      ]
    },
    {
      name: "Office & Shop Furniture",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the furniture"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the furniture"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the furniture"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the furniture"
      }
      ]
    },
    {
      name: "Children's Furniture",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the furniture"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the furniture"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the furniture"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the furniture"
      }
      ]
    },
    {
      name: "Household Items",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the item"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the item"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the item"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the item"
      }
      ]
    },
    {
      name: "Bathroom Products",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the product"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the product"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the product"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the product"
      }
      ]
    },
    {
      name: "Doors",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the door"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the door"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the door"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the door"
      }
      ]
    },
    {
      name: "Home Textiles & Decoration",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the door"
      },
      {
        name: "Dimensions",
        placeholder: "Provide the dimensions of the door"
      },
      {
        name: "Materials Used",
        placeholder: "Describe the materials used in the door"
      },
      {
        name: "Sizes",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Purpose",
        placeholder: "Describe the intended purpose of the door"
      }
      ]
    }
    ]
  },
  {
    name: "Kids' Fashion",
    subcategories: [{
      name: "Toys",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of toy"
      }]
    },
    {
      name: "Traditional Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the traditional wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      },
      {
        name: "Age",
        placeholder: "Specify the recommended age range"
      }
      ]
    },
    {
      name: "Winter Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the winter wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      },
      {
        name: "Age",
        placeholder: "Specify the recommended age range"
      }
      ]
    },
    {
      name: "Western Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the western wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      },
      {
        name: "Age",
        placeholder: "Specify the recommended age range"
      }
      ]
    },
    {
      name: "Bags & Accessories",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of bag/accessory"
      }]
    },
    {
      name: "Footwear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the footwear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      },
      {
        name: "Age",
        placeholder: "Specify the recommended age range"
      }
      ]
    },
    {
      name: "Sleepwear",
      attributes: [{
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      },
      {
        name: "Age",
        placeholder: "Specify the recommended age range"
      }
      ]
    }
    ]
  },
  {
    name: "Men's Fashion",
    subcategories: [{
      name: "Jacket & Coat",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the jacket/coat"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Shirts & T-Shirts",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the shirt/t-shirt"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Pants",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the pants"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Traditional Clothing",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the traditional clothing"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Grooming & Bodycare",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of grooming/bodycare product"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Optical & Sunglasses",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the optical/sunglasses"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Baby Boy's Fashion",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the baby boy's fashion item"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Bags & Accessories",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of bag/accessory"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Footwear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the footwear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Watches",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the watch"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },

    ],
  },
  {
    name: "Women's Fashion",
    subcategories: [{
      name: "Traditional Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the traditional wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Winter Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the winter wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Western Wear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the western wear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Bags & Accessories",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of bag/accessory"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Footwear",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the footwear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Lingerie & Sleepwear",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of lingerie/sleepwear"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Jewelry & Watches",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of jewelry/watch"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Beauty & Personal Care",
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of beauty/personal care product"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Optical & Sunglasses",
      attributes: [{
        name: "Style",
        placeholder: "Describe the style of the optical/sunglasses"
      },
      {
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    }
    ]
  },
  {
    name: "Sport",
    subcategories: [{
      name: "Sports Wear",
      attributes: [{
        name: "Size",
        placeholder: "Specify the available sizes"
      },
      {
        name: "Color",
        placeholder: "Specify the available colors"
      }
      ]
    },
    {
      name: "Fitness & Gym",
      attributes: [{
        name: "Usage",
        placeholder: "Enter usage details"
      },
      {
        name: "Benifits",
        placeholder: "Write some key benifits"
      }
      ]
    }]
  },
  {
    name: "Education",
    subcategories: [{
      name: "Textbooks",
      attributes: [{
        name: "Subject",
        placeholder: "Specify the subject of the textbook"
      },
      {
        name: "Author",
        placeholder: "Specify the author(s) of the textbook"
      },
      {
        name: "Pages",
        placeholder: "Specify the number of pages in the textbook"
      }
      ]
    },
    {
      name: "Books",
      attributes: [{
        name: "Title",
        placeholder: "Specify the title of the book"
      },
      {
        name: "Author",
        placeholder: "Specify the author(s) of the book"
      },
      {
        name: "Pages",
        placeholder: "Specify the number of pages in the book"
      }
      ]
    }
    ]
  },
  {
    name: "Essentials",
    subcategories: [{
      name: "Grocery",
      attributes: []
    },
    {
      name: "Fruits & Vegetables",
      attributes: []
    },
    {
      name: "Meat & Seafood",
      attributes: []
    },
    {
      name: "Baby Products",
      attributes: []
    },
    {
      name: "Healthcare",
      attributes: []
    },
    {
      name: "Household",
      attributes: []
    }
    ]
  },
  {
    name: "Services",
    subcategories: [{
      name: "Building Maintenance",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Domestic & Daycare Services",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Fitness & Beauty Services",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "IT Services",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Matrimonial",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Professional Services",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Servicing & Repair",
      attributes: [
        {
          name: "Type of Services",
          placeholder: "Describe the type of services offered"
        },
        {
          name: "Working hours",
          placeholder: "Specify the working hours"
        }
      ]
    },
    {
      name: "Tours & Travels",
      attributes: [{
        name: "Type of Services",
        placeholder: "Describe the type of services offered"
      },
      {
        name: "Working hours",
        placeholder: "Specify the working hours"
      }
      ]
    },
    {
      name: "Mobile Phone Services",
      attributes: [{
        name: "Type of Services",
        placeholder: "Describe the type of services offered"
      },
      {
        name: "Working hours",
        placeholder: "Specify the working hours"
      },
      {
        name: "Type of Phones",
        placeholder: "Specify the type of phones serviced"
      }
      ]
    },
    {
      name: "Auto Services",
      attributes: [{
        name: "Car Type",
        placeholder: "Specify the type of car"
      },
      {
        name: "Service Type",
        placeholder: "Specify the type of service offered"
      },
      {
        name: "Working hours",
        placeholder: "Specify the working hours"
      }
      ]
    }
    ]
  },
  {
    name: "Agriculture",
    subcategories: [{
      name: "Crops, Seeds & Plants",
      attributes: [
        {
          name: "Year",
          placeholder: "Specify the year of manufacture"
        },
        {
          name: "Engine and Transmission",
          placeholder: "Describe the engine and transmission details"
        },
        {
          name: "Fuel_Type",
          placeholder: "Specify the fuel type used"
        },
        {
          name: "Drive Type",
          placeholder: "Specify the drive type"
        },
        {
          name: "History",
          placeholder: "Describe the maintenance and repair history"
        },
        {
          name: "Ownership Documentation",
          placeholder: "Specify the ownership documentation"
        },
        {
          name: "Usage",
          placeholder: "Describe the usage details"
        }
      ]
    },
    {
      name: "Farming Tools & Machinery",
      attributes: [{
        name: "Year",
        placeholder: "Specify the year of manufacture"
      },
      {
        name: "Engine and Transmission",
        placeholder: "Describe the engine and transmission details"
      },
      {
        name: "Fuel Type",
        placeholder: "Specify the fuel type used"
      },
      {
        name: "Drive Type",
        placeholder: "Specify the drive type"
      },
      {
        name: "History",
        placeholder: "Describe the maintenance and repair history"
      },
      {
        name: "Ownership Documentation",
        placeholder: "Specify the ownership documentation"
      },
      {
        name: "Usage",
        placeholder: "Describe the usage details"
      }
      ]
    },
    {
      name: "Other Agriculture",
      attributes: []
    }
    ]
  },
  {
    name: "Grains",
    subcategories: [{
      name: "Rice",
      attributes: [
        {
          name: "Place",
          placeholder: "Specify the place of origin"
        },
        {
          name: "Weight",
          placeholder: "Specify the weight or quantity"
        }
      ]
    },
    {
      name: "Corn",
      attributes: [
        {
          name: "Place",
          placeholder: "Specify the place of origin"
        },
        {
          name: "Weight",
          placeholder: "Specify the weight or quantity"
        }
      ]
    },
    {
      name: "Wheat",
      attributes: [
        {
          name: "Place",
          placeholder: "Specify the place of origin"
        },
        {
          name: "Weight",
          placeholder: "Specify the weight or quantity"
        }
      ]
    },
    {
      name: "Barley",
      attributes: [{
        name: "Place",
        placeholder: "Specify the place of origin"
      },
      {
        name: "Weight",
        placeholder: "Specify the weight or quantity"
      }
      ]
    }
    ]
  },
];

// // accessing navigation category item! 
// const categoryDropDown = document.getElementById('categoryDropDown');

// categoryDropDown.addEventListener('click', () => {
 
//   console.log('Element clicked!');
// });

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
  const divElements = document.querySelectorAll('.removeableInputs');


  // Clear previous options
  subCategorySelect.innerHTML = "";
  attributesContainer.innerHTML = "";

  // Get the selected category
  const selectedCategoryIndex = parseInt(categorySelect.value) - 1;
  const selectedCategory = categories[selectedCategoryIndex];

  // Check if the selected category is found
  if (selectedCategory) {
    if (selectedCategory.name == 'Grains' || selectedCategory.name == 'Agriculture' || selectedCategory.name == 'Services' || selectedCategory.name == 'Property' || selectedCategory.name == 'Essentials' || selectedCategory.name == 'Education') {
      console.log(selectedCategory.name,"dsfjalksfjkla")
      divElements.forEach((divElement) => {
        divElement.style.display = 'none';
      });
    }
    else {
      divElements.forEach((divElement) => {
        divElement.style.display = 'flex';
      });
    }
    // Iterate over the subcategories of the selected category
    // let i = 1
    selectedCategory.subcategories.forEach((subcategory) => {
      
      const optionElement = document.createElement("option");
      // optionElement.value = i;
      // i++;
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
categorySelect.addEventListener("change", () => {
  populateSubCategoryOptions();
  populateAttributes();

});

const subCategorySelect = document.getElementById("productSubCategory");
subCategorySelect.addEventListener("change", populateAttributes);

populateSubCategoryOptions();
populateAttributes();