## html head : import the AX5UI-Toast javascript file.

insert import 'ax5ui-toast' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-toast/master/dist/ax5toast.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-toast/master/dist/ax5toast.min.js"></script>
</head>
```
<br/>

## html body : make button to call the toast function.

make button to call 'ax5ui-toast' method.

```js
<body>
 <button class="btn btn-default" type="button" id="toast-push">Toast</button>
</body>
```
<br/>

## java script : bind the action with button.
define the action when method called.

```js
<script type="text/javascript">
    $(document.body).ready(function () {
        var toast = new ax5.ui.toast({
            containerPosition: "top-right",
            onStateChanged: function(){
                console.log(this);
            }
        });

        $('#toast-push').click(function () {
            toast.push('Toast message', function () {
                // close toast
                console.log(this);
            });
        });
    });
</script>
```
<br/><br/>
if you want to change the position of toast message, change the ==containerPosition== value.
- *top-left* : Toast pops out from the upper left corner of the web page.
- *top-right* : Toast pops out from the upper right corner of the web page.
- *bottom-left* : Toast pops out from the bottom left of the web page.
- *bottom-right* : Toast will pop out at the bottom right of the web page.
