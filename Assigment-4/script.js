document.getElementById("fetchBtn").addEventListener("click", fetchData);

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    data.forEach(todo => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.classList.add(todo.completed ? "completed" : "pending");

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p class="status">
                Status: ${todo.completed ? "✅ Completed" : "⏳ Pending"}
            </p>
        `;

        resultDiv.appendChild(div);
    });
}