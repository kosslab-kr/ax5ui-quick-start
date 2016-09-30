## html head : import the AX5UI-Media-Viewer javascript file.

insert import 'ax5ui-media-viewer' link at html head tag.
<br/>
```js
<head>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/ax5ui/ax5ui-media-viewer/master/dist/ax5media-viewer.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5core/master/dist/ax5core.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/ax5ui/ax5ui-media-viewer/master/dist/ax5media-viewer.min.js"></script>
</head>
```
<br/>

## html body

```js
<div id="media-viewer-target-0" style="width:360px;border:1px solid #eee;"></div>
```
<br/>

## java script
define the action when method called.

```js
<script type="text/javascript">
var myViewer_0 = new ax5.ui.mediaViewer({
    target: $("#media-viewer-target-0"),
    loading: {
        icon: '<i class="fa fa-spinner fa-pulse fa-2x fa-fw margin-bottom" aria-hidden="true"></i>',
        text: '<div>Now Loading</div>'
    },
    media: {
        prevHandle: '<i class="fa fa-chevron-left"></i>',
        nextHandle: '<i class="fa fa-chevron-right"></i>',
        width: 50, height: 50,
        poster: '<i class="fa fa-youtube-play" style="line-height: 46px;font-size: 20px;"></i>',
        list: [
            {
                video: {
                    html: '<iframe src="https://player.vimeo.com/video/121840700?color=fcfcfc&badge=0" frameborder="0"></iframe>',
                    poster: ''
                }
            },
            {
                video: {
                    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w9Uh2oP88JI" frameborder="0"></iframe>',
                    poster: ''
                }
            },
            {
                image: {
                    src: 'http://www.improgrammer.net/wp-content/uploads/2015/11/top-20-node-js-Frameworks-1.jpg',
                    poster: 'http://www.improgrammer.net/wp-content/uploads/2015/11/top-20-node-js-Frameworks-1.jpg'
                }
            },
            {
                image: {
                    src: 'https://www.twilio.com/blog/wp-content/uploads/2013/11/Screen-Shot-2013-11-06-at-12.05.36-PM.png',
                    poster: 'https://www.twilio.com/blog/wp-content/uploads/2013/11/Screen-Shot-2013-11-06-at-12.05.36-PM.png'
                }
            },
            {
                image: {
                    src: "http://blog.axisj.com/wp-content/uploads/2015/01/603962_624552737612025_1617687293_n.jpg",
                    poster: "http://blog.axisj.com/wp-content/uploads/2015/01/603962_624552737612025_1617687293_n.jpg"
                }
            },
            {
                image: {
                    src: "http://brantiffy.axisj.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-11-at-2.01.53-AM.png",
                    poster: "http://brantiffy.axisj.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-11-at-2.01.53-AM.png"
                }
            }
        ]
    },
    onClick: function () {
        console.log(this);
    }
});
</script>
```
<br/>

you can add more video and image by adding them to list.<br/>
**src** means main video or image url. you can see this by clicking the small image and
this small image's url has been written on **poster**.
<br/><br/>

if you want to know more, please click [here.](http://ax5.io/ax5ui-media-viewer/api/index.html)


## Demo/youtube

@[youtube](https://www.youtube.com/watch?v=KVrdSHDHXMw)
