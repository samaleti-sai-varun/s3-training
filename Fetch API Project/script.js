const container = document.querySelector("#container");

async function fetchUsers()
{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok)
        {
            throw new Error("Failed to fetch Data");
        }
    const users = await response.json();

    container.innerHTML="";
    users.forEach(user => {
        const card=document.createElement("div");
        const name=document.createElement("h3");
        const email=document.createElement("p");
        const company=document.createElement("p");

        card.classList.add("card");

        name.textContent = user.name;
        email.textContent = user.email;
        company.textContent = user.company.name;

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(company);

        container.appendChild(card);
    });
    }
    catch(error)
    {
        container.textContent="Something Went Wrong";
    }
}
fetchUsers();