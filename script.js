fetch('holder_data.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        const holders = xmlDoc.getElementsByTagName('holder');

        const table = document.getElementById('holderTable');

        for (let i = 0; i < holders.length; i++) {
            const holder = holders[i];
            const name = holder.querySelector('name').textContent;
            const age = holder.querySelector('age').textContent;
            const type = holder.querySelector('type').textContent;

            const row = table.insertRow();
            const nameCell = row.insertCell(0);
            const ageCell = row.insertCell(1);
            const typeCell = row.insertCell(2);

            nameCell.innerHTML = name;
            ageCell.innerHTML = age;
            typeCell.innerHTML = type;
        }
    })
    .catch(error => console.error('Error fetching holder data:', error));
    
    setInterval(d,1000);
    function d(){
        let a = new Date();
    document.getElementById("demo").innerHTML ="Records on date:- " +a.getMonth()+ " "+ a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    }