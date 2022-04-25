---
title: "Regex"
type: "Article"
description: "Regex Tutorial"
date: "2022-04-19"
---

RegEx is a powerful tool in a developer’s arsenal. During this tutorial we will dive into how regex is used by dissecting a regular expression. We will use a specific regex and breakdown the search pattern the regex defines.

## Summary

Passwords are important! Every developer should understand how to use regex for password requirements. We have common password requirements below and our expression to follow.

Minimum of 8 and maximum of 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character.

   regEx = `^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,10}$`

Now, let’s dive into the regex!

## Regex Components

### Anchors

`^` and `$` represent the anchors or the beginning and end of the expression. The `^` character matches the beginning of the string. The `$` matches the end of the string.

### Quantifiers

`*`, `?`, `.`, `{1,}`, and `{8, 10}` represent the quantifiers. The `*` symbol matches 0 or more of the preceding token. The `?` makes the preceding quantifier lazy, causing it to match as few characters as possible. The `.` matches any character except linebreaks. The `{1,}` matches 1 or more of the preceding token. You will notice multiple of these quantifiers in the expression to validate the user has at least one match for these parameters. Finally, `{8, 10}` which sets the length of the password minimum of 8 characters with a maximum of 10.

### OR Operator

The OR or alternation operator acts as a boolean using the `|` symbol by matching the expression before or after the `|` symbol. There are no alternation symbols in this expression.

### Character Classes

The character classes are represented by the `[A-Z]`, `[a-z]`, `[\d]`, `[\W]`, and `\s`. The `[A-Z]` expression matches a character in the range from ‘A’ to ‘Z’ which is case sensitive. Similarly, the expression `[a-z]` will match from range of ‘a’ to ‘z’, case sensitive. The `[\d]` expression will match any digit input by the user from (0-9), which is equivalent to using the `[0-9]` character set. The `[\W]` matches any character that is not a word, such as alphanumeric & underscore. This expression is equivalent to using `[^A-Za-z0-9_]`. Lastly, `\s` which represents white space. Additional context, there can be no whitespace in the user’s password, therefore you will notice the `?!` which produces a negative result. We will dive into this a bit later but for now understand this group does not allow white space.

### Flags

Flags are used to change how the expression is interpreted. Flags are set after the closing forward slash. The list of flags are as follows:

   `I` = ignore case => makes the expression case sensitive

   `g` = global search => use this to find infinite matches

   `m` = multiline => finds matches on multiple lines

   `u` = Unicode => for use of extended unicode

   `y` = sticky => matches from its lastindex and ignores global

   `s` = dotall => matches any character, including newline characters

For this example, we do not have any flags.

### Grouping and Capturing

Groups are represented by `()`. Groups can have multiple expressions to create a capture group. We use the groups in this expression to narrow down our password parameters. Each specific parameter to our password has either one group or multiples to create a capture group.

### Bracket Expressions

Bracket expressions are a list of characters enclosed by `[]` and will match any single character in that list. Bracket expressions are used in this example in combination with character classes.

### Greedy and Lazy Match

We touched on the Lazy matches represented by `?` earlier in this tutorial. However, for good measures lets refresh. Characters after the lazy match cause it to match as few characters as possible. By default, quantifiers are greedy and will match as many characters as possible. For our example you can see the use of lazy matches in combination with `*` to match the minimum number of characters for our password requirements.

### Boundaries

Boundaries are represented by `\b` and `\B`.

   `\b` = word boundary => matches a word or non-word character or position to the start and end of a string

   `\B` = not word boundary => matches any position that is not a word boundary, position only not character

There are no boundaries in our example expression.

### Back-references

Back references or numeric references are used to match the result of a capture group. For example `\1` would reference the first capture group. Our example expression does not use any back or numeric references.

### Look-ahead and Look-behind

Look-ahead and look-behind allow you to match groups before or after without including in your result. The look around references can be either negative or positive. Our example uses positive lookahead using `?=` for characters and negative lookahead using `?!` for whitespace.

## Additional Resources

[Regexr](https://regexr.com/)

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
