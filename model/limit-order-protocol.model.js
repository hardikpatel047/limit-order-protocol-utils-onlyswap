"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderProtocolMethods = exports.ChainId = void 0;
var ChainId;
(function (ChainId) {
    ChainId[ChainId["etherumMainnet"] = 1] = "etherumMainnet";
    ChainId[ChainId["binanceMainnet"] = 56] = "binanceMainnet";
    ChainId[ChainId["polygonMainnet"] = 137] = "polygonMainnet";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
var LimitOrderProtocolMethods;
(function (LimitOrderProtocolMethods) {
    LimitOrderProtocolMethods["getMakerAmount"] = "getMakerAmount";
    LimitOrderProtocolMethods["getTakerAmount"] = "getTakerAmount";
    LimitOrderProtocolMethods["fillOrder"] = "fillOrder";
    LimitOrderProtocolMethods["fillOrderRFQ"] = "fillOrderRFQ";
    LimitOrderProtocolMethods["cancelOrder"] = "cancelOrder";
    LimitOrderProtocolMethods["cancelOrderRFQ"] = "cancelOrderRFQ";
    LimitOrderProtocolMethods["nonce"] = "nonce";
    LimitOrderProtocolMethods["advanceNonce"] = "advanceNonce";
    LimitOrderProtocolMethods["increaseNonce"] = "increaseNonce";
    LimitOrderProtocolMethods["and"] = "and";
    LimitOrderProtocolMethods["or"] = "or";
    LimitOrderProtocolMethods["eq"] = "eq";
    LimitOrderProtocolMethods["lt"] = "lt";
    LimitOrderProtocolMethods["gt"] = "gt";
    LimitOrderProtocolMethods["timestampBelow"] = "timestampBelow";
    LimitOrderProtocolMethods["nonceEquals"] = "nonceEquals";
    LimitOrderProtocolMethods["remaining"] = "remaining";
    LimitOrderProtocolMethods["transferFrom"] = "transferFrom";
    LimitOrderProtocolMethods["checkPredicate"] = "checkPredicate";
    LimitOrderProtocolMethods["remainingsRaw"] = "remainingsRaw";
    LimitOrderProtocolMethods["simulateCalls"] = "simulateCalls";
    LimitOrderProtocolMethods["DOMAIN_SEPARATOR"] = "DOMAIN_SEPARATOR";
})(LimitOrderProtocolMethods = exports.LimitOrderProtocolMethods || (exports.LimitOrderProtocolMethods = {}));
//# sourceMappingURL=limit-order-protocol.model.js.map