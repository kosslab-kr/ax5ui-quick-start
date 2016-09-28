##### if you want to practice this. follow this tutorial
<hr/>

### Insert the "ax5dialog" in the HTML HEAD.

Location of the folder can be determined freely in your project. But be careful not to accidentally caused exactly the path.
```html
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-dialog/master/dist/ax5dialog.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-dialog/master/dist/ax5dialog.min.js"></script>
```

#### Make Button

```js
<button id="mask-open" type="button">Button</button>
```

### Script

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
