## html head : import the AX5UI-Select javascript file.

insert import 'ax5ui-select' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-select/master/dist/ax5select.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-select/master/dist/ax5select.min.js"></script>
</head>
```
<br/>

## html body

```js
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5select="select1" data-ax5select-config="{}"></div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5select="select2" data-ax5select-config="{
                                multiple: true,
                                reset:'<i class=\'fa fa-trash\'></i>'
                             }">
            </div>
        </div>
    </div>
</div>
```
<br/>

## java script
define the action when method called.

```js
<script type="text/javascript">
var options = [];
for (var i = 0; i < 100; i++) {
    options.push({value: "optionValue" + i, text: "optionText" + i});
}
$(document.body).ready(function(){
    $('[data-ax5select]').ax5select({
        options: options
    });
});
</script>
```
<br/><br/>


## Size

if you want to adjust drop-down menu size, add size. <br/>
you can see this below. dafault value is **sm**.<br/>

```js
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5select="select1" data-ax5select-config="{size:'sm'}"></div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5select="select2" data-ax5select-config="{
                             size:'lg',
                             multiple: true,
                             reset:'<i class=\'fa fa-trash\'></i>'
                             }"></div>
        </div>
    </div>
</div>
```
<br/>

if you want to know more, please click [here.](http://ax5.io/ax5ui-select/api/index.html#doc-theme-2)
