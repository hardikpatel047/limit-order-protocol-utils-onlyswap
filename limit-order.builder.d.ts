import { ChainId, LimitOrder, LimitOrderData, LimitOrderHash, LimitOrderSignature, RFQOrder, RFQOrderData } from './model/limit-order-protocol.model';
import { EIP712TypedData } from './model/eip712.model';
import { ProviderConnector } from './connector/provider.connector';
export declare function generateOrderSalt(): string;
export declare function generateRFQOrderInfo(id: number, expiresInTimestamp: number): string;
export declare class LimitOrderBuilder {
    private readonly contractAddress;
    private readonly chainId;
    private readonly providerConnector;
    private readonly generateSalt;
    private readonly erc20Facade;
    constructor(contractAddress: string, chainId: ChainId, providerConnector: ProviderConnector, generateSalt?: typeof generateOrderSalt);
    buildOrderSignature(walletAddress: string, typedData: EIP712TypedData): Promise<LimitOrderSignature>;
    buildLimitOrderHash(orderTypedData: EIP712TypedData): LimitOrderHash;
    buildLimitOrderTypedData(order: LimitOrder): EIP712TypedData;
    buildRFQOrderTypedData(order: RFQOrder): EIP712TypedData;
    buildRFQOrder({ id, expiresInTimestamp, makerAssetAddress, takerAssetAddress, makerAddress, takerAddress, makerAmount, takerAmount, }: RFQOrderData): RFQOrder;
    buildLimitOrder({ makerAssetAddress, takerAssetAddress, makerAddress, takerAddress, makerAmount, takerAmount, predicate, permit, interaction, }: LimitOrderData): LimitOrder;
    private getAmountData;
    private getContractCallData;
}
