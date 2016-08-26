MSE Club Website theme
======================

A website inspired from two different ideas: the paper-like [Google material design](https://www.google.com/design/spec/material-design/introduction.html) (like all new sites are popping up with) and the vibrant tiled [Smallpdf](http://smallpdf.com)

I used [materialize](http://materializecss.com) as a framework for this website. It was a nice structure to work with but I had trouble with coloring certain things. Also the card feature (which is 99% of why I picked material design) is a real pain to work with. Nevertheless, the website turned out very nice and is currently deployed for the [UofT MSE Club](http://mse.skule.ca). Take a look.

Managing the website
--------------------

This website was built with Jekyll. Jekyll is a static site builder that uses the Liquid Templating System and Markdown Post Rendering (with extra bits like Sass compilers and pagination).

For an example, let's look at **index.html**. It starts out with:

```
---
layout: default
---
```

 - As you might tell this is not what you see when you visit [mse.skule.ca](http://mse.skule.ca), but instead a generated file found in **_site/index.html**
 - The layout line tells Jekyll to create a page starting with a layout template found in **_layouts/default.html**.
 - When Jekyll encounters an {% include %} tag it looks in the include folder for that name. (e.g. **_includes/head.html** will replace {% include head.html %})
 - **_includes/head.html** has several liquid tags mainly divided into [variables](https://jekyllrb.com/docs/variables/) and [functions](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). Most are variables that pull information from the website (**_config.yml**), the page (**index.html**), or somewhere else.
 - When a  {{ content }} tag is found, all the information in the **index.html** after the dashed header replaces the {{ content }} tag.
 - Other html files on the root of the directory as well as files in **_posts** work the same way, but the generated html file will be located in other places within **_site**

### Setting up the repository

#### Installation

 1. Install [Notepad++](https://notepad-plus-plus.org/download/v6.8.8.html). Do not use Windows Notepad becuase it does not support [Unix line endings](https://en.wikipedia.org/wiki/Comparison_of_text_editors#Newline_support)  
 2. Install Jekyll.  
   - Standard Installation: [Ruby](https://www.ruby-lang.org/en/downloads/), [RubyDevKit](http://rubyinstaller.org/downloads/), and [Jekyll](http://jekyllrb.com/docs/installation/)  
   - Windows, Easy: download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Use [7zip](http://www.7-zip.org/) if you have trouble)  
   - Android, Easy: install [Mr. Hyde](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde&hl=en) and get a [GitHub account](https://github.com/join)  
   - Mac, Extra: Xcode command line tools are a preresquite to install Jekyll  
 3. (OPTIONAL) Using [Git](https://git-scm.com/) and [GitHub](https://github.com/join) really helps with managing the website.
   
#### Basic Operations

 - **DOWNLOADING:** If you have Git installed, clone or fork the repo. Otherwise, download the zip file.  
 - **CHECKING WORK:** Go to command line and run "jekyll serve" inside the mse.skule.ca folder.  
 - **UPDATING SKULE:** Copy the contents of the _site folder to public_html, ensuring ~/public_html/index.html exists.

### Editing information

#### Adding new members

They are found in **_data/members.yml**. Please mimic all the spaces/quotes/dashes perfectly, as even one extra character can cause unexpected results. Or you can read up on YML to understand what is going on.  
Images for members are found in **img/member**.

#### Adding a new event/article/sport/shop item

Look in the **_posts** folder for the respective category and follow the template provided. It should be quite intuitive. All posts must have a YYYY-MM-DD-[name].md format to actually show up on the website. They appear in reverse chronological order (newest first).  
Images are found in the **img** folder.

#### picture/guide

Follow the format presented in **_data/pics.yml** and **_data/guide.yml**

#### Background/color changes

The background image and the little favicon are in the **img** folder.  
Colors for the tiled menu items are in **_data/apps.yml**. View this [color reference](http://materializecss.com/color.html) for the acceptable inputs.  
To edit the two colors (making up the navigation, footer, and buttons) look for it at the bottom of **_config.yml**

Materialize
-----------

I used materialize for the css.
Changes in the materialize files can be found at **\_sass\components\CHANGES.txt**.
README can be found at **README_materialize.md**.

Voila! Thanks for reading ~ Nanosmasher