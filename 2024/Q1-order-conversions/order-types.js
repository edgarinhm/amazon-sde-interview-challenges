var OrderBatch = function () {
    this.orderCount = null;
    this.batchId = null;
    this.orders = [];
}


var Order = function () {
    this.quantity = null;
    this.orderId = null;
    this.partNumber = null;
    this.emailAddress = null;
}

module.exports = {
    OrderBatch: OrderBatch,
    Order: Order
};