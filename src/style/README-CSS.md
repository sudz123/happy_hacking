# :sparkles::sparkles: Styling With CSS :sparkles::sparkles:

CSS (Cascading Style Sheets) is what makes your web pages look great! By writing CSS, you are creating rules which apply to your HTML document which affects the visual presentation. For example, you can use CSS to define how wide an element is, or what color your font is.

Creating CSS rules are really easy. You use a **selector** to "select" which elements on the page you want to target, and then apply your preferences. For example, if you wanted to change all your `h1` tags to blue, with a bottom border of purple you would create a rule like this:

```
h1 {
  color: blue;
  bottom-border: 1px solid purple;
}
```

<small>Note: See the [Mozilla Developer Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works) for additional information.</small>

## Where do I write my CSS rules?

The most common method is using **external stylesheets**. These are files which end in `.css` and are referenced in your HTML using a `<link>` element. This would look something like this:

```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Rocks!</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello world!</h1>
    <p>I love CSS!</p>
  </body>
</html>
```

There are additional methods of writing CSS, such as *internal stylesheets* and *inline styles*, but these are not recommended beyond very simple projects as they quickly become difficult to manage and maintain.

## Selectors

The following represent the simple selectors (the most common use case):

<small>Note: See the [Mozilla Developer Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) for additonal information</small>

### Type selector
Selects all elements that match the given node name.<br/>
Syntax: eltname<br/>
Example: `input` will match any `<input>` element.

### Class selector
Selects all elements that have the given class attribute.<br/>
Syntax: .classname<br/>
Example: `.rounded` will match any element that has a class of "rounded".


### ID selector
Selects an element based on the value of its id attribute. There should be only one element with a given ID in a document.<br/>
Syntax: #idname<br/>
Example: `#logo` will match the element that has the ID "logo".


### Universal selector
Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.<br/>
Syntax: * ns|* *|*<br/>
Example: `*` will match all the elements of the document.


### Attribute selector
Selects elements based on the value of the given attribute.<br/>
Syntax: [attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]<br/>
Example: `[autoplay]` will match all elements that have the autoplay attribute set (to any value).

<hr/>

## Combinators

Use CSS combinators to bring additional specificity into your rules.

### Adjacent sibling combinator
The + combinator selects adjacent siblings. This means that the second element directly follows the first, and both share the same parent.<br/>
Syntax: A + B<br/>
Example:` h2 + p `will match all `<p>` elements that directly follow an `<h2>`.

### General sibling combinator
The ~ combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.<br/>
Syntax: A ~ B<br/>
Example: `p ~ span` will match all `<span>` elements that follow a `<p>`.

### Child combinator
The > combinator selects nodes that are direct children of the first element.<br/>
Syntax: A > B<br/>
Example: `ul > li` will match all <li> elements that are nested directly inside a `<ul>` element.


### Descendant combinator
The   (space) combinator selects nodes that are descendants of the first element.<br/>
Syntax: A B<br/>
Example: `div span` will match all `<span>` elements that are inside a `<div>` element.


### Column combinator
The || combinator selects nodes which belong to a column.<br/>
Syntax: A || B<br/>
Example: `col || td` will match all `<td>` elements that belong to the scope of the `<col>`.