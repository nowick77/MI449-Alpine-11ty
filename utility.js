const names = ['Jack', 'Jeff', 'George', 'James', 'Geoff', 'John', 'Jerry', 'Jeremy', 'Jared', 'Jerome'];

function getRandomName() {
  const firstName = names[Math.floor(Math.random() * names.length)];
  const lastName = names[Math.floor(Math.random() * names.length)];
  return firstName + ' ' + lastName;
}