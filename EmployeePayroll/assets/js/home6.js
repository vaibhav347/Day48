window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml=()=>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml='${headerHtml}';
    let empPayrollList=createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml='${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></img></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
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
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}