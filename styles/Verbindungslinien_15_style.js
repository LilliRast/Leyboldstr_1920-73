var size = 0;
var placement = 'point';
function categories_Verbindungslinien_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Andries, Hans':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,146,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hettwer, Joha.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,69,238,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jacob, Wilh.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(170,227,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kölner Reederei AG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,201,70,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Leybold, E.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,71,123,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rhein. Braunkohlen-Syndikat GmbH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(104,210,237,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'van den Bosch, Ed.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(82,209,143,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vorster, Alfr.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,46,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Verbindungslinien_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Eigentümer_1935");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Eigentümer_1935") !== null) {
        labelText = String(feature.get("Eigentümer_1935"));
    }
    
    var style = categories_Verbindungslinien_15(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
