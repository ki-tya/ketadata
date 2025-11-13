
Ordinals: DNA for Inscriptions

6 min read

Jul 12, 2023

_Notes about Provenance and Collections_

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*0yN_aku0NQlAYSdjy6I5og.png)

## Genetic Provenance

One of the more interesting topics that come up in the Ordinals community is provenance. **Casey Rodarmor**, the creator of Ordinals, [wrote about it](https://github.com/ordinals/ord/issues/783) as far back as November 2022:

_“Provenance is important for art, and a large part of how it derives its value. We should have some notion of the provenance of an inscription:_

- _For an inscription, see who made it_
- _For a creator, see which inscriptions they’ve made_
- _Allow referencing an inscription within an artist’s body of work….”_

In traditional art, the ability to determine the origin and authenticity of an art piece is incredibly important. We need to know that the Salvator Mundi we are holding in our hands was indeed painted by Leonardo, thus justifying the $450.3 million price tag.

Arguably, provenance becomes even more critical in the digital world, where it’s possible to make exact copies. So how is authorship of NFTs currently verified?

ERC-721 on Ethereum employs accounts and smart contracts when dealing with NFTs. To find out an NFT origin, you have to look at the address of the account, i.e., the ETH wallet that deployed the issuing smart contact. So this method works… for an account-based blockchain with smart contracts. Bitcoin lacks both accounts and contracts, making it impossible to locate the origin of an inscription in this way.

Some NFT platforms use chains of ownership to identify the origin of their NFTs. Technically, this could work for Bitcoin by tracing the history of addresses that owned a particular inscription. But this has another set of problems.

In Casey’s [words](https://github.com/ordinals/ord/issues/1423#issuecomment-1409398574), the _“issue with [using] an address [for provenance] is that [if used,] it can’t be changed later…”_ but if the inscription creator is avoiding address reuse and properly employs key derivation, ownership-based provenance becomes prohibitive.

In addition, an address, if used for provenance, _“doesn’t have any fun metadata (like a picture, etc.). So the idea is that [instead of an address] we use inscriptions.”_, — Casey proposes. These inscriptions become digital representations of the inscription creators — like avatars or logos — “root inscriptions” that become parents to the author’s future work.

Casey describes a method to “genetically” link subsequent child inscriptions to a parent: _“You put [the “main” ordinal satoshi of] an [root] inscription as an input to the reveal transaction, which makes it a parent of the new inscription. This parent/child relationship will be visible on the block explorer, allowing you to navigate up and down, and you can use an inscription to represent you, the creator, or a collection.”_

This elegantly reflects the succession — like the lineage from parent to child. Once the creator makes a _root_ inscription, each subsequently produced inscription will become a child containing the ‘gene’ of the parent. In tech terms: for a _root_ to be recognized as a parent of a new inscription, the inputs of the reveal transaction must contain the parent inscription, thereby proving that the creator of the child inscription controls the parent inscription.

Notably, having a _root_ as a single representation is arbitrary because the structure allows for unlimited growth both horizontally — having multiple roots — and vertically — there can be any number of parent/child “generations.” The latter is an important use case that creates the possibility to not only have _roots_ and their child inscriptions, like:

![](https://miro.medium.com/v2/resize:fit:449/1*fF5bkgY7H4nxYSHgnDvVhQ.png)

but also more complex hierarchies like:

![](https://miro.medium.com/v2/resize:fit:563/1*MLg3Ks1d432Yr5pphCwfgQ.png)

![](https://miro.medium.com/v2/resize:fit:562/1*Ql0XxFxkv0OmhKjwn27-9w.png)

There is no limit to the number of levels and to the amount of independent “roots” anyone can have.

A creator can be an artist with NFT collections and/or a curator with several artists under his watch, each with any number of collections.

This genetic approach also aligns well with the underlying structure. It allows the authors to uphold their privacy by doing proper key derivation. It also reuses the inscription entity and makes it work as a building block for the necessary hierarchy. Usually, simplicity is a good indicator of an efficient design.

One thing to remember is that Genetic Provenance cannot be retroactive. This limitation is enforced by full nodes and by the primal responsibility of the miners, who determine the chain finality, a.k.a. the immutable historical order of transactions. That is why a child cannot be associated with a parent after the fact. End of story. No discussion about that and no room for a compromise.

While this may seem similar to provenance-by-ownership, it is not — due to the impreciseness of association between a wallet and an individual creator.

For creators, this implies a need for forward-thinking. They have to inscribe appropriate digital representations before they start their respective projects. If they choose to have a representation for their persona, like an element of their digital avatar, they should establish it at the beginning of their inscribing career. Any works made before that won’t be linked to that representation. Moreover, changing the avatar representation down the line effectively separates their past and future art. Look at this early set up as an investment into building a creative legacy, just like in the analog world.

Some might find this limiting, but it’s actually a strength and a testimony to the design quality of Genetic Provenance. In a system like Bitcoin, which consciously lacks identity, enforcing a restriction on after-the-fact changing of the creator is mathematically identical to the definition of provenance as a zero-knowledge proof algorithm. In other words, the limitation is the only thing between inscribing digital artifacts and sowing chaos.

Given all that, Genetic Provenance and Collections are not a theoretical “nice-to-have.” They are an inevitable functional solution to the essential difficulties of Bitcoin-based non-fungible digital assets.

## Genetic Collections

Now let’s look at how Genetic Provenance enables collections.

Collections that benefit from Genetic Provenance are issued explicitly as a group of inscribed assets with the same theme but different sets of attributes. The combination of attributes is a defining factor for the rarity and value of a particular collection asset.

Creators who operate in the spirit of the community distribute their collections as a “fair launch.” This is a decentralized event that is particularly suited to this “genetic” approach.

Fair launch usually makes the collection’s “minting press” public so that anyone can get an inscription at the cost of minting. Some creators go further — they delegate combining and “remixing” of the inscription’s attributes to algorithmic entropy. This means they cannot predict how rare the next asset will be. Additionally, creators declare their collections’ maximum size before minting.

So, the strict Fair Launch rules dictate that Thou Shalt Not pre-mint, hold no control over the next mint’s rarity, and cap the supply. These rules aim to equalize profit opportunities between creators and the rest of the market.

As a side effect, this intersection of no-id culture, fair launch rules, and much-welcome decentralization invites counterfeits. This is a turnoff for all market participants and a reason buyers and sellers want some tools to validate authorship for each asset they transact.

For that, the parent-child model of Genetic Provenance is extended. To make a collection, the creator should first inscribe a “collection root” as a “child” of their root. The collection root becomes a “parent” to all its collection members. Individual assets from a collection are inscribed as collection roots’ children and “grandchildren” of the root inscriptions.

To cap the size of a collection, after the last asset is inscribed, the collection root is sent to a “burn” address, ensuring that it is impossible to use the root to produce more assets.

As a result, the extension of Genetic Provenance into **Genetic Collections** creates a secure space for creators and buyers to transact. The introduction of Genetic Collections makes it possible to inscribe collection assets with verifiable authorship and capped supply.

## P.S.

Even though Casey is not the biggest supporter of IP attributions to his persona, we think it will be fair to emphasize his authorship of the idea, along with the design and the detailed spec for the implementation.

An _interested party_ disclaimer: in a few days, the authors of this article are launching a marketplace for inscriptions that supports Genetic Provenance and Genetic Collections.
