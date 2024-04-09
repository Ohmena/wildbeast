const tabs = document.querySelectorAll("[data-menu='tab'] li a");
const content = document.querySelectorAll("[data-menu='content']")

if(tabs.length && content.length) {
    content[0].classList.add('active');

  function activeTabs (index) {
    content.forEach((content) => {
      content.classList.remove('active');
    })
    content[index].classList.add('active');
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activeTabs(index);
    })
  })
}

