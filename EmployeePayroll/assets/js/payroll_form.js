let isUpdate=false;
let employeePayrollObj={};
window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector('#name');
    name.addEventListener('input',function()
    const salary=document.querySelector('#salary');
    setTextValue('.salary-output',salary.value);
    salary.addEventListener('input',function(){
        checkForUpdate();
    });
    const checkForUpdate=()=>{
        const employeePayrollJson=localStorage.getItem('editEmp');
        isUpdate=employeePayrollJson?true:false;
        if(!isUpdate)return;
        employeePayrollObj=JSON.parse(employeePayrollJson);
        setForm();
    }
    const setForm=()=>{
        setValue('#name',employeePayrollObj._name);
        setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
        setSelectedValues('[name=gender]',employeePayrollObj._gender);
        setSelectedValues('[name=department]',employeePayrollObj._department);
        setValue('#salary',employeePayrollObj._salary);
        setTextValue('.salary-output',employeePayrollObj._salary);
        setValue('#notes',employeePayrollObj._note);
        let date=stringifyDate(EmployeePayrollObj._startDate).split(" ");
        setValue('#day',date[0]);
        setValue('#month',date[1]);
        setValue('#year',date[2]);
    }
    const setSelectedValues=(propertyValue,value)=>{
        let allItems=document.querySelectorAll(propertyValue);
        allItems.forEach(item=>{
            if(Array.isArray(value)){
                if(value.includes(item.value)){
                    item.checked=true;
                }
            }
            else if(item.value===value)
            item.checked=true;
        });
    }
});