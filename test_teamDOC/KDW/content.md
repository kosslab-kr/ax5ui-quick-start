- ### html head : import the AX5UI-mask javascript file.
insert import 'ax5ui-mask' link at html head tag. 
```html
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-mask/master/dist/ax5mask.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-mask/master/dist/ax5mask.min.js"></script>
</head>
```
<br>

- ### html body : make button to call the mask function.
make button to call 'ax5ui-mask' method.
```html
<body>
<button id="mask-open" type="button">Button</button>
</body>
```

<br>

- ### java script : bind the action with button.
define the   action when method called.
```js
<script type="text/javascript">
    $(document.body).ready(function () {
        var mask = new ax5.ui.mask();
        $('#mask-open').click(function () {
            mask.open();

            setTimeout(function () {
                mask.close();
            }, 2000);
        });

    });
</script>
```