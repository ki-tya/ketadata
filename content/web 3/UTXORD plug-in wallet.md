[plug-in wallet.md](https://github.com/user-attachments/files/23417020/plug-in.wallet.md)
Поп-ап

  

UTXORD Wallet extension is a secure wallet that doesn’t have access to your private keys.

  

How to set up the wallet ведет на видео на youtube [https://www.youtube.com/watch?v=3MnXhb9jsns](https://www.youtube.com/watch?v=3MnXhb9jsns) (ждем версии с озвучкой от Кити)

Статья в Help Center
![[Pasted image 20251107063125.png]]
**UTXORD Plugin Wallet** 

_A Bitcoin wallet is not where the assets are stored but where_ **_the keys are generated._** Embedded within each wallet's architecture is a master key accessible solely to its proprietor. This master key derives private keys for the user, affording public transactions that do not reveal the connection between these keys and the originating wallet. The wallet itself lacks the capacity to retain users' assets and data, a wallet is a software that is capable of generating new keys and retrieving old ones. 

  

The UTXORD plugin wallet is a software wallet. The software maintains only a code-based link to UTXORD. This restricts the marketplace's visibility to solely blockchain-bound public data. Through the input of their seed phrase, users generate keys for transaction signing, without disclosing this information to the platform. In the event of device failure, wallet accessibility can be reinstated by deploying the plugin on another device and re-entering the seed phrase. To generate keys, UTXORD employs a trusted algorithm sourced from Bitcoin nodes via a Bitcoin fork with a few modifications, utilizing their outputs to reconstruct code in the browser environment.

  

To make the design transparent, we have published the code open-source to this repository [Link to github]. Using the GitHub service, users can assemble the zip-file directly from the repository, published as a release artifact. Using a third-party service for assembly ensures a higher level of security in that the final result is completely based on the available code. Additionally, users can count the control sum of the GitHub zip-file and check it against the file available on the Google store to confirm it is the same file. We invite all interested parties to audit our code and make suggestions for fixes and improvements [github link] 

  

  

  

  

  

  

  

  

A Bitcoin wallet is not where the assets are stored but where **the keys are generated.** Each wallet consists of a master key that is known only to its owner. This master key is used to derive multiple keys that can be used to transact publicly without other parties knowing that these keys are tied to the same wallet. The blockchain is fully public so the wallet itself cannot hold users’ assets and data. A wallet is a software that is capable of generating new keys and retrieving old ones. The seed phrase can be entered into any machine to access a users’ wallet, it is not tied to a particular device. 

  

  

Wallet security is a spectrum. Centralized accounting falls on the weaker end because it requires trust in a third-party and has a single point of failure. Software wallets are more secure because users own their keys and can access their assets directly. However, faulty software may still lead to hacks. Hardware wallets are the most secure because they are not connected to the internet and often require multi-factor authentication.

  

The security of user funds and assets is of critical importance for intermediaries. While some service providers in the space are mindful of this in the implementation of their projects, there are still many exchanges and marketplaces that do not give users direct access to their keys**.** This means that the users remain at the mercy of third parties, owning their assets only ‘in theory’. 

  

  

  

**UTXORD wallet** 

  

The UTXORD plugin wallet is built according to the ‘not your keys, not your coins’ principle. The software is tied to UTXORD only via code. This means that the marketplace is only given access to information that will be public on the blockchain. Users enter their seed phrase and generate keys to sign transactions without giving the site access to this information. UTXORD does not have access to user balance or inscriptions. If the device on which the plugin is installed breaks, users can regain access to their wallets by installing the plugin on a different device and entering their seed phrase.

  

While it is still lacking some features, the software is architecturally complete and functional. We invite all interested parties to audit our code and make suggestions for fixes and improvements [github link]

  

software can be faulty. One of these faults is the trustworthiness of the key generation algorithms. If an algorithm is badly built and the ‘random’ numbers it generates are not truly random, there is a possibility of hacking users’ wallets.  UTXORD uses the most trustworthy source algorithm in the community – Bitcoin nodes. We have developed a technology which takes Bitcoin node outputs and recreates the code in the browser, thus building upon Bitcoin Core development. 

  

Before figuring this out we used a pretty standard library but found that it is difficult to guarantee trustworthiness due to the various different versions and tweaks. We have settled on a Bitcoin fork with a few fixes that were necessary for browser and web assembly. In the interest of transparency, the list of alterations can be found here [link]

  

Of course, we don’t expect you to take our word for it. 

  

Right now, we have assembled the UTXORD plugin wallet ourselves and made it available as a zip-file that can be downloaded and installed as an extension from the Google app store [link to download instructions]. This blackboxes the underlying design. 

  

In order to make the design transparent, we have published the code open-source to this repository [Link to github]. Using the GitHub service, users can assemble the zip-file directly from the repository, published as a release artifact. Using a third-party service for assembly ensures a higher level of security in that the final result is completely based on the available code. Additionally, users can count the control sum of the GitHub zip-file and check it against the file available on the Google store to make sure that nothing extra has been added. 

  

  

  

  

  

  

  

  

  

**Чеклист проверки кошелька**

Воспользуйтесь этим чек-листом, чтобы проверить надежность вашего Bitcoin кошелька, на котором вы храните ваши инскрипшены

  

1 - Маркетплейс или биржа, где размещены ваши инскрипшены, не имеет доступа к вашим ключам

  

  

2 - Для хранения ваших инскрипшенов используется деривация ключей

  

Возьмите публичный ключ, на котором содержится любой из ваших инскрипшенов

  

Вбейте его в поиск на Ordinalls Wallet

Если на одном публичном ключе содержится более одного инскрипшена

  

**Wallet verification checklist**

**Check whether the wallet extension is open-source, allowing you to review any part of the code.**

- _Open-source code allows you to examine anything by yourself. This transparency ensures that the code is legitimate, free from backdoors or known vulnerabilities, and has been reviewed by the community._

**Ensure implementation of Bitcoin's path derivation functionality, enabling the creation of new addresses with a simple click.**

- _Using this is crucial for both your on-chain anonymity and overall security. This feature involves the consistent generation of new addresses, enhancing your privacy and significantly increasing the difficulty for external entities to trace your on-chain activities._

**Verify if it is Bitcoin-native and lacks unnecessary functionality that could introduce additional security risks.**

- _A Bitcoin-native wallet decreases the probability of vulnerabilities from compatibility with other blockchains or assets. This reduces the potential attack surface by eliminating unnecessary functionalities._ 

**Look for any hidden advertising, such as a "discover ecosystem" tab.**

- _This prevents potential scams or distractions. Hidden advertisements could lead you to unverified services or websites, compromising the security of your cryptocurrency holdings_

  

  

Use this checklist to check the security of the Bitcoin wallet where you store your inscriptions

  

1 - The marketplace or exchange hosting your inscriptions does not have access to your keys

  

_-Описываем, как это проверить-_

  

2 - Key derivation is used to store your scripts

  

Take the public key that contains any of your inscriptions

  

bc1pdl34j0q7eswm7wsyj3q79s2ar39pwc2x70cl9dfe8l39aam4xjrq5sknaf 

  

Type it into the search on Ordinals Wallet

If one public key contains more than one inscription, you are putting yourself at risk. By cracking this public key, scammers will be able to take all your inscriptions.

  

A wallet that uses key derivation generates a new public key for each transaction. Thus, each inscription will have its own separate public key. If the scammers recognize him, they will only be able to steal one inscription, not all of them. If your wallet does not use key derivation, then in a situation where you own inscriptions totaling $1,000,000, where the average inscription is worth $10,000, you will lose all $1,000,000 as a result of a hacker attack using information about your public key obtained from one inscription

  

_См. Раздел Премущества нашего плагина_ [_https://dcpn.io:5001/oo/r/uOLaihScDcMSAEWZmBJmBRkIp1gy2dfj_](https://dcpn.io:5001/oo/r/uOLaihScDcMSAEWZmBJmBRkIp1gy2dfj)

_Давайте опишем, как юзер может проверить, обладает ли его кошелек всеми перечисленными свойствами? Если на каком-то пункте у него не будет галочки - это покажет ему слабую сторону наших конкурентов._

  ![[Pasted image 20251107063109.png]]

Вы подвергаете себя риску. Взломав этот публичный ключ, мошенники смогут забрать все ваши инскрипшены.

  

Кошелек, который использует деривацию ключей, для каждой транзакции генерирует новый публичный ключ. Таким образом, у каждого инскрипшена будет свой отдельный публичный ключ. Если мошенники его узнают, они смогут украсть только один инскрипшен, а не все. Если ваш кошелек не использует деривацию ключей, то в ситуации, где вы владеете инскрипшенами на общую сумму $1,000,000, где средний инскрипшен стоит $10,000, в результате хакерской атаки с помощью информации о вашем публичном ключе, полученного от одного инскрипшена, вы потеряете весь $1,000,000

  

Что есть у utxord чего нет у других?

- Отсутствие лишних функций. Отсутствие рекламы/ссылок на сторонние ресурсы
- Bitcoin only
- Куски C кода - как это завернуть? Типа код самого битка? Bitcoin native?
- Супер секурная генерация ключей? - тут можно про либбиткоин ну это чета чухня возможно
- Деривация + P2TR
