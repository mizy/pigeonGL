# pigeon-gl 
3d map by three.js

# features
GPS & UTM coordinate support

# demo
/examples/basec/basic.html
UTM
![utm](https://img.alicdn.com/tfs/TB1r2xfhrSYBuNjSspiXXXNzpXa-1194-663.png)

on mapbox
![mapbox](https://img.alicdn.com/tfs/TB13ftfhrSYBuNjSspiXXXNzpXa-767-592.png)

# api
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
