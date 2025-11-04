var size = 0;
var placement = 'point';
function categories_Verbindungslinien_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Frangenheim, Paul':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,80,69,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Grüneberg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,187,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hettwer, Joha.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(118,165,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jacob, Wilh.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,79,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rhein. Braunkohlen-Syndikat GmbH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,206,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'van den Bosch, Ed.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(147,210,12,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'von Rautenstrauch, Eugen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(109,232,64,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vorster. Alfr.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,104,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Wittrock, Karl':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(21,232,179,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Verbindungslinien_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Eigentümer_1939");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Eigentümer_1939") !== null) {
        labelText = String(feature.get("Eigentümer_1939"));
    }
    
    var style = categories_Verbindungslinien_20(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
