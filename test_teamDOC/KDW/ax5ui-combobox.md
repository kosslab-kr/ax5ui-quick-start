## html head : import the AX5UI-Combobox javascript file.

insert import 'ax5ui-combobox' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="src/ax5ui-combobox/dist/ax5combobox.css">
<script type="text/javascript" src="src/ax5ui-combobox/dist/ax5combobox.min.js"></script>
</head>
```
<br/>

## html body

```js
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5combobox="combobox1" data-ax5combobox-config="{size:'sm'}"></div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <div data-ax5combobox="combobox2" data-ax5combobox-config="{
                             size:'lg',
                             multiple: true
                             }"></div>
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
    options.push({value: "string", text: "string"});
    options.push({value: "number", text: "number"});
    options.push({value: "substr", text: "substr"});
    options.push({value: "substring", text: "substring"});
    options.push({value: "search", text: "search"});
    options.push({value: "parseInt", text: "parseInt"});
    options.push({value: "toFixed", text: "toFixed"});
    options.push({value: "min", text: "min"});
    options.push({value: "max", text: "max"});

    $(document.body).ready(function () {
        $('[data-ax5combobox]').ax5combobox({
            options: options
        });
    });
</script>
```
<br/>

if you set the multiple value 'true', you can select more than one options.
<br/><br/>

if you want to know more, please click [here.](http://ax5.io/ax5ui-combobox/api/index.html)
