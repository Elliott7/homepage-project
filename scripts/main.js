

// Updating the news
const newsContent = document.querySelectorAll('#area-one section div');
let count = 1
newsContent.forEach(function(item){
    item.textContent = `update number ${count++}`;
});

