# myPage

## 概要

- プロフィール
- ブログ
- 活動

**以上3点を軸にホームページを作成**

## 課題

1. 自分用のHPがないためまとまった情報を相手に与えることができない
2. 定まった発信源がない
3. ポートフォリオを作りたい

## 解決法

**プロフィールからsnsまで網羅することによって自分の全ての情報を凝縮する**

* プロフィール
* ブログ
* Qiita
* Twitter
etc ...

microCMSやAPIを使ってこれらを実装する。

### ブログ記事の執筆

Qiitaだと技術ブログに偏ってしまうため、自由に書けるスペースを自分で作ろうと考えた。
記事の保存はmicroCMSを使って実現する。

### プラスα

いろんな人が**テンプレートとして使えるよう**に実装したいと考えているため、ローカルデータは必要最低限に抑えて、DBから持ってくるようにする。

* プロフィール
* 画像
* API
etc ...
    


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
