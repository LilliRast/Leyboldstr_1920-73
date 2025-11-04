var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_1921PlanderStadtKln_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "plan_der_stadt_koeln_1921",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1921 Plan der Stadt Köln',
                            popuplayertitle: '1921 Plan der Stadt Köln',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1921PlanderStadtKln_1, 0]);
var lyr_1925GrevensPlanderStadtKln_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "grevens_plan_der_stadt_koeln_1925",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1925 Grevens Plan der Stadt Köln',
                            popuplayertitle: '1925 Grevens Plan der Stadt Köln',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1925GrevensPlanderStadtKln_2, 0]);
var lyr_1935Stadtkarte_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadtkarte_1935",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1935 Stadtkarte',
                            popuplayertitle: '1935 Stadtkarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1935Stadtkarte_3, 0]);
var lyr_1939KlnundUmgebungPNV_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "koeln_und_umgebung_oepnv_1939",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1939 Köln und Umgebung ÖPNV',
                            popuplayertitle: '1939 Köln und Umgebung ÖPNV',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1939KlnundUmgebungPNV_4, 0]);
var lyr_1952Stadtkarte_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadtkarte_1952",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1952 Stadtkarte',
                            popuplayertitle: '1952 Stadtkarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1952Stadtkarte_5, 0]);
var lyr_1959AmtlicherPlan_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "amtlicher_plan_1959",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1959 Amtlicher Plan',
                            popuplayertitle: '1959 Amtlicher Plan',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1959AmtlicherPlan_6, 0]);
var lyr_1973AmtlicherPlan_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/wss/service/historische_stadtkarten/guest",
                              attributions: ' ',
                              params: {
                                "LAYERS": "amtlicher_plan_1973",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '1973 Amtlicher Plan',
                            popuplayertitle: '1973 Amtlicher Plan',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_1973AmtlicherPlan_7, 0]);
var format_Verbindungen_8 = new ol.format.GeoJSON();
var features_Verbindungen_8 = format_Verbindungen_8.readFeatures(json_Verbindungen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungen_8.addFeatures(features_Verbindungen_8);
var lyr_Verbindungen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungen_8, 
                style: style_Verbindungen_8,
                popuplayertitle: 'Verbindungen',
                interactive: false,
    title: 'Verbindungen<br />\
    <img src="styles/legend/Verbindungen_8_0.png" /> Andries, Hans<br />\
    <img src="styles/legend/Verbindungen_8_1.png" /> Neven DuMont, J. M.<br />\
    <img src="styles/legend/Verbindungen_8_2.png" /> Stollwerck, Ludw.<br />\
    <img src="styles/legend/Verbindungen_8_3.png" /> Vorster, Fritz<br />' });
var format_zugeordnetesEigentum_9 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_9 = format_zugeordnetesEigentum_9.readFeatures(json_zugeordnetesEigentum_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_9.addFeatures(features_zugeordnetesEigentum_9);
var lyr_zugeordnetesEigentum_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_9, 
                style: style_zugeordnetesEigentum_9,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_9_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Personen_10 = new ol.format.GeoJSON();
var features_Personen_10 = format_Personen_10.readFeatures(json_Personen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_10.addFeatures(features_Personen_10);
var lyr_Personen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_10, 
                style: style_Personen_10,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_10_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_11 = new ol.format.GeoJSON();
var features_Verbindungslinien_11 = format_Verbindungslinien_11.readFeatures(json_Verbindungslinien_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_11.addFeatures(features_Verbindungslinien_11);
var lyr_Verbindungslinien_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_11, 
                style: style_Verbindungslinien_11,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_11_0.png" /> Andries, Hans<br />\
    <img src="styles/legend/Verbindungslinien_11_1.png" /> Haag, Hrch.<br />\
    <img src="styles/legend/Verbindungslinien_11_2.png" /> Neven DuMont, J. M. <br />\
    <img src="styles/legend/Verbindungslinien_11_3.png" /> Vorster, Fritz<br />' });
var format_zugeordnetesEigentum_12 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_12 = format_zugeordnetesEigentum_12.readFeatures(json_zugeordnetesEigentum_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_12.addFeatures(features_zugeordnetesEigentum_12);
var lyr_zugeordnetesEigentum_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_12, 
                style: style_zugeordnetesEigentum_12,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_12_0.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_12_1.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Eigentmerinunbekannt_13 = new ol.format.GeoJSON();
var features_Eigentmerinunbekannt_13 = format_Eigentmerinunbekannt_13.readFeatures(json_Eigentmerinunbekannt_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eigentmerinunbekannt_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eigentmerinunbekannt_13.addFeatures(features_Eigentmerinunbekannt_13);
var lyr_Eigentmerinunbekannt_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eigentmerinunbekannt_13, 
                style: style_Eigentmerinunbekannt_13,
                popuplayertitle: 'Eigentümer*in unbekannt',
                interactive: true,
    title: 'Eigentümer*in unbekannt<br />\
    <img src="styles/legend/Eigentmerinunbekannt_13_0.png" /> Eigentümer*in unbekannt<br />' });
var format_Personen_14 = new ol.format.GeoJSON();
var features_Personen_14 = format_Personen_14.readFeatures(json_Personen_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_14.addFeatures(features_Personen_14);
var lyr_Personen_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_14, 
                style: style_Personen_14,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_14_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_14_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_14_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_14_3.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_15 = new ol.format.GeoJSON();
var features_Verbindungslinien_15 = format_Verbindungslinien_15.readFeatures(json_Verbindungslinien_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_15.addFeatures(features_Verbindungslinien_15);
var lyr_Verbindungslinien_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_15, 
                style: style_Verbindungslinien_15,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_15_0.png" /> Andries, Hans<br />\
    <img src="styles/legend/Verbindungslinien_15_1.png" /> Hettwer, Joha.<br />\
    <img src="styles/legend/Verbindungslinien_15_2.png" /> Jacob, Wilh.<br />\
    <img src="styles/legend/Verbindungslinien_15_3.png" /> Kölner Reederei AG<br />\
    <img src="styles/legend/Verbindungslinien_15_4.png" /> Leybold, E.<br />\
    <img src="styles/legend/Verbindungslinien_15_5.png" /> Rhein. Braunkohlen-Syndikat GmbH<br />\
    <img src="styles/legend/Verbindungslinien_15_6.png" /> van den Bosch, Ed.<br />\
    <img src="styles/legend/Verbindungslinien_15_7.png" /> Vorster, Alfr.<br />' });
var format_zugeordnetesEigentum_16 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_16 = format_zugeordnetesEigentum_16.readFeatures(json_zugeordnetesEigentum_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_16.addFeatures(features_zugeordnetesEigentum_16);
var lyr_zugeordnetesEigentum_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_16, 
                style: style_zugeordnetesEigentum_16,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_16_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_16_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_16_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/zugeordnetesEigentum_16_3.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Eigentmerinunbekannt_17 = new ol.format.GeoJSON();
var features_Eigentmerinunbekannt_17 = format_Eigentmerinunbekannt_17.readFeatures(json_Eigentmerinunbekannt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eigentmerinunbekannt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eigentmerinunbekannt_17.addFeatures(features_Eigentmerinunbekannt_17);
var lyr_Eigentmerinunbekannt_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eigentmerinunbekannt_17, 
                style: style_Eigentmerinunbekannt_17,
                popuplayertitle: 'Eigentümer*in unbekannt',
                interactive: true,
    title: 'Eigentümer*in unbekannt<br />\
    <img src="styles/legend/Eigentmerinunbekannt_17_0.png" /> Eigentümer*in unbekannt<br />' });
var format_Gesellschaften_18 = new ol.format.GeoJSON();
var features_Gesellschaften_18 = format_Gesellschaften_18.readFeatures(json_Gesellschaften_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesellschaften_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesellschaften_18.addFeatures(features_Gesellschaften_18);
var lyr_Gesellschaften_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesellschaften_18, 
                style: style_Gesellschaften_18,
                popuplayertitle: 'Gesellschaften',
                interactive: true,
    title: 'Gesellschaften<br />\
    <img src="styles/legend/Gesellschaften_18_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Personen_19 = new ol.format.GeoJSON();
var features_Personen_19 = format_Personen_19.readFeatures(json_Personen_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_19.addFeatures(features_Personen_19);
var lyr_Personen_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_19, 
                style: style_Personen_19,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_19_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_19_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_19_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_19_3.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_20 = new ol.format.GeoJSON();
var features_Verbindungslinien_20 = format_Verbindungslinien_20.readFeatures(json_Verbindungslinien_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_20.addFeatures(features_Verbindungslinien_20);
var lyr_Verbindungslinien_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_20, 
                style: style_Verbindungslinien_20,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_20_0.png" /> Frangenheim, Paul<br />\
    <img src="styles/legend/Verbindungslinien_20_1.png" /> Grüneberg<br />\
    <img src="styles/legend/Verbindungslinien_20_2.png" /> Hettwer, Joha.<br />\
    <img src="styles/legend/Verbindungslinien_20_3.png" /> Jacob, Wilh.<br />\
    <img src="styles/legend/Verbindungslinien_20_4.png" /> Rhein. Braunkohlen-Syndikat GmbH<br />\
    <img src="styles/legend/Verbindungslinien_20_5.png" /> van den Bosch, Ed.<br />\
    <img src="styles/legend/Verbindungslinien_20_6.png" /> von Rautenstrauch, Eugen<br />\
    <img src="styles/legend/Verbindungslinien_20_7.png" /> Vorster. Alfr.<br />\
    <img src="styles/legend/Verbindungslinien_20_8.png" /> Wittrock, Karl<br />' });
var format_zugeordnetesEigentum_21 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_21 = format_zugeordnetesEigentum_21.readFeatures(json_zugeordnetesEigentum_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_21.addFeatures(features_zugeordnetesEigentum_21);
var lyr_zugeordnetesEigentum_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_21, 
                style: style_zugeordnetesEigentum_21,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_21_0.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_21_1.png" /> neuer Eintrag<br />\
    <img src="styles/legend/zugeordnetesEigentum_21_2.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Eigentmerinunbekannt_22 = new ol.format.GeoJSON();
var features_Eigentmerinunbekannt_22 = format_Eigentmerinunbekannt_22.readFeatures(json_Eigentmerinunbekannt_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eigentmerinunbekannt_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eigentmerinunbekannt_22.addFeatures(features_Eigentmerinunbekannt_22);
var lyr_Eigentmerinunbekannt_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eigentmerinunbekannt_22, 
                style: style_Eigentmerinunbekannt_22,
                popuplayertitle: 'Eigentümer*in unbekannt',
                interactive: true,
    title: 'Eigentümer*in unbekannt<br />\
    <img src="styles/legend/Eigentmerinunbekannt_22_0.png" /> Eigentümer*in unbekannt<br />' });
var format_Gesellschaften_23 = new ol.format.GeoJSON();
var features_Gesellschaften_23 = format_Gesellschaften_23.readFeatures(json_Gesellschaften_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesellschaften_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesellschaften_23.addFeatures(features_Gesellschaften_23);
var lyr_Gesellschaften_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesellschaften_23, 
                style: style_Gesellschaften_23,
                popuplayertitle: 'Gesellschaften',
                interactive: true,
    title: 'Gesellschaften<br />\
    <img src="styles/legend/Gesellschaften_23_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Personen_24 = new ol.format.GeoJSON();
var features_Personen_24 = format_Personen_24.readFeatures(json_Personen_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_24.addFeatures(features_Personen_24);
var lyr_Personen_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_24, 
                style: style_Personen_24,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_24_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_24_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_24_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_24_3.png" /> Wechsel Eigentümerschaft unbekannt<br />\
    <img src="styles/legend/Personen_24_4.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_25 = new ol.format.GeoJSON();
var features_Verbindungslinien_25 = format_Verbindungslinien_25.readFeatures(json_Verbindungslinien_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_25.addFeatures(features_Verbindungslinien_25);
var lyr_Verbindungslinien_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_25, 
                style: style_Verbindungslinien_25,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_25_0.png" /> Duisberg<br />\
    <img src="styles/legend/Verbindungslinien_25_1.png" /> Greven, Heinrich<br />\
    <img src="styles/legend/Verbindungslinien_25_2.png" /> Momesheim<br />\
    <img src="styles/legend/Verbindungslinien_25_3.png" /> Nonne<br />\
    <img src="styles/legend/Verbindungslinien_25_4.png" /> van den Bosch<br />' });
var format_zugeordnetesEigentum_26 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_26 = format_zugeordnetesEigentum_26.readFeatures(json_zugeordnetesEigentum_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_26.addFeatures(features_zugeordnetesEigentum_26);
var lyr_zugeordnetesEigentum_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_26, 
                style: style_zugeordnetesEigentum_26,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_26_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_26_1.png" /> kein Wechsel Eigentümerschaft<br />' });
var format_Eigentmerinunbekannt_27 = new ol.format.GeoJSON();
var features_Eigentmerinunbekannt_27 = format_Eigentmerinunbekannt_27.readFeatures(json_Eigentmerinunbekannt_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eigentmerinunbekannt_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eigentmerinunbekannt_27.addFeatures(features_Eigentmerinunbekannt_27);
var lyr_Eigentmerinunbekannt_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eigentmerinunbekannt_27, 
                style: style_Eigentmerinunbekannt_27,
                popuplayertitle: 'Eigentümer*in unbekannt',
                interactive: true,
    title: 'Eigentümer*in unbekannt<br />\
    <img src="styles/legend/Eigentmerinunbekannt_27_0.png" /> Eigentümer*in unbekannt<br />' });
var format_Personen_28 = new ol.format.GeoJSON();
var features_Personen_28 = format_Personen_28.readFeatures(json_Personen_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_28.addFeatures(features_Personen_28);
var lyr_Personen_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_28, 
                style: style_Personen_28,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_28_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_28_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_28_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_28_3.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_29 = new ol.format.GeoJSON();
var features_Verbindungslinien_29 = format_Verbindungslinien_29.readFeatures(json_Verbindungslinien_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_29.addFeatures(features_Verbindungslinien_29);
var lyr_Verbindungslinien_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_29, 
                style: style_Verbindungslinien_29,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_29_0.png" /> "Grundstücksges. ""Baunkohle"" mbH."<br />\
    <img src="styles/legend/Verbindungslinien_29_1.png" /> Braunkohlen- u. Brikettwerke Roddergrube AG<br />\
    <img src="styles/legend/Verbindungslinien_29_2.png" /> Bundesrepublik Deutschland<br />\
    <img src="styles/legend/Verbindungslinien_29_3.png" /> Carp, Erich<br />\
    <img src="styles/legend/Verbindungslinien_29_4.png" /> Colonia Köln.-Vers. A.G.<br />\
    <img src="styles/legend/Verbindungslinien_29_5.png" /> Deutsche Zündholzfabr. AG<br />\
    <img src="styles/legend/Verbindungslinien_29_6.png" /> Döring, F. Ww.<br />\
    <img src="styles/legend/Verbindungslinien_29_7.png" /> Frangenheim, P.<br />\
    <img src="styles/legend/Verbindungslinien_29_8.png" /> Greven, H.<br />\
    <img src="styles/legend/Verbindungslinien_29_9.png" /> Hettwer, J.<br />\
    <img src="styles/legend/Verbindungslinien_29_10.png" /> Jacob, A. Ww.<br />\
    <img src="styles/legend/Verbindungslinien_29_11.png" /> Mauser, P.<br />\
    <img src="styles/legend/Verbindungslinien_29_12.png" /> Schmitz, A. <br />\
    <img src="styles/legend/Verbindungslinien_29_13.png" /> Stadt Köln<br />\
    <img src="styles/legend/Verbindungslinien_29_14.png" /> van den Bosch, J.<br />\
    <img src="styles/legend/Verbindungslinien_29_15.png" /> Vorster, A.<br />\
    <img src="styles/legend/Verbindungslinien_29_16.png" /> Vorster, F.<br />' });
var format_zugeordnetesEigentum_30 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_30 = format_zugeordnetesEigentum_30.readFeatures(json_zugeordnetesEigentum_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_30.addFeatures(features_zugeordnetesEigentum_30);
var lyr_zugeordnetesEigentum_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_30, 
                style: style_zugeordnetesEigentum_30,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_30_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_30_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_30_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/zugeordnetesEigentum_30_3.png" /> Wechsel Eigentümerschaft unbekannt<br />' });
var format_PolitischeEntitten_31 = new ol.format.GeoJSON();
var features_PolitischeEntitten_31 = format_PolitischeEntitten_31.readFeatures(json_PolitischeEntitten_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolitischeEntitten_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolitischeEntitten_31.addFeatures(features_PolitischeEntitten_31);
var lyr_PolitischeEntitten_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolitischeEntitten_31, 
                style: style_PolitischeEntitten_31,
                popuplayertitle: 'Politische Entitäten',
                interactive: true,
    title: 'Politische Entitäten<br />\
    <img src="styles/legend/PolitischeEntitten_31_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Gesellschaften_32 = new ol.format.GeoJSON();
var features_Gesellschaften_32 = format_Gesellschaften_32.readFeatures(json_Gesellschaften_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesellschaften_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesellschaften_32.addFeatures(features_Gesellschaften_32);
var lyr_Gesellschaften_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesellschaften_32, 
                style: style_Gesellschaften_32,
                popuplayertitle: 'Gesellschaften',
                interactive: true,
    title: 'Gesellschaften<br />\
    <img src="styles/legend/Gesellschaften_32_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Personen_33 = new ol.format.GeoJSON();
var features_Personen_33 = format_Personen_33.readFeatures(json_Personen_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_33.addFeatures(features_Personen_33);
var lyr_Personen_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_33, 
                style: style_Personen_33,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_33_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_33_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_33_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_33_3.png" /> Wechsel Eigentümerschaft unbekannt<br />\
    <img src="styles/legend/Personen_33_4.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Verbindungslinien_34 = new ol.format.GeoJSON();
var features_Verbindungslinien_34 = format_Verbindungslinien_34.readFeatures(json_Verbindungslinien_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verbindungslinien_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verbindungslinien_34.addFeatures(features_Verbindungslinien_34);
var lyr_Verbindungslinien_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verbindungslinien_34, 
                style: style_Verbindungslinien_34,
                popuplayertitle: 'Verbindungslinien',
                interactive: false,
    title: 'Verbindungslinien<br />\
    <img src="styles/legend/Verbindungslinien_34_0.png" /> "Grundstücksgesellschaft ""Braunkohle"" mbH"<br />\
    <img src="styles/legend/Verbindungslinien_34_1.png" /> Bundesrepublik Deutschland<br />\
    <img src="styles/legend/Verbindungslinien_34_2.png" /> Bundesvermögensverw.<br />\
    <img src="styles/legend/Verbindungslinien_34_3.png" /> Carp, Erich<br />\
    <img src="styles/legend/Verbindungslinien_34_4.png" /> Colonia Köln.-Vers. A.G.<br />\
    <img src="styles/legend/Verbindungslinien_34_5.png" /> Erben Vorster, Alfred<br />\
    <img src="styles/legend/Verbindungslinien_34_6.png" /> Hausbau- und Verwaltungsgesellschaft Colonia<br />\
    <img src="styles/legend/Verbindungslinien_34_7.png" /> Heubeck, Georg<br />\
    <img src="styles/legend/Verbindungslinien_34_8.png" /> Jacob, A.<br />\
    <img src="styles/legend/Verbindungslinien_34_9.png" /> Rheinische Braunkohlenwerke AG<br />\
    <img src="styles/legend/Verbindungslinien_34_10.png" /> Schmitz, A.<br />\
    <img src="styles/legend/Verbindungslinien_34_11.png" /> Stadt Köln<br />\
    <img src="styles/legend/Verbindungslinien_34_12.png" /> van den Bosch, J.<br />\
    <img src="styles/legend/Verbindungslinien_34_13.png" /> Vorster, F.<br />' });
var format_zugeordnetesEigentum_35 = new ol.format.GeoJSON();
var features_zugeordnetesEigentum_35 = format_zugeordnetesEigentum_35.readFeatures(json_zugeordnetesEigentum_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zugeordnetesEigentum_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zugeordnetesEigentum_35.addFeatures(features_zugeordnetesEigentum_35);
var lyr_zugeordnetesEigentum_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zugeordnetesEigentum_35, 
                style: style_zugeordnetesEigentum_35,
                popuplayertitle: 'zugeordnetes Eigentum',
                interactive: true,
    title: 'zugeordnetes Eigentum<br />\
    <img src="styles/legend/zugeordnetesEigentum_35_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_35_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/zugeordnetesEigentum_35_2.png" /> neuer Eintrag<br />' });
var format_Eigentmerinunbekannt_36 = new ol.format.GeoJSON();
var features_Eigentmerinunbekannt_36 = format_Eigentmerinunbekannt_36.readFeatures(json_Eigentmerinunbekannt_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eigentmerinunbekannt_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eigentmerinunbekannt_36.addFeatures(features_Eigentmerinunbekannt_36);
var lyr_Eigentmerinunbekannt_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eigentmerinunbekannt_36, 
                style: style_Eigentmerinunbekannt_36,
                popuplayertitle: 'Eigentümer*in unbekannt',
                interactive: true,
    title: 'Eigentümer*in unbekannt<br />\
    <img src="styles/legend/Eigentmerinunbekannt_36_0.png" /> Eigentümer*in unbekannt<br />' });
var format_PolitischeEntitten_37 = new ol.format.GeoJSON();
var features_PolitischeEntitten_37 = format_PolitischeEntitten_37.readFeatures(json_PolitischeEntitten_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolitischeEntitten_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolitischeEntitten_37.addFeatures(features_PolitischeEntitten_37);
var lyr_PolitischeEntitten_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolitischeEntitten_37, 
                style: style_PolitischeEntitten_37,
                popuplayertitle: 'Politische Entitäten',
                interactive: true,
    title: 'Politische Entitäten<br />\
    <img src="styles/legend/PolitischeEntitten_37_0.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Gesellschaften_38 = new ol.format.GeoJSON();
var features_Gesellschaften_38 = format_Gesellschaften_38.readFeatures(json_Gesellschaften_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesellschaften_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesellschaften_38.addFeatures(features_Gesellschaften_38);
var lyr_Gesellschaften_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesellschaften_38, 
                style: style_Gesellschaften_38,
                popuplayertitle: 'Gesellschaften',
                interactive: true,
    title: 'Gesellschaften<br />\
    <img src="styles/legend/Gesellschaften_38_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Gesellschaften_38_1.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_Personen_39 = new ol.format.GeoJSON();
var features_Personen_39 = format_Personen_39.readFeatures(json_Personen_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personen_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personen_39.addFeatures(features_Personen_39);
var lyr_Personen_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personen_39, 
                style: style_Personen_39,
                popuplayertitle: 'Personen',
                interactive: true,
    title: 'Personen<br />\
    <img src="styles/legend/Personen_39_0.png" /> Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_39_1.png" /> kein Wechsel Eigentümerschaft<br />\
    <img src="styles/legend/Personen_39_2.png" /> neuer Eintrag<br />\
    <img src="styles/legend/Personen_39_3.png" /> Wechsel Eigentümerschaft nicht erfasst<br />' });
var format_LegendePunktanklicken_40 = new ol.format.GeoJSON();
var features_LegendePunktanklicken_40 = format_LegendePunktanklicken_40.readFeatures(json_LegendePunktanklicken_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegendePunktanklicken_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegendePunktanklicken_40.addFeatures(features_LegendePunktanklicken_40);
var lyr_LegendePunktanklicken_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegendePunktanklicken_40, 
                style: style_LegendePunktanklicken_40,
                popuplayertitle: 'Legende (Punkt anklicken)',
                interactive: true,
                title: '<img src="styles/legend/LegendePunktanklicken_40.png" /> Legende (Punkt anklicken)'
            });
var group_1973 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_34,lyr_zugeordnetesEigentum_35,lyr_Eigentmerinunbekannt_36,lyr_PolitischeEntitten_37,lyr_Gesellschaften_38,lyr_Personen_39,],
                                fold: 'close',
                                title: '1973'});
var group_1960 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_29,lyr_zugeordnetesEigentum_30,lyr_PolitischeEntitten_31,lyr_Gesellschaften_32,lyr_Personen_33,],
                                fold: 'close',
                                title: '1960'});
var group_1951 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_25,lyr_zugeordnetesEigentum_26,lyr_Eigentmerinunbekannt_27,lyr_Personen_28,],
                                fold: 'close',
                                title: '1951'});
var group_1939 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_20,lyr_zugeordnetesEigentum_21,lyr_Eigentmerinunbekannt_22,lyr_Gesellschaften_23,lyr_Personen_24,],
                                fold: 'close',
                                title: '1939'});
var group_1935 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_15,lyr_zugeordnetesEigentum_16,lyr_Eigentmerinunbekannt_17,lyr_Gesellschaften_18,lyr_Personen_19,],
                                fold: 'close',
                                title: '1935'});
var group_1925 = new ol.layer.Group({
                                layers: [lyr_Verbindungslinien_11,lyr_zugeordnetesEigentum_12,lyr_Eigentmerinunbekannt_13,lyr_Personen_14,],
                                fold: 'close',
                                title: '1925'});
var group_1920 = new ol.layer.Group({
                                layers: [lyr_Verbindungen_8,lyr_zugeordnetesEigentum_9,lyr_Personen_10,],
                                fold: 'close',
                                title: '1920'});
var group_Kln = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Köln'});
var group_histStadtplneGeoportalKln = new ol.layer.Group({
                                layers: [lyr_1921PlanderStadtKln_1,lyr_1925GrevensPlanderStadtKln_2,lyr_1935Stadtkarte_3,lyr_1939KlnundUmgebungPNV_4,lyr_1952Stadtkarte_5,lyr_1959AmtlicherPlan_6,lyr_1973AmtlicherPlan_7,],
                                fold: 'close',
                                title: 'hist. Stadtpläne Geoportal Köln'});

lyr_OSMStandard_0.setVisible(true);lyr_1921PlanderStadtKln_1.setVisible(false);lyr_1925GrevensPlanderStadtKln_2.setVisible(false);lyr_1935Stadtkarte_3.setVisible(false);lyr_1939KlnundUmgebungPNV_4.setVisible(false);lyr_1952Stadtkarte_5.setVisible(false);lyr_1959AmtlicherPlan_6.setVisible(false);lyr_1973AmtlicherPlan_7.setVisible(false);lyr_Verbindungen_8.setVisible(false);lyr_zugeordnetesEigentum_9.setVisible(false);lyr_Personen_10.setVisible(false);lyr_Verbindungslinien_11.setVisible(false);lyr_zugeordnetesEigentum_12.setVisible(false);lyr_Eigentmerinunbekannt_13.setVisible(false);lyr_Personen_14.setVisible(false);lyr_Verbindungslinien_15.setVisible(false);lyr_zugeordnetesEigentum_16.setVisible(false);lyr_Eigentmerinunbekannt_17.setVisible(false);lyr_Gesellschaften_18.setVisible(false);lyr_Personen_19.setVisible(false);lyr_Verbindungslinien_20.setVisible(false);lyr_zugeordnetesEigentum_21.setVisible(false);lyr_Eigentmerinunbekannt_22.setVisible(false);lyr_Gesellschaften_23.setVisible(false);lyr_Personen_24.setVisible(false);lyr_Verbindungslinien_25.setVisible(false);lyr_zugeordnetesEigentum_26.setVisible(false);lyr_Eigentmerinunbekannt_27.setVisible(false);lyr_Personen_28.setVisible(false);lyr_Verbindungslinien_29.setVisible(false);lyr_zugeordnetesEigentum_30.setVisible(false);lyr_PolitischeEntitten_31.setVisible(false);lyr_Gesellschaften_32.setVisible(false);lyr_Personen_33.setVisible(false);lyr_Verbindungslinien_34.setVisible(true);lyr_zugeordnetesEigentum_35.setVisible(true);lyr_Eigentmerinunbekannt_36.setVisible(true);lyr_PolitischeEntitten_37.setVisible(true);lyr_Gesellschaften_38.setVisible(true);lyr_Personen_39.setVisible(true);lyr_LegendePunktanklicken_40.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_histStadtplneGeoportalKln,group_1920,group_1925,group_1935,group_1939,group_1951,group_1960,group_1973,lyr_LegendePunktanklicken_40];
lyr_Verbindungen_8.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1920': 'Eintrag_1920', 'Bewohner_1920': 'Bewohner_1920', 'Berufe_1920': 'Berufe_1920', 'Haushalte_Anzahl_1920': 'Haushalte_Anzahl_1920', 'Eigentümer_1920': 'Eigentümer_1920', 'E_Pers_Ges_Pol_1920': 'E_Pers_Ges_Pol_1920', 'E_Wechsel_vorher_Ujahr_1920': 'E_Wechsel_vorher_Ujahr_1920', 'Eigentümer_Wohnsitz_1920': 'Eigentümer_Wohnsitz_1920', 'Eigentümer_Distanz_1920': 'Eigentümer_Distanz_1920', 'Kommentar_Unklarheit_1920': 'Kommentar_Unklarheit_1920', 'Quelle_1920': 'Quelle_1920', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_9.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1920': 'Eintrag_1920', 'Bewohner_1920': 'Bewohner_1920', 'Berufe_1920': 'Berufe_1920', 'Haushalte_Anzahl_1920': 'Haushalte_Anzahl_1920', 'Eigentümer_1920': 'Eigentümer_1920', 'E_Pers_Ges_Pol_1920': 'E_Pers_Ges_Pol_1920', 'E_Wechsel_vorher_Ujahr_1920': 'E_Wechsel_vorher_Ujahr_1920', 'Eigentümer_Wohnsitz_1920': 'Eigentümer_Wohnsitz_1920', 'Eigentümer_Distanz_1920': 'Eigentümer_Distanz_1920', 'Kommentar_Unklarheit_1920': 'Kommentar_Unklarheit_1920', 'Quelle_1920': 'Quelle_1920', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_10.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1920': 'Eintrag_1920', 'Bewohner_1920': 'Bewohner_1920', 'Berufe_1920': 'Berufe_1920', 'Haushalte_Anzahl_1920': 'Haushalte_Anzahl_1920', 'Eigentümer_1920': 'Eigentümer_1920', 'E_Pers_Ges_Pol_1920': 'E_Pers_Ges_Pol_1920', 'E_Wechsel_vorher_Ujahr_1920': 'E_Wechsel_vorher_Ujahr_1920', 'Eigentümer_Wohnsitz_1920': 'Eigentümer_Wohnsitz_1920', 'Eigentümer_Distanz_1920': 'Eigentümer_Distanz_1920', 'Kommentar_Unklarheit_1920': 'Kommentar_Unklarheit_1920', 'Quelle_1920': 'Quelle_1920', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_11.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_JAHR': 'Eintrag_JAHR', 'Bewohner_1925': 'Bewohner_1925', 'Berufe_1925': 'Berufe_1925', 'Haushalte_Anzahl_1925': 'Haushalte_Anzahl_1925', 'Eigentümer_1925': 'Eigentümer_1925', 'E_Pers_Ges_Pol_1925': 'E_Pers_Ges_Pol_1925', 'E_Wechsel_vorher_Ujahr_1925': 'E_Wechsel_vorher_Ujahr_1925', 'Eigentümer_Wohnsitz_1925': 'Eigentümer_Wohnsitz_1925', 'Eigentümer_Distanz_1925': 'Eigentümer_Distanz_1925', 'Kommentar_Unklarheit_1925': 'Kommentar_Unklarheit_1925', 'Quelle_1925': 'Quelle_1925', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_12.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_JAHR': 'Eintrag_JAHR', 'Bewohner_1925': 'Bewohner_1925', 'Berufe_1925': 'Berufe_1925', 'Haushalte_Anzahl_1925': 'Haushalte_Anzahl_1925', 'Eigentümer_1925': 'Eigentümer_1925', 'E_Pers_Ges_Pol_1925': 'E_Pers_Ges_Pol_1925', 'E_Wechsel_vorher_Ujahr_1925': 'E_Wechsel_vorher_Ujahr_1925', 'Eigentümer_Wohnsitz_1925': 'Eigentümer_Wohnsitz_1925', 'Eigentümer_Distanz_1925': 'Eigentümer_Distanz_1925', 'Kommentar_Unklarheit_1925': 'Kommentar_Unklarheit_1925', 'Quelle_1925': 'Quelle_1925', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Eigentmerinunbekannt_13.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_JAHR': 'Eintrag_JAHR', 'Bewohner_1925': 'Bewohner_1925', 'Berufe_1925': 'Berufe_1925', 'Haushalte_Anzahl_1925': 'Haushalte_Anzahl_1925', 'Eigentümer_1925': 'Eigentümer_1925', 'E_Pers_Ges_Pol_1925': 'E_Pers_Ges_Pol_1925', 'E_Wechsel_vorher_Ujahr_1925': 'E_Wechsel_vorher_Ujahr_1925', 'Eigentümer_Wohnsitz_1925': 'Eigentümer_Wohnsitz_1925', 'Eigentümer_Distanz_1925': 'Eigentümer_Distanz_1925', 'Kommentar_Unklarheit_1925': 'Kommentar_Unklarheit_1925', 'Quelle_1925': 'Quelle_1925', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_14.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_JAHR': 'Eintrag_JAHR', 'Bewohner_1925': 'Bewohner_1925', 'Berufe_1925': 'Berufe_1925', 'Haushalte_Anzahl_1925': 'Haushalte_Anzahl_1925', 'Eigentümer_1925': 'Eigentümer_1925', 'E_Pers_Ges_Pol_1925': 'E_Pers_Ges_Pol_1925', 'E_Wechsel_vorher_Ujahr_1925': 'E_Wechsel_vorher_Ujahr_1925', 'Eigentümer_Wohnsitz_1925': 'Eigentümer_Wohnsitz_1925', 'Eigentümer_Distanz_1925': 'Eigentümer_Distanz_1925', 'Kommentar_Unklarheit_1925': 'Kommentar_Unklarheit_1925', 'Quelle_1925': 'Quelle_1925', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_15.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1935': 'Eintrag_1935', 'Bewohner_1935': 'Bewohner_1935', 'Berufe_1935': 'Berufe_1935', 'Haushalte_Anzahl_1935': 'Haushalte_Anzahl_1935', 'Eigentümer_1935': 'Eigentümer_1935', 'E_Pers_Ges_Pol_1935': 'E_Pers_Ges_Pol_1935', 'E_Wechsel_vorher_Ujahr_1935': 'E_Wechsel_vorher_Ujahr_1935', 'Eigentümer_Wohnsitz_1935': 'Eigentümer_Wohnsitz_1935', 'Eigentümer_Distanz_1935': 'Eigentümer_Distanz_1935', 'Kommentar_Unklarheit_1935': 'Kommentar_Unklarheit_1935', 'Quelle_1935': 'Quelle_1935', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_16.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1935': 'Eintrag_1935', 'Bewohner_1935': 'Bewohner_1935', 'Berufe_1935': 'Berufe_1935', 'Haushalte_Anzahl_1935': 'Haushalte_Anzahl_1935', 'Eigentümer_1935': 'Eigentümer_1935', 'E_Pers_Ges_Pol_1935': 'E_Pers_Ges_Pol_1935', 'E_Wechsel_vorher_Ujahr_1935': 'E_Wechsel_vorher_Ujahr_1935', 'Eigentümer_Wohnsitz_1935': 'Eigentümer_Wohnsitz_1935', 'Eigentümer_Distanz_1935': 'Eigentümer_Distanz_1935', 'Kommentar_Unklarheit_1935': 'Kommentar_Unklarheit_1935', 'Quelle_1935': 'Quelle_1935', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Eigentmerinunbekannt_17.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1935': 'Eintrag_1935', 'Bewohner_1935': 'Bewohner_1935', 'Berufe_1935': 'Berufe_1935', 'Haushalte_Anzahl_1935': 'Haushalte_Anzahl_1935', 'Eigentümer_1935': 'Eigentümer_1935', 'E_Pers_Ges_Pol_1935': 'E_Pers_Ges_Pol_1935', 'E_Wechsel_vorher_Ujahr_1935': 'E_Wechsel_vorher_Ujahr_1935', 'Eigentümer_Wohnsitz_1935': 'Eigentümer_Wohnsitz_1935', 'Eigentümer_Distanz_1935': 'Eigentümer_Distanz_1935', 'Kommentar_Unklarheit_1935': 'Kommentar_Unklarheit_1935', 'Quelle_1935': 'Quelle_1935', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Gesellschaften_18.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1935': 'Eintrag_1935', 'Bewohner_1935': 'Bewohner_1935', 'Berufe_1935': 'Berufe_1935', 'Haushalte_Anzahl_1935': 'Haushalte_Anzahl_1935', 'Eigentümer_1935': 'Eigentümer_1935', 'E_Pers_Ges_Pol_1935': 'E_Pers_Ges_Pol_1935', 'E_Wechsel_vorher_Ujahr_1935': 'E_Wechsel_vorher_Ujahr_1935', 'Eigentümer_Wohnsitz_1935': 'Eigentümer_Wohnsitz_1935', 'Eigentümer_Distanz_1935': 'Eigentümer_Distanz_1935', 'Kommentar_Unklarheit_1935': 'Kommentar_Unklarheit_1935', 'Quelle_1935': 'Quelle_1935', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_19.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1935': 'Eintrag_1935', 'Bewohner_1935': 'Bewohner_1935', 'Berufe_1935': 'Berufe_1935', 'Haushalte_Anzahl_1935': 'Haushalte_Anzahl_1935', 'Eigentümer_1935': 'Eigentümer_1935', 'E_Pers_Ges_Pol_1935': 'E_Pers_Ges_Pol_1935', 'E_Wechsel_vorher_Ujahr_1935': 'E_Wechsel_vorher_Ujahr_1935', 'Eigentümer_Wohnsitz_1935': 'Eigentümer_Wohnsitz_1935', 'Eigentümer_Distanz_1935': 'Eigentümer_Distanz_1935', 'Kommentar_Unklarheit_1935': 'Kommentar_Unklarheit_1935', 'Quelle_1935': 'Quelle_1935', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_20.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1939': 'Eintrag_1939', 'Bewohner_1939': 'Bewohner_1939', 'Berufe_1939': 'Berufe_1939', 'Haushalte_Anzahl_1939': 'Haushalte_Anzahl_1939', 'Eigentümer_1939': 'Eigentümer_1939', 'E_Pers_Ges_Pol_1939': 'E_Pers_Ges_Pol_1939', 'E_Wechsel_vorher_Ujahr_1939': 'E_Wechsel_vorher_Ujahr_1939', 'Eigentümer_Wohnsitz_1939': 'Eigentümer_Wohnsitz_1939', 'Eigentümer_Distanz_1939': 'Eigentümer_Distanz_1939', 'Kommentar_Unklarheit_1939': 'Kommentar_Unklarheit_1939', 'Quelle_1939': 'Quelle_1939', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_21.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1939': 'Eintrag_1939', 'Bewohner_1939': 'Bewohner_1939', 'Berufe_1939': 'Berufe_1939', 'Haushalte_Anzahl_1939': 'Haushalte_Anzahl_1939', 'Eigentümer_1939': 'Eigentümer_1939', 'E_Pers_Ges_Pol_1939': 'E_Pers_Ges_Pol_1939', 'E_Wechsel_vorher_Ujahr_1939': 'E_Wechsel_vorher_Ujahr_1939', 'Eigentümer_Wohnsitz_1939': 'Eigentümer_Wohnsitz_1939', 'Eigentümer_Distanz_1939': 'Eigentümer_Distanz_1939', 'Kommentar_Unklarheit_1939': 'Kommentar_Unklarheit_1939', 'Quelle_1939': 'Quelle_1939', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Eigentmerinunbekannt_22.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1939': 'Eintrag_1939', 'Bewohner_1939': 'Bewohner_1939', 'Berufe_1939': 'Berufe_1939', 'Haushalte_Anzahl_1939': 'Haushalte_Anzahl_1939', 'Eigentümer_1939': 'Eigentümer_1939', 'E_Pers_Ges_Pol_1939': 'E_Pers_Ges_Pol_1939', 'E_Wechsel_vorher_Ujahr_1939': 'E_Wechsel_vorher_Ujahr_1939', 'Eigentümer_Wohnsitz_1939': 'Eigentümer_Wohnsitz_1939', 'Eigentümer_Distanz_1939': 'Eigentümer_Distanz_1939', 'Kommentar_Unklarheit_1939': 'Kommentar_Unklarheit_1939', 'Quelle_1939': 'Quelle_1939', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Gesellschaften_23.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1939': 'Eintrag_1939', 'Bewohner_1939': 'Bewohner_1939', 'Berufe_1939': 'Berufe_1939', 'Haushalte_Anzahl_1939': 'Haushalte_Anzahl_1939', 'Eigentümer_1939': 'Eigentümer_1939', 'E_Pers_Ges_Pol_1939': 'E_Pers_Ges_Pol_1939', 'E_Wechsel_vorher_Ujahr_1939': 'E_Wechsel_vorher_Ujahr_1939', 'Eigentümer_Wohnsitz_1939': 'Eigentümer_Wohnsitz_1939', 'Eigentümer_Distanz_1939': 'Eigentümer_Distanz_1939', 'Kommentar_Unklarheit_1939': 'Kommentar_Unklarheit_1939', 'Quelle_1939': 'Quelle_1939', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_24.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1939': 'Eintrag_1939', 'Bewohner_1939': 'Bewohner_1939', 'Berufe_1939': 'Berufe_1939', 'Haushalte_Anzahl_1939': 'Haushalte_Anzahl_1939', 'Eigentümer_1939': 'Eigentümer_1939', 'E_Pers_Ges_Pol_1939': 'E_Pers_Ges_Pol_1939', 'E_Wechsel_vorher_Ujahr_1939': 'E_Wechsel_vorher_Ujahr_1939', 'Eigentümer_Wohnsitz_1939': 'Eigentümer_Wohnsitz_1939', 'Eigentümer_Distanz_1939': 'Eigentümer_Distanz_1939', 'Kommentar_Unklarheit_1939': 'Kommentar_Unklarheit_1939', 'Quelle_1939': 'Quelle_1939', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_25.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1951': 'Eintrag_1951', 'Bewohner_1951': 'Bewohner_1951', 'Berufe_1951': 'Berufe_1951', 'Haushalte_Anzahl_1951': 'Haushalte_Anzahl_1951', 'Eigentümer_1951': 'Eigentümer_1951', 'E_Pers_Ges_Pol_1951': 'E_Pers_Ges_Pol_1951', 'E_Wechsel_vorher_Ujahr_1951': 'E_Wechsel_vorher_Ujahr_1951', 'Eigentümer_Wohnsitz_1951': 'Eigentümer_Wohnsitz_1951', 'Eigentümer_Distanz_1951': 'Eigentümer_Distanz_1951', 'Kommentar_Unklarheit_1951': 'Kommentar_Unklarheit_1951', 'Quelle_1951': 'Quelle_1951', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_26.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1951': 'Eintrag_1951', 'Bewohner_1951': 'Bewohner_1951', 'Berufe_1951': 'Berufe_1951', 'Haushalte_Anzahl_1951': 'Haushalte_Anzahl_1951', 'Eigentümer_1951': 'Eigentümer_1951', 'E_Pers_Ges_Pol_1951': 'E_Pers_Ges_Pol_1951', 'E_Wechsel_vorher_Ujahr_1951': 'E_Wechsel_vorher_Ujahr_1951', 'Eigentümer_Wohnsitz_1951': 'Eigentümer_Wohnsitz_1951', 'Eigentümer_Distanz_1951': 'Eigentümer_Distanz_1951', 'Kommentar_Unklarheit_1951': 'Kommentar_Unklarheit_1951', 'Quelle_1951': 'Quelle_1951', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Eigentmerinunbekannt_27.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1951': 'Eintrag_1951', 'Bewohner_1951': 'Bewohner_1951', 'Berufe_1951': 'Berufe_1951', 'Haushalte_Anzahl_1951': 'Haushalte_Anzahl_1951', 'Eigentümer_1951': 'Eigentümer_1951', 'E_Pers_Ges_Pol_1951': 'E_Pers_Ges_Pol_1951', 'E_Wechsel_vorher_Ujahr_1951': 'E_Wechsel_vorher_Ujahr_1951', 'Eigentümer_Wohnsitz_1951': 'Eigentümer_Wohnsitz_1951', 'Eigentümer_Distanz_1951': 'Eigentümer_Distanz_1951', 'Kommentar_Unklarheit_1951': 'Kommentar_Unklarheit_1951', 'Quelle_1951': 'Quelle_1951', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_28.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1951': 'Eintrag_1951', 'Bewohner_1951': 'Bewohner_1951', 'Berufe_1951': 'Berufe_1951', 'Haushalte_Anzahl_1951': 'Haushalte_Anzahl_1951', 'Eigentümer_1951': 'Eigentümer_1951', 'E_Pers_Ges_Pol_1951': 'E_Pers_Ges_Pol_1951', 'E_Wechsel_vorher_Ujahr_1951': 'E_Wechsel_vorher_Ujahr_1951', 'Eigentümer_Wohnsitz_1951': 'Eigentümer_Wohnsitz_1951', 'Eigentümer_Distanz_1951': 'Eigentümer_Distanz_1951', 'Kommentar_Unklarheit_1951': 'Kommentar_Unklarheit_1951', 'Quelle_1951': 'Quelle_1951', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_29.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1960': 'Eintrag_1960', 'Bewohner_1960': 'Bewohner_1960', 'Berufe_1960': 'Berufe_1960', 'Haushalte_Anzahl_1960': 'Haushalte_Anzahl_1960', 'Eigentümer_1960': 'Eigentümer_1960', 'E_Pers_Ges_Pol_1960': 'E_Pers_Ges_Pol_1960', 'E_Wechsel_vorher_Ujahr_1960': 'E_Wechsel_vorher_Ujahr_1960', 'Eigentümer_Wohnsitz_1960': 'Eigentümer_Wohnsitz_1960', 'Eigentümer_Distanz_1960': 'Eigentümer_Distanz_1960', 'Kommentar_Unklarheit_1960': 'Kommentar_Unklarheit_1960', 'Quelle_1960': 'Quelle_1960', 'field_18': 'field_18', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_30.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1960': 'Eintrag_1960', 'Bewohner_1960': 'Bewohner_1960', 'Berufe_1960': 'Berufe_1960', 'Haushalte_Anzahl_1960': 'Haushalte_Anzahl_1960', 'Eigentümer_1960': 'Eigentümer_1960', 'E_Pers_Ges_Pol_1960': 'E_Pers_Ges_Pol_1960', 'E_Wechsel_vorher_Ujahr_1960': 'E_Wechsel_vorher_Ujahr_1960', 'Eigentümer_Wohnsitz_1960': 'Eigentümer_Wohnsitz_1960', 'Eigentümer_Distanz_1960': 'Eigentümer_Distanz_1960', 'Kommentar_Unklarheit_1960': 'Kommentar_Unklarheit_1960', 'Quelle_1960': 'Quelle_1960', 'field_18': 'field_18', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_PolitischeEntitten_31.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1960': 'Eintrag_1960', 'Bewohner_1960': 'Bewohner_1960', 'Berufe_1960': 'Berufe_1960', 'Haushalte_Anzahl_1960': 'Haushalte_Anzahl_1960', 'Eigentümer_1960': 'Eigentümer_1960', 'E_Pers_Ges_Pol_1960': 'E_Pers_Ges_Pol_1960', 'E_Wechsel_vorher_Ujahr_1960': 'E_Wechsel_vorher_Ujahr_1960', 'Eigentümer_Wohnsitz_1960': 'Eigentümer_Wohnsitz_1960', 'Eigentümer_Distanz_1960': 'Eigentümer_Distanz_1960', 'Kommentar_Unklarheit_1960': 'Kommentar_Unklarheit_1960', 'Quelle_1960': 'Quelle_1960', 'field_18': 'field_18', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Gesellschaften_32.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1960': 'Eintrag_1960', 'Bewohner_1960': 'Bewohner_1960', 'Berufe_1960': 'Berufe_1960', 'Haushalte_Anzahl_1960': 'Haushalte_Anzahl_1960', 'Eigentümer_1960': 'Eigentümer_1960', 'E_Pers_Ges_Pol_1960': 'E_Pers_Ges_Pol_1960', 'E_Wechsel_vorher_Ujahr_1960': 'E_Wechsel_vorher_Ujahr_1960', 'Eigentümer_Wohnsitz_1960': 'Eigentümer_Wohnsitz_1960', 'Eigentümer_Distanz_1960': 'Eigentümer_Distanz_1960', 'Kommentar_Unklarheit_1960': 'Kommentar_Unklarheit_1960', 'Quelle_1960': 'Quelle_1960', 'field_18': 'field_18', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_33.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1960': 'Eintrag_1960', 'Bewohner_1960': 'Bewohner_1960', 'Berufe_1960': 'Berufe_1960', 'Haushalte_Anzahl_1960': 'Haushalte_Anzahl_1960', 'Eigentümer_1960': 'Eigentümer_1960', 'E_Pers_Ges_Pol_1960': 'E_Pers_Ges_Pol_1960', 'E_Wechsel_vorher_Ujahr_1960': 'E_Wechsel_vorher_Ujahr_1960', 'Eigentümer_Wohnsitz_1960': 'Eigentümer_Wohnsitz_1960', 'Eigentümer_Distanz_1960': 'Eigentümer_Distanz_1960', 'Kommentar_Unklarheit_1960': 'Kommentar_Unklarheit_1960', 'Quelle_1960': 'Quelle_1960', 'field_18': 'field_18', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Verbindungslinien_34.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_zugeordnetesEigentum_35.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Eigentmerinunbekannt_36.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_PolitischeEntitten_37.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Gesellschaften_38.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_Personen_39.set('fieldAliases', {'fid': 'fid', 'Objekt_ID': 'Objekt_ID', 'Eigentümer_ID': 'Eigentümer_ID', 'Adresse_alt': 'Adresse_alt', 'Adresse_neu': 'Adresse_neu', 'lat': 'lat', 'long': 'long', 'Eintrag_1973': 'Eintrag_1973', 'Bewohner_1973': 'Bewohner_1973', 'Berufe_1973': 'Berufe_1973', 'Haushalte_Anzahl_1973': 'Haushalte_Anzahl_1973', 'Eigentümer_1973': 'Eigentümer_1973', 'E_Pers_Ges_Pol_1973': 'E_Pers_Ges_Pol_1973', 'E_Wechsel_vorher_Ujahr_1973': 'E_Wechsel_vorher_Ujahr_1973', 'Eigentümer_Wohnsitz_1973': 'Eigentümer_Wohnsitz_1973', 'Eigentümer_Distanz_1973': 'Eigentümer_Distanz_1973', 'Kommentar_Unklarheit_1973': 'Kommentar_Unklarheit_1973', 'Quelle_1973': 'Quelle_1973', 'Eigentümer_ID_2': 'Eigentümer_ID_2', 'lat_2': 'lat_2', 'long_2': 'long_2', });
lyr_LegendePunktanklicken_40.set('fieldAliases', {'id': 'id', 'Bildpfad': 'Bildpfad', 'Name': 'Name', });
lyr_Verbindungen_8.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1920': 'TextEdit', 'Bewohner_1920': 'TextEdit', 'Berufe_1920': 'TextEdit', 'Haushalte_Anzahl_1920': 'Range', 'Eigentümer_1920': 'TextEdit', 'E_Pers_Ges_Pol_1920': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1920': 'TextEdit', 'Eigentümer_Wohnsitz_1920': 'TextEdit', 'Eigentümer_Distanz_1920': 'TextEdit', 'Kommentar_Unklarheit_1920': 'TextEdit', 'Quelle_1920': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_9.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1920': 'TextEdit', 'Bewohner_1920': 'TextEdit', 'Berufe_1920': 'TextEdit', 'Haushalte_Anzahl_1920': 'Range', 'Eigentümer_1920': 'TextEdit', 'E_Pers_Ges_Pol_1920': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1920': 'TextEdit', 'Eigentümer_Wohnsitz_1920': 'TextEdit', 'Eigentümer_Distanz_1920': 'TextEdit', 'Kommentar_Unklarheit_1920': 'TextEdit', 'Quelle_1920': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_10.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1920': 'TextEdit', 'Bewohner_1920': 'TextEdit', 'Berufe_1920': 'TextEdit', 'Haushalte_Anzahl_1920': 'Range', 'Eigentümer_1920': 'TextEdit', 'E_Pers_Ges_Pol_1920': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1920': 'TextEdit', 'Eigentümer_Wohnsitz_1920': 'TextEdit', 'Eigentümer_Distanz_1920': 'TextEdit', 'Kommentar_Unklarheit_1920': 'TextEdit', 'Quelle_1920': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_11.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_JAHR': 'TextEdit', 'Bewohner_1925': 'TextEdit', 'Berufe_1925': 'TextEdit', 'Haushalte_Anzahl_1925': 'Range', 'Eigentümer_1925': 'TextEdit', 'E_Pers_Ges_Pol_1925': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1925': 'TextEdit', 'Eigentümer_Wohnsitz_1925': 'TextEdit', 'Eigentümer_Distanz_1925': 'TextEdit', 'Kommentar_Unklarheit_1925': 'TextEdit', 'Quelle_1925': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_12.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_JAHR': 'TextEdit', 'Bewohner_1925': 'TextEdit', 'Berufe_1925': 'TextEdit', 'Haushalte_Anzahl_1925': 'Range', 'Eigentümer_1925': 'TextEdit', 'E_Pers_Ges_Pol_1925': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1925': 'TextEdit', 'Eigentümer_Wohnsitz_1925': 'TextEdit', 'Eigentümer_Distanz_1925': 'TextEdit', 'Kommentar_Unklarheit_1925': 'TextEdit', 'Quelle_1925': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Eigentmerinunbekannt_13.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_JAHR': 'TextEdit', 'Bewohner_1925': 'TextEdit', 'Berufe_1925': 'TextEdit', 'Haushalte_Anzahl_1925': 'Range', 'Eigentümer_1925': 'TextEdit', 'E_Pers_Ges_Pol_1925': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1925': 'TextEdit', 'Eigentümer_Wohnsitz_1925': 'TextEdit', 'Eigentümer_Distanz_1925': 'TextEdit', 'Kommentar_Unklarheit_1925': 'TextEdit', 'Quelle_1925': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_14.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_JAHR': 'TextEdit', 'Bewohner_1925': 'TextEdit', 'Berufe_1925': 'TextEdit', 'Haushalte_Anzahl_1925': 'Range', 'Eigentümer_1925': 'TextEdit', 'E_Pers_Ges_Pol_1925': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1925': 'TextEdit', 'Eigentümer_Wohnsitz_1925': 'TextEdit', 'Eigentümer_Distanz_1925': 'TextEdit', 'Kommentar_Unklarheit_1925': 'TextEdit', 'Quelle_1925': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_15.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1935': 'TextEdit', 'Bewohner_1935': 'TextEdit', 'Berufe_1935': 'TextEdit', 'Haushalte_Anzahl_1935': 'Range', 'Eigentümer_1935': 'TextEdit', 'E_Pers_Ges_Pol_1935': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1935': 'TextEdit', 'Eigentümer_Wohnsitz_1935': 'TextEdit', 'Eigentümer_Distanz_1935': 'TextEdit', 'Kommentar_Unklarheit_1935': 'TextEdit', 'Quelle_1935': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_16.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1935': 'TextEdit', 'Bewohner_1935': 'TextEdit', 'Berufe_1935': 'TextEdit', 'Haushalte_Anzahl_1935': 'Range', 'Eigentümer_1935': 'TextEdit', 'E_Pers_Ges_Pol_1935': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1935': 'TextEdit', 'Eigentümer_Wohnsitz_1935': 'TextEdit', 'Eigentümer_Distanz_1935': 'TextEdit', 'Kommentar_Unklarheit_1935': 'TextEdit', 'Quelle_1935': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Eigentmerinunbekannt_17.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1935': 'TextEdit', 'Bewohner_1935': 'TextEdit', 'Berufe_1935': 'TextEdit', 'Haushalte_Anzahl_1935': 'Range', 'Eigentümer_1935': 'TextEdit', 'E_Pers_Ges_Pol_1935': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1935': 'TextEdit', 'Eigentümer_Wohnsitz_1935': 'TextEdit', 'Eigentümer_Distanz_1935': 'TextEdit', 'Kommentar_Unklarheit_1935': 'TextEdit', 'Quelle_1935': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Gesellschaften_18.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1935': 'TextEdit', 'Bewohner_1935': 'TextEdit', 'Berufe_1935': 'TextEdit', 'Haushalte_Anzahl_1935': 'Range', 'Eigentümer_1935': 'TextEdit', 'E_Pers_Ges_Pol_1935': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1935': 'TextEdit', 'Eigentümer_Wohnsitz_1935': 'TextEdit', 'Eigentümer_Distanz_1935': 'TextEdit', 'Kommentar_Unklarheit_1935': 'TextEdit', 'Quelle_1935': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_19.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1935': 'TextEdit', 'Bewohner_1935': 'TextEdit', 'Berufe_1935': 'TextEdit', 'Haushalte_Anzahl_1935': 'Range', 'Eigentümer_1935': 'TextEdit', 'E_Pers_Ges_Pol_1935': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1935': 'TextEdit', 'Eigentümer_Wohnsitz_1935': 'TextEdit', 'Eigentümer_Distanz_1935': 'TextEdit', 'Kommentar_Unklarheit_1935': 'TextEdit', 'Quelle_1935': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_20.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1939': 'TextEdit', 'Bewohner_1939': 'TextEdit', 'Berufe_1939': 'TextEdit', 'Haushalte_Anzahl_1939': 'Range', 'Eigentümer_1939': 'TextEdit', 'E_Pers_Ges_Pol_1939': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1939': 'TextEdit', 'Eigentümer_Wohnsitz_1939': 'TextEdit', 'Eigentümer_Distanz_1939': 'TextEdit', 'Kommentar_Unklarheit_1939': 'TextEdit', 'Quelle_1939': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_21.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1939': 'TextEdit', 'Bewohner_1939': 'TextEdit', 'Berufe_1939': 'TextEdit', 'Haushalte_Anzahl_1939': 'Range', 'Eigentümer_1939': 'TextEdit', 'E_Pers_Ges_Pol_1939': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1939': 'TextEdit', 'Eigentümer_Wohnsitz_1939': 'TextEdit', 'Eigentümer_Distanz_1939': 'TextEdit', 'Kommentar_Unklarheit_1939': 'TextEdit', 'Quelle_1939': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Eigentmerinunbekannt_22.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1939': 'TextEdit', 'Bewohner_1939': 'TextEdit', 'Berufe_1939': 'TextEdit', 'Haushalte_Anzahl_1939': 'Range', 'Eigentümer_1939': 'TextEdit', 'E_Pers_Ges_Pol_1939': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1939': 'TextEdit', 'Eigentümer_Wohnsitz_1939': 'TextEdit', 'Eigentümer_Distanz_1939': 'TextEdit', 'Kommentar_Unklarheit_1939': 'TextEdit', 'Quelle_1939': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Gesellschaften_23.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1939': 'TextEdit', 'Bewohner_1939': 'TextEdit', 'Berufe_1939': 'TextEdit', 'Haushalte_Anzahl_1939': 'Range', 'Eigentümer_1939': 'TextEdit', 'E_Pers_Ges_Pol_1939': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1939': 'TextEdit', 'Eigentümer_Wohnsitz_1939': 'TextEdit', 'Eigentümer_Distanz_1939': 'TextEdit', 'Kommentar_Unklarheit_1939': 'TextEdit', 'Quelle_1939': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_24.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1939': 'TextEdit', 'Bewohner_1939': 'TextEdit', 'Berufe_1939': 'TextEdit', 'Haushalte_Anzahl_1939': 'Range', 'Eigentümer_1939': 'TextEdit', 'E_Pers_Ges_Pol_1939': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1939': 'TextEdit', 'Eigentümer_Wohnsitz_1939': 'TextEdit', 'Eigentümer_Distanz_1939': 'TextEdit', 'Kommentar_Unklarheit_1939': 'TextEdit', 'Quelle_1939': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_25.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1951': 'TextEdit', 'Bewohner_1951': 'TextEdit', 'Berufe_1951': 'TextEdit', 'Haushalte_Anzahl_1951': 'Range', 'Eigentümer_1951': 'TextEdit', 'E_Pers_Ges_Pol_1951': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1951': 'TextEdit', 'Eigentümer_Wohnsitz_1951': 'TextEdit', 'Eigentümer_Distanz_1951': 'TextEdit', 'Kommentar_Unklarheit_1951': 'TextEdit', 'Quelle_1951': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_26.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1951': 'TextEdit', 'Bewohner_1951': 'TextEdit', 'Berufe_1951': 'TextEdit', 'Haushalte_Anzahl_1951': 'Range', 'Eigentümer_1951': 'TextEdit', 'E_Pers_Ges_Pol_1951': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1951': 'TextEdit', 'Eigentümer_Wohnsitz_1951': 'TextEdit', 'Eigentümer_Distanz_1951': 'TextEdit', 'Kommentar_Unklarheit_1951': 'TextEdit', 'Quelle_1951': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Eigentmerinunbekannt_27.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1951': 'TextEdit', 'Bewohner_1951': 'TextEdit', 'Berufe_1951': 'TextEdit', 'Haushalte_Anzahl_1951': 'Range', 'Eigentümer_1951': 'TextEdit', 'E_Pers_Ges_Pol_1951': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1951': 'TextEdit', 'Eigentümer_Wohnsitz_1951': 'TextEdit', 'Eigentümer_Distanz_1951': 'TextEdit', 'Kommentar_Unklarheit_1951': 'TextEdit', 'Quelle_1951': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_28.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1951': 'TextEdit', 'Bewohner_1951': 'TextEdit', 'Berufe_1951': 'TextEdit', 'Haushalte_Anzahl_1951': 'Range', 'Eigentümer_1951': 'TextEdit', 'E_Pers_Ges_Pol_1951': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1951': 'TextEdit', 'Eigentümer_Wohnsitz_1951': 'TextEdit', 'Eigentümer_Distanz_1951': 'TextEdit', 'Kommentar_Unklarheit_1951': 'TextEdit', 'Quelle_1951': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_29.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1960': 'TextEdit', 'Bewohner_1960': 'TextEdit', 'Berufe_1960': 'TextEdit', 'Haushalte_Anzahl_1960': 'Range', 'Eigentümer_1960': 'TextEdit', 'E_Pers_Ges_Pol_1960': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1960': 'TextEdit', 'Eigentümer_Wohnsitz_1960': 'TextEdit', 'Eigentümer_Distanz_1960': 'TextEdit', 'Kommentar_Unklarheit_1960': 'TextEdit', 'Quelle_1960': 'TextEdit', 'field_18': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_30.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1960': 'TextEdit', 'Bewohner_1960': 'TextEdit', 'Berufe_1960': 'TextEdit', 'Haushalte_Anzahl_1960': 'Range', 'Eigentümer_1960': 'TextEdit', 'E_Pers_Ges_Pol_1960': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1960': 'TextEdit', 'Eigentümer_Wohnsitz_1960': 'TextEdit', 'Eigentümer_Distanz_1960': 'TextEdit', 'Kommentar_Unklarheit_1960': 'TextEdit', 'Quelle_1960': 'TextEdit', 'field_18': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_PolitischeEntitten_31.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1960': 'TextEdit', 'Bewohner_1960': 'TextEdit', 'Berufe_1960': 'TextEdit', 'Haushalte_Anzahl_1960': 'Range', 'Eigentümer_1960': 'TextEdit', 'E_Pers_Ges_Pol_1960': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1960': 'TextEdit', 'Eigentümer_Wohnsitz_1960': 'TextEdit', 'Eigentümer_Distanz_1960': 'TextEdit', 'Kommentar_Unklarheit_1960': 'TextEdit', 'Quelle_1960': 'TextEdit', 'field_18': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Gesellschaften_32.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1960': 'TextEdit', 'Bewohner_1960': 'TextEdit', 'Berufe_1960': 'TextEdit', 'Haushalte_Anzahl_1960': 'Range', 'Eigentümer_1960': 'TextEdit', 'E_Pers_Ges_Pol_1960': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1960': 'TextEdit', 'Eigentümer_Wohnsitz_1960': 'TextEdit', 'Eigentümer_Distanz_1960': 'TextEdit', 'Kommentar_Unklarheit_1960': 'TextEdit', 'Quelle_1960': 'TextEdit', 'field_18': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_33.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1960': 'TextEdit', 'Bewohner_1960': 'TextEdit', 'Berufe_1960': 'TextEdit', 'Haushalte_Anzahl_1960': 'Range', 'Eigentümer_1960': 'TextEdit', 'E_Pers_Ges_Pol_1960': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1960': 'TextEdit', 'Eigentümer_Wohnsitz_1960': 'TextEdit', 'Eigentümer_Distanz_1960': 'TextEdit', 'Kommentar_Unklarheit_1960': 'TextEdit', 'Quelle_1960': 'TextEdit', 'field_18': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Verbindungslinien_34.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_zugeordnetesEigentum_35.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Eigentmerinunbekannt_36.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_PolitischeEntitten_37.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Gesellschaften_38.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_Personen_39.set('fieldImages', {'fid': 'TextEdit', 'Objekt_ID': 'TextEdit', 'Eigentümer_ID': 'TextEdit', 'Adresse_alt': 'TextEdit', 'Adresse_neu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Eintrag_1973': 'TextEdit', 'Bewohner_1973': 'TextEdit', 'Berufe_1973': 'TextEdit', 'Haushalte_Anzahl_1973': 'Range', 'Eigentümer_1973': 'TextEdit', 'E_Pers_Ges_Pol_1973': 'TextEdit', 'E_Wechsel_vorher_Ujahr_1973': 'TextEdit', 'Eigentümer_Wohnsitz_1973': 'TextEdit', 'Eigentümer_Distanz_1973': 'TextEdit', 'Kommentar_Unklarheit_1973': 'TextEdit', 'Quelle_1973': 'TextEdit', 'Eigentümer_ID_2': 'TextEdit', 'lat_2': 'TextEdit', 'long_2': 'TextEdit', });
lyr_LegendePunktanklicken_40.set('fieldImages', {'id': 'TextEdit', 'Bildpfad': 'ExternalResource', 'Name': 'TextEdit', });
lyr_Verbindungen_8.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1920': 'no label', 'Bewohner_1920': 'no label', 'Berufe_1920': 'no label', 'Haushalte_Anzahl_1920': 'no label', 'Eigentümer_1920': 'no label', 'E_Pers_Ges_Pol_1920': 'no label', 'E_Wechsel_vorher_Ujahr_1920': 'no label', 'Eigentümer_Wohnsitz_1920': 'no label', 'Eigentümer_Distanz_1920': 'no label', 'Kommentar_Unklarheit_1920': 'no label', 'Quelle_1920': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_9.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1920': 'inline label - visible with data', 'Bewohner_1920': 'hidden field', 'Berufe_1920': 'hidden field', 'Haushalte_Anzahl_1920': 'hidden field', 'Eigentümer_1920': 'inline label - visible with data', 'E_Pers_Ges_Pol_1920': 'hidden field', 'E_Wechsel_vorher_Ujahr_1920': 'hidden field', 'Eigentümer_Wohnsitz_1920': 'hidden field', 'Eigentümer_Distanz_1920': 'hidden field', 'Kommentar_Unklarheit_1920': 'hidden field', 'Quelle_1920': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_10.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1920': 'inline label - visible with data', 'Bewohner_1920': 'hidden field', 'Berufe_1920': 'hidden field', 'Haushalte_Anzahl_1920': 'hidden field', 'Eigentümer_1920': 'inline label - visible with data', 'E_Pers_Ges_Pol_1920': 'hidden field', 'E_Wechsel_vorher_Ujahr_1920': 'hidden field', 'Eigentümer_Wohnsitz_1920': 'hidden field', 'Eigentümer_Distanz_1920': 'hidden field', 'Kommentar_Unklarheit_1920': 'hidden field', 'Quelle_1920': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_11.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_JAHR': 'no label', 'Bewohner_1925': 'no label', 'Berufe_1925': 'no label', 'Haushalte_Anzahl_1925': 'no label', 'Eigentümer_1925': 'no label', 'E_Pers_Ges_Pol_1925': 'no label', 'E_Wechsel_vorher_Ujahr_1925': 'no label', 'Eigentümer_Wohnsitz_1925': 'no label', 'Eigentümer_Distanz_1925': 'no label', 'Kommentar_Unklarheit_1925': 'no label', 'Quelle_1925': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_12.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_JAHR': 'inline label - visible with data', 'Bewohner_1925': 'hidden field', 'Berufe_1925': 'hidden field', 'Haushalte_Anzahl_1925': 'hidden field', 'Eigentümer_1925': 'inline label - visible with data', 'E_Pers_Ges_Pol_1925': 'hidden field', 'E_Wechsel_vorher_Ujahr_1925': 'hidden field', 'Eigentümer_Wohnsitz_1925': 'hidden field', 'Eigentümer_Distanz_1925': 'hidden field', 'Kommentar_Unklarheit_1925': 'hidden field', 'Quelle_1925': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Eigentmerinunbekannt_13.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_JAHR': 'inline label - visible with data', 'Bewohner_1925': 'hidden field', 'Berufe_1925': 'hidden field', 'Haushalte_Anzahl_1925': 'hidden field', 'Eigentümer_1925': 'inline label - visible with data', 'E_Pers_Ges_Pol_1925': 'hidden field', 'E_Wechsel_vorher_Ujahr_1925': 'hidden field', 'Eigentümer_Wohnsitz_1925': 'hidden field', 'Eigentümer_Distanz_1925': 'hidden field', 'Kommentar_Unklarheit_1925': 'hidden field', 'Quelle_1925': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_14.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_JAHR': 'inline label - visible with data', 'Bewohner_1925': 'hidden field', 'Berufe_1925': 'hidden field', 'Haushalte_Anzahl_1925': 'hidden field', 'Eigentümer_1925': 'inline label - visible with data', 'E_Pers_Ges_Pol_1925': 'hidden field', 'E_Wechsel_vorher_Ujahr_1925': 'hidden field', 'Eigentümer_Wohnsitz_1925': 'hidden field', 'Eigentümer_Distanz_1925': 'hidden field', 'Kommentar_Unklarheit_1925': 'hidden field', 'Quelle_1925': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_15.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1935': 'no label', 'Bewohner_1935': 'no label', 'Berufe_1935': 'no label', 'Haushalte_Anzahl_1935': 'no label', 'Eigentümer_1935': 'no label', 'E_Pers_Ges_Pol_1935': 'no label', 'E_Wechsel_vorher_Ujahr_1935': 'no label', 'Eigentümer_Wohnsitz_1935': 'no label', 'Eigentümer_Distanz_1935': 'no label', 'Kommentar_Unklarheit_1935': 'no label', 'Quelle_1935': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_16.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1935': 'inline label - visible with data', 'Bewohner_1935': 'hidden field', 'Berufe_1935': 'hidden field', 'Haushalte_Anzahl_1935': 'hidden field', 'Eigentümer_1935': 'inline label - visible with data', 'E_Pers_Ges_Pol_1935': 'hidden field', 'E_Wechsel_vorher_Ujahr_1935': 'hidden field', 'Eigentümer_Wohnsitz_1935': 'hidden field', 'Eigentümer_Distanz_1935': 'hidden field', 'Kommentar_Unklarheit_1935': 'hidden field', 'Quelle_1935': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Eigentmerinunbekannt_17.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1935': 'inline label - visible with data', 'Bewohner_1935': 'hidden field', 'Berufe_1935': 'hidden field', 'Haushalte_Anzahl_1935': 'hidden field', 'Eigentümer_1935': 'inline label - visible with data', 'E_Pers_Ges_Pol_1935': 'hidden field', 'E_Wechsel_vorher_Ujahr_1935': 'hidden field', 'Eigentümer_Wohnsitz_1935': 'hidden field', 'Eigentümer_Distanz_1935': 'hidden field', 'Kommentar_Unklarheit_1935': 'hidden field', 'Quelle_1935': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Gesellschaften_18.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1935': 'inline label - visible with data', 'Bewohner_1935': 'hidden field', 'Berufe_1935': 'hidden field', 'Haushalte_Anzahl_1935': 'hidden field', 'Eigentümer_1935': 'inline label - visible with data', 'E_Pers_Ges_Pol_1935': 'hidden field', 'E_Wechsel_vorher_Ujahr_1935': 'hidden field', 'Eigentümer_Wohnsitz_1935': 'hidden field', 'Eigentümer_Distanz_1935': 'hidden field', 'Kommentar_Unklarheit_1935': 'hidden field', 'Quelle_1935': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_19.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1935': 'inline label - visible with data', 'Bewohner_1935': 'hidden field', 'Berufe_1935': 'hidden field', 'Haushalte_Anzahl_1935': 'hidden field', 'Eigentümer_1935': 'inline label - visible with data', 'E_Pers_Ges_Pol_1935': 'hidden field', 'E_Wechsel_vorher_Ujahr_1935': 'hidden field', 'Eigentümer_Wohnsitz_1935': 'hidden field', 'Eigentümer_Distanz_1935': 'hidden field', 'Kommentar_Unklarheit_1935': 'hidden field', 'Quelle_1935': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_20.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1939': 'no label', 'Bewohner_1939': 'no label', 'Berufe_1939': 'no label', 'Haushalte_Anzahl_1939': 'no label', 'Eigentümer_1939': 'no label', 'E_Pers_Ges_Pol_1939': 'no label', 'E_Wechsel_vorher_Ujahr_1939': 'no label', 'Eigentümer_Wohnsitz_1939': 'no label', 'Eigentümer_Distanz_1939': 'no label', 'Kommentar_Unklarheit_1939': 'no label', 'Quelle_1939': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_21.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1939': 'inline label - visible with data', 'Bewohner_1939': 'hidden field', 'Berufe_1939': 'hidden field', 'Haushalte_Anzahl_1939': 'hidden field', 'Eigentümer_1939': 'inline label - visible with data', 'E_Pers_Ges_Pol_1939': 'hidden field', 'E_Wechsel_vorher_Ujahr_1939': 'hidden field', 'Eigentümer_Wohnsitz_1939': 'hidden field', 'Eigentümer_Distanz_1939': 'hidden field', 'Kommentar_Unklarheit_1939': 'hidden field', 'Quelle_1939': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Eigentmerinunbekannt_22.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1939': 'inline label - visible with data', 'Bewohner_1939': 'hidden field', 'Berufe_1939': 'hidden field', 'Haushalte_Anzahl_1939': 'hidden field', 'Eigentümer_1939': 'inline label - visible with data', 'E_Pers_Ges_Pol_1939': 'hidden field', 'E_Wechsel_vorher_Ujahr_1939': 'hidden field', 'Eigentümer_Wohnsitz_1939': 'hidden field', 'Eigentümer_Distanz_1939': 'hidden field', 'Kommentar_Unklarheit_1939': 'hidden field', 'Quelle_1939': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Gesellschaften_23.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1939': 'inline label - visible with data', 'Bewohner_1939': 'hidden field', 'Berufe_1939': 'hidden field', 'Haushalte_Anzahl_1939': 'hidden field', 'Eigentümer_1939': 'inline label - visible with data', 'E_Pers_Ges_Pol_1939': 'hidden field', 'E_Wechsel_vorher_Ujahr_1939': 'hidden field', 'Eigentümer_Wohnsitz_1939': 'hidden field', 'Eigentümer_Distanz_1939': 'hidden field', 'Kommentar_Unklarheit_1939': 'hidden field', 'Quelle_1939': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_24.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1939': 'inline label - visible with data', 'Bewohner_1939': 'hidden field', 'Berufe_1939': 'hidden field', 'Haushalte_Anzahl_1939': 'hidden field', 'Eigentümer_1939': 'inline label - visible with data', 'E_Pers_Ges_Pol_1939': 'hidden field', 'E_Wechsel_vorher_Ujahr_1939': 'hidden field', 'Eigentümer_Wohnsitz_1939': 'hidden field', 'Eigentümer_Distanz_1939': 'hidden field', 'Kommentar_Unklarheit_1939': 'hidden field', 'Quelle_1939': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_25.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1951': 'no label', 'Bewohner_1951': 'no label', 'Berufe_1951': 'no label', 'Haushalte_Anzahl_1951': 'no label', 'Eigentümer_1951': 'no label', 'E_Pers_Ges_Pol_1951': 'no label', 'E_Wechsel_vorher_Ujahr_1951': 'no label', 'Eigentümer_Wohnsitz_1951': 'no label', 'Eigentümer_Distanz_1951': 'no label', 'Kommentar_Unklarheit_1951': 'no label', 'Quelle_1951': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_26.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1951': 'inline label - visible with data', 'Bewohner_1951': 'hidden field', 'Berufe_1951': 'hidden field', 'Haushalte_Anzahl_1951': 'hidden field', 'Eigentümer_1951': 'inline label - visible with data', 'E_Pers_Ges_Pol_1951': 'hidden field', 'E_Wechsel_vorher_Ujahr_1951': 'hidden field', 'Eigentümer_Wohnsitz_1951': 'hidden field', 'Eigentümer_Distanz_1951': 'hidden field', 'Kommentar_Unklarheit_1951': 'hidden field', 'Quelle_1951': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Eigentmerinunbekannt_27.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1951': 'inline label - visible with data', 'Bewohner_1951': 'hidden field', 'Berufe_1951': 'hidden field', 'Haushalte_Anzahl_1951': 'hidden field', 'Eigentümer_1951': 'inline label - visible with data', 'E_Pers_Ges_Pol_1951': 'hidden field', 'E_Wechsel_vorher_Ujahr_1951': 'hidden field', 'Eigentümer_Wohnsitz_1951': 'hidden field', 'Eigentümer_Distanz_1951': 'hidden field', 'Kommentar_Unklarheit_1951': 'hidden field', 'Quelle_1951': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_28.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1951': 'inline label - visible with data', 'Bewohner_1951': 'hidden field', 'Berufe_1951': 'hidden field', 'Haushalte_Anzahl_1951': 'hidden field', 'Eigentümer_1951': 'inline label - visible with data', 'E_Pers_Ges_Pol_1951': 'hidden field', 'E_Wechsel_vorher_Ujahr_1951': 'hidden field', 'Eigentümer_Wohnsitz_1951': 'hidden field', 'Eigentümer_Distanz_1951': 'hidden field', 'Kommentar_Unklarheit_1951': 'hidden field', 'Quelle_1951': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_29.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1960': 'no label', 'Bewohner_1960': 'no label', 'Berufe_1960': 'no label', 'Haushalte_Anzahl_1960': 'no label', 'Eigentümer_1960': 'no label', 'E_Pers_Ges_Pol_1960': 'no label', 'E_Wechsel_vorher_Ujahr_1960': 'no label', 'Eigentümer_Wohnsitz_1960': 'no label', 'Eigentümer_Distanz_1960': 'no label', 'Kommentar_Unklarheit_1960': 'no label', 'Quelle_1960': 'no label', 'field_18': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_30.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1960': 'inline label - visible with data', 'Bewohner_1960': 'hidden field', 'Berufe_1960': 'hidden field', 'Haushalte_Anzahl_1960': 'hidden field', 'Eigentümer_1960': 'inline label - visible with data', 'E_Pers_Ges_Pol_1960': 'hidden field', 'E_Wechsel_vorher_Ujahr_1960': 'hidden field', 'Eigentümer_Wohnsitz_1960': 'hidden field', 'Eigentümer_Distanz_1960': 'hidden field', 'Kommentar_Unklarheit_1960': 'hidden field', 'Quelle_1960': 'hidden field', 'field_18': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_PolitischeEntitten_31.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1960': 'inline label - visible with data', 'Bewohner_1960': 'hidden field', 'Berufe_1960': 'hidden field', 'Haushalte_Anzahl_1960': 'hidden field', 'Eigentümer_1960': 'inline label - visible with data', 'E_Pers_Ges_Pol_1960': 'hidden field', 'E_Wechsel_vorher_Ujahr_1960': 'hidden field', 'Eigentümer_Wohnsitz_1960': 'hidden field', 'Eigentümer_Distanz_1960': 'hidden field', 'Kommentar_Unklarheit_1960': 'hidden field', 'Quelle_1960': 'hidden field', 'field_18': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Gesellschaften_32.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1960': 'inline label - visible with data', 'Bewohner_1960': 'hidden field', 'Berufe_1960': 'hidden field', 'Haushalte_Anzahl_1960': 'hidden field', 'Eigentümer_1960': 'inline label - visible with data', 'E_Pers_Ges_Pol_1960': 'hidden field', 'E_Wechsel_vorher_Ujahr_1960': 'hidden field', 'Eigentümer_Wohnsitz_1960': 'hidden field', 'Eigentümer_Distanz_1960': 'hidden field', 'Kommentar_Unklarheit_1960': 'hidden field', 'Quelle_1960': 'hidden field', 'field_18': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_33.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1960': 'inline label - visible with data', 'Bewohner_1960': 'hidden field', 'Berufe_1960': 'hidden field', 'Haushalte_Anzahl_1960': 'hidden field', 'Eigentümer_1960': 'inline label - visible with data', 'E_Pers_Ges_Pol_1960': 'hidden field', 'E_Wechsel_vorher_Ujahr_1960': 'hidden field', 'Eigentümer_Wohnsitz_1960': 'hidden field', 'Eigentümer_Distanz_1960': 'hidden field', 'Kommentar_Unklarheit_1960': 'hidden field', 'Quelle_1960': 'hidden field', 'field_18': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Verbindungslinien_34.set('fieldLabels', {'fid': 'no label', 'Objekt_ID': 'no label', 'Eigentümer_ID': 'no label', 'Adresse_alt': 'no label', 'Adresse_neu': 'no label', 'lat': 'no label', 'long': 'no label', 'Eintrag_1973': 'no label', 'Bewohner_1973': 'no label', 'Berufe_1973': 'no label', 'Haushalte_Anzahl_1973': 'no label', 'Eigentümer_1973': 'no label', 'E_Pers_Ges_Pol_1973': 'no label', 'E_Wechsel_vorher_Ujahr_1973': 'no label', 'Eigentümer_Wohnsitz_1973': 'no label', 'Eigentümer_Distanz_1973': 'no label', 'Kommentar_Unklarheit_1973': 'no label', 'Quelle_1973': 'no label', 'Eigentümer_ID_2': 'no label', 'lat_2': 'no label', 'long_2': 'no label', });
lyr_zugeordnetesEigentum_35.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1973': 'inline label - visible with data', 'Bewohner_1973': 'hidden field', 'Berufe_1973': 'hidden field', 'Haushalte_Anzahl_1973': 'hidden field', 'Eigentümer_1973': 'inline label - visible with data', 'E_Pers_Ges_Pol_1973': 'hidden field', 'E_Wechsel_vorher_Ujahr_1973': 'hidden field', 'Eigentümer_Wohnsitz_1973': 'hidden field', 'Eigentümer_Distanz_1973': 'hidden field', 'Kommentar_Unklarheit_1973': 'hidden field', 'Quelle_1973': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Eigentmerinunbekannt_36.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1973': 'inline label - visible with data', 'Bewohner_1973': 'hidden field', 'Berufe_1973': 'hidden field', 'Haushalte_Anzahl_1973': 'hidden field', 'Eigentümer_1973': 'inline label - visible with data', 'E_Pers_Ges_Pol_1973': 'hidden field', 'E_Wechsel_vorher_Ujahr_1973': 'hidden field', 'Eigentümer_Wohnsitz_1973': 'hidden field', 'Eigentümer_Distanz_1973': 'hidden field', 'Kommentar_Unklarheit_1973': 'hidden field', 'Quelle_1973': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_PolitischeEntitten_37.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1973': 'inline label - visible with data', 'Bewohner_1973': 'hidden field', 'Berufe_1973': 'hidden field', 'Haushalte_Anzahl_1973': 'hidden field', 'Eigentümer_1973': 'inline label - visible with data', 'E_Pers_Ges_Pol_1973': 'hidden field', 'E_Wechsel_vorher_Ujahr_1973': 'hidden field', 'Eigentümer_Wohnsitz_1973': 'hidden field', 'Eigentümer_Distanz_1973': 'hidden field', 'Kommentar_Unklarheit_1973': 'hidden field', 'Quelle_1973': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Gesellschaften_38.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1973': 'inline label - visible with data', 'Bewohner_1973': 'hidden field', 'Berufe_1973': 'hidden field', 'Haushalte_Anzahl_1973': 'hidden field', 'Eigentümer_1973': 'inline label - visible with data', 'E_Pers_Ges_Pol_1973': 'hidden field', 'E_Wechsel_vorher_Ujahr_1973': 'hidden field', 'Eigentümer_Wohnsitz_1973': 'hidden field', 'Eigentümer_Distanz_1973': 'hidden field', 'Kommentar_Unklarheit_1973': 'hidden field', 'Quelle_1973': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_Personen_39.set('fieldLabels', {'fid': 'hidden field', 'Objekt_ID': 'hidden field', 'Eigentümer_ID': 'hidden field', 'Adresse_alt': 'inline label - visible with data', 'Adresse_neu': 'inline label - visible with data', 'lat': 'hidden field', 'long': 'hidden field', 'Eintrag_1973': 'inline label - visible with data', 'Bewohner_1973': 'hidden field', 'Berufe_1973': 'hidden field', 'Haushalte_Anzahl_1973': 'hidden field', 'Eigentümer_1973': 'inline label - visible with data', 'E_Pers_Ges_Pol_1973': 'hidden field', 'E_Wechsel_vorher_Ujahr_1973': 'hidden field', 'Eigentümer_Wohnsitz_1973': 'hidden field', 'Eigentümer_Distanz_1973': 'hidden field', 'Kommentar_Unklarheit_1973': 'hidden field', 'Quelle_1973': 'hidden field', 'Eigentümer_ID_2': 'hidden field', 'lat_2': 'hidden field', 'long_2': 'hidden field', });
lyr_LegendePunktanklicken_40.set('fieldLabels', {'id': 'hidden field', 'Bildpfad': 'no label', 'Name': 'hidden field', });
lyr_LegendePunktanklicken_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});