let students = [
    {
        id: 10101010,
        fullName: "Nguyen Batman",
        phoneNum: 090090090,
        className: "Justice League"
    },
    {
        id: 29202020,
        fullName: "Thor",
        phoneNum: 012345677,
        className: "Marvelstudio"
    },
    {
        id: 39494949,
        fullName: "Onizuka",
        phoneNum: 035353535,
        className: "GTO"
    },
    {
        id: 44849494,
        fullName: "Uzumaki Naruto",
        phoneNum: 948573939,
        className: "Leaf Village"
    },
    {
        id: 59000000,
        fullName: "Heluu MotherFucker",
        phoneNum: 90923857,
        className: "Dum dum omg red bars"
    }
];
let searchById = function(input) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === input) {
            return i;
        }
    }
    return -1;
}

function handleDelete(id) {
    let studentIndex = searchById(id);
    students.splice(studentIndex, 1);
    printStudents(students);
}

function handleUpdate(id) {
    let studentIndex = searchById(id);
    selectedStudent = students[studentIndex];
    $(".update-container").css("display", "flex");
    $(".update-fname").val(selectedStudent.fullName);
    $(".update-pnum").val(selectedStudent.phoneNum);
    $(".update-cname").val(selectedStudent.className);
}

function create (id, fname, pnum, cname) {
    if (searchById(id) === -1) {
        students.push({
            id: id,
            fullName: fname,
            phoneNum: pnum,
            className: cname,
        })
}
}

function update (id, fname, pnum, cname) {
    let studentIndex = searchById(id);
    students[studentIndex].fullName = fname;
    students[studentIndex].phoneNum = pnum;
    students[studentIndex].className = cname;    
}

function clearInputs() {
    $("input").val("");
}

function printStudents (students) {
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
                <td class="id-cell">${students[i].id}</td>
                <td>${students[i].fullName}</td>
                <td>${students[i].phoneNum}</td>
                <td>${students[i].className}</td>
                <td class="option-cell">
                    <button type="button" class="edit-button btn btn-outline-success" onclick="handleUpdate(${students[i].id})">Edit</button>
                    <button type="button" class="del-button btn btn-outline-danger"  onclick="handleDelete(${students[i].id})">Del</button>
                </td>
            </tr>`
        )
    }
}
function main() {
    printStudents(students);
    //Create
    $("#create-button").on("click", function() {
        let id = $(".create-id").val();
        let fname = $(".create-fname").val();
        let pnum = $(".create-pnum").val();
        let cname = $(".create-cname").val();
        if ($(".noti-box").html() !== "") {
            $(".noti-box").html("");
        }
        if(!(id) || !(fname) || !(pnum) || !(cname)) {
            $(".noti-box").append("Please fill all the blanks!");
        } else if(searchById(id) !== -1) {
            $(".noti-box").append("Existing ID!");
        } else {
        create(id, fname, pnum, cname);
        $(".noti-box").append("Create student success!")
        printStudents(students);
        clearInputs();
        }})
    //Update
    $("#update-button").on("click", function() {
        let fname = $(".update-fname").val();
        let pnum = $(".update-pnum").val();
        let cname = $(".update-cname").val();
        update(selectedStudent.id,fname,pnum,cname);
        printStudents(students);
        clearInputs();
    })
}
main();

function searchForId() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputId");
    filter = input.value.toUpperCase();
    table = document.getElementById("student-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }      
    }
}
