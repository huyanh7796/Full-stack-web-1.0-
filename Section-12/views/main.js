let students = [];
let limit = 5;
let page = 1;
let totalPage = 0;

let fetchStudents = function (name) {
  // pageCount(name);
  let url = `http://localhost:3000/api/students?limit=${limit}&offset=${(page - 1) * limit}`;
  if (name) {
    url += `fullName=${name}`;
  }
  axios.get(url).then(response => {
    totalPage = Math.ceil(response.total / limit);
  })
  return axios.get(url).then(response => {
    students = response.data; // Query from database
  });
}

let searchById = function(input) {
    for (let i = 0; i < students.length; i++) {
        if (students[i]._id === input) {
            return i;
        }
    }
    return -1;
}

function handleDelete(id) {
  axios.delete(`http://localhost:3000/api/students/${id}`).then(function (response) {
    if (response.status === 200) {
      let studentIndex = searchById(id);
      students.splice(studentIndex, 1);
      fetchStudents().then(function() {
        printStudents(students);
      })
    }
  });
}

function handleUpdate(id) {
    let studentIndex = searchById(id);
    selectedStudent = students[studentIndex];
    $(".update-container").css("display", "flex");
    $(".update-fname").val(selectedStudent.fullName);
    $(".update-pnum").val(selectedStudent.phoneNum);
    $(".update-cname").val(selectedStudent.className);
}

function create (fname, pnum, cname) {
  // Call API REQUEST TO CREATE NEW STUDENT
  axios.post('http://localhost:3000/api/students', {
    fullName: fname,
    phoneNum: pnum,
    className: cname
  }).then(response => {
    if (response.status === 200) {
      students.push(response.data);
      fetchStudents().then(function() {
        printStudents(students);
      })
    }
  })
}

function update (id, fname, pnum, cname) {
    axios.put(`http://localhost:3000/api/students/${id}`, {
      fullName: fname,
      phoneNum: pnum,
      className: cname
    }).then(response => {
      if (response.status === 200) {
        let studentIndex = searchById(id);
        students[studentIndex].fullName = fname;
        students[studentIndex].phoneNum = pnum;
        students[studentIndex].className = cname;
        fetchStudents().then(function() {
          printStudents(students);
        })
      }
    });
}

function navButton(page) {
  page = page;
  fetchStudents().then(function() {
    printStudents(students);
  })
}

function printPagination(page) {
  //print pagination
  $("#student-table").append(
    `<nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link previous" onclick="navButton('${i}')" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
            </li>`);
    for (let i = 0; i < totalPage; i++) {
      $("#student-table").append(
        `<li class="page-item"><a class="page-link" onclick="navButton('${i+1})">${i+1}</a></li>`
      )
    }        
    $("#student-table").append(  
            `<li class="page-item">
          <a class="page-link next" onclick="navButton('${i+2}')" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>`
    )
}

function clearInputs() {
    $("input").val("");
}

function printStudents (students, page) {
    $("#student-table").html(
    `<tr>
        <th style="width:80px" scope="col">ID</th>
        <th style="width:150px" scope="col">Full name</th>
        <th style="width:100px" scope="col">Phone number</th>
        <th style="width:70px" scope="col"> Class name</th>
        <th style="width:70px" scope="col"> Options</th>
    </tr>`);
    for (let i = 0; i < students.length; i++) {
        $("#student-table").append(
            `<tr>
                <td class="id-cell">${students[i]._id}</td>
                <td>${students[i].fullName}</td>
                <td>${students[i].phoneNum}</td>
                <td>${students[i].className}</td>
                <td class="option-cell">
                    <button type="button" class="edit-button btn btn-outline-success" onclick="handleUpdate('${students[i]._id}')">Edit</button>
                    <button type="button" class="del-button btn btn-outline-danger"  onclick="handleDelete('${students[i]._id}')">Del</button>
                </td>
            </tr>`
        )
    }
    printPagination(page);
}

function main() {
    fetchStudents()
    .then(function() {
      printStudents(students);
    });
    //Create
    $("#create-button").on("click", function() {
        let fname = $(".create-fname").val();
        let pnum = $(".create-pnum").val();
        let cname = $(".create-cname").val();
        if ($(".create-noti").html() !== "") {
            $(".create-noti").html("");
        }
        if(!(fname) || !(pnum) || !(cname)) {
            $(".create-noti").append("Please fill all the blanks!");
        } else {
        create(fname, pnum, cname);
        $(".create-noti").append("Create student success!")
        fetchStudents()
        .then(function() {
          printStudents(students);
        });
        clearInputs();
        }})
    //Update
    $("#update-button").on("click", function() {
        if ($(".update-noti").html() !== "") {
            $(".update-noti").html("");
        }
        let fname = $(".update-fname").val();
        let pnum = $(".update-pnum").val();
        let cname = $(".update-cname").val();
        update(selectedStudent._id,fname,pnum,cname);
        $(".update-noti").append("Update success!");
        fetchStudents()
        .then(function() {
          printStudents(students);
        });
        clearInputs();
    })
}
main();

function searchByName(event) {
  event.preventDefault();

  let name = document.getElementById("input-name").value;
  fetchStudents(name).then(function() {
    printStudents(students);
  });
}
