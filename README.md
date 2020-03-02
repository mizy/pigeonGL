# [pigeon-gl](https://mizy.github.io/pigeonGL)
+ 3d map with three.js 
+ used in auto-drive simulation systerm
+ map control

# demo 
[basic](https://mizy.github.io/pigeonGL/examples/basic/index.html)

basic
![basic](https://mizy.github.io/pigeonGL/snapshot-basic.png)
 
# api
[documention](https://mizy.github.io/pigeonGL/doc/)
```
import PigeonGL from 'pigeon-gl';

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
    map.world.add(obj)
    
```


# build
```
npm run build
```

# doc
```
npm run doc
```
