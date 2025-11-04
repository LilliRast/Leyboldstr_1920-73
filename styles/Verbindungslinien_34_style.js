var size = 0;
var placement = 'point';
function categories_Verbindungslinien_34(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '"Grundstücksgesellschaft ""Braunkohle"" mbH"':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,127,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bundesrepublik Deutschland':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(180,215,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bundesvermögensverw.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,236,132,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Carp, Erich':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,44,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Colonia Köln.-Vers. A.G.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,216,89,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Erben Vorster, Alfred':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,104,234,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hausbau- und Verwaltungsgesellschaft Colonia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,67,45,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Heubeck, Georg':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,139,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jacob, A.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(118,119,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rheinische Braunkohlenwerke AG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,147,88,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Schmitz, A.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,194,131,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Stadt Köln':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,118,186,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'van den Bosch, J.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,210,194,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vorster, F.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(118,56,218,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Verbindungslinien_34 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Eigentümer_1973");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Eigentümer_1973") !== null) {
        labelText = String(feature.get("Eigentümer_1973"));
    }
    
    var style = categories_Verbindungslinien_34(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
