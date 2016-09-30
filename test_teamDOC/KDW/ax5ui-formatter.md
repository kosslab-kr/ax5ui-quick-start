## html head : import the AX5UI-Formatter javascript file.

insert import 'AX5UI-Formatter' link at html head tag.
<br/>
```js
<head>
<script type="text/javascript" src="src/ax5ui-formatter/dist/ax5formatter.js"></script>
</head>
```
<br/>

## html body

```js
<div class="form-group">
    <div class="input-group">
        <span class="input-group-addon">myPattern</span>
        <input name="3" type="text" class="form-control" placeholder data-ax5formatter="myPattern">
    </div>
</div>
```
<br/>

## java script
define the action when method called.

```js
<script type="text/javascript">
    $('[data-ax5formatter]').ax5formatter();
</script>
```
<br/>

you can force the input type by using regular expression.
<br/><br/>

if you want to know more, please click [here.](http://ax5.io/ax5ui-formatter/api/index.html)

## Demo/youtube

@[youtube](https://www.youtube.com/watch?v=tRMo2iaV5QA)
