const datas = [
  {
    id: 1,
    company: "Photosnap",
    logo: "https://i.ibb.co/XyCMjgw/photosnap.png",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["Frontend", "Senior", "HTML", "CSS", "javaSript "],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "https://i.ibb.co/cDKpYwj/manage.png",
    new: false,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Frontend", "Senior", "HTML", "React"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "https://i.ibb.co/n3wcHth/account.png",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["Senior", "HTML", "CSS", "javaSript "],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "https://i.ibb.co/hZpvng1/myhome.png",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["Frontend", "Senior", "HTML", "CSS"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "https://i.ibb.co/2cD647y/loop-studios.png",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Frontend", "Senior", "HTML", "CSS", "javaSript "],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "https://i.ibb.co/G0NkcNY/faceit.png",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "https://i.ibb.co/xS2BB04/shortly.png",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["Frontend", "Senior", "HTML", "CSS", "javaSript "],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "https://i.ibb.co/bBTm25V/insure.png",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "https://i.ibb.co/jTK0HRz/eyecam-co.png",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "https://i.ibb.co/7Cs5gWY/the-air-filter-company.png",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

var productListDiv = document.getElementById("job_card-section");
var elements = "";
// Use map to create an array of HTML strings for each data object
datas.map(data => {
  const languagesButtons = (elements += `
    <!-- card start  -->
    <div class="job_card   ${
      data.new ? `new_card` : ""
    }   d-block d-md-flex  align-items-center  justify-content-between px-2 px-md-3 px-lg-5">
      <div class=" d-flex align-items-center-lg">
        <div class="me-4"><img src="${data.logo}" alt=""></div>
        <!-- text -->
        <div>
          <div class="company">
          <span class="cname fw-bold">${data.company}</span>
          ${data.new ? `<span class="new ms-2">new!</span>` : ""}
          ${data.featured ? `<span class="featured ms-2">featured</span>` : ""}
          
         </div>
          <div class="pasition"> ${data.position}</div>
          <div class="details">
            <span>${data.postedAt}</span>
            <span class="mx-1">&nbsp;•&nbsp;</span>
            <span>${data.contract}</span>
            <span class="mx-1">&nbsp;•&nbsp;</span>
            <span>${data.location}</span>
          </div>
        </div>
      </div>
      <!-- tag section start  -->
      <div class="filter-btn ">
      ${data.languages
        .map(
          languages =>
            `<button onclick="search('${languages}')">${languages}</button>`
        )
        .join("")}

      </div>
      <!-- tag section end-->
    </div>
    <!-- card end  -->
      `);
});

// Set the innerHTML of the productListDiv to the joined HTML strings
productListDiv.innerHTML = elements;

function search(name) {
  let dataArray = JSON.parse(localStorage.getItem("data")) || [];

  // Check if the product is already in the cart
  const isProductInCart = dataArray.some(data => name === data);

  if (!isProductInCart) {
    // Add the product to the cart
    dataArray.push(name);
    localStorage.setItem("data", JSON.stringify(dataArray));
  }

  let storedData = JSON.parse(localStorage.getItem("data")) || [];

  const id_array = [];

  storedData.map(storeitem => {
    // Filter the data based on the selected language
    const filteredData = datas.filter(data =>
      data.languages.includes(storeitem)
    );
    filteredData.map(filteredDat => {
      // Push the filtered data to the id_array
      id_array.push(filteredDat);
    });
  });

  // Remove duplicate data based on id using reduce
  var filteredArray = id_array.reduce((accumulator, item) => {
    if (!accumulator[item.id]) {
      accumulator[item.id] = item;
    }
    return accumulator;
  }, {});

  var elements = "";

  Object.values(filteredArray).map(filteredArrayItem => {
    elements += `
    <!-- card start  -->
    <div class="job_card   ${
      filteredArrayItem.new ? `new_card` : ""
    }   d-block d-md-flex  align-items-center  justify-content-between px-2 px-md-3 px-lg-5">
      <div class=" d-flex align-items-center-lg">
        <div class="me-4"><img src="${filteredArrayItem.logo}" alt=""></div>
        <!-- text -->
        <div>
          <div class="company">
          <span class="cname fw-bold">${filteredArrayItem.company}</span>
          ${filteredArrayItem.new ? `<span class="new ms-2">new!</span>` : ""}
          ${
            filteredArrayItem.featured
              ? `<span class="featured ms-2">featured</span>`
              : ""
          }
          
         </div>
          <div class="pasition"> ${filteredArrayItem.position}</div>
          <div class="details">
            <span>${filteredArrayItem.postedAt}</span>
            <span class="mx-1">&nbsp;•&nbsp;</span>
            <span>${filteredArrayItem.contract}</span>
            <span class="mx-1">&nbsp;•&nbsp;</span>
            <span>${filteredArrayItem.location}</span>
          </div>
        </div>
      </div>
      <!-- tag section start  -->
      <div class="filter-btn ">
      ${filteredArrayItem.languages
        .map(
          languages =>
            `<button onclick="search('${languages}')">${languages}</button>`
        )
        .join("")}
      </div>
      <!-- tag section end-->
    </div>
    <!-- card end  -->
       `;
  });

  // Update the HTML of productListDiv with the filtered data
  productListDiv.innerHTML = elements;

  // local storage  all data show in tag section

  var tag_btns = document.getElementById("tag-btn");
  var tagelements = "";

  var localstoredData = JSON.parse(localStorage.getItem("data")) || [];

  localstoredData.map(tag_btn => {
    tagelements += `
      <button onclick="deletetagItem('${tag_btn}')" >${tag_btn} <span class="d-flex align-items-center justify-content-center "><i class="fa-solid fa-xmark"></i></span></button>
    `;
  });
  tag_btns.innerHTML = tagelements;
}

// clear local storage all data

function clearLocalstorage() {
  localStorage.clear();
  window.location = "./index.html";
}

// delete tag item
function deletetagItem(itemname) {
  var localStorageKey = "data";
  // Retrieve the array from local storage
  var storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];

  // Find the index of the element to remove
  var indexToRemove = storedData.indexOf(itemname);

  // Remove the element from the array if found
  if (indexToRemove !== -1) {
    storedData.splice(indexToRemove, 1);
  }
  // Store the updated array back in local storage
  localStorage.setItem(localStorageKey, JSON.stringify(storedData));

  // Update the HTML of productListDiv with the filtered data
  productListDiv.innerHTML = elements;

  // local storage  all data show in tag section

  var tag_btns = document.getElementById("tag-btn");
  var tagelements = "";

  var localstoredData = JSON.parse(localStorage.getItem("data")) || [];

  localstoredData.map(tag_btn => {
    tagelements += `
      <button onclick="deletetagItem('${tag_btn}')" >${tag_btn} <span class="d-flex align-items-center justify-content-center "><i class="fa-solid fa-xmark"></i></span></button>
    `;
  });
  tag_btns.innerHTML = tagelements;
}
