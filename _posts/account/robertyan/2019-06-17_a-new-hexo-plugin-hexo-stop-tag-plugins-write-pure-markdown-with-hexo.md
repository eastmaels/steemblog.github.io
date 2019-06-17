
---
title: 'a new Hexo plugin [hexo-stop-tag-plugins]  --  write pure markdown with Hexo'
permlink: a-new-hexo-plugin-hexo-stop-tag-plugins-write-pure-markdown-with-hexo
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-17 07:38:21
categories:
- utopian-io
tags:
- utopian-io
- development
- hexo
- blog
- steem
thumbnail: 'https://avatars2.githubusercontent.com/u/6375567?s=200&v=4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This post will introduce the development of a Hexo plugin [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins), which helps hexo users to disable built-in [tag plugins](https://hexo.io/docs/tag-plugins) / [nunjucks syntax](https://mozilla.github.io/nunjucks/templating.html), and write with pure markdown syntax. 

To be more precise, this post's contribution include:

1. a new [hexo plugin](https://hexo.io/plugins/) and NPM package [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins)
2. one defect fix to [hexo](https://github.com/hexojs/hexo) project, which is included in [hexo 3.9.0 release]((https://github.com/hexojs/hexo/releases/tag/3.9.0))


#### Repository

1. hexo plugin: https://github.com/think-in-universe/hexo-stop-tag-plugins
1. submit plugin to hexo site: https://github.com/hexojs/site
1. defect fixing of hexo: https://github.com/hexojs/hexo


#### Commit History

You might want to check the below commit history and PR to understand the contribution. 

1. All the commits of https://github.com/think-in-universe/hexo-stop-tag-plugins, and shipped 0.1.7 version to NPM [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins), with success test results and code coverage.
1. Add the plugin to hexo site with Pull Request: https://github.com/hexojs/site/pull/966, and now `hexo-stop-tag-plugins` is available on the hexo plugins page https://hexo.io/plugins/
1. Fixed the defect about `disableNunjucks` in the Pull Request: https://github.com/hexojs/hexo/pull/3573, and released in [hexo 3.9.0](https://github.com/hexojs/hexo/releases/tag/3.9.0) yesterday (check release note for details)


## a new Hexo plugin: hexo-stop-tag-plugins

<center>
![blog.png](https://avatars2.githubusercontent.com/u/6375567?s=200&v=4)
<sub>Image Source: https://github.com/hexojs</sub>
</center>


### Why did I create hexo-stop-tag-plugins?

#### (1) Issue when building blog from steem with steemblog

In [my last post](https://steemblog.github.io/@robertyan/steemblog-browsing-your-steem-posts-faster/), I introduced **steemblog**, which is a blog service and tool built by @robertyan that synchronize your steem blogs into GitHub pages or other static site hosts, e.g. https://steemblog.github.io/@utopian-io/ , 
 https://steemblog.github.io/@robertyan/ 

During the creation of steemblog, we met issues such as [Failed to build when markdown body contains special chars](https://github.com/steemblog/blog/issues/14) when we're synchronizing some Steem user's posts in markdown into steemblog.

For example, the `{%s}` string in the below code block from the post https://steemd.com/@oflyhigh/mfc-access , will break the conversion from post's source into html, with no html result returned. 

> sConnect.Format(TEXT("ODBC;DRIVER={%s};DSN='';DBQ=%s;"), sDriver, sDBInfo);

This issue happens because hexo enables [tag plugins](https://hexo.io/docs/tag-plugins) by default, which relies on the [nunjucks syntax](https://mozilla.github.io/nunjucks/templating.html), and there's no settings to disable that by hexo users. 

To make steemblog function well, we need to fix this issue. 


#### (2) A common painful issue in hexo community

What's more, this is a quite common issue complaint by a lot of hexo users. You can checkout relevant links and examples from my PR and issues, and examples are:

1. https://github.com/hexojs/hexo/issues/2384
1. https://github.com/hexojs/hexo/issues/1510
1. https://github.com/hexojs/hexo/issues/1755
1. https://github.com/hexojs/hexo/pull/2593

In order to overcome this pain for the hexo users who want to get more control over the [tag plugins](https://hexo.io/docs/tag-plugins) syntax, we implemented this hexo plugin [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins) for those who suffered from the common issue. 



### How to Use

To use this plugin, you can check out the description in the NPM package: [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins)

It's as easy as install it with NPM.

```bash
$ npm install hexo-stop-tag-plugins --save
```

That's it. Then your post will be rendered by hexo as pure markdown, and you can use packages like [marked](https://github.com/markedjs/marked) as the renderer.



### Technology Stack

- JavaScript (ES6) / NodeJS 


### Implementation

Below we'll introduce how the plugin is implemented.

#### (1) set disableNunjucks at renderer level

The implementation of the plugin is not complex if you're familiar with hexo's source code. In project https://github.com/think-in-universe/hexo-stop-tag-plugins, we implemented the overrider.js to set the `disableNunjucks` property of renderer to `true`. Then hexo post renderer should skip the renderering with nunjucks. 

We come up with this idea by reading thorough the renderer process of hexo, and look at relevant issues and pull requests in hexo repostiory.


[override.js](https://github.com/think-in-universe/hexo-stop-tag-plugins/blob/master/lib/overrider.js)

```javascript
/*
  The module is created to disable the tag plugins (https://hexo.io/docs/tag-plugins)
  and nunjucks syntax, which causes troubles in parsing markdown often
*/

'use strict';

const extensions = ['md', 'markdown', 'mkd', 'mkdn', 'mdwn', 'mdtxt', 'mdtext'];

module.exports = function(hexo) {

  let stop_tag_plugins = true;

  if (hexo.config.stop_tag_plugins === undefined || hexo.config.stop_tag_plugins === true) {
    stop_tag_plugins = true;
  } else {
    stop_tag_plugins = false;
  }
  for (let ext of extensions) {
    let renderer = hexo.render.renderer.get(ext);
    if (renderer) {
      renderer.disableNunjucks = stop_tag_plugins;
      hexo.extend.renderer.register(ext, 'html', renderer);
    }
  }

};
```

[index.js](https://github.com/think-in-universe/hexo-stop-tag-plugins/blob/master/index.js)

```javascript
/* global hexo */

'use strict';

var overrider = require('./lib/overrider');

overrider(hexo);

```

We also added sufficient test cases to test this plugin, which you can checkout in [test folder](https://github.com/think-in-universe/hexo-stop-tag-plugins/tree/master/test).

However, what makes us frustration is that the code blocks in markdown are not renderered correctly after we set the `disableNunjucks` property, and only placeholder of the code block are displayed. 

This should be an issue of hexo, and that leads us to fix the defect in hexo with [PR #3573](https://github.com/hexojs/hexo/pull/3573)



#### (2) fix the problem with the disableNunjucks property in hexo project

To understand the issue, you can read more details in the PR: https://github.com/hexojs/hexo/pull/3573

The property `disableNunjucks` was introduced in [PR #2593](https://github.com/hexojs/hexo/pull/2593) by one contributor. However, it's not added correctly and leads to problems. 

To fix that, we modified lib/hexo/post.js in hexojs/hexo repository, which returns content after the placeholders (like a code block) are replaced.

[lib/hexo/post.js](https://github.com/hexojs/hexo/pull/3573/files#diff-a4c942f8d1ce35f909fd1052e77a676eL273)

```javascript
    // Render with markdown or other renderer
    return ctx.render.render({
      text: data.content,
      path: source,
      engine: data.engine,
      toString: true,
      onRenderEnd(content) {
        // Replace cache data with real contents
        data.content = cacheObj.loadContent(content);

        // Return content after replace the placeholders
        if (disableNunjucks) return data.content;

        // Render with Nunjucks
        return tag.render(data.content, data);
      }
}, options);
```
<br />

The [PR #2593](https://github.com/hexojs/hexo/pull/2593) that introduced the 
`disableNunjucks` property didn't add tests. So, to assure the quality, added unit tests for the `disableNunjucks` property:

[test/scripts/hexo/post.js](https://github.com/hexojs/hexo/pull/3573/files#diff-a4c942f8d1ce35f909fd1052e77a676eL273)

```javascript

  // test for PR [#3573](https://github.com/hexojs/hexo/pull/3573)
  it('render() - (disableNunjucks === true)', () => {
    const renderer = hexo.render.renderer.get('markdown');
    renderer.disableNunjucks = true;

    return post.render(null, {
      content: fixture.content,
      engine: 'markdown'
    }).then(data => {
      data.content.trim().should.eql(fixture.expected_disable_nunjucks);
    }).then(data => {
      renderer.disableNunjucks = false;
    });
  });

  // test for PR [#3573](https://github.com/hexojs/hexo/pull/3573)
  it('render() - (disableNunjucks === false)', () => {
    const renderer = hexo.render.renderer.get('markdown');
    renderer.disableNunjucks = false;

    return post.render(null, {
      content: fixture.content,
      engine: 'markdown'
    }).then(data => {
      data.content.trim().should.eql(fixture.expected);
    }).then(data => {
      renderer.disableNunjucks = false;
    });
  });

```


[test/fixtures/post_render.js](https://github.com/hexojs/hexo/pull/3573/files#diff-788f4ce0c4583589bce9a335485f8da9R42)

```javascript
exports.expected_disable_nunjucks = [
  '<h1 id="Title"><a href="#Title" class="headerlink" title="Title"></a>Title</h1>',
  util.highlight(code, {lang: 'python'}),
  '\n\n<p>some content</p>\n',
  '<h2 id="Another-title"><a href="#Another-title" class="headerlink" title="Another title"></a>Another title</h2>',
  '<p>{% blockquote %}<br>',
  'quote content<br>',
  '{% endblockquote %}</p>\n',
  '<p>{% quote Hello World %}<br>',
  'quote content<br>',
  '{% endquote %}</p>'
].join('');
```

<br />

After this defect is fixed in hexo and released in hexo 3.9.0 version, we could say the hexo-stop-tags-plugin should work well for hexo users. 


#### (3) publish the plugin to hexo/plugins and NPM

To make the plugin available to its users. We published it to [NPM](https://www.npmjs.com/package/hexo-stop-tag-plugins) and [hexo/plugins page](https://hexo.io/plugins/).

The submission to hexo/plugins page is merged in PR: https://github.com/hexojs/site/pull/966

[source/_data/plugins.yml](https://github.com/hexojs/site/pull/966/files)

```yaml
- name: hexo-stop-tag-plugins
  description: Disable tag plugins for all markdown posts
  link: https://github.com/think-in-universe/hexo-stop-tag-plugins
  tags:
    - markdown
    - tag_plugins
    - renderer

```

It takes a few days to have the plugin be reviewed and merged.


### Retrospective

1. The hexo repository reviewers are not that active, and may need close follow-up from contributor to make PR to be reviewed and merged. 
1. May need more thoughts and actions on how to push this plugin to the users who met the same issues. 


### Roadmap

1. The `disableNunjucks` property is set at renderer level and applied to all the posts. User may need another setting to make it only applied to some of the posts, which is more flexible. 
1. [hexo-stop-tag-plugins](https://www.npmjs.com/package/hexo-stop-tag-plugins) is quite useful if we want to bring more hexo blog writers onto Steem. It makes it easier for bi-directional integration between hexo and steem: hexo users can use the plugins to write posts that can be published onto Steem; Steem users can use the plugins to render and organize their steem posts with hexo.
1. As a successor of this plugin, we may create another plugin that could make it easier for hexo users to share their posts onto Steem. And as a result, may introduce more developers and writers to Steem community.
1. My long-term vision is to make better integration between Steem and GitHub features (such as GitHub pages), to make developers enjoy their work and life in blockchain era. 

<center>
![image.png](https://files.steempeak.com/file/steempeak/robertyan/7ki0A7YP-image.png)
<sub>picture made by me which combines GitHub and Steem logos</sub>
</center>

### How to Contribute

For anyone who wants to contribute to this project, feel free to fork https://github.com/think-in-universe/hexo-stop-tag-plugins, and submit Pull Requests. 

Or please directly contact me (@robertyan) on Steem if you have any questions to discuss. 



### Github Account

- my personal account: https://github.com/think-in-universe (can be verified with the links in the profile)

- - -

**To reviewers**: this post is set to "development" category because it contains a new project (a hexo plugin), and defect fixing to "hexo" project contributed by myself. If you have any concern, feel free to reach out to me directly. 


- - -

This page is synchronized from the post: ['a new Hexo plugin [hexo-stop-tag-plugins]  --  write pure markdown with Hexo'](https://steemit.com/@robertyan/a-new-hexo-plugin-hexo-stop-tag-plugins-write-pure-markdown-with-hexo)
