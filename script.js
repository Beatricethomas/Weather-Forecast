const menuItems = document.querySelectorAll('.menu-item');
const contentBody = document.getElementById('content-body');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function() {
    const target = this.dataset.target;
    contentBody.textContent = `Content for ${target} will be loaded here.`;
    contentBody.classList.add('active');
  });
});
