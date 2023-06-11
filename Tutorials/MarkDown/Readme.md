# **Markdown**

- [**Markdown**](#markdown)
- [Heading level 1](#heading-level-1)
  - [Heading level 2](#heading-level-2)
    - [Heading level 3](#heading-level-3)
- [Heading level 1-1](#heading-level-1-1)
  - [Heading level 2-2](#heading-level-2-2)
  - [Paragraphs \& Linebreak](#paragraphs--linebreak)
  - [Bold \& Italic](#bold--italic)
  - [Blockquote](#blockquote)
  - [Lists](#lists)
  - [Tables](#tables)
  - [Links](#links)
  - [Images](#images)
  - [Code](#code)

---

# Heading level 1

`# Heading level 1`

---

## Heading level 2

`## Heading level 2`

---

### Heading level 3

`### Heading level 3`

---

#### Heading level 4

`#### Heading level 4`

---

##### Heading level 5

`##### Heading level 5`

---

###### Heading level 6

`###### Heading level 6`

---

Heading level 1-1
=================

```md
Heading level 1-1
=================
```

---

Heading level 2-2
-----------------

```md
Heading level 2-2
-----------------
```

**Horizontal Rule** `***`

***

<!-- This is a markdown comment -->

[comment]: <> (This is a comment, it will not be included)

[//]: <> (This is also a comment.)

**Inject HTML** `<br>`

<!---------------------1. Paragraphs----------------------------->

## Paragraphs & Linebreak

**Paragraph:**

Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

**Linebreak:**

First line with two spaces after.  
And the next line.

---
<!---------------------2. Bold & Italic----------------------------->

## Bold & Italic

I just love **bold text**.  
`I just love **bold text**.`

I just love __bold text__.  
`I just love __bold text__.`

Love**Is**Bold
`Love**Is**Bold`
  
Italicized text is the *cat's meow*.  
`Italicized text is the *cat's meow*.`

Italicized text is the _cat's meow_.  
`Italicized text is the _cat's meow_.`

A*Cat*Meow  
`A*Cat*Meow`

This text is ***really important***.  
`This text is ***really important***.`

This text is ___really important___.  
`This text is ___really important___.`

This text is __*really important*__.  
`This text is __*really important*__.`

This text is **_really important_**.  
`This text is **_really important_**.`

This is really***very***important text.  
`This is really***very***important text.`

---
<!---------------------3. Blockquote----------------------------->

## Blockquote

```text
>  quoted text
>> nested quoted text
```

**Single line:**

> Dorothy followed her through many of the beautiful rooms in her castle.

**Multiline:**

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

**Multiline nested:**

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

**With Header & Style:**

> ## The quarterly results look great
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**.

---
<!---------------------4. Lists----------------------------->

## Lists

**Ordered Lists:**

Lists

1. First item
2. Second item
3. Third item
4. Fourth item

Lists

1. First item
1. Second item
1. Third item
1. Fourth item

Lists

1. First item
8. Second item
3. Third item
5. Fourth item

Lists

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

**Unordered Lists:**

Unordered List

- First item
- Second item
- Third item
- Fourth item

Unordered List

* First item
* Second item
* Third item
* Fourth item

Unordered List

+ First item
+ Second item
+ Third item
+ Fourth item

Unordered List

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

**Add Elements to lists:**

- This is the first list item.
- Here's the second list item.

  I need to add another paragraph below the second list item.

- And here's the third list item.

or

- This is the first list item.
- Here's the second list item.

    > A blockquote would look great below the second list item.

- And here's the third list item.

---
<!---------------------5. Tables----------------------------->

## Tables

> Organized table

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

```md
| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |
```

> Unorganized table will look the same

| Month | Savings |
| -------- | ------- |
| January | $250 |
| February | $80 |
| March | $420 |

```md
| Month | Savings |
| -------- | ------- |
| January | $250 |
| February | $80 |
| March | $420 |
```

> Text Align

| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| CodeAcademy Tee    |  False   | 19.99 |
| CodeAcademy Hoodie |  False   | 42.99 |

```md
| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| CodeAcademy Tee    |  False   | 19.99 |
| CodeAcademy Hoodie |  False   | 42.99 |
```

**Text Formatting:**
Text can be formatted within tables. For example, links, emphasis, and inline code (words or phrases in backticks only, not code blocks) are all readily available for use within a table.  

Several formatting options are not available within tables, including:

- Headings
- Blockquote
- Horizontal rules
- Images
- Lists
- HTML tags

---
<!---------------------6. Links----------------------------->

## Links

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).  
`[Duck Duck Go](https://duckduckgo.com)`

<https://www.markdownguide.org>  
`<https://www.markdownguide.org>`

<fake@example.com>  
`<fake@example.com>`

I love supporting the **[EFF](https://eff.org)**.  
`I love supporting the **[EFF](https://eff.org)**.`

This is the *[Markdown Guide](https://www.markdownguide.org)*.  
`This is the *[Markdown Guide](https://www.markdownguide.org)*.`

See the section on [`code`](#markdown).  
`See the section on [`code`](#code).`
  
It was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

```md
It was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
```

---
<!---------------------7. Images----------------------------->

## Images

```md
>insert Image  
![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")
```

>insert Image  
![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")

```md
>insert Image with link  
[![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")](http://google.com)
```

>insert Image with link  
[![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")](http://google.com)

---
<!---------------------8. Code----------------------------->

## Code

**Inline:**
> At the command prompt, type `nano`.

**CodeBlock:**

>```js
>function test() {
>  console.log("notice the blank line before this function?");
>}
>```

**CodeBlock C# Syntax:**

>```c#
>function test() {
>  console.log("notice the blank line before this function?");
>}
>```

**CodeBlock Json Syntax:**

>```json
>{
>  "firstName": "John",
>  "lastName": "Smith",
>  "age": 25
>}
>```

**CodeBlock html Syntax:**

>```html
>   <html>
>     <head>
>     </head>
>   </html>
>```
