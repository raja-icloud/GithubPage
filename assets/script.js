function createRowsAndAppendIntoTableBody(users) {
    const tbody = document.getElementById('table-body')
    let html = ``
    for (const user of users) {
        html += `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                        <td>
                            <button onclick="deleteUser(${user.id})">delete</button>
                        </td>
                <tr>
        `
    }
    tbody.innerHTML = html
}

// global storage
// let usersData = []

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((users)=>{
        usersData = users;
        createRowsAndAppendIntoTableBody(usersData)
    })


function deleteUser(userId) {
    const remainingUsers = usersData.filter(u=>u.id !== userId)
    usersData = remainingUsers;
    createRowsAndAppendIntoTableBody(usersData)
    alert("User "+ userId + "was deleted")
}

