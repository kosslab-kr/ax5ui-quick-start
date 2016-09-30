## html head : import the AX5UI-Formatter javascript file.

insert import 'AX5UI-Formatter' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-grid/master/dist/ax5grid.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-grid/master/dist/ax5grid.min.js"></script>
</head>
```
<br/>

## html body

```js
<div data-ax5grid="first-grid" data-ax5grid-config="{}" style="height: 300px;"></div>
```
<br/>

## java script
define the action when method called.

```js
<script type="text/javascript">
    var firstGrid = new ax5.ui.grid();

    $(document.body).ready(function () {

        firstGrid.setConfig({
            target: $('[data-ax5grid="first-grid"]'),
            columns: [
                {key: "a", label: "field A"},
                {key: "b", label: "field B"},
                {key: "c", label: "numbers C"},
                {key: "d", label: "field D"},
                {key: "e", label: "field E"},
                {key: "f", label: "field F"},
                {key: "g", label: "field G"},
                {key: "h", label: "field H"}
            ]
        });

        var list = [];
        for (var a = 0, l = 100; a < l; a++) {
            list.push({a: "A value", b: "B value", c: a % 10, d: "D value", e: "E value", f: "F value", g: "G value"});
        }
        firstGrid.setData(list);
    });
</script>
```
<br/>

## ++Column attribute++
1.  key : key name of data.
2.  label : header column name.
3.  width : column width. (dafault value is 100)
4.  align : sort of column.
5.  formatter : transformation input type.
6.  styleClass : add CSs class to column.
7.  multiLine : all the column of grid not allow line alignment.


### **you can set this attribute in setConfig method.**

if you want to know more, please click [here.](http://ax5.io/ax5ui-grid/api/index.html)
