[economics.md](https://github.com/user-attachments/files/23416919/economics.md)[UploadingA Brief on L15 Tokenomics

An Overview of an L15 internal “Monetary Policy”

August 2, 2022 Commit (None)

Abstract

Cat ipsum dolor sit amet, meow to be let out the cat was chasing the mouse. What the heck just happened, something feels fishy purr when give birth i shall purr myself to sleep chirp at birds mew mew yet attack dog, run away and pretend to be victim. Hack fish i must find my red catnip fishy fish sniff sniff trip on catnip, so munch on tasty moths or cats are a queer kind of folk. Refuse to drink water except out of someone’s glass eat half my food and ask for more sniff sniff. Hiss at vacuum cleaner swat turds around the house and bawl under human beds, and flop over stinky cat. Growl at dogs in my sleep hey! you there, with the hands yet get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over or who’s the baby get scared by doggo also cucumerro .

For the latest version of this paper please visit https://L15.dev/L15SR-economics.pdf

Acknowledgments

The authors would like to express their sincere gratitute to:

Katherine N. Golubev, british shorthair turkish angora cornish rex yet siamese. Mouser. Ocelot manx yet leopard thai and burmese puma.

K., for british shorthair siberian for persian but kitty. Cheetah kitten. Devonshire rex burmese munchkin american shorthair.

Contents

Acknowledgments 2

1. 1  Layer One-dot Five 4
    
    1. 1.1  Whatisit............................... 4
        
    2. 1.2  Innovation............................... 4 InTechnology............................. 4 InEconomics ............................. 4
        
2. 2  L15SR Purpose 5
    
3. 3  Allocation 7
    
4. 4  Public Sale 8
    
5. 5  Presale 8
    
6. 6  Supply 8
    
    6.1 MiningandBlockRewards ..................... 10 6.2 CoinEncumbrance.......................... 11 6.3 StabilizationIssuanceandBurn................... 11
    

7. 7  Demand
    
8. 8  Price Model
    
9. 9  Control
    

References

12 12 13 13


1 Layer One-dot Five 1.1 What is it

The goal of L15 is to create a decentralized stable asset tightly integrated with Bitcoin.

Layer One-dot-Five (L15) is a variant of a trustless sidechain to Bitcoin that enables BTC-backed loans in a stablecoin L15$.

Stablecoin L15$ is a product of overcollateralized loan facilitated by the L15 contract. Users make deposits in Bitcoin and borrow against the deposited value. Repaying the loan is equivalent to providing proof of burn for borrowed L15$ and accrued interest, which automatically makes the Bitcoin deposit spendable by the borrower. If the value of the Bitcoin deposit falls below the minimum collateralization ratio, the loan can be liquidated by the contract. The US dollar value of L15$ is backed by the US dollar value of the underlying Bitcoin deposits held by L15 contracts. To maintain the L15$ price equal to USD, L15 regulates fees and loan interest rates and issues or burns the native Stabilization Reserve coin - L15SR, which is also used to reward miners and pay most transaction fees.

1.2 Innovation

In Technology

The starting point for L15 design is the concept of a pegged sidechain (Back et al., 2014, October 22), where instead of an asset that 1:1 represents locked Bitcoin, L15 issues a stablecoin L15$ backed by the locked Bitcoin. Unlocking Bitcoin is achieved in L15 using distributed consensus1, despite the fact that it is notoriously hard to make a trustless sidechain unlock.

This is possible because of two factors:

1) L15 is not a general-purpose smart contract side chain; it limits itself to the support of strictly specific use cases.

2) L15 uses a Validated Speck of Dust / Virtual Counter-party (VSD/VC-P) approach, formed around the specifics of the L15 merged mining algorithm working alongside threshold multisig validators.

In Economics

The price stabilization model for L15$ includes the use of the Decentralized Stabilization Fund (DSF) in Bitcoin, which is topped up by issuing and selling

1We use the term distributed consensus, meaning “a consensus (i.e., global agreement) between many mutually-distrusting parties who lack identities and were not necessarily present at the time of system set up.”(Poelstra, 2015, March 22)

4

additional amounts of L15SR upon achieving the collateralization rate that equals threshold TDSF, well above the liquidation threshold. This allows the selling of L15SR under normal operational conditions, as opposed to a “fire sale,” which creates a non-linear positive effect on L15 system stability.

2 L15SR Purpose

L15SR is an independent asset with two functions: reward for system actors and for creators and investors.

1) L15 has utility for stabilization:

Even though imprecise, Figure 1, shows a concept of how BTC-USD volatility becomes a factor affecting the stability of L15$ -USD pair, and L15SR counteracts volatility of BTC-USD pair and stabilizes the price of L15$:
![[Pasted image 20251107053850.png]]

Figure 1: L15$ and L15SR Working Together

2. L15 is used to reward system actors, creators, and investors:  
• Block Reward, similar to Bitcoin, but with different constants, as

shown in fig. 2.  
– Transaction fees, similar to Bitcoin,  
– Signature fees payable to L15 signers as a part of collective

contract counter-party

L15 pays its actors in the native coin L15SR, thus creating a tighter connection between the quality of their work and the value of their reward.

![[Pasted image 20251107054013.png]]

Figure 2: Block Reward

6

3 Allocation

Coins mined by L15 creators during the first two halvings will be allocated as follows:
![[Pasted image 20251107054048.png]]

Category

Public Sale  
Pre-sale reserve  
Team  
Partnerships  
Foundation Long-term Budget

Fully Diluted Allocation

12.50% 25% 10% 10% 17.50%

7

4 Public Sale

12.5 percent of the mined L15SR supply will go on Public Sale. The entire sale will go for 90 days. Public sale coins will be evenly spread across 360 buckets. Each bucket will be sold during its own 6-hour slot for the amount of money it has accumulated by the end of its 6-hour slot; bucket coins will be distributed proportionally among the bucket buyers. After the end of the sale, buckets will be reordered based on the total amount paid, and this new order will form an unlock queue: the most expensive bucket will be unlocked immediately, the least expensive will be unlocked last, in ==2 years and 50 days==. For example, the most expensive bucket may come in on the very last day or slot.

Such an approach has a number of advantages for both participants and L15:

• There is no clear strategy for buyers which gamifies the sale while not turning it into a gamble.

• Cheap SR coins are locked, which reduces initial volatility.  
• The opportunity for an early exit for expensive buckets creates an immedi-

ate market supply.

5 Presale

PresaleS investors, upon completion of the Public Sale, will get to pick a bucket to convert into, using up to the amount of the Pre-sale reserve (25% of the total coin supply). The actual amount of SR coins that will be used to convert the pre-sale instruments will be defined by:

• Amount raised at the Public Sale  
• L15SR market price  
• Personal desires and preferences of the investors.

The model that assumes sale price distribution per bucket that is congruent to EOS sale, shows that the current allocation completely satisfies all the conversion requirements in case of the Public Sale proceeds are $60M or more for the worst- case scenario for utilization of the 25% coin allocation – all investors converting at the minimum price.

Employee’s and partner’s compensation will follow conversion rules, similar to the presale.

6 Supply

Supply of L15SR is mostly created by mining, adding to supply via block rewards as shown in fig. 2. Supply is also affected by coin encumbrance, stabilization

8

presale_7.5M_least_expens_bucket

breakeven_n_def_price_7.5M
![[Pasted image 20251107054121.png]]
9

issuance, and burn.

6.1 Mining and Block Rewards

Mined supply that is created in the first two halvings will be distributed as shown in the Allocation section and will be encumbered in order to reduce volatility in the early stages, creating an effect similar to vesting for the creators of L15SR and avoid pump-and-dump schemes by the public offering participants.
![[Pasted image 20251107054148.png]]
encumberance_12.5PCT

The timeline of L15 can be divided into four epochs; consensus rules related to L15SR are different for each epoch.

Epoch 1 will start at the Genesis block and end after 1/2 of the Halving 2 are mined, yielding 62.5% of the coin supply. Epoch 01 creates a possibility of a Fair Launch by design. Alternatively, Epoch 01 coins may be pre-issued.

Epoch 2 starts on the day of the Public Sale and will go on until the sale is over. The sale will end on the last day of Epoch 2. Mining will be operational during the sale.

Coins mined during Epochs 1 and 2 will be encumbered, which will be discussed in the next section.

10

Epoch 03 - L15SR are mined unencumbered. Encumbered Coins are gradually unlocked over the course of the next 5 years; Public Sale Coins are gradually unlocked over the course of the next 2 years. Epoch 3 ends when all L15SR coins are unencumbered.

Epoch 04 starts at the end of Epoch 3 and goes into infinity.

6.2 Coin Encumbrance

For L15SR mined during the first and second epochs, there will be rules that establish different lockup periods. If, before the end of a lockup period, coins are moved to a different address from the coinbase address, 9/10 of the moved coins are burned, with an exception when the coins are moved to a Public Sale contract (Bucket Contract). In such a case, the coin lockup rule changes to the one of the Bucket Contract. Encumbered coins are allowed to be used as a Majordomo’s bond.

The lockup period is calculated as follows:

1. Coin mined during Epoch 1 is unlocked at the block time DU1 = DE02 + DM*4. DE2 is the first block of Epoch 2; DM is the block when the coin was mined.
    
2. Coin mined during Epoch 1 is unlocked at the block time DU2 = DE01 + DM *12.
    

The presence of encumbrance serves several purposes:

1. It prevents an abrupt release of the early mined coins into the markets.
    
2. If a holder of an L15SR coin needs to sell it while encumbered, they still
    
    can, but 90% burning of the moving coin reduces the L15SR supply.
    
3. In the case of a Fair Launch: it discourages early mining by short-term holders and creates favorable conditions for mining by long-term holders.
    
4. It provides conditions for a better chance of a sustained price increase for
    
    L15SR in its infancy.
    
5. It provides a leveled playground for the public sale investors and eliminates
    
    the advantage for those mined during Epochs 1 and 2.
    

6.3 Stabilization Issuance and Burn

Stabilization Issuance is necessary in order for the system to create a Bitcoin cushion for at-risk contracts. When a contract leaves the zone of risk either due to an increase in Bitcoin price or liquidation, the Bitcoin cushion is sold, and the sale proceeds in L15SR are burned.

Issuance and burn for stabilization is designed to keep the L15SR supply stable

11

after the issue/burn cycle is complete. Note that stabilization issuance does not take place at the time of the actual need but rather in advance. As a result, the model has stayed true to its non-inflationary promise the whole time it was calculated, starting in July 2017, until the time of the writing.

Additionally, interest and fees that L15 is acquiring in excess of whatever is necessary to fund the function of the system are also burned, thus evenly dis- tributing profit among all the L15SR holders and strengthening the deflationary side of the issuance and burn equilibrium.

7 Demand

L15SR has a utility function in the system, creating a natural demand for it. It depends on:

8

• System’s need. When loan contracts become at-risk, demand drops; how- ever, it increases in both cases: when collateral is liquidated and when contracts leave the risk zone: L15 starts reducing the stabilization cushion and buys back the L15SR.

• Transaction volume (positive outlook relies on the assumption that the system will grow).

• Fee market.

Price Model

L15SR utility gives it a fundamental value. The balance between the interests of the system and traders is ensured by the fact that traders want to make a profit by buying/selling coins, and the system needs to do the same in order to increase or decrease the value of its stabilization cushion. This way, traders earn providing for the needs of the system, and the system gets the necessary stability. Sooner or later traders will be able to sell to the system the L15SR they purchased, which improves the fundamental profitability of the L15SR coin.

Even though the trading value of an asset is impossible to forecast, three factors are putting the L15SR coin at an advantage.

Firstly, it exceeds the linear dependency on the growth of Bitcoin: as Bitcoin increases its price, demand in the L15 system increases, and hence L15SR price grows.

That compounds with the second factor: since fees are burned, an increase in demand in L15 results in burning supply.

And the third factor is that as Bitcoin’s price decreases, it causes a stabilization 12

issuance of 15SR. Still, the over-collateralization protects the resulting cushion from being put to work, i.e. at the next bitcoin price move, either up or down, the recently issued L15SR will be bought back and burned.

9 Control

Add here about how long the creators will be in control, how it is relinquished, and what control means in this context.

References

Back, A., Corallo, M., Dashjr, L., Friedenbach, M., Maxwell, G., Miller, A., Poelstra, A., Timón, J., & Wuille, P. (2014, October 22). Enabling blockchain innovations with pegged sidechains [White Paper]. https://blockstream.com/ sidechains.pdf

Poelstra, A. (2015, March 22). On stake and consensus [White Paper]. https: //nakamotoinstitute.org/static/docs/on-stake-and-consensus.pdf

13 economics.md…]()
