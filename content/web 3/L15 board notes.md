
Board 1

1. Trust Model defined: why we trust L15 to fulfill its promises

New topic because it is a trustless system - undefined

1. System function defined (high level)

stable coin -> platform

1. Existing Approach(es)

Side chain

Two-way peg

Problem: two-way peg needs a trusted authority (Federation)

1. L15 Solution: We replace Federation with trustless consensus - Poelstra

Federation due to lack of expressiveness + small chain

Why should one trust this?

1. What do we trust this consensus to do?

1 Keep the clock - sequence of events

2 Maintain contract rules - needs *counterparty*

2a Store BTC

2b Mint L15$ (& give to Alice)

2c Maintain stability

2d Release BTC

  

Board 2

1. How do we know that we should trust it?

Because we know how it works … this is how…

1 - Solved PoW in L15 (merged mining)

2a - Solved BTC PoW + Atomic swap + DLC

Classical/traditional solution = SPV

But this solution requires trust in the small consensus - small chain problem 

Hence, use Atomic Swap + DLC - trustless security

2b - Merged mining

2c - Internal - Split function - oracles & merged mining (other paper)

Code - quality, economic model - quality, consensus - quality

Good oracles

2d - The Great Unlock

  

THE GREAT UNLOCK

History

1. Smaller chain problem - if a chain has n BTC locked and n is larger than the entire chain - incentivizes foul play 
2. BTC expressiveness (Poelstra)

  

Board 3

We have solved both problems 

1. Small chain problem (not specific to unlock) - solution DLC (all contract outcomes pre-determined/pre-defined)

2. BUT situations in which contract outcome is not pre-defined - not relevant to loan contracts except who buys liquidated assets is not pre-defined (liquidation auction) - not covered by DLC - resolved through same methods as unlocking

Atomic Swap & DLC assumes a counterparty

Who is this *counterparty? - needs entity with a memory

- for atomic swap 
- for storing DLC

The entire consensus acts in unison as a counterparty

The Counterparty Story

sequence from Board 1

Alice + Entity (cannot be one person)

1. CP actors actors should be able to come and go but they must be present to act as a counterparty throughout the duration of the contract
2. CP actors should be trustless

  

Entity - consisting of L15signers - many but not all are used

- 1 threshold multisig
- 2 slicing of the bag - randomly selected - number determined by network latency & ratio of maximum number of signers capable of adequate performance to total number of signers (should be less than half) - latency & security

- 1) Maximum number of signers to create multisig - too many takes too long
- 2) Security theorem - 100 participants in collective requires them to perform an action together that they cannot complete individually - more difficult to bribe/foul play - random selection more safe

*L15signers do not have much responsibilities in terms of security - replaceable

- 3 But// Bond - must put money forward initially (to prevent attacks)
- L15signers in a system similar to lightning network - ensures the liquidity of the system

 4 OMDLCA - proof - immunity because Alice interacts through sidechain and each transaction/interaction is charged

5 Sidechain communications with signers - ROI (swarm)

L15 sidechain - entry reaches critical mass - is this consensus (?) if it is not consensus how do we call it (?)

NOT PROOF OF STAKE - if stakers are responsible for keeping the record they can lie - but L15signers don’t keep the history

  

Board 4

The GREAT UNLOCK

BTC L15

DLC > unlock secret > release to A CP Entity

Unlock secret - known by CP Entity =signature on A’s burn request 

  

SO - the signature of the CP entity to burn is the secret to unlock the BTC (naive algorithm)

Why is it naive? contract lasts a year so motivation to cheat

One satoshi rule - system releases BTC to special wallet which has an exit route to A and an output 1SAT - so system needs miners to bypass the mempool and enable release

- possibility for attack - mitigated by creating an additional address with 1Sat & Alice output BUT this one has a time cap

Another Entity - Majordomo - must lock L15SR - they have final say - doesn’t sign if correct - approval by omission

  

Math 

1. Time slot between M1 & M2 (T)
2. How many miners will fit into T on avg (Q)
3. What are the odds that Alice can buy enough miners so that in T corrupt miner will be one of Q

  

Conclusion: 1) See you can trust it

2) Next steps: Scratch out (“loan”)

add conditions for contracts

to be supported
