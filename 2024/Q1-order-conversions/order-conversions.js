const { OrderBatch, Order } = require("./order-types");

function orderConversions() {
    function deserializeOrder(dataLength, serializedData, maxOrderCount, orderBatch) {
        const headerBytes = 2;
        const payloadLengthBytes = 8;
        const orderCountBytes = 4;
        const batchIdBytes = 8;
        const headerId = '0xCEFA';
        const orderBytes = 58;
        const orderQuantityBytes = 2;
        const orderIdBytes = 8;
        const partNumberBytes = 16;
        const emailAddressBytes = 32;

        const header = serializedData.slice(0, headerBytes).reduce((accumulartor, currentValue) => accumulartor.toString(16) + currentValue.toString(16), '');

        const { STATUS_INSUFFICIENT_OUTPUT_BUFFER, STATUS_NULL_INPUT } = getStatus('', serializedData, JSON.stringify(orderBatch));

        if (dataLength !== serializedData.length) {
            return STATUS_INSUFFICIENT_OUTPUT_BUFFER
        }

        if (parseInt(header, 16) !== parseInt(headerId, 16)) {
            return STATUS_NULL_INPUT
        }

        orderBatch.orderCount = serializedData.slice(headerBytes + payloadLengthBytes, headerBytes + payloadLengthBytes + orderCountBytes).reduce((accumulartor, currentValue) => accumulartor + parseInt(currentValue, 16), 0);
        orderBatch.batchId = serializedData.slice(headerBytes + payloadLengthBytes + orderCountBytes, headerBytes + payloadLengthBytes + orderCountBytes + batchIdBytes).reduce((accumulartor, currentValue) => accumulartor + parseInt(currentValue, 16), 0);

        const orderCount = Math.floor((dataLength - (headerBytes + payloadLengthBytes)) / orderBytes);

        if (orderCount > maxOrderCount) {
            return STATUS_NULL_INPUT
        }

        for (let index = 0; index < orderCount; index++) {
            const order = new Order();
            const orderStart = headerBytes + payloadLengthBytes + orderCountBytes + batchIdBytes + (index * orderBytes);
            const orderEnd = orderStart + orderBytes;

            const orderData = serializedData.slice(orderStart, orderEnd);
            order.quantity = orderData.slice(0, orderQuantityBytes).reduce((accumulartor, currentValue) => parseInt(accumulartor) + parseInt(currentValue, 16), 0);
            order.orderId = orderData.slice(orderQuantityBytes, orderQuantityBytes + orderIdBytes).reduce((accumulartor, currentValue) => parseInt(accumulartor) + parseInt(currentValue, 16), 0);
            order.partNumber = orderData.slice(orderQuantityBytes + orderIdBytes, orderQuantityBytes + orderIdBytes + partNumberBytes).filter((partNumber) => partNumber !== '00').map((partNumber) => parseInt(partNumber, 16));
            order.emailAddress = orderData.slice(orderQuantityBytes + orderIdBytes + partNumberBytes, orderQuantityBytes + orderIdBytes + partNumberBytes + emailAddressBytes).filter((partNumber) => partNumber !== '00').map((emailChar) => String.fromCharCode(parseInt(emailChar, 16))).join('');
            orderBatch.orders.push(order);
        }

        const { STATUS_SUCCESS } = getStatus(JSON.stringify(orderBatch));

        return STATUS_SUCCESS;
    }

    return deserializeOrder;

}

const getStatus = (out, serializedData, batch) => {
    return {
        STATUS_SUCCESS: `Conversion performed successfully, ${out} updated`,
        STATUS_INSUFFICIENT_OUTPUT_BUFFER: 'Unable to deserialize the input data due to the preallocated output buffer being too small',
        STATUS_NULL_INPUT: `${serializedData} or ${batch} is a null pointer`
    }
}

module.exports = orderConversions;