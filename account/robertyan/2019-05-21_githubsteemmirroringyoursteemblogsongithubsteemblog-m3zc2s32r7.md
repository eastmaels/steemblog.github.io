
---
title: "用GitHub创建Steem文章镜像 | Mirroring Your Steem Blogs on GitHub | 免费博客备份服务： steemblog"
permlink: githubsteemmirroringyoursteemblogsongithubsteemblog-m3zc2s32r7
catalog: true
toc_nav_num: true
toc: true
date: 2019-05-21 19:17:12
categories:
- steempress
tags:
- steempress
- cn-stem
- cn
- sct
- steem-guides
thumbnail: https://cdn.pixabay.com/photo/2013/10/31/13/43/manuscript-203465_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>本文介绍将Steem文章同步到GitHub pages的开源工具和免费服务：‌</p>
<ol><li class="">开源工具 "blog"：<a href="https://think-in-universe.github.io/blog/" target="_blank" rel="noreferrer noopener">https://think-in-universe.github.io/blog/</a></li><li class="">免费服务 "steemblog"：<a href="https://steemblog.github.io/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io/</a></li></ol>
<img src="https://cdn.pixabay.com/photo/2013/10/31/13/43/manuscript-203465_1280.jpg" alt=""/>
<p>‌</p>
<p>Image Source: <a rel="noreferrer noopener" href="https://cdn.pixabay.com/photo/2013/10/31/13/43/manuscript-203465_1280.jpg" target="_blank">Pixabay</a>‌</p>
<p></p>
<h2 id="yuan-you">缘由<a href="#yuan-you"></a>‌</h2>
<p>最近在用steem的时候，觉得不管是用busy, steempeak还是steemit等，它们的界面设计对于看自己以前的文章并不太方便（当然想看其他人的旧文章也比较麻烦），并且由于国内的网络访问这些站点的速度都不太快，所以以博客服务来看，用户体验是挺差的；至于要方便地搜索、归类自己的文章就更麻烦了。‌</p>
<p>之前曾经有过一些浏览历史文章较方便的服务（如chinabb和steemitfriends），似乎也或者关闭或者收费了，因此暂时没有找到好用的服务。‌</p>
<p>于是想到可以把Steem上的文章备份成镜像，每日自动同步，便于自己梳理和分析；虽然我文章写的不多，但如同在<a rel="noreferrer noopener" href="https://busy.org/@robertyan/thenatureoftags-mn0nty7nab" target="_blank">《标签的本质 | The Nature of Tags（一）》</a>里提到的，组织信息是人类的本能，于是便实现了这里的工具和服务。‌</p>
<p></p>
<h2 id="github-jing-xiang-bo-ke">GitHub镜像博客<a href="#github-jing-xiang-bo-ke"></a>‌</h2>
<p>关于为什么需要自己写文章同步工具，其实是值得询问的：‌</p>
<ol><li class="">首先，博客镜像的工作相信之前有人也已经做过了，这并非什么新想法（但我简单搜了一下也没有找到可以立即复用的工具）。但是搭建博客镜像是一项需要适应自身需求的工作，所以自己动手的话可以有更高的灵活性和掌控度。</li><li class="">其次，即便之前有类似工作的话，可能也并不是同步到GitHub，或者也未必会做到近实时的更新，所以这项工作也可以作为一种服务，也并非完全没有价值。</li></ol>
<p>‌</p>
<p>为了完成这项工作，我们基于steem API、<a rel="noreferrer noopener" href="https://pages.github.com/" target="_blank">GitHub pages</a>和<a rel="noreferrer noopener" href="https://hexo.io/" target="_blank">Hexo</a>[1]框架创建了博客镜像搭建工具，效果如下（示例：<a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>）：‌</p>
<p></p>
<h3 id="1-bo-ke-shou-ye">1. 博客首页<a href="#1-bo-ke-shou-ye"></a></h3>
<p>左侧是用户的profile，右侧是近期的文章，中间为最近文章。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP08D1JPG-BLUrbtcx%2Fimage.png?alt=media&amp;token=b62bd3e9-09d9-43e5-bf5f-8d8d778cc2be" alt=""/></center>

<p style="text-align:center">‌screenshot from <a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<h3 id="2-ce-bian-lan-lei-bie-he-biao-qian">2. 侧边栏：类别和标签<a href="#2-ce-bian-lan-lei-bie-he-biao-qian"></a></h3>
<p>Steem上的标签和类别，会同步到hexo框架下面，并能够正常显示。遗憾的地方在于由于steem上没有类别层级的概念，所以要分类文章，相对来说没有那么灵活。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP0au72ECd9D-dTCtD%2Fimage.png?alt=media&amp;token=3da93dc2-a1be-4475-80e2-94d0f90771d9" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP0fuOdNwxumpAorMV%2Fimage.png?alt=media&amp;token=717c6c49-d428-4085-9740-a5e7ba946af2" alt=""/></center>

<p style="text-align:center">‌screenshots from <a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<h3 id="3-ce-bian-lan-jin-qi-wen-zhang-he-gui-dang">3. 侧边栏：近期文章和归档<a href="#3-ce-bian-lan-jin-qi-wen-zhang-he-gui-dang"></a></h3>
<p>‌显示最近5篇文章，以及每个月的文章数量。可以看出，作为写作者而言，我是比较懒惰的 :)  和大家比还有很大差距。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP0z4YLxJx8zM1o4L-%2Fimage.png?alt=media&amp;token=5513b38d-cd6c-40fa-afe5-fcd77d1a036b" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP13uLVyLXzx_c7R_T%2Fimage.png?alt=media&amp;token=e6dfd817-4f9d-4487-9f2d-4db95518d8fd" alt=""/></center>

<p style="text-align:center">‌screenshots from <a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<h3 id="4-wen-zhang-zhan-shi-you-ce-mu-lu-dai-ma-gao-liang-he-yuan-wen-lian-jie">4. 文章展示：右侧目录、代码高亮和原文链接<a href="#4-wen-zhang-zhan-shi-you-ce-mu-lu-dai-ma-gao-liang-he-yuan-wen-lian-jie"></a></h3>
<p>‌在右侧添加了一个目录控件，对于阅读长文是有帮助的。‌</p>
<p>代码高亮对类似本文的有代码的文章有一定帮助，steemit对代码高亮的处理是比较初级的。‌</p>
<p>原文链接其实是为了方便我自己有时候引用文章需要，在steem上找文章比较低效。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP1ZPUFry0QouOE5vT%2Fimage.png?alt=media&amp;token=b847d2a3-620a-4c2b-96b0-286e5e9cf1dc" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP1gMb4qrQa3vqeb9w%2Fimage.png?alt=media&amp;token=512537c9-eaf7-4ce0-a1ad-6578e8d66b40" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfPA__unwKULWfX6POi%2F-LfPAx3bPQ5oNMVAuvHv%2Fimage.png?alt=media&amp;token=67b42ee9-836b-4586-894d-380f2a1ccdce" alt=""/></center>

<p style="text-align:center">‌screenshots from <a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<h3 id="5-sou-suo">5. 搜索<a href="#5-sou-suo"></a></h3>
<p>‌搜索功能对于想要快速查阅或引用自己的文章，较有帮助。点击右上角的搜索按钮，可以进行快速搜索。</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP4bTIyEqUHVOB6s2W%2Fimage.png?alt=media&amp;token=e727af60-82ee-483f-bf8a-2648131d2af8" alt=""/></center>

<p style="text-align:center">‌screenshot from <a rel="noreferrer noopener" href="https://think-in-universe.github.io/blog/" target="_blank">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<h3 id="6-du-li-de-gui-dang-lei-bie-biao-qian-ye-deng">6. 独立的归档、类别、标签页等<a href="#6-du-li-de-gui-dang-lei-bie-biao-qian-ye-deng"></a></h3>
<p>‌如果要单独查看这些信息，可以到分别的独立页面下查看，如有需要，也可以建立其他的标签页。例如，归档页面的时间线，比steem看起来简洁一点：<a href="https://think-in-universe.github.io/blog/archives/" target="_blank" rel="noreferrer noopener">https://think-in-universe.github.io/blog/archives/</a></p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP59LlIJ-IhLfz2od6%2Fimage.png?alt=media&amp;token=abb24e77-5284-4ed1-9304-0acabcd1a8f9" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP5EQhfUvm-8QIA0h9%2Fimage.png?alt=media&amp;token=d08eab06-f578-4ac1-a1f4-2363a2fe1b44" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfOwGwh7e9-piQXjo6Y%2F-LfP5KIiCToDBun_qaY0%2Fimage.png?alt=media&amp;token=4706e03c-b0bd-41d3-b27f-8f5a1023136f" alt=""/></center>

<p style="text-align:center">‌screenshots from <a href="https://think-in-universe.github.io/blog/" target="_blank" rel="noreferrer noopener">https://think-in-universe.github.io/blog/</a>‌</p>
<p></p>
<p>页面展示大体如此，主要的价值在于从文章的角度，信息的组织更为清晰。如果想要获得一个类似的博客镜像，大抵有两种方法：‌</p>
<ol><li class="">如果你了解GitHub和GitHub pages如何使用，可以使用本文发布的开源代码（<a href="https://github.com/think-in-universe/blog" target="_blank" rel="noreferrer noopener">https://github.com/think-in-universe/blog</a>），根据其中的README，搭建一个类似的镜像就行了。</li><li class="">如果你希望可以使用一个免费的博客镜像服务，可以参考文章最后一章提到的 <a href="https://steemblog.github.io/" target="_blank" rel="noreferrer noopener">steemblog</a> 博客镜像服务，或者直接联系我。</li></ol>
<p>‌</p>
<h2 id="ru-he-shi-xian-bo-ke-jing-xiang-gong-ju">如何实现博客镜像工具？<a href="#ru-he-shi-xian-bo-ke-jing-xiang-gong-ju"></a></h2>
<p>‌为了实现以上功能，我们可以基于博客框架<a href="https://hexo.io/" target="_blank" rel="noreferrer noopener">Hexo</a>[1]，搭建从Steem同步数据、并发布到GitHub pages的博客镜像工具，可以支持基于用户名、标签、日期等查询方式的数据同步。下面简要介绍如何实现这一博客镜像工具。‌</p>
<p>工具的代码在GitHub开源：<a href="https://github.com/think-in-universe/blog" target="_blank" rel="noreferrer noopener">https://github.com/think-in-universe/blog</a>‌</p>
<p>关于具体如何使用此工具，可以参考上面项目中的README的介绍：可以在本地安装后使用，也可以通过travis-ci部署。‌</p>
<p>本项目的代码里重用了<a href="https://busy.org/@robertyan/cn-hello-oqz3cshda1" target="_blank" rel="noreferrer noopener"> @cn-hello 小门童实现时</a>的一些基本框架，所以需要增加的功能较少。工具的工作流程如下，也比较简单：‌</p>
<ol><li class="">下载你的Steem文章；</li><li class="">用Hexo编译成静态文件；</li><li class="">用GitHub pages部署博客；</li></ol>
<p>‌</p>
<h3 id="1-xia-zai-ni-de-steem-wen-zhang">（1）下载你的Steem文章<a href="#1-xia-zai-ni-de-steem-wen-zhang"></a></h3>
<p>‌由于重用了之前的SteemReader的方法，我们可以指定通过账户或者标签以及时间（天数）来获取文章。‌</p>


`blog/builder.py`

```python
class BlogBuilder(SteemReader):

    def __init__(self, account=None, tag=None, days=None):
        SteemReader.__init__(self, account=account, tag=tag, days=days)

    def download(self):
        if len(self.posts) == 0:
            self.get_latest_posts()
        if len(self.posts) > 0:
            for post in self.posts:
                self._write_content(post)
```

<p>‌code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p>为了将文章下载为hexo可识别的markdown格式，需要在markdown中加入相关ymal或json的<a rel="noreferrer noopener" href="https://hexo.io/docs/front-matter.html" target="_blank">元数据</a>。以下为markdown模板，包含了标题、类别、日期、标签等信息，并指定显示文章的目录。‌</p>

`blog/message.py`

```yml
MESSAGES["blog"] = """
---
title: "{title}"
catalog: true
toc_nav_num: true
toc: true
date: {date}
categories:
- {category}
tags:
{tags}
thumbnail: {thumbnail}
---


{body}
"""
```

<p>code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p>使用Steem API，获取steem文章的元数据和markdown文本。‌</p>

`blog/builder.py`

```python
def _write_content(self, post):
    folder = self._get_content_folder()
    c = SteemComment(comment=post)

    # retrieve necessary data from steem
    title = post.title.replace('"', '')
    body = post.body
    date_str = post.json()["created"]
    date = date_str.replace('T', ' ')
    tags = "\n".join(["- {}".format(tag) for tag in c.get_tags()])
    category = c.get_tags()[0]
    thumbnail = c.get_pic_url() or ''
    url = c.get_url()

    # build content with template
    template = get_message("blog")
    content = template.format(title=title, date=date, tags=tags, category=category, thumbnail=thumbnail, body=body, url=url)

    # write into MD files
    filename = os.path.join(folder, "{}_{}.md".format(date_str.split('T')[0], post["permlink"]))
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)

    logger.info("Download post [{}] into file {}".format(title, filename))
```

code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌

<p></p>
<h3 id="2-yong-hexo-bian-yi-cheng-jing-tai-wen-jian">（2）用Hexo编译成静态文件<a href="#2-yong-hexo-bian-yi-cheng-jing-tai-wen-jian"></a></h3>
<p>‌我们需要为建立的博客设置一个美观的主题。‌</p>
<p>我们这里使用了 <a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noreferrer noopener">https://github.com/ppoffice/hexo-theme-icarus</a> 主题，需要将其作为一个git submodule加入到git repository中。‌</p>

`.gitmodules`
```
[submodule "theme"]
path = themes/icarus
url = https://github.com/ppoffice/hexo-theme-icarus.git
```

<p>‌code from <a href="https://github.com/think-in-universe/blog" target="_blank" rel="noreferrer noopener">https://github.com/think-in-universe/blog</a> | <a href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank" rel="noreferrer noopener">MIT License</a>‌</p>
<p></p>
<p>随后使用hexo命令来将markdown转换成生成静态的文档。‌</p>

`blog/command.py`
```python
@task(help={
      })
def build(ctx):
    """ build the static pages from steem posts """

    os.system("cp -f _config.theme.yml themes/icarus/_config.yml")
    os.system("hexo generate")
```

<p>‌code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<h3 id="3-yong-github-pages-bu-shu-bo-ke">（3）用GitHub pages部署博客<a href="#3-yong-github-pages-bu-shu-bo-ke"></a></h3>
<p>‌正式部署时，我们有两种方式，一是在本地使用hexo命令部署，或者在travis-ci 中定期每日进行同步。‌</p>
<p>hexo命令部署：<code>blog/command.py</code> </p>

```python
@task(help={
      })
def deploy(ctx):
    """ deploy the static blog to the GitHub pages """

    build(ctx)
    os.system("hexo deploy")
```

<p>‌code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p>travis-ci部署：<code>.travis/deploy.sh</code> </p>

```bash
[ -z "${GITHUB_PAT}" ] &amp;&amp; exit 0
[ "${TRAVIS_BRANCH}" != "master" ] &amp;&amp; exit 0

git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_USERNAME}"

git clone --depth 1 --branch gh-pages --single-branch https://${GITHUB_PAT}@github.com/${TRAVIS_REPO_SLUG}.git site
cd site
cp -r ../public/* ./

NOW=$(date +"%Y-%m-%d %H:%M:%S %z")
git add --all *
git commit -m "Site updated: ${NOW}" || true
git push -q origin gh-pages
```

<p>‌code from <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> | <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p>另外，需要注意，由于用travis-ci 部署时需要用户提供Git用户信息（用于commit到gh-pages）以及GitHub的token，所以需要以环境变量的方式进行配置。‌</p>
<p></p>
<h2 id="bo-ke-jing-xiang-fu-wu-httpsteembloggithubio">博客镜像服务 <a href="http://steemblog.github.io/" target="_blank" rel="noreferrer noopener">http://steemblog.github.io/</a><a href="#bo-ke-jing-xiang-fu-wu-httpsteembloggithubio"></a></h2>
<p>‌今天在微信群中 岩哥 @andrewma 提到想要一个分析文章标签的服务，我想起搭建的这个博客镜像也有标签云和标签统计，所以帮助建一个类似的镜像服务就能解决该问题。‌</p>
<p>但由于岩哥对GitHub并不熟悉，使用上面提到的博客镜像工具可能较为困难，所以在此基于<a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a> 项目，建一个organization account用户管理博客，帮助有需要的人建博客镜像的子目录，这就是<a rel="noreferrer noopener" href="https://github.com/steemblog" target="_blank">steemblog</a>。‌</p>
<p></p>
<h3 id="1-ru-he-shi-yong-bo-ke-jing-xiang-fu-wu">1. 如何使用博客镜像服务<a href="#1-ru-he-shi-yong-bo-ke-jing-xiang-fu-wu"></a></h3>
<p>‌目前，这个博客镜像服务可以在 <a href="https://steemblog.github.io/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io</a> 找到。‌</p>
<p>如果要添加一个新的用户到镜像同步中，只需添加账户到用户列表中即可（目前是手动添加的）。例如，我们添加了 @robertyan 和 @andrewma 到列表中。我们可以在以下链接访问他们的博客镜像：‌</p>
<ol><li class=""><a href="https://steemblog.github.io/@robertyan/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io/@robertyan/</a></li><li class=""><a href="https://steemblog.github.io/@andrewma/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io/@andrewma/</a></li></ol>
<p>‌</p>
<p>与之前的工具需要手动配置用户信息不同，这里自动从steem同步了用户的profile。（不过跟我手动配置的差不多）</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfQLEQg-SWPPk-Dgkkm%2F-LfQQgyYfvhbcnKw0gsw%2Fimage.png?alt=media&amp;token=8d9e03d8-905b-4501-8356-f5ba90b1fb4e" alt=""/></center>

<p style="text-align:center">‌screenshot from <a rel="noreferrer noopener" href="https://steemblog.github.io/@robertyan/" target="_blank">https://steemblog.github.io/@robertyan/</a>‌</p>
<p></p>
<p>@andrewma的博客镜像也创建成功了，不过头像和缩略图的处理可能需要做一些改进。</p>
<img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfQmn7-sAZiIXovvvOK%2F-LfQnFaXnxdrrRT_Rabf%2Fimage.png?alt=media&amp;token=909383c4-7d9c-4419-ad2c-0b4b3cd1b137" alt=""/>
<p style="text-align:center">‌screenshot from <a href="https://steemblog.github.io/@andrewma/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io/@andrewma/</a>‌</p>
<p></p>
<p>比如岩哥关心的标签信息，可以在<a rel="noreferrer noopener" href="https://steemblog.github.io/@andrewma/" target="_blank">https://steemblog.github.io/@andrewma/</a> 中找到：</p>
<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfQmn7-sAZiIXovvvOK%2F-LfQnkyX0DKkZHHM4sta%2Fimage.png?alt=media&amp;token=c63ad809-9ea8-4458-8628-341a7cb13002" alt=""/></center>

<center><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LXMinqg0EHzgN2ivoTT%2F-LfQmn7-sAZiIXovvvOK%2F-LfQnrSEUVGs1oradohg%2Fimage.png?alt=media&amp;token=e99e5501-79f1-45a0-8b3e-c4579a30b966" alt=""/></center>

<p style="text-align:center">‌screenshots from <a rel="noreferrer noopener" href="https://steemblog.github.io/@andrewma/" target="_blank">https://steemblog.github.io/@andrewma/</a></p>
<p></p>
<p>同样的，我们可以继续添加新的用户，他们的镜像可以在 https://steemblog.github.io/@{账户名} 中找到。‌</p>
<p>对于这样的博客镜像，如有需要或建议，可以在文章后面留言讨论。‌</p>
<p></p>
<h3 id="2-ru-he-jian-li-bo-ke-jing-xiang-fu-wu">2. 如何建立博客镜像服务<a href="#2-ru-he-jian-li-bo-ke-jing-xiang-fu-wu"></a></h3>
<p>‌<a rel="noreferrer noopener" href="https://github.com/steemblog/blog" target="_blank">https://github.com/steemblog/blog</a> 是在 <a rel="noreferrer noopener" href="https://github.com/think-in-universe/blog" target="_blank">https://github.com/think-in-universe/blog</a>  的基础上构建的，为了适应多用户的子目录的需要，需要对原来的项目的目录结构和部署方式做一些调整。‌</p>
<p></p>
<p><strong>（1）从steem下载文章的同时，自动同步用户信息</strong>‌</p>
<p>通过steem获取的账户信息，自动更新<code>_config.yml</code>和<code>_config.theme.yml</code></p>
<p>相对应的模板在 <code>blog/message.py</code>  中，由于内容太长，这里不贴出。‌</p>

`blog/builder.py`

```python
def update_config(self):
    if not self.account:
        return

    organization = BLOG_ORGANIZATION
    logo = BLOG_AVATAR
    favicon = BLOG_FAVICON

    language = settings.get_env_var("LANGUAGE") or "en"

    a = SteemAccount(self.account)
    author = self.account
    name = a.get_profile("name") or ""
    # about = a.get_profile("about") or ""
    location = a.get_profile("location") or ""
    avatar = a.get_profile("profile_image") or ""
    website = a.get_profile("website") or ""

    # build config file with template
    template = get_message("config")
    config = template.format(organization=organization, language=language,
                             name=name, author=author)
    filename = CONFIG_FILE
    with open(filename, "w", encoding="utf-8") as f:
        f.write(config)
    logger.info("{} file has been updated for the account @{}".format(filename, author))

    # build config theme file with template
    template = get_message("config.theme")
    config = template.format(organization=organization,
                             favicon=favicon, logo=logo,
                             author=author, name=name, location=location,
                             avatar=avatar, website=website)
    filename = CONFIG_THEME_FILE
    with open(filename, "w", encoding="utf-8") as f:
        f.write(config)
    logger.info("{} file has been updated for the account @{}".format(filename, author))
```

<p>‌code from<a rel="noreferrer noopener" href="https://github.com/steemblog/blog" target="_blank"> https://github.com/steemblog/blog</a> | <a rel="noreferrer noopener" href="https://github.com/steemblog/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p><strong>（2）在生成静态网页时，相互隔离不同用户的路径</strong>‌</p>
<p>将不同账户的页面放置到@account子目录下。‌</p>

`blog/message.py`

```yml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://{organization}.github.io
root: /@{author}/
permalink: :category/:post_title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public/@{author}
```

<p>‌code from<a rel="noreferrer noopener" href="https://github.com/steemblog/blog" target="_blank"> https://github.com/steemblog/blog</a> | <a rel="noreferrer noopener" href="https://github.com/steemblog/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p>编译指定的steem用户的文章为静态页面，隔离放置在发布目录下。‌</p>

`blog/command.py`

```python
@task(help={
      })
def build_all(ctx):
    """ download the posts of all the accounts, and generate pages """

    accounts = settings.get_env_var("STEEM_ACCOUNTS") or []
    if accounts and len(accounts) > 0:
        for account in accounts.split(","):
            clean(ctx)
            download(ctx, account)
            build(ctx)
```

<p>‌code from<a rel="noreferrer noopener" href="https://github.com/steemblog/blog" target="_blank"> https://github.com/steemblog/blog</a> | <a rel="noreferrer noopener" href="https://github.com/steemblog/blog/blob/master/LICENSE" target="_blank">MIT License</a>‌</p>
<p></p>
<p><strong>（3）部署时，将页面推送到 </strong>steemblog.github.io‌</p>
<p>只需修改 <code>.travis/deploy.sh</code> 中的目标代码仓库的参数即可。‌</p>
<p></p>
<h2 id="zui-hou">最后<a href="#zui-hou"></a></h2>
<p>‌究其本质，本文是对steem上的数据进行处理的一种尝试，在开放的区块链数据的基础上，我们可以根据场景，采取多种灵活的数据展现方式，这里的镜像博客无疑又是其中的一种。‌</p>
<p>希望本文提供的工具或服务对你有帮助，如果需要帮助你开启博客镜像服务，可以在本文留言，我会尽量提供支持。由于travis的使用也有一些限制，优先帮助<strong>前5位留言</strong>的朋友提供服务 :)‌</p>
<p></p>
<h2 id="can-kao-wen-xian">参考文献<a href="#can-kao-wen-xian"></a></h2>
<ol><li class=""><a href="https://hexo.io/" target="_blank" rel="noreferrer noopener">https://hexo.io</a></li><li class="">Hexo icarus主题：<a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noreferrer noopener">https://github.com/ppoffice/hexo-theme-icarus</a></li><li class="">博客镜像工具：<a href="https://think-in-universe.github.io/blog/" target="_blank" rel="noreferrer noopener">https://think-in-universe.github.io/blog/</a></li><li class="">博客镜像服务：<a href="https://steemblog.github.io/" target="_blank" rel="noreferrer noopener">https://steemblog.github.io/</a></li></ol>
 <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://robertyan.000webhostapp.com/2019/05/%e7%94%a8github%e5%88%9b%e5%bb%basteem%e6%96%87%e7%ab%a0%e9%95%9c%e5%83%8f-mirroring-your-steem-blogs-on-github-%e5%85%8d%e8%b4%b9%e5%8d%9a%e5%ae%a2%e5%a4%87%e4%bb%bd%e6%9c%8d%e5%8a%a1%ef%bc%9a-st </em><hr/></center>

- - -

This page is synchronized from the post: [用GitHub创建Steem文章镜像 | Mirroring Your Steem Blogs on GitHub | 免费博客备份服务： steemblog](https://steemit.com/@robertyan/githubsteemmirroringyoursteemblogsongithubsteemblog-m3zc2s32r7)
