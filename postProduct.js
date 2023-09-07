const categories = [
  {
    name: "Mobile",
    subcategories: [
      {
        name: "Mobile Phones",
        id: 1,
        attributes: []
      },
      {
        name: "Mobile Phone Accessories",
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
        attributes: [

          {
            name: "Frequency Interval",
            placeholder: "Enter frequency interval"
          }
        ]
      },
      {
        name: "Video Game Consoles & Accessories",
        id: 14,
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
        id: 15,
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
    ]
  },

 

  {
    name: "Vehicles",
    subcategories: [
      {
        name: "Cars",
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
      id: 32,
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
      id: 33,
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
      id: 34,
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
      id: 35,
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
      id: 36,
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
      id: 37,
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
      id: 38,
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
      id: 39,
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
      id: 40,
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
      id: 41,
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of toy"
      }]
    },
    {
      name: "Traditional Wear",
      id: 42,
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
      id: 43,
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
      id: 44,
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
      id: 45,
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of bag/accessory"
      }]
    },
    {
      name: "Footwear",
      id: 46,
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
      id: 47,
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
      id: 48,
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
      id: 49,
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
      id: 50,
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
      id: 51,
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
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
      id: 58,
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
      id: 59,
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
      id: 60,
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
      id: 61,
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
      id: 62,
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
      id: 63,
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
      id: 64,
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
      id: 65,
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
      id: 66,
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
      id: 67,
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
      id: 68,
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
      id: 69,
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
      id: 70,
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
      id: 71,
      attributes: []
    },
    {
      name: "Fruits & Vegetables",
      id: 72,
      attributes: []
    },
    {
      name: "Meat & Seafood",
      id: 73,
      attributes: []
    },
    {
      name: "Baby Products",
      id: 74,
      attributes: []
    },
    {
      name: "Healthcare",
      id: 75,
      attributes: []
    },
    {
      name: "Household",
      id: 76,
      attributes: []
    }
    ]
  },
  {
    name: "Services",
    
    subcategories: [{
      name: "Building Maintenance",
      id: 77,
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
      id: 78,
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
      id: 79,
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
      id: 80,
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
      name: "Funeral equipment",
      id: 81,
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
      id: 82,
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
      id: 83,
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
      id: 84,
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
      id: 85,
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
      id: 86,
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
      id: 87,
      attributes: [
        {
          name: "Type",
          placeholder: "Specify the type of crop, seed, or plant"
        },
        {
          name: "Quantity",
          placeholder: "Specify the quantity available"
        },
        {
          name: "Origin",
          placeholder: "Specify the place of origin"
        },
        {
          name: "Growth Stage",
          placeholder: "Indicate the growth stage"
        },
        {
          name: "Organic",
          placeholder: "Specify if the crops, seeds, or plants are organic"
        }
      ]
    },
    {
      name: "Farming Tools & Machinery",
      id: 88,
      attributes: [{
        name: "Year",
        placeholder: "Specify the year of manufacture"
      },
      {
        name: "Type",
        placeholder: "Specify the type of farming tool or machinery"
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
      id: 89,
      attributes: [
        {
          name: "Specific Attributes",
          placeholder: "Specify the key attributes"
        }
      ]
    }
    ]
  },
  {
    name: "Grains",
    subcategories: [{
      name: "Rice",
      id: 90,
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
      id: 91,
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
      id: 92,
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
      id: 93,
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

const pashtoCategories = [
  {
    name: "موبایلونه",
    subcategories: [
      {
        name: "مبایل او ټلیفون",
        id: 1,
        attributes: []
      },
      {
        name: "مبایل اړوند سامان",
        id: 2,
        attributes: [
          {
            name: "Compatibility",
            text: "ورته والی",
            placeholder: "له نورو آلو سره ورته والی"
          },
          {
            name: "Type of Accessory",
            text: "د سامان ډول",
            placeholder: "ګوشکي، چارجر"
          },
          {
            name: "Functionality",
            text: "دندې",
            placeholder: "یو څو مهمې دندې یې ولیکئ"
          }
        ]
      },
      {
        name: "پوښ او کاور",
        id: 3,
        attributes: [
          {
            name: "Compatibility",
            text: "ورته والی",
            placeholder: "له نورو آلو سره ورته والی"
          },
          {
            name: "Type of Accessory",
            text: "د سامان ډول",
            placeholder: "ګوشکي، چارجر"
          },
          {
            name: "Functionality",
            text: "دندې",
            placeholder: "یو څو مهمې دندې یې ولیکئ"
          }
        ]
      },
      {
        name: "سیم کارت",
        id: 4,
        attributes: [
          {
            name: "Network name ",
            text: "د شبکې نوم",
            placeholder: "اتصالات، روشن، بیسم ..."
          },
          {
            name: "Sim number",
            text: "د سیم کارت نمبر",
            placeholder: "د سیم کارت نمبر ولیکئ"
          }
        ]
      },
    ]
  },
  {
    name: "برېښنایی وسایل",
    subcategories: [
      {
        name: "ډیسکټاپ",
        id: 5,
        attributes: [
          {
            name: "RAM",
            text: "رم",
            placeholder: "څومره رم لري؟"
          },
          {
            name: "CPU",
            text: "پروسسر",
            placeholder: "څو پروسسر لري؟"
          },
          {
            name: "Display(Monitor)",
            text: "مانيټور",
            placeholder: "د ډیسپلې سایز او ډول"
          },
          {
            name: "Ports and Connectivity",
            text: "پورټونه",
            placeholder: "څو او کوم پورټونه لري"
          },
          {
            name: "Graphics Performance",
            text: "ګرافیک",
            placeholder: "څومره او څه ډول ګرافیک لري؟"
          },
          {
            name: "Storage",
            text: "ذخیره",
            placeholder: "څومره ذخیره لري"
          },
        ]
      },
      {
        name: "لپټاپ",
        id: 6,
        attributes: [
          {
            name: "RAM",
            text: "رم",
            placeholder: "څومره رم لري؟"
          },
          {
            name: "CPU",
            text: "پروسسر",
            placeholder: "څو پروسسر لري؟"
          },
          {
            name: "Display(Laptop)",
            text: "مانيټور",
            placeholder: "د ډیسپلې سایز او ډول"
          },
          {
            name: "Ports and Connectivity",
            text: "پورټونه",
            placeholder: "څو او کوم پورټونه لري"
          },
          {
            name: "Graphics Performance",
            text: "ګرافیک",
            placeholder: "څومره او څه ډول ګرافیک لري؟"
          },
          {
            name: "Storage",
            text: "ذخیره",
            placeholder: "څومره ذخیره لري"
          },
          {
            name: "Bettery Life",
            text: "بتري",
            placeholder: "د بټري اړوند مالومات"
          },
        ]
      },
      {
        name: "د کمپیوټر اړوند سامان",
        id: 7,
        attributes: [
          {
            name: "Specifications",
            text: "ځانګړتیاوئ",
            placeholder: "د جوړونې مواد"
          },
          {
            name: "Form Factor",
            text: "بهرنۍ بڼه",
            placeholder: "ظاهري بڼه یې څه ډول ده"
          },
          {
            name: "Ports and Connectivity",
            text: "پورټونه",
            placeholder: "څو او کوم پورټونه لري"
          },
          {
            name: "Graphics Performance",
            text: "ګرافیک",
            placeholder: "څومره او څه ډول ګرافیک لري؟"
          },

        ]
      },
      {
        name: "ټابلټ او اړوند سامان",
        id: 8,
        attributes: [
          {
            name: "Specifications",
            text: "ځانګړتیاوئ",
            placeholder: "د جوړونې مواد"
          },
          {
            name: "Operating System",
            text: "عامل سیستم",
            placeholder: "کوم عامل سیستم لري"
          },
          {
            name: "Display",
            text: "‌ډېسپلې",
            placeholder: "د ډېسپلې بڼه"
          },
          {
            name: "Ports and Connectivity",
            text: "پورټونه",
            placeholder: "څو او کوم پورټونه لري"
          },
          {
            name: "Storage",
            text: "ذخیره",
            placeholder: "څومره ذخیره لري"
          },
          {
            name: "Bettery Life",
            text: "بتري",
            placeholder: "د بټري اړوند مالومات"
          },
        ]
      },
      {
        name: "ټلویژون",
        id: 9,
        attributes: [
          {
            name: "Size",
            text: "سایز",
            placeholder: "د ټلویژون سایز څومره دی"
          },
          {
            name: "Dispplay Resolution",
            text: "رېزولوشن",
            placeholder: "د ریزولوشن اړوند مالومات ولیکئ"
          },
          {
            name: "Display techonology",
            text: "د ډیسپلې ټکنالوژي",
            placeholder: "د ډیسپلې د ټکنالوژۍ ډول"
          },
          {
            name: "Smart Features",
            text: "خاص ځانګړنې",
            placeholder: "خاص ځانګړنې یې ولیکئ"
          },
          {
            name: "Connectivity",
            text: "اتصال",
            placeholder: "له څه شي سره وصل کېدای شي؟"
          },
          {
            name: "Sound Quality",
            text: "د غږ کیفیت",
            placeholder: "د غږ ځانګړنې یې ولیکئ"
          },
          {
            name: "Inputs and Outputs",
            text: "ورکړیز او راکړیز",
            placeholder: "ورکړیز او راکړیز آپشنونه"
          },
          {
            name: "Condition",
            text: "حالت",
            placeholder: "لږ استعمالي دی که ډېر؟"
          },
          {
            name: "Usage Details",
            text: "د ګټې اخیستنې مالومات",
            placeholder: "د څه لپاره استعمالیږي"
          }
        ]
      },
      {
        name: "د کور سامان",
        id: 10,
        attributes: [
          {
            name: "Type of Appliance",
            text: "د سامان ډول",
            placeholder: "برقي، ګازي..."
          },
          {
            name: "Size and Dimensions",
            text: "حجم او سایز",
            placeholder: "اندازه او حجم یې ولیکئ"
          },
          {
            name: "Condition",
            text: "حالت",
            placeholder: "لږ استعمالي دی که ډېر؟"
          },
          {
            name: "Features",
            text: "ځانګړنې",
            placeholder: "خاص ځانګړنې یې ولیکئ"
          },
          {
            name: "Color",
            text: "رنګ",
            placeholder: "د رنګ ډول یې ولیکئ"
          },
          {
            name: "Usage Details",
            text: "د ګټې اخیستنې مالومات",
            placeholder: "د څه لپاره استعمالیږي"
          }
        ]
      },

      {
        name: "کامرې او اړوند سامان",
        id: 11,
        attributes: [
          {
            name: "LCD Screen",
            text: "ال سي ډي سکرین",
            placeholder: "د ال سي ډي او سکرین سایز ولیکئ"
          },
          {
            name: "ISO Range",
            text: "ISO Range",
            placeholder: "د آیسو اړوند مالوت یې ولیکئ"
          },
          {
            name: "Shutter Speed",
            text: "د شوټر سرعت",
            placeholder: "د شوټر سرعت یې ولیکئ"
          },
          {
            name: "Auto Focus System",
            text: "اتومات فوکس",
            placeholder: "د فوکس اړوند مالومات اضافه کړئ"
          },
          {
            name: "Video Recording",
            text: "ویډیو ریکارد",
            placeholder: "د ریکارډ اړوند مالومات اضافه کړئ"
          },
          {
            name: "Image Stabilization",
            text: "انځور",
            placeholder: "د انځور د اخستلو اړوند مالومات اضافه کړئ"
          },
          {
            name: "Connectivity",
            text: "اتصال",
            placeholder: "له څه شي سره وصل کېدای شي؟"
          },
          {
            name: "Bettery Life",
            text: "بتري",
            placeholder: "د بټري اړوند مالومات"
          },
          {
            name: "Memory Card",
            text: "میموري کارډ",
            placeholder: "د میموري کارد اړوند مالومات اضافه کړئ"
          },
          {
            name: "Included Accessories",
            text: "شامل سامان",
            placeholder: "د کمرې سره شامل سامان اضافه کړئ"
          }
          ,
          {
            name: "Sensor Size",
            text: "د سنسر سایز",
            placeholder: "د اړوند سنسرونو مالومات اضافه کړئ"
          }
          ,
          {
            name: "Megapixels",
            text: "د کمرې سایز",
            placeholder: "څو میګاپکسل کمره لري"
          }
          ,
          {
            name: "Lens Compatibility",
            text: "لینزونه",
            placeholder: "د اړوند لینزونو مالومات ولیکئ"
          }
        ]
      },
      {
        name: "اې سي او د کور برقي وسایل",
        id: 12,
        attributes: [

          {
            name: "Capacity/Size",
            text: "ظرفیت او سایز",
            placeholder: "د سایز مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړنې",
            placeholder: "خاص ځانګړنې یې ولیکئ"
          },
          {
            name: "Compatibility",
            text: "ورته والی",
            placeholder: "د برقي سرچینو اړوند مالومات یې ولیکئ"
          },
          {
            name: "Included Accessories",
            text: "شامل سامان",
            placeholder: "د اړوند شامل سامان نومونه اضافه کړئ"
          },
          {
            name: "Usage Details",
            text: "د ګټې اخیستنې مالومات",
            placeholder: "د څه لپاره استعمالیږي"
          }
        ]
      },
      {
        name: "َغږیز سیستمونه",
        id: 13,
        attributes: [

          {
            name: "Frequency Interval",
            text: "د فریکونسۍ انتروال",
            placeholder: "د فریکونسۍ انتروال مالومات ولیکئ"
          }
        ]
      },
      {
        name: "وېډیو ګیم او اړوند توکي",
        id: 14,
        attributes: [
    
          {
            name: "Storage",
            text: "ذخیره",
            placeholder: "څومره ذخیره لري؟"
          },
    
          {
            name: "Games",
            text: "ګیمونه",
            placeholder: "د ګیمونو ډولونه ولیکئ"
          },
          {
            name: "Connectivity",
            text: "اتصال",
            placeholder: "له څه شي سره وصل کېدای شي؟"
          },
          {
            name: "Included Accessories",
            text: "شامل سامان",
            placeholder: "د اړوند شامل سامان نومونه اضافه کړئ"
          },
          {
            name: "Controllers",
            text: "کنټرولر",
            placeholder: "د کنټرولر اړوند مالومات ولیکئ"
          },
          {
            name: "Resolution",
            text: "ریزولوشن",
            placeholder: "د ریزولوشن اړوند مالومات ولیکئ"
          },
          {
            name: "Operating system compatibility",
            text: "د عامل سیتسم اتصال",
            placeholder: "د کومو سیستونو سره اتصال کولای شي"
          },
          {
            name: "Speed",
            text: "سرعت",
            placeholder: "د سرعت اړوند مالومات ولیکئ"
          }
    
    
        ]
      },
    
      {
        name: "د فوټوکاپي اړوند شیان",
        id: 15,
        attributes: [
    
          {
            name: "Printing speed",
            text: "د پرینت سرعت",
            placeholder: "د پرینت د سرعت اړوند مالومات ولیکئ"
          },
    
          {
            name: "Paper handling capacity",
            text: "د کاغذ کشونې ظرفیت",
            placeholder: "د کاغذ کشونې د ظرفیت مالومات ولیکئ"
          },
          {
            name: "Network Connectivity",
            text: "د شبکې اتصال",
            placeholder: "د شبکو سره د اتصال مالومات ولیکئ"
          },
          {
            name: "Duplex printing",
            text: "دوه مخه چاپ",
            placeholder: "دوه مخه چاپ ملاتړ لري"
          },
          {
            name: "Document scanning",
            text: "سکن",
            placeholder: "د سکن کولو ملاتړ لري؟"
          },
          {
            name: "Resolution",
            text: "ریزولوشن",
            placeholder: "د ریزولوشن اړوند مالومات اضافه کړئ"
          }
        ]
      },
    ]
  },
  {
    name: "موتري",
    subcategories: [
      {
        name: "کوچنی موټر",
        id: 16,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          }

        ]
      },
      {
        name: "موټر سیکل",
        id: 17,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          }
        ]
      },
      {
        name: "زرنج، ریکشا",
        id: 18,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          }
        ]
      },
      {
        name: "منځني موټر",
        id: 19,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          }

        ]
      },
      {
        name: "ټرک",
        id: 20,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          }

        ]
      },
      {
        name: "بس",
        id: 21,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          },
          {
            name: "Number of Passengers",
            text: "د څوکیو شمېر",
            placeholder: "د څوکیو شمیر څومره دی؟"
          },

        ]
      },
      {
        name: "لوی بار وړونکي موټر",
        id: 22,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          },
          {
            name: "Load Capacity",
            text: "د بار وړلو ظرفیت",
            placeholder: "څو ټڼه بار انتقالولای شي"
          },

        ]
      },
      {
        name: "د اوبو د انتقال موټر",
        id: 23,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          },
          {
            name: "Load Capacity",
            text: "د بار وړلو ظرفیت",
            placeholder: "څو ټڼه بار انتقالولای شي"
          },

        ]
      },
      {
        name: "بایسکل",
        id: 24,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },

          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          },

        ]
      },
      {
        name: "د موټر اړوند سامان",
        id: 25,
        attributes: [
          {
            name: "Car Type",
            text: "د موټر ډول",
            placeholder: "د موټر ډول ولیکئ"
          },

          {
            name: "Part Name",
            text: "د پرزې نوم",
            placeholder: "د پرزې نوم ولیکئ"
          },
        ]
      },
      {
        name: "کرايي",
        id: 26,
        attributes: [
          {
            name: "Year",
            text: "کال",
            placeholder: "د جوړیدو کال"
          },

          {
            name: "Mileage",
            text: "مصرف تیل",
            placeholder: "په یو میل واټن کې د تیلو مصرف"
          },
          {
            name: "Exterior Color",
            text: "بیرونی رنګ",
            placeholder: "بیرونی رنګ یې څه ډول دی"
          },
          {
            name: "Interior features",
            text: "داخلي رنګ",
            placeholder: "داخل یې کوم رنګ لري"
          },
          {
            name: "Engine and Transmission",
            text: "ماشین",
            placeholder: "د ماشین اړوند یې مالومات ولیکئ"
          },
          {
            name: "Fuel Type",
            text: "د تیلو ډول",
            placeholder: "ډیزل، پطرول، برېښنایي یا ګاز"
          },
          {
            name: "Drive Type",
            text: "لاس",
            placeholder: "چپه لاس دی که راسته"
          },
          {
            name: "Vehical History",
            text: "تاریخچه",
            placeholder: "د تاریخچې اړوند مالومات ولیکئ"
          },
          {
            name: "Features",
            text: "ځانګړتیاوې",
            placeholder: "مهمې ځانګړتیاوې اضافه کړئ"
          },
          {
            name: "Tires and Wheels",
            text: "ټایر او ویلز",
            placeholder: "ډ ټایر او ویل مالومات اضافه کړئ"
          },
          {
            name: "Test Dirve & Inspection",
            text: "ټرایي ورکول",
            placeholder: "ټرایی اړوند وخت ولیکئ"
          },
          {
            name: "Ownership Documentation",
            text: "اسناد",
            placeholder: "د اسنادو اړوند مالومات ولیکئ"
          },
        ]
      },
    ],
  },

  {
    name: "ځمکې او ځایدادونه",
    subcategories: [
      {
        name: "Land For Sale",
        id: 27,
        attributes: [
          {
            name: "Type of property",
            text: "د ځایداد ډول",
            placeholder: "د ځایداد ډول ولیکئ"
          },
          {
            name: "Location",
            text: "موقعیت",
            placeholder: " د موقعیت اړوند مالومات ولیکئ"
          },
          {
            name: "Size",
            text: "اندازه",
            placeholder: "د مساحت اړوند مالومات ولیکئ"
          },
        ]
      },
      {
        name: "اپارتمانونه",
        id: 28,
        attributes: [
          {
            name: "Type of property",
            text: "د ځایداد ډول",
            placeholder: "د ځایداد ډول ولیکئ"
          },
          {
            name: "Location",
            text: "موقعیت",
            placeholder: " د موقعیت اړوند مالومات ولیکئ"
          },
          {
            name: "Size",
            text: "اندازه",
            placeholder: "د مساحت اړوند مالومات ولیکئ"
          },
        ]
      },
      {
        name: "کورونه",
        id: 29,
        attributes: [
          {
            name: "Type of property",
            text: "د ځایداد ډول",
            placeholder: "د ځایداد ډول ولیکئ"
          },
          {
            name: "Location",
            text: "موقعیت",
            placeholder: " د موقعیت اړوند مالومات ولیکئ"
          },
          {
            name: "Size",
            text: "اندازه",
            placeholder: "د مساحت اړوند مالومات ولیکئ"
          },
        ]
      },
      {
        name: "تجارتي ځایونه",
        id: 30,
        attributes: [
          {
            name: "Type of property",
            text: "د ځایداد ډول",
            placeholder: "د ځایداد ډول ولیکئ"
          },
          {
            name: "Location",
            text: "موقعیت",
            placeholder: " د موقعیت اړوند مالومات ولیکئ"
          },
          {
            name: "Size",
            text: "اندازه",
            placeholder: "د مساحت اړوند مالومات ولیکئ"
          },
        ]
      },
      {
        name: "نوې پروژې",
        id: 31,
        attributes: [
          {
            name: "Type of property",
            text: "د ځایداد ډول",
            placeholder: "د ځایداد ډول ولیکئ"
          },
          {
            name: "Location",
            text: "موقعیت",
            placeholder: " د موقعیت اړوند مالومات ولیکئ"
          },
          {
            name: "Size",
            text: "اندازه",
            placeholder: "د مساحت اړوند مالومات ولیکئ"
          },
        ]
      },
    ]
  },
  {
    name: "د کور وسایل",
    subcategories: [{
      name: "کوچ، مېز او نور توکي",
      id: 32,
      attributes: [
      {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
      {
        name: "Dimensions",
        text: "حجم",
        placeholder: "د حجم اړوند مالومات ولیکئ"
      },
      {
        name: "Materials Used",
        text: "موادو",
        placeholder: "د جوړښت مواد یې څه دي؟"
      },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Purpose",
        text: "هدف",
        placeholder: "د څه لپاره پکاریږي"
      }
      ]
    },
    {
      name: "د آشپزخانې وسایل",
      id: 33,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د خوب د اتاق وسایل",
      id: 34,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د دکان او دفتر وسایل",
      id: 35,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د ماشومانو سامان",
      id: 36,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د کور سامان",
      id: 37,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د حمام سامان",
      id: 38,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "ور",
      id: 39,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    },
    {
      name: "د کور دېکورشن سامان",
      id: 40,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
        {
          name: "Dimensions",
          text: "حجم",
          placeholder: "د حجم اړوند مالومات ولیکئ"
        },
        {
          name: "Materials Used",
          text: "موادو",
          placeholder: "د جوړښت مواد یې څه دي؟"
        },
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Purpose",
          text: "هدف",
          placeholder: "د څه لپاره پکاریږي"
        }
      ]
    }
    ]
  },
  {
    name: "د ماشوم فیشن",
    subcategories: [{
      name: "نکتایي",
      id: 41,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      ]
    },
    {
      name: "کلتوري لباس",
      id: 42,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      {
        name: "Age",
        text: "عمر",
        placeholder: "د څو کلن ماشوم لپاره دي"
      }
      ]
    },
    {
      name: "د ژمي لباس",
      id: 43,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      {
        name: "Age",
        text: "عمر",
        placeholder: "د څو کلن ماشوم لپاره دي"
      }
      ]
    },
    {
      name: "بهرنۍ لباس",
      id: 44,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      {
        name: "Age",
        text: "عمر",
        placeholder: "د څو کلن ماشوم لپاره دي"
      }
      ]
    },
    {
      name: "بیک، او اړوند سامان",
      id: 45,
      attributes: [{
        name: "Type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      }]
    },
    {
      name: "بوټ",
      id: 46,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      {
        name: "Age",
        text: "عمر",
        placeholder: "د څو کلن ماشوم لپاره دي"
      }
      ]
    },
    {
      name: "د خوب لباس",
      id: 47,
      attributes: [
        {
          name: "Sizes",
          text: "اندازه",
          placeholder: "اړوند سایز یې څومره دی"
        },
        {
          name: "Color",
          text: "رنګ",
          placeholder: "موجوده رنګونه یې ولیکئ"
        },
        {
          name: "Age",
          text: "عمر",
          placeholder: "د څو کلن ماشوم لپاره دي"
        }
      ]
    }
    ]
  },
  {
    name: "نارینه فیشن",
    
    subcategories: [{
      name: "کوټ او جاکټ",
      id: 48,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      ]
    },
    {
      name: "زيرپراني او یخن کاک",
      id: 49,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "پتلون",
      id: 50,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "کلتوري جامې",
      id: 51,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "د نظافت اړوند توکي",
      id: 52,
      attributes: [ {
        name: "type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "لمریزي او طبي عینکې",
      id: 53,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "د نوو پیدا شوو ماشومانو توکي",
      id: 54,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "بیګ او اړوند سامان",
      id: 55,
      attributes: [{
        name: "type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "بوټ",
      id: 56,
      attributes: [{
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "ساعت",
      id: 57,
      attributes: [{
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },

    ],
  },
  {
    name: "ښځینه فیشن",
    subcategories: [{
      name: "کلتوري جامې",
      id: 58,
      attributes: [{
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "د ژمي جامې",
      id: 59,
      attributes: [{
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "بهرنۍ جامې",
      id: 60,
      attributes: [{
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "بیګ او اړوند سامان",
      id: 61,
      attributes: [{
        name: "Type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "بوټ",
      id: 62,
      attributes: [
        {
          name: "Style",
          text: "سټایل",
          placeholder: "د سټایل اړوند مالومات ولیکئ"
        },
      {
        name: "Sizes",
        text: "اندازه",
        placeholder: "اړوند سایز یې څومره دی"
      },
      {
        name: "Color",
        text: "رنګ",
        placeholder: "موجوده رنګونه یې ولیکئ"
      },
      ]
    },
    {
      name: "د خوب لباس",
      id: 63,
      attributes: [{
        name: "Type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "زيورات او ساعت",
      id: 64,
      attributes: [{
        name: "Type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "د ښایست اړوند توکي",
      id: 65,
      attributes: [{
        name: "Type",
        text: "ډول",
        placeholder: "د جنس د ډول اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "لمریزې او طبي عینکې",
      id: 66,
      attributes: [ {
        name: "Style",
        text: "سټایل",
        placeholder: "د سټایل اړوند مالومات ولیکئ"
      },
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    }
    ]
  },
  {
    name: "سپورتي توکي",
    subcategories: [{
      name: "د سپورت لباس",
      id: 67,
      attributes: [ 
    {
      name: "Sizes",
      text: "اندازه",
      placeholder: "اړوند سایز یې څومره دی"
    },
    {
      name: "Color",
      text: "رنګ",
      placeholder: "موجوده رنګونه یې ولیکئ"
    },
      ]
    },
    {
      name: "د بدن جوړونې توکي",
      id: 68,
      attributes: [{
        name: "Usage",
        text: "استعمال",
        placeholder: "د استعمال اړوند مالومات ولیکئ"
      },
      {
        name: "Benifits",
        text: "ګټې",
        placeholder: "مهمې ګټې يې ولیکئ"
      }
      ]
    }]
  },
  {
    name: "ښوونه او روزنه",
    subcategories: [{
      name: "درسي کتابونه",
      id: 69,
      attributes: [{
        name: "Subject",
        text: "مضمون",
        placeholder: "د مضمون نوم ولیکئ"
      },
      {
        name: "Author",
        text: "لیکوال",
        placeholder: "د لیکوال نوم ولیکئ"
      },
      {
        name: "Pages",
        text: "حجم",
        placeholder: "څو مخونه یا پاڼې لري"
      }
      ]
    },
    {
      name: "کتابونه",
      id: 70,
      attributes: [{
        name: "Title",
        text: "نوم",
        placeholder: "د کتاب نوم ولیکئ"
      },
      {
        name: "Author",
        text: "لیکوال",
        placeholder: "د لیکوال نوم ولیکئ"
      },
      {
        name: "Pages",
        text: "حجم",
        placeholder: "څو مخونه یا پاڼې لري"
      }
      ]
    }
    ]
  },
  {
    name: "لومړنۍ توکي",
    subcategories: [{
      name: "خوراکي توکي",
      id: 71,
      attributes: []
    },
    {
      name: "مېوه او سبزي",
      id: 72,
      attributes: []
    },
    {
      name: "غوښه او بهري خوراکونه",
      id: 73,
      attributes: []
    },
    {
      name: "د ماشومانو خوراکي توکي",
      id: 74,
      attributes: []
    },
    {
      name: "روغتیایي توکي",
      id: 75,
      attributes: []
    },
    {
      name: "کورني توکي",
      id: 76,
      attributes: []
    }
    ]
  },
  {
    name: "خدمتونه",
    
    subcategories: [{
      name: "د اپارتمان ساتنه",
      id: 77,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "ورځني خدمتونه",
      id: 78,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "د بدن جوړونې او ښایست خدمتونه",
      id: 79,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "ای ټي خدمتونه",
      id: 80,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "د مړي د تکفین خدمتونه",
      id: 81,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "حرفه اي خدمتونه",
      id: 82,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "د ترمیم خدمات",
      id: 83,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "سفري خدمات",
      id: 84,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        }
      ]
    },
    {
      name: "مبایل خدمات",
      id: 85,
      attributes: [
        {
          name: "Type of Services",
          text: "د خدماتو ډول",
          placeholder: "د خدماتو ډول ولیکئ"
        },
        {
          name: "Working hours",
          text: "کاري وخت",
          placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
        },
      {
        name: "Type of Phones",
        text: "د اړیکو نیولو ډول",
        placeholder: "د اړیکو نیولو اړوند مالومات ولیکئ"
      }
      ]
    },
    {
      name: "اتومات خدمتونه",
      id: 86,
      attributes: [{
        name: "Car Type",
        text: "د موټر ډول",
        placeholder: "د موټر ډول ولیکئ"
      },
      {
        name: "Type of Services",
        text: "د خدماتو ډول",
        placeholder: "د خدماتو ډول ولیکئ"
      },
      {
        name: "Working hours",
        text: "کاري وخت",
        placeholder: "د کاري ساعتونو اړوند مالومات ولیکئ"
      },
      ]
    }
    ]
  },
  {
    name: "کرهڼه",
    subcategories: [{
      name: "تخمونه او دانې",
      id: 87,
      attributes: [
        {
          name: "Type",
          text: "ډول",
          placeholder: "د تخم یا دانو ډول ولیکئ"
        },
        {
          name: "Quantity",
          text: "اندازه",
          placeholder: "څو کیلو ګرامه دي"
        },
        {
          name: "Origin",
          text: "ّځای",
          placeholder: "د کوم ولایت اړوند دي"
        },
        {
          name: "Growth Stage",
          text: "وخت",
          placeholder: "څه وخت راټول شوي دي"
        },
        {
          name: "Organic",
          text: "اورګانیک",
          placeholder: "آیا دا تخم یا دانه اورګانیک دی؟"
        }
      ]
    },
    {
      name: "د کرهڼې اړوند ماشینونه",
      id: 88,
      attributes: [{
        name: "Year",
        text: "کال",
        placeholder: "کوم کال کې جوړ شوی دی"
      },
      {
        name: "Type",
        text: "ډول",
        placeholder: "د ماشینري ډول ولیکئ"
      },
      {
        name: "Fuel Type",
        text: "د تیلو ډول",
        placeholder: "ډیزل دی یا پطرول"
      },
      {
        name: "Drive Type",
        text: "لاس",
        placeholder: "راسته لاس دی که چپه"
      },
      {
        name: "History",
        text: "تاریخچه",
        placeholder: "د تاریخچې اړوند مالومات ولیکئ"
      },
      {
        name: "Ownership Documentation",
        text: "اسناد",
        placeholder: "د اسنادو اړوند مالومات یې ولیکئ"
      },
      {
        name: "Usage",
        text: "استعمال",
        placeholder: "د استعمال مالومات یې ولیکئ"
      }
      ]
    },
    {
      name: "نور کرهڼیز توکي",
      id: 89,
      attributes: [
        {
          name: "Specific Attributes",
          text: "ځانګړتیاوې",
          placeholder: "یو څو خاصې ځانګړنې یې ولیکئ"
        }
      ]
    }
    ]
  },
  {
    name: "غله جات",
    subcategories: [{
      name: "وریژې",
      id: 90,
      attributes: [
        {
          name: "Place",
          text: "ّځای",
          placeholder: "د کوم ځای اړوند دي"
        },
        {
          name: "Weight",
          text: "وزن",
          placeholder: "وزن یې څومره دی"
        }
      ]
    },
    {
      name: "جوار",
      id: 91,
      attributes: [
        {
          name: "Place",
          text: "ّځای",
          placeholder: "د کوم ځای اړوند دي"
        },
        {
          name: "Weight",
          text: "وزن",
          placeholder: "وزن یې څومره دی"
        }
      ]
    },
    {
      name: "غنم",
      id: 92,
      attributes: [
        {
          name: "Place",
          text: "ّځای",
          placeholder: "د کوم ځای اړوند دي"
        },
        {
          name: "Weight",
          text: "وزن",
          placeholder: "وزن یې څومره دی"
        }
      ]
    },
    {
      name: "اوربشې",
      id: 93,
      attributes: [
        {
          name: "Place",
          text: "ّځای",
          placeholder: "د کوم ځای اړوند دي"
        },
        {
          name: "Weight",
          text: "وزن",
          placeholder: "وزن یې څومره دی"
        }
      ]
    }
    ]
  },
];

const dariCategories = [
  {
    name: "موبایل",
    subcategories: [
      {
        name: "تلفن",
        id: 1,
        attributes: []
      },
      {
        name: "لوازم جانبی تلفن",
        id: 2,
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
        name: "پوشیدنی",
        id: 3,
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
        name: "سیم کارت",
        id: 4,
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
    name: "الکترونیک",
    subcategories: [
      {
        name: "دیسکتاپ",
        id: 5,
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
        name: "لپ تاپ",
        id: 6,
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
        name: "لوازم جانبی لپ تاپ و کامپیوتر",
        id: 7,
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
        name: "تبلت و لوازم جانبی",
        id: 8,
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
        name: "تلویزیون ها",
        id: 9,
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
        name: "لوازم خانگی",
        id: 10,
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
        name: "دوربین ها و دوربین های فیلمبرداری و لوازم جانبی",
        id: 11,
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
        name: "AC و لوازم خانگی الکترونیک",
        id: 12,
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
        name: "سیستم های صوتی و صوتی",
        id: 13,
        attributes: [

          {
            name: "Frequency Interval",
            placeholder: "Enter frequency interval"
          }
        ]
      },
      {
        name: "کنسول بازی ویدیویی و لوازم جانبی",
        id: 14,
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
        name: "دستگاه های فتوکپی",
        id: 15,
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
    ]
  },
  {
    name: "وسایل نقلیه",
    subcategories: [
      {
        name: "ماشین ها",
        id: 16,
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
        name: "موتور سیکل",
        id: 17,
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
        name: "سه چرخ",
        id: 18,
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
        name: "وانت",
        id: 19,
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
        name: "کامیون ها",
        id: 20,
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
        name: "بس ها",
        id: 21,
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
        name: "موتر های بارکش",
        id: 22,
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
        name: "وسایل انتقال آب",
        id: 23,
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
        name: "بایسکل",
        id: 24,
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
        name: "قطعات و لوازم جانبی موتر",
        id: 25,
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
        name: "کرایه",
        id: 26,
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
    name: "املاک",
    subcategories: [
      {
        name: "زمین برای فروش",
        id: 27,
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
        name: "آپارتمان برای فروش",
        id: 28,
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
        name: "خانه برای فروش",
        id: 29,
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
        name: "املاک تجاری برای فروش",
        id: 30,
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
        name: "پروژه های جدید",
        id: 31,
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
    name: "د کور وسایل",
    subcategories: [{
      name: "مبلمان اتاق نشین",
      id: 32,
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
      name: "مبلمان آشپزخانه و ناهارخوری",
      id: 33,
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
      name: "مبلمان اتاق خواب",
      id: 34,
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
      name: "مبلمان اداری و فروشگاهی",
      id: 35,
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
      name: "مبلمان کودک",
      id: 36,
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
      name: "وسایل خانه",
      id: 37,
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
      name: "محصولات حمام",
      id: 38,
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
      name: "درها",
      id: 39,
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
      name: "منسوجات و دکوراسیون منزل",
      id: 40,
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
    name: "مد کودکانه",
    subcategories: [{
      name: "اسباب بازی",
      id: 41,
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of toy"
      }]
    },
    {
      name: "لباس سنتی",
      id: 42,
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
      name: "لباس زمستانی",
      id: 43,
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
      name: "لباس غربی",
      id: 44,
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
      name: "کیف و لوازم جانبی",
      id: 45,
      attributes: [{
        name: "Type",
        placeholder: "Describe the type of bag/accessory"
      }]
    },
    {
      name: "کفش",
      id: 46,
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
      name: "لباس خواب",
      id: 47,
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
    name: "مد مردانه",
    
    subcategories: [{
      name: "کت",
      id: 48,
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
      name: "پیراهن و تی شرت",
      id: 49,
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
      name: "شلوار",
      id: 50,
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
      name: "پوشاک سنتی",
      id: 51,
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
      name: "نظافت و مراقبت از بدن",
      id: 52,
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
      name: "عینک نوری و آفتابی",
      id: 53,
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
      name: "مد نوزاد پسرانه",
      id: 54,
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
      name: "کیف و لوازم جانبی",
      id: 55,
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
      name: "کفش",
      id: 56,
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
      name: "ساعت",
      id: 57,
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
    name: "مد زنانه",
    subcategories: [{
      name: "لباس سنتی",
      id: 58,
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
      name: "لباس زمستانی",
      id: 59,
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
      name: "لباس غربی",
      id: 60,
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
      name: "کیف و لوازم جانبی",
      id: 61,
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
      name: "کفش",
      id: 62,
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
      name: "لباس خواب",
      id: 63,
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
      name: "جواهرات و ساعت",
      id: 64,
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
      name: "زیبایی و مراقبت شخصی",
      id: 65,
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
      name: "عینک نوری و آفتابی",
      id: 66,
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
    name: "ورزش",
    subcategories: [{
      name: "لباس ورزشی",
      id: 67,
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
      name: "باشگاه تناسب اندام",
      id: 68,
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
    name: "تحصیلات",
    subcategories: [{
      name: "کتاب های درسی",
      id: 69,
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
      name: "کتاب ها",
      id: 70,
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
    name: "ملزومات",
    subcategories: [{
      name: "خواربار",
      id: 71,
      attributes: []
    },
    {
      name: "میوه ها و سبزیجات",
      id: 72,
      attributes: []
    },
    {
      name: "گوشت و غذاهای دریایی",
      id: 73,
      attributes: []
    },
    {
      name: "محصولات کودک",
      id: 74,
      attributes: []
    },
    {
      name: "مراقبت های بهداشتی",
      id: 75,
      attributes: []
    },
    {
      name: "خانواده",
      id: 76,
      attributes: []
    }
    ]
  },
  {
    name: "خدمات",
    
    subcategories: [{
      name: "تعمیر و نگهداری ساختمان",
      id: 77,
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
      name: "خدمات خانگی و مهدکودک",
      id: 78,
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
      name: "خدمات تناسب اندام_زیبایی",
      id: 79,
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
      name: "خدمات آی تی",
      id: 80,
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
      name: "لوازم نکفین",
      id: 81,
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
      name: "خدمات حرفه ای",
      id: 82,
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
      name: "سرویس و تعمیر",
      id: 83,
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
      name: "تورها و سفرها",
      id: 84,
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
      name: "خدمات تلفن",
      id: 85,
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
      name: "خدمات خودرو",
      id: 86,
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
    name: "کشاورزی",
    subcategories: [{
      name: "محصولات زراعی، دانه ها و گیاهان",
      id: 87,
      attributes: [
        {
          name: "Type",
          placeholder: "Specify the type of crop, seed, or plant"
        },
        {
          name: "Quantity",
          placeholder: "Specify the quantity available"
        },
        {
          name: "Origin",
          placeholder: "Specify the place of origin"
        },
        {
          name: "Growth Stage",
          placeholder: "Indicate the growth stage"
        },
        {
          name: "Organic",
          placeholder: "Specify if the crops, seeds, or plants are organic"
        }
      ]
    },
    {
      name: "ابزار و ماشین آلات کشاورزی",
      id: 88,
      attributes: [{
        name: "Year",
        placeholder: "Specify the year of manufacture"
      },
      {
        name: "Type",
        placeholder: "Specify the type of farming tool or machinery"
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
      name: "سایر کشاورزی",
      id: 89,
      attributes: [
        {
          name: "Specific Attributes",
          placeholder: "Specify the key attributes"
        }
      ]
    }
    ]
  },
  {
    name: "غله جات",
    subcategories: [{
      name: "برنج",
      id: 90,
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
      name: "ذرت",
      id: 91,
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
      name: "گندم",
      id: 92,
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
      name: "جو",
      id: 93,
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


// Get the necessary DOM elements
// Get the necessary DOM elements
const categorySelect = document.getElementById("productCategory");
const subCategorySelect = document.getElementById("productSubCategory");
const attributesContainer = document.getElementById("attributesContainer");

// Populate category options dynamically
const populateCategoryOptions = () => {
  categorySelect.innerHTML = ""; // Clear previous options

  categories.forEach((category, index) => {
    const optionElement = document.createElement("option");
    const optionValue = index + 1;
    optionElement.value = optionValue;
    optionElement.textContent = category.name;
    categorySelect.appendChild(optionElement);
  });
};

// Populate subcategory options dynamically based on the selected category
const populateSubCategoryOptions = () => {
  const selectedCategoryIndex = parseInt(categorySelect.value) - 1;
  const selectedCategory = categories[selectedCategoryIndex];
  const divElements = document.querySelectorAll('.removeableInputs');

  subCategorySelect.innerHTML = ""; // Clear previous options
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
  }

  selectedCategory.subcategories.forEach((subcategory) => {
    const optionElement = document.createElement("option");
    const optionValue = subcategory.id;
    optionElement.value = optionValue;
    optionElement.textContent = subcategory.name;
    subCategorySelect.appendChild(optionElement);
  });
};

// Populate attributes dynamically based on the selected category and subcategory
const populateAttributes = () => {
  const selectedCategoryIndex = parseInt(categorySelect.value) - 1;
  const selectedSubCategoryIndex = subCategorySelect.selectedIndex;
  const selectedCategory = categories[selectedCategoryIndex];
  const selectedSubCategory = selectedCategory.subcategories[selectedSubCategoryIndex];

  attributesContainer.innerHTML = ""; // Clear previous attributes

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
};

// Event listeners
categorySelect.addEventListener("change", () => {
  populateSubCategoryOptions();
  populateAttributes();
});

subCategorySelect.addEventListener("change", populateAttributes);

// Initialize the form
populateCategoryOptions();
populateSubCategoryOptions();
populateAttributes();