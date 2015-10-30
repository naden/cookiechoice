Cookiechoice
===============================

jQuery based Cookiechoice widget.

*Use only if your site already includes jQuery. Use one of the many native implementations otherwise.*

__Basic usage__
    <script src="cookiechoice.js"></script>

__With top placement__

    <script>
    cookiechoice_placement = 'top';
    </script>
    <script src="cookiechoice.js"></script>

__With custome message, css and cookie ttl (days)__

    <script>
    cookiechoice_ttl = 120;
    cookiechoice_style = '/path/to/my/custome-cookiechoice.css';
    cookiechoice_message = 'Foo bar requires this ... <a href="" id="cookiechoice-link-confirm">confirm</a> <a href="https://www.cookiechoices.org" target="_blank" id="cookiechoice-link-info">more</a>';
    </script>
    <script src="cookiechoice.js"></script>

__Full__

    <script src="jquery.js"></script>
    <script src="js.cookie.js"></script>
    <script src="cookiechoice.js"></script>

__Requires__

* [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
* [http://jquery.com/](http://jquery.com/)


*AMA [http://www.naden.de](http://www.naden.de)*
