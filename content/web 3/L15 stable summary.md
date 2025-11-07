[stable summary.md](https://github.com/user-attachments/files/23416946/stable.summary.md)
Layer One dot Five

Lightning-compatible Stablecoin Backed by Bitcoin Collateral (non-technical summary)

Miro Sarbaev Lexis Tikhvinskiy

April 28, 2022 Commit b3dd86a

Abstract

Layer One-dot-Five (L15) is a system that enables L15$ - a stablecoin, soft-pegged to the US dollar and backed by Bitcoin collateral. L15 uses the principles of a sidechain and the Lightning network together: it encumbers Bitcoin collateral in a Lightning-style DLC while its commitment signatures are recorded on the sidechain. L15 is merge-mined with Bitcoin, which allows miners who win blocks on both chains simultaneously to trustlessly validate collateral release. The resulting system is interoperable with the Lightning Network.

Along with enabling the stablecoin, L15 has the potential to be a platform that developers can use to implement a subset of smart contracts, covering practical consumer finance use cases, like pull transactions and subscription payments.

For the latest version of complete paper please visit https://arrowlabs.com/L15-stable.pdf


1 Introduction

Bitcoin is gaining recognition as a value-preserving “digital gold.” This elevates the importance of having an integrated transactional coin within the Bitcoin ecosystem. A fiat-pegged digital asset that one can borrow using Bitcoin as collateral is a sound approach to increasing the ecosystem’s money velocity. An Ethereum-centric solution like that is available in the ERC20 ecosystem. Bitcoin users can make use of it by utilizing WBTC. Still, most Bitcoin holders find this path too expensive: not only in terms of fees but also in the cost of time needed for going through layers of intermediaries, along with the cost of compounding the risk of innovative solutions chained together and added exposure to centralization risks introduced by some intermediaries.

We propose L15 (Layer One-dot-Five), a system that enables L15$ - a collat- eralized stablecoin, near-native to the Bitcoin ecosystem. L15 is not strictly native since it has its own chain – a Bitcoin merge-mined sidechain that tracks two new digital assets: a stablecoin and a stabilization coin. It is interoperable with the Lightning Network – one can send Bitcoin collateral into L15 directly from a Lightning channel and receive stablecoin into a familiar BOLT-style state channel, provided the Lightning implementation supports PTLC. Also, L15 upholds a high degree of trustlessness and decentralization: L15 uses dis- tributed consensus across the board. We use the term distributed consensus: “a consensus (i.e. global agreement) between many mutually-distrusting parties who lack identities and were not necessarily present at the time of system set up.”

(Poelstra, 2015, March 22)

At its core, L15 is a decentralized protocol that utilizes Layer 2 state channel principles while storing channels’ states in the L15 blockchained ledger, which creates a potential to implement financial smart contracts.

While leaving the platform possibilities intact, we focus on building a single canned feature on top of L15 - the stablecoin L15$, created in L15 as a product of overcollateralized loan facilitated by the L15 contract. Borrowers deposit collateral in Bitcoin and borrow against their collateral value. If the value of the Bitcoin deposit falls below the minimum collateralization ratio, the loan can be liquidated by the contract. Repaying the loan is equivalent to providing proof of burn for borrowed L15$ and accrued interest, which automatically makes the collateral spendable by the borrower. As a result, the US dollar value of L15$ is backed by the US dollar value of the underlying Bitcoin collateral held by L15 contracts. To support the stablecoin function, L15 should be able to maintain the L15$ soft-peg to USD. For that, L15 uses its native Stabilization Reserve coin - L15SR. This coin is used to reward miners and to pay most transaction fees. After all the costs, the excess loan interest is exchanged into L15SR, and L15SR is burned. When it is necessary to increase the price of L15$, L15SR is minted and sold for L15$, and such sale proceeds are burned. Fine-tunning of the L15$ price is done by adjusting loan interest rates.1

Maintaining stability of the L15$-USD pair is a function entirely supported within the L15 chain – it does not require the use of Bitcoin Script. Even though it is a complex financial process, the engineering task of implementing it on a new chain is not as challenging as building a trustless interaction between Bitcoin and L15. In the present paper, we will be focusing on the latter. The emphasis is on the collateral release process since L15 provides a stablecoin-specific solution for a challenge outlined by the inventors of pegged sidechains:

One of the challenges in deploying pegged sidechains is that Bitcoin script is currently not expressive enough to encode the verification rules for an SPV proof. (Back et al., 2014, October 22)

1L15$ economy model is inspired by MakerDAO’s DAI (Dai (Cryptocurrency), 2021, August 26).


2 Terminology

Term L15channel

L15lightning L15miner

L15node L15signer

L15vroutnode

Table 1: Terminology

Explanation

An L15lightning channel (formed according to the L15 specification).  
A modified Lightning protocol capable of supporting L15.

L15node that participates in the creation of L15vhive by mining new L15ledger blocks.  
Any node on the L15 network.  
L15node that participates in creating L15vhive by engaging in threshold multisig to hold L15vhive’s ends of L15lightning channels.

A group of L15signer nodes that collectively sign a Lightning channel on the L15 side.


3 Trust Model

L15 uses a UTXO ledger (L15ledger) to track L15$ and L15SR. It is secured via proof-of-work by merged mining with Bitcoin and by recoding of anchors into the Bitcoin chain. L15 blockchain aims at a 60-second block time.

Merged mining is also used for cross-chain validation of pending collateral release CETs2. Due to the fact that these CETs purposefully contain outputs that are sized below the Bitcoin dust limit, they can be included in the Bitcoin blockchain only by L15miners who happened to have won the right to record a Bitcoin block.

Additionally, L15 relies on pricing oracles, Olivia(s), who publish the BTCUSD ratio. The oracles (Guillyr et al., 2020, November 03) and multi-oracle support

(Cohen, 2021, May 07) are assumed to conform to Suredbits specifications.

Proof-of-work consensus is stateless by nature. Its pristine form cannot store persistent secrets required by L15 for use in collateral transactions that utilize DLC3 and state channels. To keep the contract state record and carry out appropriate actions based on the miner’s validation decisions, L15 has two new groups of anonymous actors - L15signers and L15arbiters. When a user opens a new state channel (L15channel) with L15, a dedicated group of L15signers (L15vroutnode) is assembled out of the pool of all signers. L15vroutnode acts as a single signing entity, where participating signers use Schnorr threshold multisig to build channel and DLC signatures. L15signers are required to supply bonds in Bitcoin. Selection of an L15signer for an L15vroutenode is probabilistically random, where the random component comes from entropy provided by the L15miners, while probability depends on the total size of the bond. L15arbiters are similar to L15signers in how they are selected for signature participation, but their bonds are in L15SR. Acting as a signing entity for miners, they execute rollback actions for contracts if necessary. Also, if needed, they act on fail-safe scenarios.

An arrangement with L15signers and L15arbiters is reminiscent of a Proof of Stake algorithm. However, an essential difference takes L15 outside of the area impacted by the PoS deficiencies described in (Poelstra, 2015, March 22): signers and arbiters do not participate in creating the chain finality.

2CET is Contract Execution Transaction as described in the DLC foundational paper (Dryja, 2017).

3While keeping close to the description of DLC by the inventors (Dryja, 2017), we are using the concept and the term in a non-standard way on a few occasions.


4 Conclusion

L15 utilizes technologies that are becoming available in Bitcoin with the taproot upgrade: DLC, threshold multisig, and PTLC-based state channels. In addition, it uses the Bitcoin dust limit to involve its sidechain merged miners in transaction validation. As a result, L15 delivers a stablecoin soft-pegged to USD and is backed by Bitcoin as collateral.

As a vector of future development, L15 can evolve as a platform for smart contracts to enable trustless consumer finance use cases in the Bitcoin ecosystem.


References

Back, A., Corallo, M., Dashjr, L., Friedenbach, M., Maxwell, G., Miller, A., Poelstra, A., Timón, J., & Wuille, P. (2014, October 22). Enabling blockchain innovations with pegged sidechains [White Paper]. https://blockstream.com/ sidechains.pdf

Cohen, N. (2021, May 07). Multiple oracle support [GitHub]. https://github.c om/discreetlogcontracts/dlcspecs/blob/master/MultiOracle.md

Dai (cryptocurrency). (2021, August 26). [Wikipedia Article]. https://en.wikip edia.org/wiki/Dai_(cryptocurrency)

Dryja, T. (2017). Discreet log contracts [White Paper]. https://adiabat.github.i o/dlc.pdf

Guillyr, T. L., Benthecarman, & Cohen, N. (2020, November 03). Oracle specifications [GitHub]. https://github.com/discreetlogcontracts/dlcspecs/b lob/master/Oracle.md

Poelstra, A. (2015, March 22). On stake and consensus [White Paper]. https: //nakamotoinstitute.org/static/docs/on-stake-and-consensus.pdf

