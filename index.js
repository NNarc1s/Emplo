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
  {
    Serial: "878090239766",
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
console.log(data.length);
const thead = document.getElementsByTagName("thead")[0];

const tbody = document.getElementsByTagName("tbody")[0];

const main = document.getElementById("main");
const tableForm = document.getElementById("table-form");

let nextPage = document.getElementById("next-page");
let prevPage = document.getElementById("prev-page");

let globalPage = 1;
let elementsPerPage = 5;
let editItemFlag = false;
let editItemID = 0;
let totalPages = Math.ceil(data.length / elementsPerPage);

function createHeadRow(list) {
  let tr = document.createElement("tr");
  for (property in list[0]) {
    let th = document.createElement("th");

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

    tr.appendChild(th);
    th.appendChild(flexAlign);
  }
  thead.appendChild(tr);
}

//  B O D Y

function populateTable(currentPage, list) {
  tbody.innerHTML = "";

  let start = currentPage * elementsPerPage - 5;
  let end = start + elementsPerPage;

  let newData = list.slice(start, end);

  for (element of newData) {
    let tr = document.createElement("tr");

    for (key in element) {
      let td = document.createElement("td");
      tr.appendChild(td);

      if (key != "Action") {
        td.textContent = element[key];
      } else if (key === "Action") {
        let btnFeatures = ["edit", "trash"];
        let btnAlign = document.createElement("div");

        for (feature of btnFeatures) {
          let btn = document.createElement("button");
          let btnImg = document.createElement("img");

          btn.classList.add("btn-details");
          btnImg.classList.add(`btn-${feature}`);
          btn.appendChild(btnImg);

          btnImg.classList.add("table-btn");
          btnImg.setAttribute("src", `./icons/${feature}.png`);

          btnAlign.classList.add("table-btn-align");
          btnAlign.appendChild(btn);
        }

        td.appendChild(btnAlign);
      }
    }
    tbody.append(tr);
  }
  handleEditItem();
  handleDelete();
}
populateTable(globalPage, data);

function handlePrevNextPage(btn, type) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (type == "prev") {
      globalPage = Number(globalPage) - 1;
      if (globalPage < 1) {
        globalPage = totalPages;
      }
    } else if (type == "next") {
      globalPage = Number(globalPage) + 1;
      if (globalPage > totalPages) {
        globalPage = 1;
      }
    }
    populateTable(globalPage, data);
    footerPages(data);
    console.log(globalPage);
  });
}

function footerPages(list) {
  let pagCnt = document.getElementById("pageCnt");

  pagCnt.innerHTML = "";
  totalPages = Math.ceil(data.length / elementsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    let footerBtn = document.createElement("button");
    footerBtn.textContent = i;
    footerBtn.classList.add("page");

    footerBtn.textContent == globalPage &&
      footerBtn.classList.add("selected-page");

    footerBtn.addEventListener("click", function handlePage(e) {
      globalPage = footerBtn.textContent;

      populateTable(globalPage, list);

      for (btn of e.currentTarget.parentNode.children) {
        if (btn.textContent == globalPage) {
          footerBtn.classList.add("selected-page");
        } else {
          btn.classList.remove("selected-page");
        }
      }
    });

    pagCnt.appendChild(footerBtn);
  }
}

function handleOpenModal(btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    tableForm.style.display = "grid";
    main.classList.add("main");

    // clear inputs value and add dynamic  id to the newest table row

    if (btn.classList.contains("open-modal")) {
      let id = Math.floor(Date.now() * Math.random());
      let inputs = document.querySelectorAll("#table-form input");
      for (let input of inputs) {
        if (input.name == "Serial") {
          input.value = id;
        } else {
          input.value = "";
        }
      }
    }
  });
}

function closeModal() {
  tableForm.style.display = "none";
  main.classList.remove("main");
}

function handleCloseModal(element) {
  if (element && element.classList.contains("close-modal")) {
    element.addEventListener("click", function () {
      tableForm.style.display = "none";
      main.classList.remove("main");
    });
  }
}

function handleFormSubmit() {
  tableForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(tableForm);
    formData.append("Action", "");
    let formObject = Object.fromEntries(formData.entries());

    if (editItemFlag) {
      for (let element of data) {
        if (element.Serial == editItemID) {
          for (let key in formObject) {
            element[key] = formObject[key];
          }
        }
      }
    } else {
      data.push(formObject);
    }
    editItemFlag = false;
    closeModal();
    populateTable(globalPage, data);
    footerPages(data);
  });
}

function handleAddItem() {
  editItemFlag = false;
  let openModalBtn = document.getElementById("open-modal");
  handleOpenModal(openModalBtn);

  let closeBtn = document.getElementById("close-modal");
  handleCloseModal(closeBtn);
}

function checkAndSelectType(btnCollection, type) {
  btnCollection = document.getElementsByClassName(`btn-${type}`);

  for (let btn of btnCollection) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let tr = e.currentTarget.closest("tr");
      let trChildList = tr.children;

      let specificID = trChildList[0].textContent;
      if (type == "edit") {
        let inputs = document.querySelectorAll("#table-form input ");
        editItemID = specificID;
        editItemFlag = true;

        // OPEN TABLE FORM

        tableForm.style.display = "grid";
        main.classList.add("main");

        // ITERATE THROUGH TABLE CELL AND DISPLAY THEM IN FORM
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = trChildList[i].textContent;
        }
      } else if (type == "trash") {
        editItemID = specificID;
        for (let i = 0; i < data.length; i++) {
          if (data[i].Serial == editItemID) {
            data.splice(i, 1);
            editItemID = 0;
          }
        }
        populateTable(globalPage, data);
        let elementsPerCurrentPage = data.slice(
          (globalPage - 1) * elementsPerPage,
          globalPage * elementsPerPage
        ).length;
        if (elementsPerCurrentPage == 0 && globalPage > 1) {
          globalPage--;
          populateTable(globalPage, data);
        }
      }
      footerPages(data);
    });
  }
}

function handleEditItem() {
  let editBtnCol = document.getElementsByClassName("btn-edit");
  checkAndSelectType(editBtnCol, "edit");
}
function handleDelete() {
  let trashBtnCol = document.getElementsByClassName("btn-trash");
  checkAndSelectType(trashBtnCol, "trash");
}

createHeadRow(data);

footerPages(data);
handleAddItem();
handleFormSubmit();
handlePrevNextPage(nextPage, "next");
handlePrevNextPage(prevPage, "prev");
handleDelete();
