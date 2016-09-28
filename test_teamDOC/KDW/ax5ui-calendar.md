## html head : import the AX5UI-Calendar javascript file.

insert import 'ax5ui-calendar' link at html head tag.
<br/>
```js
<head>
<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bower_components/ax5core/dist/ax5core.min.js"></script>
<link rel="stylesheet" type="text/css" href="bower_components/ax5ui-calendar/dist/ax5calendar.css">
<script type="text/javascript" src="bower_components/ax5ui-calendar/dist/ax5calendar.min.js"></script>
</head>
```
<br/>

## html body
 It will prepare the element that is the target of the Calendar UI in the document.

```js
<body>
<div id="calendar-target" style="
             width:300px;
              border-radius: 5px;
              border:1px solid #ccc;
              padding: 5px;
              overflow: hidden;">
</div>
</body>
```
<br/>

## java script
 Create an instance of ax5.ui.calendar class, using the setConfig method to an instance, you can set the Calendar UI.

```js
<script type="text/javascript">
$(document.body).ready(function () {
    var myCalendar = new ax5.ui.calendar({
        target: document.getElementById("calendar-target"),
        displayDate: (new Date()),
        onClick: function () {
            console.log(this);
            console.log(myCalendar.getSelection());
        },
        onStateChanged: function () {
            console.log(this);
        }
    });
});
</script>
```
