const products = [  {name: 'картошка', price: '20'},
                    {name: 'хлеб', price: '18'},
                    {name: 'огурец', price: '25'},
                    {name: 'молоко', price: '21'},
                    {name: 'яблоко', price: '30'} ];
                    
const tbody = document.querySelector('tbody');
                    
let html = '';
products.forEach(element => {
    const node = document.createElement('tr');
    node.innerHTML = `
        <tr>
            <td>${element.name}</td>
            <td>${element.price}</td>
        </tr>
    `;

    tbody.appendChild(node);
});