
document.getElementById('add-student').addEventListener('click', function() {
    let name = prompt('Enter student name:');
    let email = prompt('Enter student email:');
    let phone = prompt('Enter student phone:');
    let enrollNumber = prompt('Enter enrollment number:');
    let date = new Date().toLocaleDateString();

    if (name && email && phone && enrollNumber) {
        let table = document.getElementById('student-list');
        let row = table.insertRow();
        row.innerHTML = `<td>${name}</td><td>${email}</td><td>${phone}</td><td>${enrollNumber}</td><td>${date}</td><td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="this.parentElement.parentElement.remove()">Delete</button>
        </td>`;
    }
});

document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#student-list tr');
    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
});

function editRow(button) {
    let row = button.parentElement.parentElement;
    let cells = row.getElementsByTagName('td');
    let name = prompt('Edit name:', cells[0].innerText);
    let email = prompt('Edit email:', cells[1].innerText);
    let phone = prompt('Edit phone:', cells[2].innerText);
    let enrollNumber = prompt('Edit enrollment number:', cells[3].innerText);

    if (name && email && phone && enrollNumber) {
        cells[0].innerText = name;
        cells[1].innerText = email;
        cells[2].innerText = phone;
        cells[3].innerText = enrollNumber;
    }
}
