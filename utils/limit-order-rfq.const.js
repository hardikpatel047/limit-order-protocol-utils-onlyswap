"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.explorersUrls = exports.contractAddresses = exports.rpcUrls = exports.cancelOrderSchema = exports.fillOrderSchema = exports.createOrderSchema = exports.operationSchema = void 0;
const limit_order_protocol_model_1 = require("../model/limit-order-protocol.model");
const commonProperties = [
    {
        type: 'select',
        name: 'chainId',
        message: 'Select network',
        choices: [
            { title: 'Ethereum', value: limit_order_protocol_model_1.ChainId.etherumMainnet },
            { title: 'BSC', value: limit_order_protocol_model_1.ChainId.binanceMainnet },
            { title: 'Polygon', value: limit_order_protocol_model_1.ChainId.polygonMainnet },
        ],
    },
    {
        type: 'password',
        name: 'privateKey',
        message: 'Enter your private key',
    },
];
exports.operationSchema = [
    {
        type: 'select',
        name: 'operation',
        choices: [
            { title: 'create', value: 'create' },
            { title: 'fill', value: 'fill' },
            { title: 'cancel', value: 'cancel' },
        ],
        message: 'Choose operation for limit order RFQ: create, fill, cancel',
    },
];
exports.createOrderSchema = [
    ...commonProperties,
    {
        type: 'number',
        name: 'orderId',
        message: 'Limit order RFQ id',
    },
    {
        type: 'number',
        name: 'expiresIn',
        message: 'Expires in (seconds, for example: 300 - order will expired in 5 mins)',
        initial: 300,
    },
    {
        type: 'text',
        name: 'makerAssetAddress',
        message: 'Maker asset address',
    },
    {
        type: 'text',
        name: 'takerAssetAddress',
        message: 'Taker asset address',
    },
    {
        type: 'text',
        name: 'makerAmount',
        message: 'Maker asset amount',
    },
    {
        type: 'text',
        name: 'takerAmount',
        message: 'Taker asset amount',
    },
    {
        type: 'text',
        name: 'takerAddress',
        message: 'Taker address (optional)',
    },
];
exports.fillOrderSchema = [
    ...commonProperties,
    {
        type: 'number',
        name: 'gasPrice',
        message: 'Gas price (GWEI)',
        initial: 10,
    },
    {
        type: 'text',
        name: 'order',
        message: 'Limit order RFQ json',
    },
    {
        type: 'text',
        name: 'makerAmount',
        message: 'Maker asset fill amount (set 0 if you will use taker asset amount)',
    },
    {
        type: 'text',
        name: 'takerAmount',
        message: 'Taker asset amount (set 0 if has set maker asset amount)',
    },
];
exports.cancelOrderSchema = [
    ...commonProperties,
    {
        type: 'number',
        name: 'gasPrice',
        message: 'Gas price (GWEI)',
        initial: 10,
    },
    {
        type: 'text',
        name: 'orderInfo',
        message: 'Order info',
    },
];
exports.rpcUrls = {
    [limit_order_protocol_model_1.ChainId.etherumMainnet]: 'https://ropsten.infura.io/v3/27c4cda533e54747be170380e740dfb0',
    [limit_order_protocol_model_1.ChainId.binanceMainnet]: 'https://bsc-dataseed.binance.org',
    [limit_order_protocol_model_1.ChainId.polygonMainnet]: 'https://bor-nodes.1inch.exchange',
};
exports.contractAddresses = {
    [limit_order_protocol_model_1.ChainId.etherumMainnet]: '0x479aD5912fB689C40E157428785d7f79B7fFc05d',
    [limit_order_protocol_model_1.ChainId.binanceMainnet]: '0xe3456f4ee65e745a44ec3bcb83d0f2529d1b84eb',
    [limit_order_protocol_model_1.ChainId.polygonMainnet]: '0xb707d89d29c189421163515c59e42147371d6857',
};
exports.explorersUrls = {
    [limit_order_protocol_model_1.ChainId.etherumMainnet]: 'https://ropsten.etherscan.io',
    [limit_order_protocol_model_1.ChainId.binanceMainnet]: 'https://bscscan.com',
    [limit_order_protocol_model_1.ChainId.polygonMainnet]: 'https://explorer-mainnet.maticvigil.com',
};
//# sourceMappingURL=limit-order-rfq.const.js.map