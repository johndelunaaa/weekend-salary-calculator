const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

function addRow(event) {
    console.log('Form Submitted!');

    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const idInput = document.getElementById("id-input").value;
    const titleInput = document.getElementById("title-input").value;
    const annualSalaryInput = document.getElementById("annual-salary").value;

    const delButtn = `<button onClick="deleteButton(event)">Delete</button>`;

    tbody.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idInput}</td>
            <td>${titleInput}</td>
            <td>${annualSalaryInput}</td>
            <td>${delButtn}</td>
`
}

function deleteButton(event) {
    let parentRow = event.target.parentElement.parentElement
    console.log('Row Removed!');
    parentRow.remove();
}

form.addEventListener("submit", addRow);