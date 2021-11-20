const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml='${headerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></img></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
            <div class='dept-label'>${empPayrollData._department[0]}</div>
            <div class='dept-label'>${empPayrollData._department[1]}</div>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)"
            src="../assets/icons/delete-black-18dp.svg" alt="delete"></img>
            <img name="${empPayrollData._id}" onclick="update(this)"
            src="../assets/icons/create-black-18dp.svg" alt="edit"></img>
        </td>
        </tr>
        ';
        document.querySelector('#table-display').innerHTML=innerHtml;
}

const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name:'Narayan Mahadevan',
            _gender:'male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate:'29 oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Amarpa Shashanka Keerthi Kumar',
            _startDate:'female',
            _department:[
                'sales'
            ],
            _salary:'400000',
            _startDate:'29 oct 2019',
            _note:'',
            _id:new Date().getTime()+1,
            _profilePic:'../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}