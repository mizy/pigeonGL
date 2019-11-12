# pigeon-gl 
3d map by three.js 
used in auto-drive simulation systerm

# features
GPS & UTM coordinate support

# demo
[basic demo](https://mizy.github.io/examples/basic/basic.html)

[utm](https://mizy.github.io/examples/basic/utm.html)

UTM
![utm](https://img.alicdn.com/tfs/TB1r2xfhrSYBuNjSspiXXXNzpXa-1194-663.png)

on mapbox
![mapbox](https://img.alicdn.com/tfs/TB13ftfhrSYBuNjSspiXXXNzpXa-767-592.png)

# api
[documention](https://mizy.github.io/pigeonGL/doc/)
```
    var map = new PigeonGL.Map({
        container:document.getElementById("map"),
        center:[0,0],
        width:window.innerWidth,
        height:window.innerHeight,
        pitch:0,
        rotation:0,
        zoom:21
    })

    //add models
    map.addAtCoordinate(obj,[0,0])
    
```


# build
```
npm run build
```

# doc
```
npm run doc
```
