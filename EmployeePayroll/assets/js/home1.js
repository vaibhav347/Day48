window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml=()=>{
    const innerHtml = '
<table>
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
        
        <tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></img></td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
        <td><div class='dept-label'>HR</div><div class='dept-label'>Finance</div></td>
        <td>300000</td>
        <td>1 Nov 2020</td>
        <td>
            <img name="1" onclick="remove(this)" src="../assets/icons/delete-back-18dp.svg" alt="delete"></img>
                <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit"></img>
        </td>
    </tr>
    </table>
    
    ';
    document.querySelector('#table-display').innerHtml=innerHtml;
}