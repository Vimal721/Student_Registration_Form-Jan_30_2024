document.getElementById('studentForm').addEventListener('submit', function(event) {
    saveBtn(event);
});

let radioInputs = document.querySelectorAll('input[type="radio"]');
radioInputs.forEach(radioInput => {
    radioInput.addEventListener('dblclick', function(event) {
        if (radioInput.checked) {
            radioInput.checked = false;
        }
    });
});

function saveBtn(event){
    event.preventDefault();

    let studentForm = document.getElementById('studentForm');
    const formData = new FormData(studentForm);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    if (formData.get('name') === '' || formData.get('age') === '' || formData.get('date') === '' || formData.get('gender') === '' || formData.get('course') === '' || formData.get('email') === '') {

        let existingError = document.querySelector('.para');
        if (existingError) {
            existingError.remove(); 
        }

        let para = document.createElement('p');
        para.className = 'para';
        para.textContent = "Please fill in all fields *";

        studentForm.appendChild(para);

        setTimeout(function() {
            para.remove();
        }, 3000);

        return; 
    }

    appendDataToTable(data);

    studentForm.reset();
    
}

function appendDataToTable(data) {
    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.date}</td>
        <td>${data.gender}</td>
        <td>${data.course}</td>
        <td>${data.email}</td>
    `;

    tableBody.appendChild(newRow);
}