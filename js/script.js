const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: name } = document.getElementById('name');
  const { value: email } = document.getElementById('email');

  addNewClient({
    name,
    email,
  });
});

function addNewClient(newClient) {
  let data = JSON.parse(localStorage.getItem('lead'));
  if (!data) {
    data = {
      nextID: 0,
      clients: [],
    };
  }
  data.clients.push({ ...newClient, id: data.nextID++ });
  localStorage.setItem('lead', JSON.stringify(data));
}
