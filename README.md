## About brambeekman/craftplate

This is an alternate scaffolding package for Craft 3 CMS projects to Pixel & Tonic's canonical [craftcms/craft](https://github.com/craftcms/craft) package.

The project is based on [Craft CMS](https://craftcms.com) & [Percipio](https://percipio.london) boilerplate using a unique `templates/_layouts` system for web pages, and implements a number of technologies/techniques:

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Before installing you need the following software installed on your local machine:

1. Composer ([link](https://getcomposer.org/))
2. MySQL Server
3. NodeJS (v12)
4. PHP (7.2+)

### Installing
1. Create the project using either composer or git clone:
    -  Composer: `IS COMING`
    -  Git: `git clone https://github.com/brambeekman/craftplate.git [projectname]`
2. `cd [projectname]` into the project
3. Create database
    - `mysql -u [username]` (add `-p` if you have a password)
    - `create database [database-name];`
4. Run `composer install`
5. Run `npm install`
6. Setup the environment file
    - Run `cp .env.example .env` to create the environment file.
7. Run `./craft setup`
    - Use as CMS username: `admin`
8. Run `composer update`
9. Run `npm run dev` and wait until it opens in your browser

Then, we need to install all the plugins we use into your new project.
1. Go to `http://localhost:1423/admin` and login using your credentials you set up earlier.
2. Click `Settings -> Plugins`
3. Install all plugins

## Creating a page

1. Go to `http://localhost:1423/admin` and login using your credentials you set up earlier.
2. Click ,Settings -> Sections -> + New section, to create a new page.
3. In the name field put ,Homepage,. The rest should then automatically fill
4. For section type select ,Single,
5. Check the checkmark below the icon of the house to make this your homepage. If this is not your homepage, fill in the URI you want ,blog/blogpost,
6. Link the file templates/pages/_home.twig (the file we just specified in the CMS backend). For the template, put in pages/_home.twig (or whatever your page is named).
7. Save the file and checkout your new homepage on ,http://localhost:1423/,

## Production build
Run `npm run prod` if you are ready for production, this will minify the javascript and css files.

### Boilerplate information
* Craft CMS (clean install)
* Basic folder structure
   * Src folder with JS and TailwindCSS
   * Starting files ( `style.css` / `app.js` )
   * Layout folder with `_master.twig` file, which contains basic layout file ( css and js includes aswell as seo plugin )
* Craft Plugins
   * Purge Assets
   * Blitz Recommendations
   * Eager Beaver
   * Minify
   * Twigpack
   * Typed link field
   * Typogrify
   * Amazon S3
   * Knock Knock
   * Navigation
   * Entry instructions
   * Super table
   * SEOmatic
   * Redactor
* TailwindCSS
* Webpack (for compiling css and js)
   * ES6 functionality
   * VueJS
   * File-loader
   * Babel
   * Copying static assets ( standard fonts and icons )
   * Minify CSS and JS on production ( prefix included! )
   * Live server with hot reload
   * Clean files plugin ( removes unused css and js files from assets folder )


## About Craft CMS

Craft is a flexible and scalable CMS for creating bespoke digital experiences on the web and beyond.

It features:

- An intuitive Control Panel for administration tasks and content creation.
- A clean-slate approach to content modeling and [front-end development](https://docs.craftcms.com/v3/dev/).
- A built-in Plugin Store with hundreds of free and commercial [plugins](https://plugins.craftcms.com/).
- A robust framework for [module and plugin development](https://docs.craftcms.com/v3/extend/).

Learn more about it at [craftcms.com](https://craftcms.com).

## Tech Specs

Craft is written in PHP (7+), and built on the [Yii 2 framework](https://www.yiiframework.com/). It can connect to MySQL (5.5+) and PostgreSQL (9.5+) for content storage.

## Installation

See the following documentation pages for help installing Craft 3:

- [Server Requirements](https://docs.craftcms.com/v3/requirements.html)
- [Installation Instructions](https://docs.craftcms.com/v3/installation.html)
- [Upgrading from Craft 2](https://docs.craftcms.com/v3/upgrade.html)

## Popular Resources

- **[Documentation](http://docs.craftcms.com/v3/)** – Read the official docs.
- **[Guides](https://craftcms.com/guides)** – Follow along with the official guides.
- **[#craftcms](https://twitter.com/hashtag/craftcms)** – See the latest tweets about Craft.
- **[Discord](https://craftcms.com/discord)** – Meet the community.
- **[Stack Exchange](http://craftcms.stackexchange.com/)** – Get help and help others.
- **[CraftQuest](https://craftquest.io/)** – Watch unlimited video lessons and courses.
- **[Craft Link List](http://craftlinklist.com/)** – Stay in-the-know.
- **[nystudio107 Blog](https://nystudio107.com/blog)** – Learn Craft and modern web development.

_By [Bram Beekman](https://brambeekman.com)_
