---
id: publicPool
title: DODO V2 公开池
sidebar_label: DODO V2 公开池
---

## 什么是公开池

**故事举例：**

你家里的苹果树结了100个苹果，你想要把苹果卖掉换钱。一个最简单的想法是，以恒定价格卖苹果，1$一个苹果。

![](https://dodoex.github.io/cn/img/dvm_1.png)

![](https://dodoex.github.io/cn/img/dvm_2.png)

但是你发现，市场好于预期，好多人都来买苹果，自己手里的苹果越来越少。这时你意识到，价格可能定低了，我本可以卖更多的钱。所以你有了一个点子，卖出的苹果越多，说明大家对苹果的需求越旺盛，我应该以更高价格出售苹果。这时，你有了一条价格曲线。

![](https://dodoex.github.io/cn/img/dvm_3.png)

你的顾客问你，苹果买完如果不想要了，能不能退货啊？（我们假设苹果的保质期无限长）你想了想说，当然可以，我会按照市场价退给你的。

![](https://dodoex.github.io/cn/img/dvm_4.png)

恭喜你！你刚刚建立一个可以买卖苹果的市场！这是一个巨大的进步，因为这赋予了苹果很好的流动性。有些人会考虑到苹果价格会上涨，所以提前买入。买入的数量可能会远远超过他们所需要的，进而把价格推到很高的位置。这就是所谓的流动性溢价。这也是为什么，你需要一个流动性市场。

![](https://dodoex.github.io/cn/img/dvm_5.png)

那么，实现这样一个市场需要什么呢？很简单：
- 苹果
- 价格曲线

这就是DODO Vending Machine（自动售货机，以下简称DVM）所实现的，只要提供你的代币，画出你想要的价格曲线，我们就为你生成了这样一个，无人值守，却人人可参与的金融市场！更棒的是，这一过程完全无门槛，无准入！

读到这里，你肯定会问，公有池 有什么具体的应用场景呢？

### 案例1：低成本建立初始流动性, 支持大容量市场

你是一名开发者，想要像AC一样建立一个社区项目。那么你可以发行1000w枚代币，其中的1%即10w枚归自己所有。

990w枚对社区开放。如果你要在AMM中为此建立一个市场，你需要另外990w美元作为其买盘，这显然是不现实的。那么你或许会用1000美元和1000token建立一个简单的AMM池。如果有人想要投资10w美元你的代币，他将承受100倍的成本价！这显然是令人望而却步的，你的代币无法建立一个有效的市场。

但是，你可以选择用990w枚代币，以起始价1$，建立一个DODO Vending Machine，并设定k=1，即 bonding curve。如果有社区成员看好你的项目，愿意买入10w枚代币，他的平均价格仅为1.005！市场容量远远大于AMM的解决方案。至于为什么这很重要，我们有一篇更为深入的讨论，会在后面发出来。


### 案例2：灵活购买（设置）流动性

例如算法稳定币项目，在一美元以下，需要尽快筹集流动性承接死亡螺旋。如果能在0.9就接住，那将极大巩固市场信心，反之如果在0.5才接住，可能已经导致了不可逆转的死亡螺旋。（意思就是AMM里的大多数买盘对你都没意义）那么你可以这么做，假设你的代币叫X，建立一个DAI-X资金池，设置初始价格为1，k=0.01。

为这个资金池的LP token设置奖励，你就可以筹集到聚集在 1 附近的买盘支撑。资金效率比传统AMM高得多即使不是算法稳定币项目，你也可以在关键支撑点位募集资金，并给予奖励。

### 案例3：实现合理的市值管理，抑制过分的投机活动

对大多数刚接触币圈的人来说，这个需求可能难以理解。其实项目早期价格涨太高并不好，过高的价格往往意味着泡沫，会导致很多人被割。

早期支持者被割，就难以形成共识，因此高开低走是非常不利的。抑制投机行为最关键的点是，在低价提供足够多的流动性，让大多数人的成本接近（且较低）。而这正是DVM的灵活性可以支持的。设置i在较低价格，k为较小值即可。

## 背后的数学

公开池 同样使用了DODO V1中的PMM算法。也许会有一个疑问，PMM不是根据外部市场实时调整价格吗？公有池中的长尾币也没有外部价格啊。

这里我们就要介绍[PMM算法](./pmm) 的本质了：一个压缩的订单簿。公有池利用 PMM 算法布置出了一个价格从 i 到 ∞ 的卖盘流动性。这里的i不再代表外部价格，而是代表起始价格。具体的定价公式如下：

$$P_{margin}=iR$$

$$如果 B<B_0, 则 R=1-k+(\frac{B_0}{B})^2k$$

以上公式中的B0为最初充值的代币数量，B为当前代币库存。

从公式中可以看出，公有池是一种单边的PMM算法（即始终满足当前代币库存B少于初始代币数量B0），因此其具有如下性质：

1. 一开始没有Quote 只有Base，只需要项目方代币即可启动，并且代币数量不限
2. 起始价格为i
3. 随着代币售出，合约中的BaseToken余额越来越少，价格也越来越高
4. 买走Base Token的Quote作为买盘流动性，即被消耗的卖盘流动性“翻转”为买盘流动性，因此买盘流动性始终可以支撑卖压
5. 价格曲线可调，k越小价格变化越缓慢，k越大价格变化越迅速。k=0时为恒定价格，k=1时为bonding curve

补充说明：公有池 允许任何人自由充提，但必须按照当前base和quote的比例。举例，当前价格2$，有100w base 和10w quote，充提都将以base:quote = 10：1的比例发生。这种设计是为了使得充提不影响市场价格。注意，当前价格不影响充提比例，只有库存数量的影响充提比例。

## 其他

放在池子里的钱和苹果，为这个市场提供了流动性。而这些钱和苹果，都是有机会成本的。因此我们会向所有交易苹果的人收取手续费补偿给流动性提供者。

当然，你可以管理你在资金池里的资产。即等比例地充提苹果和钱。如果有其它人愿意加入，也可以，他们也可以等比例地充提两种资产。这既不会影响你的资产，也不会影响市场价格。