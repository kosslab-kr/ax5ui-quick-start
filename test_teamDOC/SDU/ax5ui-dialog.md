
<hr/>

### 가장 먼저 "ax5dialog"를 HTML HEAD부분에 추가해주세요.

폴더의 위치는 여러분의 프로젝트에 맞게 자유롭게 정할 수 있습니다. 따라서, 잘못된 경로를 입력하지 않도록 주의하세요.
```html
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-dialog/master/dist/ax5dialog.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-dialog/master/dist/ax5dialog.min.js"></script>
```

#### Make Button

```html
<button id="mask-open" type="button">Alert</button>
```

### Basic Alert Script

```js
<script>
    $(document.body).ready(function () {
        var dialog = new ax5.ui.dialog({
            title: "AX5 Dialog"
        });

        $('#alert-open').click(function () {
            dialog.alert('Alert message');
        });
        $('#alert-close').click(function () {
            dialog.close();
        });
    });
</script>
```
