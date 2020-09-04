---
title: ツイート埋め込みテスト
date: "2020-09-05T00:00:00.000"
description: Gatsby.jsで作ったブログにツイートの埋め込みしようとしてちょっとうまくいかなかったのでメモです。gatsby-plugin-twitterをいれると埋め込みできるようになりました。
---

Gatsby.jsで作ったブログにツイートの埋め込みしようとしてちょっとうまくいかなかったのでメモです。
gatsby-plugin-twitterをいれると埋め込みできるようになりました。


## ツイート埋め込みコード

ツイッターの埋め込み機能のとこから取得したタグはこんなの。

テキストだけのツイート

```html
<blockquote class="twitter-tweet" data-dnt="true">
  <p lang="ja" dir="ltr">
    おかき好きだからおかき関係のエンジニアになりたいかも
  </p>
  &mdash; みう@かけだしメンティー🍓 (@programable_miu)
  <a href="https://twitter.com/programable_miu/status/1269613634730078208?ref_src=twsrc%5Etfw">
    June 7, 2020
  </a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

こっちはテキストと動画のツイート

```html
<blockquote class="twitter-tweet" data-dnt="true">
  <p lang="ja" dir="ltr">
    私のブログ、Hタグがぷるぷるしてるのが読みにくいってコメントをいただいて、
    おそらくHタグだけぷるぷるしてるのがよくないんだなと考えたので、
    BODY全体をぷるぷるさせてみました👍
    <br>
    <br>
    だいぶデザインとしてよくなった気がします！
    <a href="https://t.co/r0jrODnJnC">
      pic.twitter.com/r0jrODnJnC
    </a>
  </p>
  &mdash; みう@かけだしメンティー🍓 (@programable_miu)
  <a href="https://twitter.com/programable_miu/status/1300454449203216386?ref_src=twsrc%5Etfw">
    August 31, 2020
  </a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

これを貼り付けるとツイートの埋め込みができるはずなんですけど・・・

## うまくいってないとき

マークダウンにそのまま貼ってみると、ただの引用になっちゃってうまくいかなかったです。
うまくいってないときの再現のためにblockquoteタグのclassとdata-dntを消したもの置いておきます。

<blockquote><p lang="ja" dir="ltr">おかき好きだからおかき関係のエンジニアになりたいかも</p>&mdash; みう@かけだしメンティー🍓 (@programable_miu) <a href="https://twitter.com/programable_miu/status/1269613634730078208?ref_src=twsrc%5Etfw">June 7, 2020</a></blockquote>

<blockquote><p lang="ja" dir="ltr">私のブログ、Hタグがぷるぷるしてるのが読みにくいってコメントをいただいて、おそらくHタグだけぷるぷるしてるのがよくないんだなと考えたので、BODY全体をぷるぷるさせてみました👍<br><br>だいぶデザインとしてよくなった気がします！ <a href="https://t.co/r0jrODnJnC">pic.twitter.com/r0jrODnJnC</a></p>&mdash; みう@かけだしメンティー🍓 (@programable_miu) <a href="https://twitter.com/programable_miu/status/1300454449203216386?ref_src=twsrc%5Etfw">August 31, 2020</a></blockquote>

引用になるってことはblockquoteタグのとこはちゃんとHTMLとしていけてそうですね。
scriptタグの部分が実行されてないみたいです。

## gatsby-plugin-twitterいれるといける

gatsby-plugin-twitterってのをいれるといけるみたいです。

https://www.gatsbyjs.com/plugins/gatsby-plugin-twitter/

どれどれ〜

<blockquote class="twitter-tweet" data-dnt="true"><p lang="ja" dir="ltr">おかき好きだからおかき関係のエンジニアになりたいかも</p>&mdash; みう@かけだしメンティー🍓 (@programable_miu) <a href="https://twitter.com/programable_miu/status/1269613634730078208?ref_src=twsrc%5Etfw">June 7, 2020</a></blockquote>

<blockquote class="twitter-tweet" data-dnt="true"><p lang="ja" dir="ltr">私のブログ、Hタグがぷるぷるしてるのが読みにくいってコメントをいただいて、おそらくHタグだけぷるぷるしてるのがよくないんだなと考えたので、BODY全体をぷるぷるさせてみました👍<br><br>だいぶデザインとしてよくなった気がします！ <a href="https://t.co/r0jrODnJnC">pic.twitter.com/r0jrODnJnC</a></p>&mdash; みう@かけだしメンティー🍓 (@programable_miu) <a href="https://twitter.com/programable_miu/status/1300454449203216386?ref_src=twsrc%5Etfw">August 31, 2020</a></blockquote>

できたできた👍
