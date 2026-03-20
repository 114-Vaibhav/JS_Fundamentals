function loadPage() {
    const hash = window.location.hash;

    const app = document.getElementById("main");
    app.innerHTML = ""; // Clear existing content
    if (hash === "#about") {
        app.innerHTML = `
         <div id="about" class=" p-4">
            <h1 class="text-2xl font-bold mb-4">About Us</h1>
            <p>This is the about page for our single-page application.</p>
        </div>
        `
    } else if (hash === "#contact") {
        app.innerHTML = `
        <div id="contact" class=" p-4">
            <h1 class="text-2xl font-bold mb-4">Contact Us</h1>
            <p>This is the contact page for our single-page application.</p>
        </div>
        `
    } else {
        app.innerHTML = `
        <div id="home" class=" p-4">
            <h1 class="text-2xl font-bold mb-4">Welcome to My SPA</h1>
            <p>This is a simple single-page application using hash-based routing.</p>
        </div>
        `;
    }
}
window.addEventListener("hashchange", loadPage);