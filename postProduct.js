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