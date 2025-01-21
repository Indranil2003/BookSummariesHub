const form = document.getElementById('summary-form');
const summaryList = document.getElementById('summary-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const rating = document.getElementById('rating').value;
    const summary = document.getElementById('summary').value;

    if (title && category && rating && summary) {
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        summaryItem.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Rating:</strong> ${rating}/5</p>
            <p>${summary}</p>
        `;

        summaryList.appendChild(summaryItem);
        form.reset();

        if (summaryList.children[0].tagName === 'P') {
            summaryList.children[0].remove();
        }
    }
});
