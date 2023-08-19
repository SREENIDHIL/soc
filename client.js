document.getElementById("submitBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const type = document.getElementById("type").value;

    const xmlData = `<holder>
                        <name>${name}</name>
                        <age>${age}</age>
                        <type>${type}</type>
                    </holder>&`;  // Add '&' to separate entries

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/submit", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(xmlData);

    alert("Ticket holder information saved on server!");
});
