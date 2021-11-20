let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(empPayrollList.length==0)return;
    let innerHtml='${headerHtml}';
    for(const empPayrollData of empPayrollList){
        innerHtml = '${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></img></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${stringifyDate(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)"
                src="../assets/icons/delete-black-18dp.svg" alt="delete"></img>
                <img id="${empPayrollData._id}" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg" alt="edit"></img></td>
                </tr>
                ';
    }
    document.querySelector('#table-display').innerHtml=innerHtml;
}