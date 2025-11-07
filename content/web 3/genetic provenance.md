[genetic provenance.md](https://github.com/user-attachments/files/23417011/genetic.provenance.md)
#   
Genetic Provenance: Inscribing the Origins

### [](#Hierarchy-of-Inscriptions-in-Perspective-of-Proof-of-Origin-and-Collections "Hierarchy-of-Inscriptions-in-Perspective-of-Proof-of-Origin-and-Collections")Hierarchy of Inscriptions, in Perspective of Proof-of-Origin and Collections

---

#### [](#Goals "Goals")Goals:

1. Introduce the concept of provenance.
2. Why provenance is important.
3. Provenance as a parent–child relationship.

4. Collections as a building block for hierarchy.
5. Avatar as the hierarchy root.
6. What is provenance and why is it important.
7. How avatars address the problem of provenance.
8. Provenance and Collections in ETH.

> [I need data about #7. Ely, can you help?]

9. Bitcoin approach to provenance: hierarchy+zkp.
    1. Genetic Protocol overview.
    2. Nature metaphor.
    3. Juxtaposing with anthagonists.

---

Casey Rodamor, the inventor of the Ordinals protocol, [opened the topic](https://github.com/casey/ord/issues/783) of provenance:

_"Provenance is important for art, and a large part of how it derives its value. We should have some notion of the provenance of an inscription:_

- _For an inscription, see who made it_
- _For a creator, see which inscriptions they’ve made_
- _Allow referencing an inscription within an artist’s body of work…"_

The most intuitive solution is utilizing the keys and signatures to prove the authorship. As stated in one of the discussion threads, _on other networks, there’s a notion of an “issuer address,” and you can just say “all the artifacts issued by this address are the ones that I’ll seek out.”_ But then, it’s only possible in Bitcoin with a significant compromise because _we don’t **really** have that [notion of permanent address] in the UTXO model._

> [Not too technical?]

So Casey proposed an alternate technique:

_“You put an inscription as an input to the reveal transaction, which makes it a parent of the new inscription. This parent/child relationship will be visible on the block explorer, allowing you to navigate up and down, and you can use an inscription to represent you, the creator, or a collection.”_

This seemingly simple approach has elegance and many layers of noteworthy meanings.

Firstly, it stays together with the Bitcoin’s vector to preserve privacy through key derivation (or maybe this is not an effect, but the cause of elegance?)

The ordinal theory introduced the method to calculate a non-fungible sequential number for each satoshi. Casey’s approach to provenance utilizes exactly that: as a parent, an inscription must have its “core gene” participating in the child’s genesis - the reveal transaction. It is a very _natural_ way to do it, pun intended.

Let’s build a metaphor for the latter. 1) Alice owns a dog (the dog’s name is Ordinal). 2) The dog’s provenance (breed, for simplicity) is a German Shepherd. These two facts are orthogonal: the fact of Alice’s ownership, by itself, does not prove Ordinal’s breed, and vice versa.

Alice lives in a Bitcoin universe, where the universe perfectly tracks ownership through cryptography. Also, in that universe, to establish a dog’s breed, they track which mother it came from; a mother is considered to be the owner of her child from birth until at least the end of breastfeeding.

With such rules in place, one could construct a provenance algorithm that will follow the chain of Ordinal’s ownership from the present time back to its first owner - inevitably, Ordinal’s mother (Utah). To establish the breed, one must check the signatures of all Ordinal’s owners up to the dog’s inception.

This algorithm maps to the “issuer address” method of providence verification, discussed at the beginning of this write-up. This is a lot of work to do for each verification of provenance.

The method proposed by Casey is more straightforward, especially when expressed through the metaphor of Alice and her dog. It is a genetic method, precisely as we know it. At birth (reveal transaction), Utah supplies her “core gene” to the second input of soon-to-be-revealed Ordinal. The new pup’s genesis transaction with his mother’s gene will always be with him, and his reveal transaction will always be accessible and indexed because this is where his “payload” is contained. Utah’s “core gene” will directly point to her genesis, and so on.

A significant advantage of such a method is that verifying Ordinal’s provenance does not require looking at anything beyond Ordinal himself – his mother’s “core gene” is already with him. By relying on provenance being established through an on-chain transaction, we offload the burden of proof onto the miners instead of verifying the signatures on our own. This is dramatically less work than checking the chain of signatures for the whole ownership history.

Additionally, on a conceptual level, we had to make a design compromise to construct the signature-based algorithm where Utah, being a dog, has to possess the ability to _own_. Whereas in reality, Utah has its owner, and its owner can change over time and use deviated keys for each signature, which creates a whole new dimension of complexity for tracking provenance through keys and signatures.
