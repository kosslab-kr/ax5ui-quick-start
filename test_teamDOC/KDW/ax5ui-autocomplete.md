## html head : import the AX5UI-AutoComplete javascript file.

insert import 'ax5ui-autocomplete' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-autocomplete/master/dist/ax5autocomplete.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-autocomplete/master/dist/ax5autocomplete.min.js"></script>
</head>
```
<br/>

## html body

```js
<div class="row">
    <div class="col-md-6">
        Default
        <div class="form-group">
            <div data-ax5autocomplete="autocomplete1" data-ax5autocomplete-config="{}"></div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6">
        Multiple
        <div class="form-group">
            <div data-ax5autocomplete="autocomplete2" data-ax5autocomplete-config="{multiple: true}"></div>
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
    options.push({value: "1", text: "string"});
    options.push({value: "2", text: "number"});
    options.push({value: "3", text: "substr"});
    options.push({value: "4", text: "substring"});
    options.push({value: "5", text: "search"});
    options.push({value: "6", text: "parseInt"});
    options.push({value: "7", text: "toFixed"});
    options.push({value: "8", text: "min"});
    options.push({value: "9", text: "max"});
    options.push({value: "10", text: "장기영"});
    options.push({value: "11", text: "장서우"});
    options.push({value: "12", text: "이영희"});
    options.push({value: "13", text: "황인서"});
    options.push({value: "14", text: "황세진"});
    options.push({value: "15", text: "이서연"});
    options.push({value: "16", text: "액시스제이"});
    options.push({value: "17", text: "ax5"});
    options.push({value: "18", text: "ax5grid"});
    options.push({value: "19", text: "ax5combobox"});
    options.push({value: "20", text: "ax5autocomplete"});
    options.push({value: "21", text: "ax5binder"});
    options.push({value: "22", text: "ax5select"});
    options.push({value: "23", text: "ax5mask"});
    options.push({value: "24", text: "ax5toast"});
    options.push({value: "25", text: "ax5dialog"});
    options.push({value: "26", text: "ax5modal"});


    $(document.body).ready(function () {
        $('[data-ax5autocomplete]').ax5autocomplete({
            removeIcon: '<i class="fa fa-times" aria-hidden="true"></i>',
            onSearch: function (callBack) {
                var searchWord = this.searchWord;
                setTimeout(function () {
                    var regExp = new RegExp(searchWord);
                    var myOptions = [];
                    options.forEach(function (n) {
                        if (n.text.match(regExp)) {
                            myOptions.push({
                                value: n.value,
                                text: n.text
                            })
                        }
                    });
                    callBack({
                        options: myOptions
                    });
                }, 150);

            }
        });
    });
</script>
```
<br/>

you can add more options and text will appear in ascending order by the value.  
<br/><br/>

if you want to know more, please click [here.](http://ax5.io/ax5ui-autocomplete/api/index.html)
