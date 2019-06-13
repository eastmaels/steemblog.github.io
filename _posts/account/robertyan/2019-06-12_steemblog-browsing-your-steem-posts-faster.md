
---
title: 'steemblog -- browsing your steem posts faster'
permlink: steemblog-browsing-your-steem-posts-faster
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-12 19:29:09
categories:
- utopian-io
tags:
- utopian-io
- development
- steem
- blog
- hexo
thumbnail: 'https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


steemblog -- mirror your steem posts to blog hosts such as GitHub pages, Netlify, etc., and help you organize and search your posts faster. 

- This is my first submission for @utopian-io project
- 本文用于首次尝试向 utopian-io 提交开源项目


#### Repository

- https://github.com/steemblog/blog (blog builder)
- https://github.com/steemblog/hexo-theme-icarus (blog theme)

## steemblog

![blog.png](https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg)
<sub>Image Source: [Pixabay](https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg)</sub>


### Introduction

**steemblog** is a blog service and tool built by myself that synchronize your steem blogs into GitHub pages or other static site hosts, e.g. https://steemblog.github.io/@utopian-io/,  
 https://steemblog.github.io/@robertyan/

The blog service has recently served around 20 users mainly in Steem Chinese community who have provided very positive feedback to the steemblog project. 


### Features

1. Convert all the posts of one or multiple steem accounts with Hexo into static pages, and publish them onto GitHub page or Netlify;
1. Provide smooth user experience to browse, classify and organize one's blogs with the blog themes; 
1. Make the posts updated daily with Travis CI or cron jobs to keep the blogs synchronized from Steem. 

#### 1. Example

By using steemblog, we could easily mirror @utopian-io's posts into https://steemblog.github.io/@utopian-io/, where you could look at @utopian-io's posts in the history, and search through all the posts, with better experience.

Comparing to Steemit, this looks to be a "real blog" and is cleaner and more responsive. 


(1) The home page of the blog

![image.png](https://files.steempeak.com/file/steempeak/robertyan/CZY2i7uG-image.png)

(2) Tag cloud:

<img src="https://files.steempeak.com/file/steempeak/robertyan/7hxbVjjr-image.png" alt="tag-cloud" width=300>

(3) Archives:

<img src="https://files.steempeak.com/file/steempeak/robertyan/AarLa1kI-image.png" alt="archives" width=300>

(4) Recent posts:

<img src="https://files.steempeak.com/file/steempeak/robertyan/zNLVbHGl-image.png" alt="recent-posts" width=300>

(5) Search: 

<img src="https://files.steempeak.com/file/steempeak/robertyan/6oG9Xmrw-image.png" alt="search" width=500>

(6) Post: https://steemblog.github.io/@utopian-io/what-is-utopian-state-of-the-art-forever-stored-in-the-blockchain-107-days-since-the-beginning/

![image.png](https://files.steempeak.com/file/steempeak/robertyan/SVFbnqFH-image.png)


<sub> screenshots from: https://steemblog.github.io/@utopian-io/ </sub>



#### 2. How to Use

To deploy the project for yourself, you could fork https://github.com/steemblog/blog to your account, and setup the blog with [travis-ci](https://travis-ci.org), by updating the environment viariables in travis project with your accounts. 

- GIT_USERNAME: your GitHub account
- GIT_EMAIL: your GitHub account
- GITHUB_PAT: your GitHub token
- BLOG_REPO: the repo to deploy your GitHub pages
- STEEM_ACCOUNTS: the steem accounts to synchronize the posts, separate by comma. e.g. utopian-io,robertyan

Or you can also contact me (@robertyan) to help setup one synchronized blog for your steem account at https://steemblog.github.io, e.g. https://steemblog.github.io/@robertyan/




### Technology Stack

This is a Python + JavaScript project. 

1. steemblog extended and enhanced the [steem blog mirroring tool](https://github.com/think-in-universe/blog) project by myself
1. The interaction with Steem blockchain is built with [beem](https://github.com/holgern/beem) project.
1. The blog generation is built with [hexo](https://hexo.io) blog framework.
1. The blog service by default used an customized hexo theme: [steemblog/hexo-theme-icarus](https://github.com/steemblog/hexo-theme-icarus). The theme has good user experience, but the build speed is terrible. We did intensive enhancements to [hexo-theme-icarus](https://github.com/ppoffice/hexo-theme-icarus) to increase the build speed by 20~100 times. 
1. [invoke](http://www.pyinvoke.org/) for task management. 


#### 1. Build the Blog

To build the blog, we need to construct the [front-matter](https://hexo.io/docs/front-matter) for markdown, by retrieving data from steem, and then use Hexo to generate the static pages.

`blog/message.py`: the front matter template

```yaml
MESSAGES["blog"] = """
---
title: '{title}'
permlink: {permlink}
catalog: true
toc_nav_num: true
toc: true
position: {position}
date: {date}
categories:
- {category}
tags:
{tags}
thumbnail: {thumbnail}
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---

{body}
"""
```


`blog/builder.py`: fetch metadata from steem

```python
    def _write_content(self, post):
        folder = self._get_content_folder()
        c = SteemComment(comment=post)

        # retrieve necessary data from steem
        title = post.title.replace("'", "''")
        permlink = post["permlink"]
        body = c.get_compatible_markdown()
        position = self._get_position(body)
        date_str = post.json()["created"]
        date = date_str.replace('T', ' ')
        tags = "\n".join(["- {}".format(tag) for tag in c.get_tags()])
        category = c.get_tags()[0]
        thumbnail = c.get_pic_url() or ''
        url = c.get_url()

        # build content with template
        template = get_message("blog", footer=True)
        content = template.format(title=title, permlink=permlink,
                                  position=position, date=date,
                                  tags=tags, category=category,
                                  thumbnail=thumbnail, body=body, url=url)


```


`blog/command.py`: build static pages with hexo

```python
@task(help={
      'debug': 'enable the debug mode',
      })
def build(ctx, debug=False):
    """ build the static pages from steem posts """

    configure()
    os.system("hexo clean")
    build_cmd = "hexo generate"
    if debug:
        build_cmd += " --debug"
    os.system(build_cmd)
```



#### 2. Make Build Faster

However, the builds for some accounts with 1000+ posts and 200+ tags are extremely to build (take > 1 hour). In order to serve more accounts, we have to increase the build speed. 

We used below strategies to accelerate the build process by 20~100x.

1. build a customized theme: [steemblog/hexo-theme-icarus](https://github.com/steemblog/hexo-theme-icarus)
2. use cache in rendering intensively
3. implement incremental build in hexo
4. put widgets into standalone html pages and load with ajax
5. use more efficient layout (timeline)
6. reduce total page numbers

`themes/icarus/layout/layout.ejs`: Use fragment cache as much as possible: 

```js
    <%- partial('common/footer', {}, {cache: true}) %>
    <%- partial('common/scripts', {}, {cache: true}) %>

    <% if (has_config('search.type')) { %>
    <%- partial('search/' + get_config('search.type'), {}, {cache: true}) %>
    <% } %>

```

`themes/icarus/layout/layout.ejs`: Generate widget page with hexo generators:

```js
/**
 * Widget page generator
 */
module.exports = function (hexo) {
  hexo.extend.generator.register('widget', function (locals) {
    const widgets = hexo.extend.helper.get('get_config').bind(this)('widgets');
    const component_widgets = widgets.filter((w) => (w.component))

    return component_widgets.map(function(widget){
      return {
        path: `widgets/${widget.type}.html`,
        layout: 'component/pjax_widget_src',
        data: {
          widget: widget,
          __widget: true
        }
      };
    });
  });
}
```

`themes/icarus/layout/component/pjax_widget_ref.ejs` Use reference to page instead build the page itself, which is critical to make incremental build possible.

```html
<div class="card widget">
  <div class="card-content">
    <div id="widget-<%= widget.type %>" data-pjax="<%= `${get_config("root")}widgets/${widget.type}` %>.html" style="position: relative; width: 100%; display: block;"></div>
  </div>
</div>
```

`themes/icarus/includes/generators/category.js`: only the affected category pages will be built in hexo generators

```js
function needs_update(category) {
    if (config.incremental) {
        // in incremental mode, update the affected category pages only
        const updated_categories = list_updated_categories();
        if (updated_categories &amp;&amp; updated_categories.length > 0 &amp;&amp;
            updated_categories.indexOf(category['name']) != -1) {
            return true;
        }
        return false;
    }
    return true;
}

return locals.categories.reduce(function(result, category){
    if (! needs_update(category)) {
        return result;
    }

    const posts = category.posts.sort('-date');
    const data = pagination(category.path, posts, {
        perPage: perPage,
        layout: ['category', 'archive', 'index'],
        format: paginationDir + '/%d/',
        data: {
            category: category.name,
            parents: findParent(category)
        }
    });

    return result.concat(data);
}, []);
```

We cannot show all the details of the implementation here, but how to build the blog from steem data, and how to make the build faster are the key efforts here to build a robust and efficient blog service. 


### Roadmap

While the steemblog service is easy to use for some users, it requires more enhancements.

1. Switch languages and themes easily;
1. Improve search performance; add search functionality by adding Google / Baidu search;
1. Support write back to Steem blockchain when neeeded.
1. Connect with steem-engine / SCOT, and help more Hexo users to post on steem
1. Promote the project to help more people who wants a better blog user experience.


### How to Contribute

For anyone who wants to contribute to this project, feel free to fork https://github.com/steemblog/blog or 
https://github.com/steemblog/hexo-theme-icarus , and submit Pull Requests. 

Or please directly contact me (@robertyan) on Steem if you have any questions to discuss. 



### Github Account

- my personal account: https://github.com/think-in-universe (can be verified with the links in the profile)
- the steemblog organization account: https://github.com/steemblog


- - -

This page is synchronized from the post: ['steemblog -- browsing your steem posts faster'](https://steemit.com/@robertyan/steemblog-browsing-your-steem-posts-faster)
