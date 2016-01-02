MSE Club Website theme
======================

A website inspired from two differnt ideas: the paper-like [Google material design](https://www.google.com/design/spec/material-design/introduction.html) (like all new sites are popping up with) and the vibrant tiled [Smallpdf](http://smallpdf.com)

I used [materialize](http://materializecss.com) as a framework for this website. It was a nice structure to work with but I was having trouble with coloring certain things. Also the card feature (which is 99% of why I picked material design) Is a real pain to work with. Nevertheless, the website will be running for the [UofT MSE Club]. Take a look.

Managing the website
--------------------

This website was built with Jekyll. Jekyll is a static site builder that uses the Liquid Templating System and Markdown Post Rendering (with extra bits like Sass compilers and pagination).

For an example, let's look at **/index.html**. It starts out with:

```
---
layout: default
---
```

 - Everything after this is referred to as the "content". The HTML page the is generated uses the template found in **_layouts/default.html**.
 - In **_layouts/default.html**, it is a pretty simple html file with {{ include }} liquid tags. That means it will pull all the data from the filename found in the **_include** folder. For example, {% include head.html %} will take all the html in **_includes/head.html** and dump it in the template.
 - **_includes/head.html** has several liquid tags [explained in the wiki](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). page.variable refers the the original file **/index.html** that started this whole shebang.
 - Since the original page is **/index.html** the completed html file ends up at **_site/index.html**. Other html files on the root of the directory, as well as files in **_posts** work the same way, but the completed html file will be in different locations (Unless you have a *permalink* specified).
 - Hierarchy looks like this: *post/page* > *layout file* > *include files* > *actual files(html/css/js)* > *arbitrary variables*.

### Setting up is as easy as 1, 2, 3!

#### Only for editing posts/information (no major website modification)

 1. Install Github for Windows and Notepad++ (or any text editor, but you will like this one A LOT)  
 2. Create an account, then fork this repository on the Github program.
 3. Change the files I outlined in the next section using Notepad++ only.
 4. "Commit" first then "Push" your commit. (It's a two step process)
 5. **Only done once** Log into mse.skule.ca and scroll down to find "cron jobs". Go to File Explorer and edit the file that has the same name as the cron job so that it has your repositories url instead of mine.

#### The full suite (for viewing changes before commiting and extensive editing)

 1. Get Git, Ruby, RubyDevKit, and Jekyll.
    a) Windows users can just download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Some zip programs have problems, try 7zip to extract)
 2. Clone respository and do edits
 3. run "jekyll serve" on the repository to see the site located at localhost:4000
 4. When satisfied push your commit.
 5. Don't forget to edit the cron job if you haven't before!

### Editing posts/information

#### Adding a new event/article/sport/shop item

Look in the **_posts** folder for the respective catagory and follow the template provided. All posts must have a YYYY-MM-DD-****.md format to be valid.
Images are found in the **img** folder, respectfully.

#### Adding new members

They are found in an unorthodox location **_data/members.yml**. Please mimic all the spaces/quotes/dashes perfectly, even one extra character can cause unexpected results. Or you can read up on YML to understand what is going on.
Images for these members are also found in the **img** folder.

#### Background/color changes

Background and the little icon are in the **img** folder.
Colors for the tiled menu items are in **_data/apps.yml**. Visit the color page for the hues/shades you can use.
To edit the two primary colors (making up the navigation, footer, text) look for it at the bottom of **_config.yml**

Materialize
-----------

I used materialize for the css.
Changes in the materialize files can be found at **\_sass\components\CHANGES.txt**.
README can be found at **README_materialize.md**.

Voila! Thanks for reading ~ Nanosmasher