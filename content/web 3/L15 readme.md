[readme.md](https://github.com/user-attachments/files/23416938/readme.md)
[**README.md**](https://github.com/layer1dot5/l15-core%23readme)

**L15**

Layer One dot Five (L15) is an open source, decentralized protocol over Bitcoin that utilizes a construct similar to the Lightning channel as a limited trustless lockbox for a sidechain. It can also be described as a sidechain-enabled iteration of the Lightning Network, where the Lightning commitment data is recorded in the sidechain. Thus, L15 provides the ability to create Lightning-style transactions where the outcomes depend on the sidechain consensus rules.

Compared to the original two-way pegged sidechains, L15's Lightning-style approach mitigates the trustless lockbox issue, but it also imposes some limitations on the types of smart contracts it can support. Just like a Lightning channel, a particular L15 contract, for example, can interact only with a predefined amount of Bitcoin. Another useful feature is that L15 protocol allows payer nodes to go offline while their payment instructions are being honored, thus enabling trustless subscription payments.

A more complex example is to create a stablecoin minted by the L15 sidechain as a loan and collateralized by Bitcoin. This can help resolve the emerging contradiction that the Lightning network has to face: while Bitcoin is strengthening its position as a value-preserving "digital gold" that nobody wants to spend, the Lightning Network is there to facilitate fast spontaneous transactions. Making L15 is compatible with the Lightning network gives exciting opportunity: Bitcoin from the Lightning network channels can be sent to L15 contracts as collateral. The stablecoin generated as a result can be used for the Lightning payments, thus both preserving the "store of value" paradigm for Bitcoin and supporting the Lightning transactional capabilities at the same time.

  

[**README.md**](https://github.com/layer1dot5/l15-node%23readme)

**Bitcoin Core integration/staging tree**

[https://bitcoincore.org](https://bitcoincore.org/)

For an immediately usable, binary version of the Bitcoin Core software, see [https://bitcoincore.org/en/download/](https://bitcoincore.org/en/download/).

Further information about Bitcoin Core is available in the [doc folder](https://github.com/layer1dot5/l15-node/blob/master/doc).

**What is Bitcoin?**

Bitcoin is an experimental digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network. Bitcoin Core is the name of open source software which enables the use of this currency.

For more information read the original Bitcoin whitepaper.

**License**

Bitcoin Core is released under the terms of the MIT license. See [COPYING](https://github.com/layer1dot5/l15-node/blob/master/COPYING) for more information or see [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

**Development Process**

The master branch is regularly built (see doc/build-*.md for instructions) and tested, but it is not guaranteed to be completely stable. [Tags](https://github.com/bitcoin/bitcoin/tags) are created regularly from release branches to indicate new official, stable release versions of Bitcoin Core.

The [https://github.com/bitcoin-core/gui](https://github.com/bitcoin-core/gui) repository is used exclusively for the development of the GUI. Its master branch is identical in all monotree repositories. Release branches and tags do not exist, so please do not fork that repository unless it is for development reasons.

The contribution workflow is described in [CONTRIBUTING.md](https://github.com/layer1dot5/l15-node/blob/master/CONTRIBUTING.md) and useful hints for developers can be found in [doc/developer-notes.md](https://github.com/layer1dot5/l15-node/blob/master/doc/developer-notes.md).

**Testing**

Testing and code review is the bottleneck for development; we get more pull requests than we can review and test on short notice. Please be patient and help out by testing other people's pull requests, and remember this is a security-critical project where any mistake might cost people lots of money.

**Automated Testing**

Developers are strongly encouraged to write [unit tests](https://github.com/layer1dot5/l15-node/blob/master/src/test/README.md) for new code, and to submit new unit tests for old code. Unit tests can be compiled and run (assuming they weren't disabled in configure) with: make check. Further details on running and extending unit tests can be found in [/src/test/README.md](https://github.com/layer1dot5/l15-node/blob/master/src/test/README.md).

There are also [regression and integration tests](https://github.com/layer1dot5/l15-node/blob/master/test), written in Python. These tests can be run (if the [test dependencies](https://github.com/layer1dot5/l15-node/blob/master/test) are installed) with: test/functional/test_runner.py

The CI (Continuous Integration) systems make sure that every pull request is built for Windows, Linux, and macOS, and that unit/sanity tests are run automatically.

**Manual Quality Assurance (QA) Testing**

Changes should be tested by somebody other than the developer who wrote the code. This is especially important for large or high-risk changes. It is useful to add a test plan to the pull request description if testing the changes is not straightforward.

**Translations**

Changes to translations as well as new translations can be submitted to [Bitcoin Core's Transifex page](https://www.transifex.com/bitcoin/bitcoin/).

Translations are periodically pulled from Transifex and merged into the git repository. See the [translation process](https://github.com/layer1dot5/l15-node/blob/master/doc/translation_process.md) for details on how this works.

Important: We do not accept translation changes as GitHub pull requests because the next pull from Transifex would automatically overwrite them again.
