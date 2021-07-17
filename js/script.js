const form = document.getElementById('form');
const name = document.getElementById('name');
const option = document.getElementById('option');
const optionButton = document.getElementById('option-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: name } = document.getElementById('name');
  const { value: email } = document.getElementById('email');
  form.style.display = 'none';
  option.style.display = 'grid';
  addNewClient({
    name,
    email,
  });
});

optionButton.addEventListener('click', () => {
  form.style.display = 'grid';
  option.style.display = 'none';
});

const arrow = document.getElementById('arrow');
const footer = document.getElementById('footer');

arrow.addEventListener('click', () => {
  console.log('object');
  footer.scrollIntoView({ block: 'end', behavior: 'smooth' });
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
