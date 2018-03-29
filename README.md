# pigeon-gl 
3d map by three.js

# features
GPS & UTM coordinate 

# demo
/examples/basec/basic.html

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