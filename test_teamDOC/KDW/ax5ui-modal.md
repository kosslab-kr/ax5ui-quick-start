## html head : import the AX5UI-Modal javascript file.

insert import 'ax5ui-modal' link at html head tag.
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

## html body : make button to call the modal function.

make button to call 'ax5ui-modal' method.

```js
<body>
 <button class="btn btn-default" type="button" id="modal-open">Modal Open</button>
</body>
```
<br/>

## java script : bind the action with button.
define the action when method called.

```js
<script type="text/javascript">
$(document.body).ready(function () {
  var modal = new ax5.ui.modal();
  modal.setConfig({
      onStateChanged: function () {
          // console.log(this);
      }
  });

  $('#modal-open').click(function () {
      modal.open({}, function () {
          // check your browser console
          console.log(this);

          var btn = jQuery(
              '<button class="btn btn-default" type="button" style="margin-top: 100px;">' +
              'Modal Close</button>');
          btn.click(function () {
              modal.close();
          });
          this.$.body.append(btn);
      });
  });

});
</script>
```
<br/><br/>
you can set default configuration with setConfig method on ModalInstance. you can pass additional configuration, when opening the modal.

The first argument of modal.open in the example, the set value (object), the second argument, using the callBack function.
The second argument's 'this' directive contains modal attribute state, width, height and $ attributes.

By using the passed jQuery object, it is possible to extend the desired function freely.
