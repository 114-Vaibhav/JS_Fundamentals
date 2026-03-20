const content = document.getElementById('content');
const loading = document.getElementById('loading');
let page = 1;

// Fetch data from API
let data = [];
async function fetchData() {
    loading.style.display = 'block';
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const newData = await res.json();
    data = [...data, ...newData];
    loading.style.display = 'none';
    return newData;
}

// Show data in DOM
function showData(data) {
    data.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        content.appendChild(postEl);
        console.log(`Loaded post ${post.id}`, postEl);
    });
}

// Load initial data
fetchData().then(showData);

// Load more data on scroll
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        page++;
        fetchData().then(showData);
    }
});





