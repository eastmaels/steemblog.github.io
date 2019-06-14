
---
title: 'Generating a word cloud from all your written words'
permlink: generating-a-word-cloud-from-all-your-written-words
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-15 15:42:03
categories:
- beem
tags:
- beem
- python
- wordcloud
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qmavs7vxdPMsW7gQgw9EZ5cSZ16R4t5FLTs66wiK1D2Zz8'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---




A word cloud is a  visual representation of text data in which the font size depends on the its frequency in the text sample. 


## Wordcloud of an account

I'm using the python library [word_cloud](https://amueller.github.io/word_cloud/index.html) for generating a word cloud image from all posts and comments an account has written.
Here is the result for my account:

![wordcloud.png](https://ipfs.busy.org/ipfs/Qmavs7vxdPMsW7gQgw9EZ5cSZ16R4t5FLTs66wiK1D2Zz8)


All links are removed from the included text. I use also the predefined stopword list to remove words like is, and and so on.

In order to improve speed, only the first version of a post or comment is taken into account and all  editing of posts/comments are skipped.

```
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.comment import Comment
from beem.nodelist import NodeList
import six
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS
import re

if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    if six.PY2:
        authorperm = raw_input("account / authorperm:")
    else:
        authorperm = input("account / authorperm:")
    text = ""
    try:
        comment = Comment(authorperm, steem_instance=stm)
        text = comment.body
    except:
        account = Account(authorperm, steem_instance=stm)
        permlink_list = []
        for h in account.history(only_ops=["comment"]):
            if h["permlink"] in permlink_list:
                continue
            if h["author"] != account["name"]:
                continue
            permlink_list.append(h["permlink"])
            text += h["body"]

    text = re.sub(r'https?:\/\/.*[\r\n]*', '', text.replace(" ", "\n"), flags=re.MULTILINE).replace("\n", " ")
    stopwords = set(STOPWORDS)
    
    wordcloud = WordCloud(max_font_size=120, width=1280, height=800, min_font_size=6, stopwords=stopwords).generate(text)
    plt.figure()
    plt.imshow(wordcloud, interpolation="bilinear")
    plt.axis("off")
    # plt.show()
    plt.savefig("wordcloud.png", dpi=300)
    
```
Store the script as `plot_wordcloud.py ` and run it by
```
python plot_wordcloud.py
```
The script asks for the steem account name and stores the image `wordcloud.png` in the same directory as the python script.
Word cloud needs to be installed:
```
pip install wordcloud
```

The Wordcloud class has the following options:
```
class WordCloud(self, font_path=None, width=400, height=200, margin=2, ranks_only=None, prefer_horizontal=.9, mask=None, scale=1, color_func=None, max_words=200, min_font_size=4, stopwords=None, random_state=None, background_color='black', max_font_size=None, font_step=1, mode="RGB", relative_scaling='auto', regexp=None, collocations=True, colormap=None, normalize_plurals=True, contour_width=0, contour_color='black', repeat=False)
```
which can be changed for modifying the wordcloud image.
You can find more information in the API-reference: https://amueller.github.io/word_cloud/generated/wordcloud.WordCloud.html

## Wordcloud of a post

The script can also be used to create a wordcloud for a post.

Here is the result for https://steemit.com/steem/@steemitblog/engineering-update-cost-reductions-rocksdb-mira-condenser-split:

![wordcloud.png](https://ipfs.busy.org/ipfs/QmUBw2uTAduj4GbNNHrAFjRX7EaxgnhFwEr7bbyfRdCDZ4)


## Version with image
```
#!/usr/bin/python
from beem import Steem
from beem.comment import Comment
from beem.account import Account
from beem.nodelist import NodeList
import numpy as np
import six
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
from PIL import Image
import os
from os import path
import re

if __name__ == "__main__":
    nodelist = NodeList()
    nodelist.update_nodes()
    stm = Steem(node=nodelist.get_nodes())
    if six.PY2:
        authorperm = raw_input("account / authorperm:")
    else:
        authorperm = input("account / authorperm:")
    text = ""
    try:
        comment = Comment(authorperm, steem_instance=stm)
        text = comment.body
    except:
        account = Account(authorperm, steem_instance=stm)
        permlink_list = []
        for h in account.history(only_ops=["comment"]):
            if h["permlink"] in permlink_list:
                continue
            if h["author"] != account["name"]:
                continue
            permlink_list.append(h["permlink"])
            text += h["body"]
    
    text = re.sub(r'https?:\/\/.*[\r\n]*', '', text.replace(" ", "\n"), flags=re.MULTILINE).replace("\n", " ")
    stopwords = set(STOPWORDS)
    
    d = path.dirname(__file__) if "__file__" in locals() else os.getcwd()
    coloring = np.array(Image.open(path.join(d, "Steem_Symbol_Gradient.png")))
                
    wc = WordCloud(background_color="white", mask=coloring, max_font_size=80, max_words=1000,
                          stopwords=stopwords, random_state=42)
    wc.generate(text)
    
    image_colors = ImageColorGenerator(coloring)    
    
    plt.imshow(wc.recolor(color_func=image_colors), interpolation="bilinear")
    plt.axis("off")
    plt.savefig("wordcloud_steem.png", dpi=500)
    
```

In order to run this script, `Steem_Symbol_Gradient.png` from [Steem-Logos-and-Usage-Guide.zip](https://steem.com/wp-content/uploads/2018/10/Steem-Logos-and-Usage-Guide.zip) needs to copy in the same directory.

![wordcloud_steem.png](https://ipfs.busy.org/ipfs/QmcQ7BXAGE7x2XDYiqazL7pcsVsTUiRkHgCTVNdKh8QntW)



___

I will generate your personal wordcloud for your account or a post. Just asks for it in a comment and specify if you want the big steemit logo shaped version or the small version  :).


- - -

This page is synchronized from the post: ['Generating a word cloud from all your written words'](https://steemit.com/@holger80/generating-a-word-cloud-from-all-your-written-words)
