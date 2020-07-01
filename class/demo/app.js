import getNorthwind from './Ajax.js';
window.addEventListener('load', () => {
    document.querySelector('#customerList')?.addEventListener('click', getOrdersByCustomerId);
    getNorthwind("https://northwind.now.sh/api/customers", firstLoad);
});
function getOrdersByCustomerId(event) {
    //const link = event.target as HTMLElement;
    event.preventDefault();
    const link = event.target;
    if (link.nodeName !== "A") {
        return;
    }
    // https://northwind.now.sh/api/orders?customerId=ALFKI
    const id = link.id;
    const url = "https://northwind.now.sh/api/orders?customerId=" + id;
    getNorthwind(url, fillOrders);
}
function fillOrders() {
    const orders = JSON.parse(this.responseText);
    const header = `<tr><th>ID</th><th>Order Date</th><th>Ship Name</th></tr>`;
    const html = orders.map(order => `<tr>
            <td>${order.id}</td>
            <td>${order.orderDate}</td>
            <td>${order.shipName}</td>
        </tr>`).join('');
    let ordersList = document.querySelector('#customerOrders');
    if (ordersList) {
        const content = html === "" ? "<tr><td>No Orders</td></tr>" : html;
        ordersList.innerHTML =
            "<table border='1'>" + header + content + "</table>";
    }
}
function firstLoad() {
    let customers = JSON.parse(this.responseText);
    // console.log(customers)
    let buttons = customers.map(customer => `<a href="#" id="${customer.id}">${customer.companyName}</a><br>`);
    let list = document.querySelector('#customerList');
    if (list) {
        list.innerHTML = buttons.join('');
    }
}
