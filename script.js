function createTable() 
{
	const table = document.getElementById("myTable");
    table.innerHTML = "";
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");
    const rows = Number(rn);
    const cols = Number(cn);
    if (isNaN(rows) || isNaN(cols)) 
	{
        return;
    }
    if (rows <= 0 || cols <= 0) 
	{
        alert("Invalid input");
        return;
    }
    for (let i = 0; i < rows; i++) 
	{
        const tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) 
		{
            const td = document.createElement("td");
            td.innerHTML = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
