
**| Why wasn’t parent-child developed and released initially?**

Before the mainnet release of inscriptions, Raph and I had been working on the protocol for a while with basically no indication that anyone was interested. So we just wanted to get the thing out the door, and not delay release working on additional features for something that people might not actually use.

  

**| How did the idea come up?** 

I'm pretty sure that I came up with the idea for parent-child, but I don't exactly remember how or when. It was obvious that we needed some way for inscriptions to be put into collections, since that's a core feature of NFTs that users expect.

It's a general principle of design that if you can have fewer distinct "types" of things, then your system is often simpler, richer, and more featureful. Instead of having Xs and Ys and thinking about how Xs and Ys interact, if you can just make Xs do what you need Ys for, you have fewer different types of things and everything gets simpler.

This is one thing that's really nice about parent-child: Instead of having inscriptions and collections be different things, they're one thing, and lots of nice things fall out of that: Collections, since they're just inscriptions with children, can be owned, they can have an image and metadata associated with them, they can be transferred… All the things that inscriptions can do.

So I'm sure that when I thought of the idea of inscriptions just being able to create sub inscriptions, and using that as the collection mechanism, that's one of the main reasons I found it so appealing.


**| What are the pros of having a provenance structure? Conceptual? Technical? Organizational? From the perspective of “storage” or “archive”? Does it make it easier for parsing now/in the future?**

**· What are the cons of not having provenance?**

The pros of on-chain provenance are the same as the pros of having other things on chain: They exist now and forever, discoverable by anyone, and cannot be destroyed.

Compare with off-chain provenance: If one person creates two inscriptions without parent-child provenance, and wants to others to know that they're related, they have to do things like post to Twitter, spam Discord messages, do marketing, tell their friends. But if they use parent child, they don't need to do anything, all that data is there, forever.

  

· **Since so many launched without it….  Is it feasible to convince people to switch to it?  Can it be seen as a maturation of the protocol/digital artifaction?** 

I think it is feasible. I think the benefits are strong enough that more and more people will use it.

  

· **Our project has a collection parent, artist work and community submissions, maybe beyond just the creotors projects the provenance can be used for co-creation - held together or “branching out”by provenance? Can you think of any other use-cases?**

I think the idea of passing around a parent and everyone who receives it inscribes a child is an interesting one. Risky, since someone can fat-finger or absquatulate the parent, but that makes it more fun.

  

· **“Value” of provenance - do you feel like provenance impacts the ‘value’ of a work? In what ways? Why or why not?** 

Absolutely. In the traditional art world, a huge amount of the value of works is tied up with provenance. Inscriptions are no different.

  

· **What is your conception of it? Do you see it as a signature? Or as a shelf? Or as a tree? Or as a ….?**

I conceive of it in the same way that I conceive of making a bitcoin transaction itself, this collection of owned inputs and production of new inputs. I guess I have an abstract idea of what a bitcoin transaction feels like, so inscribing a child has the same feeling.
