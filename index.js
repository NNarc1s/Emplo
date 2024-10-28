const data = [
  {
    Serial: "878090239756",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239757",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239758",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239759",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239760",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239761",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239762",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239763",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239764",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
  {
    Serial: "878090239765",
    Date: "29 sep,2004",
    Branch: "Dubai",
    Course: "Project Management Professional",
    Division: "Business",
    Customer: "Mai Dubai LLC",
    CSR: "Danaia Hankir",
    Status: "Sent to LM",
    "Outline Shared": "No",
    Deadline: "29 Oct,2024",
    Action: ["edit", "trash"],
  },
];

let thead = document.getElementsByTagName("thead")[0];
let tbody = document.getElementsByTagName("tbody")[0];

let globalPage = 1;
let elementsPerPage = 5;
let editItemID = 0;

function createHeadRow(list) {
  let tr = document.createElement("tr");
  for (property in list[0]) {
    let td = document.createElement("td");

    let flexAlign = document.createElement("div");
    let thText = document.createElement("span");
    let filterImg = document.createElement("img");

    filterImg.style.width = "15px";
    filterImg.style.height = "15px";

    filterImg.setAttribute(
      "src",
      "https://img.icons8.com/ios-glyphs/30/filter.png"
    );
    flexAlign.classList.add("th-container");
    flexAlign.appendChild(thText);
    thText.textContent = property;
    flexAlign.appendChild(filterImg);
    tr.appendChild(td);
    td.appendChild(flexAlign);
  }
  thead.appendChild(tr);
}

//  B O D Y

function populateTable(currentPage, list) {
  tbody.innerHTML = "";
  let start = currentPage * elementsPerPage - 5;
  let end = start + 5;

  let newData = list.slice(start, end);

  for (element of newData) {
    let tr = document.createElement("tr");

    for (key in element) {
      let td = document.createElement("td");
      tr.appendChild(td);
      if (key != "Action") {
        td.textContent = element[key];
      } else if (key === "Action") {
        let btnFeature = ["edit", "trash"];
        let btnAlign = document.createElement("div");

        for (btnText of btnFeature) {
          let btn = document.createElement("btn");
          let btnImg = document.createElement("img");
          btn.classList.add("btn-details", `btn-${btnText}`);
          btn.appendChild(btnImg);
          btnImg.classList.add("table-btn");
          btnImg.setAttribute("src", `./icons/${btnText}.png`);
          btnAlign.classList.add("table-btn-align");

          btnAlign.appendChild(btn);
        }

        td.appendChild(btnAlign);
      }
    }
    tbody.append(tr);
  }
}

function footerPages(list) {
  let pagCnt = document.getElementById("pageCnt");
  let totalPages = Math.ceil(list.length / elementsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    let newBtn = document.createElement("button");
    newBtn.textContent = i;
    newBtn.classList.add("page");
    if (newBtn.textContent == globalPage) {
      newBtn.classList.add("selected-page");
    }

    newBtn.addEventListener("click", function handlePage(e) {
      globalPage = newBtn.textContent;
      populateTable(globalPage, list);
      for (btn of e.currentTarget.parentNode.children) {
        if (btn.textContent == globalPage) {
          newBtn.classList.add("selected-page");
        } else {
          btn.classList.remove("selected-page");
        }
      }
    });

    pagCnt.appendChild(newBtn);
  }
}

function handleOpenModal() {
  let main = document.getElementById("main");
  let openModal = document.getElementById("open-modal");
  let tableForm = document.getElementById("table-form");
  openModal.addEventListener("click", function (e) {
    e.preventDefault();
    tableForm.style.display = "grid";
    main.classList.add("main");
  });
}

function handleCloseModal() {
  let main = document.getElementById("main");
  let tableForm = document.getElementById("table-form");
  let closeBtn = document.getElementById("close-modal");
  closeBtn.addEventListener("click", function () {
    tableForm.style.display = "none";
    main.classList.remove("main");
  });
}

function handleAddItem() {
  let tableForm = document.getElementById("table-form");
  let serialInput = document.getElementById("Serial");
  let id = Math.floor(Date.now() * Math.random());
  serialInput.value = id;

  tableForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(tableForm);
    formData.append("Action", "");
    let formObject = Object.fromEntries(formData.entries());
    data.push(formObject);
    tableForm.style.display = "none";
    main.classList.remove("main");
  });
}
function handleEditItem() {
  let tableForm = document.getElementById("table-form");
  let editBtn = document.getElementsByClassName("btn-edit");
  for (let btn of editBtn) {
    btn.addEventListener("click", function (e) {
      let tr = e.currentTarget.closest("tr");

      let trChildList = tr.children;
      let specificID = tr.children[0].textContent;

      // OPEN TABLE FORM
      tableForm.style.display = "grid";
      main.classList.add("main");
      // ITERATE THROUGH TABLE CELL AND DISPLAY THEM IN FORM
      let inputs = document.querySelectorAll("#table-form input ");

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = trChildList[i].textContent;
      }
      tableForm.addEventListener("submit", function (e) {
        e.preventDefault();

        for (element of data) {
          if (element.Serial == specificID) {
            var specificItem = element;
          }
        }
        for (let input of inputs) {
          let key = input.name;
          specificItem[key] = input.value;
        }

        populateTable(globalPage, data);
      });
    });
  }
}

createHeadRow(data);
handleAddItem();
populateTable(globalPage, data);
footerPages(data);
handleOpenModal();
handleCloseModal();
handleEditItem();

