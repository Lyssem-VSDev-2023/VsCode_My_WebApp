# Table of Content

1. [Paragraphs & Linebreak](#1-paragraphs--linebreak)
1. [Bold & Italic](#2-bold--italic)
1. [Blockquotes](#3-blockquotes)
1. [Lists (Ordred & Non Ordred)](#4-lists)
1. [Tables](#5-tables)
1. [Links](#6-links)
1. [Images](#7-images)
1. [Code](#8-code)


<HR><!---------------------Headings----------------------------->

# Heading level 1	
## Heading level 2	
### Heading level 3	
#### Heading level 4
##### Heading level 5
###### Heading level 6

Heading level 1
===============	
Heading level 2
---------------

***
---

<!-- This is a markdown comment -->
[comment]: <> (This is a comment, it will not be included)
[//]: <> (This is also a comment.)
<br>
<!---------------------1. Paragraphs-----------------------------><br>

# 1. Paragraphs & Linebreak

### Paragraph
Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

### Linebreak
First line with two spaces after.  
And the next line.

---
<!---------------------2. Bold & Italic-----------------------------><br>

# 2. Bold & Italic
I just love **bold text**.  
I just love __bold text__.  
Love**Is**Bold
  
Italicized text is the *cat's meow*.  
Italicized text is the _cat's meow_.  
A*Cat*Meow

This text is ***really important***.  
This text is ___really important___.  
This text is __*really important*__.  
This text is **_really important_**.  
This is really***very***important text.  

---
<!---------------------3. Blockquotes-----------------------------><br>

# 3. Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---
<!---------------------4. Lists-----------------------------><br>

# 4. Lists

## Ordered Lists

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

## Unordered Lists

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

## Add Elements to lists 

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

or

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

---
<!---------------------5. Tables-----------------------------><br>

# 5. Tables

> Organized table

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

> Unorganized table will look the same

| Month | Savings |
| -------- | ------- |
| January | $250 |
| February | $80 |
| March | $420 |

> Text Align

| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |

> Text Formatting
>>Text can be formatted within tables. For example, links, emphasis, and inline code (words or phrases in backticks only, not code blocks) are all readily available for use within a table.  
>>
>>Several formatting options are not available within tables, including:
>>- Headings
>>- Blockquotes
>>- Horizontal rules
>>- Images
>>- Lists
>>- HTML tags


---
<!---------------------6. Links-----------------------------><br>

# 6. Links


My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

<https://www.markdownguide.org>  
<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).  
  
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"


---
<!---------------------7. Images-----------------------------><br>

# 7. Images

>insert Image  
![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")

>insert Image with link  
[![I'M' TUX!](/Tutorials/MarkDown/Images/tux.avif "Tux Friend")](http://google.com)


---
<!---------------------8. Code-----------------------------><br>

# 8. Code

> At the command prompt, type `nano`.

>```
>function test() {
>  console.log("notice the blank line before this function?");
>}
>```

>```c#
>function test() {
>  console.log("notice the blank line before this function?");
>}
>```

>```json
>{
>  "firstName": "John",
>  "lastName": "Smith",
>  "age": 25
>}
>```

>```html
>   <html>
>     <head>
>     </head>
>   </html>
>```


