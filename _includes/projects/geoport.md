### GeoPort 3D

GeoPort 3D is a front-end web application to interact with GeoRepository, which holds archived satellite imagery. GeoPort 3D allows users to quickly observe large imagery sets so they can pick imagery segments for server-side processing and user inspection.

Users first pull up an imagery subset based on their specified criteria (spacecraft, sensor, date or orbit, region of interest), then look through the images, and finally download selected imagery segments for inspection in user-specified data-processing. A variety of formats are available. To aid users in finding images, GeoPort 3D includes ballistics calculations and propagation of spacecraft, as well as sensor scan path visualization.

GeoPort 3D was developed by the CTT group as part of a distributed satellite data storage and processing framework.

Thanks to Cesium’s ability to work with different imagery providers, the CTT group was able to feed GeoPort 3D with their OGC WMTS sources. Cesium features give GeoPort 3D the ability to display mixed geospatial data (such as satellite imagery, vector maps, DEMs, 3D models, metadata, etc.) in the same coordinate space, taking into account the topography, geocoding data in 2D, and 3D scene modes in order to work well on different devices and platforms.

The main advantage in using Cesium is rich 3D visualization and lack of installable plug-ins.

<div style="position:relative;height:0;padding-bottom:56.25%">
<iframe src="https://www.youtube.com/embed/pA-LJszq2mQ?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>
</div>
