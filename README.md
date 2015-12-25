MSE Club Website theme
======================

A website inspired from two differnt ideas: the paper-like [Google material design](https://www.google.com/design/spec/material-design/introduction.html) (like all new sites are popping up with) and the vibrant tiled [Smallpdf](http://smallpdf.com)

I used [materialize](http://materializecss.com) as a framework for this website. It was a nice structure to work with but I was having trouble with coloring certain things. Also the card feature (which is 99% of why I picked material design) Is a real pain to work with. Nevertheless, the website will be running for the [UofT MSE Club]. Take a look.

Managing the website
--------------------

This website was built with Jekyll. Jekyll is a static site builder that uses:

 - Liquid Templating System
 - Markdown Post Rendering
 - Leagues Of Legends (lol)

For an example, let's look at inde.html:

**index.html** for example will have the html start building from **_layouts/default.html**. As you can see in the file, there is a {{ include }} liquid tag. That means it will pull all the data from the filename found in the **_include** folder. But here's the catch; since you are still reading it from the **/index.html** the base path is "**/**" and not **_layouts** or **_includes**. Take a look at **_site/index.html** to see the built file that is actually served to the user.

The **about.html** page starts at **_layouts/page.html**, while all of the tournament threads read from **_layouts/post.html**. Hierarchy of this site looks like this: *layout file* > *include files* > *actual files(html/css/js)* > *variables*.

### Editing the site

Uhhhh

### Setting up is as easy as 1, 2, 3!

 1. Install Ruby, RubyDevKit, and Jekyll. Windows users can just download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Some zip programs have problems extracting so make sure to cross check with the repository)
 2. Go to the root folder where **index.html** is found and type in:

    ```shell
    jekyll build
    ```
 3. FTP (or manually copy files one by one) everything in the **_site** folder to wherever you want. It wil most likely be the **/public_html** folder.

Materialize
-----------

I used materialize for the css.
Changes in the materialize files can be found at **\_sass\components\CHANGES.txt**.
README can be found at **README_materialize.md**.

Voila! Thanks for reading ~ Nanosmasher
