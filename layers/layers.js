var wms_layers = [];

var format_MUNCIPALITYBOUNDARY_0 = new ol.format.GeoJSON();
var features_MUNCIPALITYBOUNDARY_0 = format_MUNCIPALITYBOUNDARY_0.readFeatures(json_MUNCIPALITYBOUNDARY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNCIPALITYBOUNDARY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNCIPALITYBOUNDARY_0.addFeatures(features_MUNCIPALITYBOUNDARY_0);
var lyr_MUNCIPALITYBOUNDARY_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNCIPALITYBOUNDARY_0, 
                style: style_MUNCIPALITYBOUNDARY_0,
                popuplayertitle: 'MUNCIPALITY BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/MUNCIPALITYBOUNDARY_0.png" /> MUNCIPALITY BOUNDARY'
            });
var format_SOIL_1 = new ol.format.GeoJSON();
var features_SOIL_1 = format_SOIL_1.readFeatures(json_SOIL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_1.addFeatures(features_SOIL_1);
var lyr_SOIL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_1, 
                style: style_SOIL_1,
                popuplayertitle: 'SOIL',
                interactive: true,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_1_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOIL_1_1.png" /> Hill Soil<br />\
    <img src="styles/legend/SOIL_1_2.png" /> <br />' });
var format_GEOLOGY_2 = new ol.format.GeoJSON();
var features_GEOLOGY_2 = format_GEOLOGY_2.readFeatures(json_GEOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_2.addFeatures(features_GEOLOGY_2);
var lyr_GEOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_2, 
                style: style_GEOLOGY_2,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_2_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_2_1.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_2_2.png" /> Metabasic and Ultra basic rocks<br />\
    <img src="styles/legend/GEOLOGY_2_3.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/GEOLOGY_2_4.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_2_5.png" /> <br />' });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Denudational Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Valley<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_5.png" /> <br />' });
var format_BUILTUP_4 = new ol.format.GeoJSON();
var features_BUILTUP_4 = format_BUILTUP_4.readFeatures(json_BUILTUP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILTUP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILTUP_4.addFeatures(features_BUILTUP_4);
var lyr_BUILTUP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILTUP_4, 
                style: style_BUILTUP_4,
                popuplayertitle: 'BUILT UP',
                interactive: true,
                title: '<img src="styles/legend/BUILTUP_4.png" /> BUILT UP'
            });
var lyr_TOPOSHEET_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPOSHEET<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPOSHEET_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484021.710992, 1304265.980958, 8494174.806961, 1323999.895792]
        })
    });
var lyr_SLOPE_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_6_0.png" /> 0.0000<br />\
    <img src="styles/legend/SLOPE_6_1.png" /> 5.3307<br />\
    <img src="styles/legend/SLOPE_6_2.png" /> 10.6614<br />\
    <img src="styles/legend/SLOPE_6_3.png" /> 15.9921<br />\
    <img src="styles/legend/SLOPE_6_4.png" /> 21.3228<br />\
    <img src="styles/legend/SLOPE_6_5.png" /> 26.6536<br />\
    <img src="styles/legend/SLOPE_6_6.png" /> 31.9843<br />\
    <img src="styles/legend/SLOPE_6_7.png" /> 36.9049<br />\
    <img src="styles/legend/SLOPE_6_8.png" /> 41.0055<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8483960.953082, 1304262.699322, 8494153.925223, 1323995.936844]
        })
    });
var lyr_HILLSHADE_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILL SHADE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484044.919369, 1304307.375771, 8494063.673540, 1323950.605110]
        })
    });
var lyr_ELEVATIONZONATION_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ELEVATION ZONATION<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_0.png" /> <= 784<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_1.png" /> 784 - 828<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_2.png" /> 828 - 873<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_3.png" /> 873 - 918<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_4.png" /> 918 - 963<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_5.png" /> 963 - 1007<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_6.png" /> 1007 - 1049<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_7.png" /> 1049 - 1083<br />\
    <img src="styles/legend/ELEVATIONZONATION_8_8.png" /> > 1083<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ELEVATIONZONATION_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484044.919369, 1304307.375771, 8494063.673540, 1323950.605110]
        })
    });
var format_WARDBOUNDARY_9 = new ol.format.GeoJSON();
var features_WARDBOUNDARY_9 = format_WARDBOUNDARY_9.readFeatures(json_WARDBOUNDARY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDBOUNDARY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDBOUNDARY_9.addFeatures(features_WARDBOUNDARY_9);
var lyr_WARDBOUNDARY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDBOUNDARY_9, 
                style: style_WARDBOUNDARY_9,
                popuplayertitle: 'WARD BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/WARDBOUNDARY_9.png" /> WARD BOUNDARY'
            });
var format_DRAINAGE_10 = new ol.format.GeoJSON();
var features_DRAINAGE_10 = format_DRAINAGE_10.readFeatures(json_DRAINAGE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_10.addFeatures(features_DRAINAGE_10);
var lyr_DRAINAGE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_10, 
                style: style_DRAINAGE_10,
                popuplayertitle: 'DRAINAGE',
                interactive: true,
                title: '<img src="styles/legend/DRAINAGE_10.png" /> DRAINAGE'
            });
var format_ROAD_11 = new ol.format.GeoJSON();
var features_ROAD_11 = format_ROAD_11.readFeatures(json_ROAD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_11.addFeatures(features_ROAD_11);
var lyr_ROAD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_11, 
                style: style_ROAD_11,
                popuplayertitle: 'ROAD',
                interactive: true,
                title: '<img src="styles/legend/ROAD_11.png" /> ROAD'
            });
var format_CONTOUR_12 = new ol.format.GeoJSON();
var features_CONTOUR_12 = format_CONTOUR_12.readFeatures(json_CONTOUR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_12.addFeatures(features_CONTOUR_12);
var lyr_CONTOUR_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_12, 
                style: style_CONTOUR_12,
                popuplayertitle: 'CONTOUR',
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_12.png" /> CONTOUR'
            });
var format_OTHERLOCATION_13 = new ol.format.GeoJSON();
var features_OTHERLOCATION_13 = format_OTHERLOCATION_13.readFeatures(json_OTHERLOCATION_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTHERLOCATION_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTHERLOCATION_13.addFeatures(features_OTHERLOCATION_13);
var lyr_OTHERLOCATION_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTHERLOCATION_13, 
                style: style_OTHERLOCATION_13,
                popuplayertitle: 'OTHER LOCATION',
                interactive: true,
                title: '<img src="styles/legend/OTHERLOCATION_13.png" /> OTHER LOCATION'
            });
var format_GOVERNMENTOFFICES_14 = new ol.format.GeoJSON();
var features_GOVERNMENTOFFICES_14 = format_GOVERNMENTOFFICES_14.readFeatures(json_GOVERNMENTOFFICES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOVERNMENTOFFICES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOVERNMENTOFFICES_14.addFeatures(features_GOVERNMENTOFFICES_14);
var lyr_GOVERNMENTOFFICES_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOVERNMENTOFFICES_14, 
                style: style_GOVERNMENTOFFICES_14,
                popuplayertitle: 'GOVERNMENT OFFICES',
                interactive: true,
                title: '<img src="styles/legend/GOVERNMENTOFFICES_14.png" /> GOVERNMENT OFFICES'
            });
var format_AKSHAYACENTRE_15 = new ol.format.GeoJSON();
var features_AKSHAYACENTRE_15 = format_AKSHAYACENTRE_15.readFeatures(json_AKSHAYACENTRE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKSHAYACENTRE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKSHAYACENTRE_15.addFeatures(features_AKSHAYACENTRE_15);
var lyr_AKSHAYACENTRE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AKSHAYACENTRE_15, 
                style: style_AKSHAYACENTRE_15,
                popuplayertitle: 'AKSHAYA CENTRE',
                interactive: true,
                title: '<img src="styles/legend/AKSHAYACENTRE_15.png" /> AKSHAYA CENTRE'
            });
var format_ANGANAWADI_16 = new ol.format.GeoJSON();
var features_ANGANAWADI_16 = format_ANGANAWADI_16.readFeatures(json_ANGANAWADI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANGANAWADI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANGANAWADI_16.addFeatures(features_ANGANAWADI_16);
var lyr_ANGANAWADI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANGANAWADI_16, 
                style: style_ANGANAWADI_16,
                popuplayertitle: 'ANGANAWADI',
                interactive: true,
                title: '<img src="styles/legend/ANGANAWADI_16.png" /> ANGANAWADI'
            });
var format_BANK_17 = new ol.format.GeoJSON();
var features_BANK_17 = format_BANK_17.readFeatures(json_BANK_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_17.addFeatures(features_BANK_17);
var lyr_BANK_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANK_17, 
                style: style_BANK_17,
                popuplayertitle: 'BANK',
                interactive: true,
                title: '<img src="styles/legend/BANK_17.png" /> BANK'
            });
var format_HEALTHCENTRE_18 = new ol.format.GeoJSON();
var features_HEALTHCENTRE_18 = format_HEALTHCENTRE_18.readFeatures(json_HEALTHCENTRE_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEALTHCENTRE_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTHCENTRE_18.addFeatures(features_HEALTHCENTRE_18);
var lyr_HEALTHCENTRE_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HEALTHCENTRE_18, 
                style: style_HEALTHCENTRE_18,
                popuplayertitle: 'HEALTH CENTRE',
                interactive: true,
                title: '<img src="styles/legend/HEALTHCENTRE_18.png" /> HEALTH CENTRE'
            });
var format_JUNCTION_19 = new ol.format.GeoJSON();
var features_JUNCTION_19 = format_JUNCTION_19.readFeatures(json_JUNCTION_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUNCTION_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNCTION_19.addFeatures(features_JUNCTION_19);
var lyr_JUNCTION_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNCTION_19, 
                style: style_JUNCTION_19,
                popuplayertitle: 'JUNCTION',
                interactive: true,
                title: '<img src="styles/legend/JUNCTION_19.png" /> JUNCTION'
            });
var format_MAJORLOCATION_20 = new ol.format.GeoJSON();
var features_MAJORLOCATION_20 = format_MAJORLOCATION_20.readFeatures(json_MAJORLOCATION_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJORLOCATION_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJORLOCATION_20.addFeatures(features_MAJORLOCATION_20);
var lyr_MAJORLOCATION_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAJORLOCATION_20, 
                style: style_MAJORLOCATION_20,
                popuplayertitle: 'MAJOR LOCATION',
                interactive: true,
                title: '<img src="styles/legend/MAJORLOCATION_20.png" /> MAJOR LOCATION'
            });
var format_RATIONSHOP_21 = new ol.format.GeoJSON();
var features_RATIONSHOP_21 = format_RATIONSHOP_21.readFeatures(json_RATIONSHOP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RATIONSHOP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RATIONSHOP_21.addFeatures(features_RATIONSHOP_21);
var lyr_RATIONSHOP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RATIONSHOP_21, 
                style: style_RATIONSHOP_21,
                popuplayertitle: 'RATIONSHOP',
                interactive: true,
                title: '<img src="styles/legend/RATIONSHOP_21.png" /> RATIONSHOP'
            });
var format_SAMSKARIKANILAYAM_22 = new ol.format.GeoJSON();
var features_SAMSKARIKANILAYAM_22 = format_SAMSKARIKANILAYAM_22.readFeatures(json_SAMSKARIKANILAYAM_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAMSKARIKANILAYAM_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAMSKARIKANILAYAM_22.addFeatures(features_SAMSKARIKANILAYAM_22);
var lyr_SAMSKARIKANILAYAM_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAMSKARIKANILAYAM_22, 
                style: style_SAMSKARIKANILAYAM_22,
                popuplayertitle: 'SAMSKARIKANILAYAM',
                interactive: true,
                title: '<img src="styles/legend/SAMSKARIKANILAYAM_22.png" /> SAMSKARIKANILAYAM'
            });
var format_SCHOOL_23 = new ol.format.GeoJSON();
var features_SCHOOL_23 = format_SCHOOL_23.readFeatures(json_SCHOOL_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_23.addFeatures(features_SCHOOL_23);
var lyr_SCHOOL_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCHOOL_23, 
                style: style_SCHOOL_23,
                popuplayertitle: 'SCHOOL',
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_23.png" /> SCHOOL'
            });
var format_WARDNAME_24 = new ol.format.GeoJSON();
var features_WARDNAME_24 = format_WARDNAME_24.readFeatures(json_WARDNAME_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDNAME_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDNAME_24.addFeatures(features_WARDNAME_24);
var lyr_WARDNAME_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDNAME_24, 
                style: style_WARDNAME_24,
                popuplayertitle: 'WARD NAME',
                interactive: true,
    title: 'WARD NAME<br />\
    <img src="styles/legend/WARDNAME_24_0.png" /> ARAM MILE<br />\
    <img src="styles/legend/WARDNAME_24_1.png" /> ARMAD<br />\
    <img src="styles/legend/WARDNAME_24_2.png" /> BEENACHI<br />\
    <img src="styles/legend/WARDNAME_24_3.png" /> C-KUNNU<br />\
    <img src="styles/legend/WARDNAME_24_4.png" /> CHEENAPULLU<br />\
    <img src="styles/legend/WARDNAME_24_5.png" /> CHENAD<br />\
    <img src="styles/legend/WARDNAME_24_6.png" /> CHEROORKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_7.png" /> CHETHALAYAM<br />\
    <img src="styles/legend/WARDNAME_24_8.png" /> DHOTTAPPANKULAM<br />\
    <img src="styles/legend/WARDNAME_24_9.png" /> FAIRLAND<br />\
    <img src="styles/legend/WARDNAME_24_10.png" /> KAIPPANCHERI<br />\
    <img src="styles/legend/WARDNAME_24_11.png" /> KAIVETTAMOOLA<br />\
    <img src="styles/legend/WARDNAME_24_12.png" /> KALLUVAYAL<br />\
    <img src="styles/legend/WARDNAME_24_13.png" /> KARUVALLIKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_14.png" /> KATTAYAD<br />\
    <img src="styles/legend/WARDNAME_24_15.png" /> KIDANGIL<br />\
    <img src="styles/legend/WARDNAME_24_16.png" /> KOTTAKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_17.png" /> KUPPADI<br />\
    <img src="styles/legend/WARDNAME_24_18.png" /> MAITHANIKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_19.png" /> MANICHIRA<br />\
    <img src="styles/legend/WARDNAME_24_20.png" /> MANTHAMKOLLI<br />\
    <img src="styles/legend/WARDNAME_24_21.png" /> MANTHANDIKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_22.png" /> ODAPPALLAM<br />\
    <img src="styles/legend/WARDNAME_24_23.png" /> PALAKKARA<br />\
    <img src="styles/legend/WARDNAME_24_24.png" /> PALLIKANDI<br />\
    <img src="styles/legend/WARDNAME_24_25.png" /> PAZHERY<br />\
    <img src="styles/legend/WARDNAME_24_26.png" /> PAZHUPPATHUR<br />\
    <img src="styles/legend/WARDNAME_24_27.png" /> POOMALA<br />\
    <img src="styles/legend/WARDNAME_24_28.png" /> POOTHIKKADU<br />\
    <img src="styles/legend/WARDNAME_24_29.png" /> SATHRAMKUNNU<br />\
    <img src="styles/legend/WARDNAME_24_30.png" /> SULTHAN BATHERY<br />\
    <img src="styles/legend/WARDNAME_24_31.png" /> THELAMBATTA<br />\
    <img src="styles/legend/WARDNAME_24_32.png" /> THIRUNELLY<br />\
    <img src="styles/legend/WARDNAME_24_33.png" /> THODUVETTY<br />\
    <img src="styles/legend/WARDNAME_24_34.png" /> VENGOOR NORTH<br />\
    <img src="styles/legend/WARDNAME_24_35.png" /> VENGOOR SOUTH<br />\
    <img src="styles/legend/WARDNAME_24_36.png" /> <br />' });

lyr_MUNCIPALITYBOUNDARY_0.setVisible(true);lyr_SOIL_1.setVisible(true);lyr_GEOLOGY_2.setVisible(true);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_BUILTUP_4.setVisible(true);lyr_TOPOSHEET_5.setVisible(true);lyr_SLOPE_6.setVisible(true);lyr_HILLSHADE_7.setVisible(true);lyr_ELEVATIONZONATION_8.setVisible(true);lyr_WARDBOUNDARY_9.setVisible(true);lyr_DRAINAGE_10.setVisible(true);lyr_ROAD_11.setVisible(true);lyr_CONTOUR_12.setVisible(true);lyr_OTHERLOCATION_13.setVisible(true);lyr_GOVERNMENTOFFICES_14.setVisible(true);lyr_AKSHAYACENTRE_15.setVisible(true);lyr_ANGANAWADI_16.setVisible(true);lyr_BANK_17.setVisible(true);lyr_HEALTHCENTRE_18.setVisible(true);lyr_JUNCTION_19.setVisible(true);lyr_MAJORLOCATION_20.setVisible(true);lyr_RATIONSHOP_21.setVisible(true);lyr_SAMSKARIKANILAYAM_22.setVisible(true);lyr_SCHOOL_23.setVisible(true);lyr_WARDNAME_24.setVisible(true);
var layersList = [lyr_MUNCIPALITYBOUNDARY_0,lyr_SOIL_1,lyr_GEOLOGY_2,lyr_GEOMORPHOLOGY_3,lyr_BUILTUP_4,lyr_TOPOSHEET_5,lyr_SLOPE_6,lyr_HILLSHADE_7,lyr_ELEVATIONZONATION_8,lyr_WARDBOUNDARY_9,lyr_DRAINAGE_10,lyr_ROAD_11,lyr_CONTOUR_12,lyr_OTHERLOCATION_13,lyr_GOVERNMENTOFFICES_14,lyr_AKSHAYACENTRE_15,lyr_ANGANAWADI_16,lyr_BANK_17,lyr_HEALTHCENTRE_18,lyr_JUNCTION_19,lyr_MAJORLOCATION_20,lyr_RATIONSHOP_21,lyr_SAMSKARIKANILAYAM_22,lyr_SCHOOL_23,lyr_WARDNAME_24];
lyr_MUNCIPALITYBOUNDARY_0.set('fieldAliases', {'id': 'id', });
lyr_SOIL_1.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOLOGY_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_BUILTUP_4.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_WARDBOUNDARY_9.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_DRAINAGE_10.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_11.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_CONTOUR_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_OTHERLOCATION_13.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_GOVERNMENTOFFICES_14.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_AKSHAYACENTRE_15.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_ANGANAWADI_16.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_BANK_17.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_HEALTHCENTRE_18.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_JUNCTION_19.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_MAJORLOCATION_20.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_RATIONSHOP_21.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_SAMSKARIKANILAYAM_22.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_SCHOOL_23.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_WARDNAME_24.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_MUNCIPALITYBOUNDARY_0.set('fieldImages', {'id': 'TextEdit', });
lyr_SOIL_1.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOLOGY_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_BUILTUP_4.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_WARDBOUNDARY_9.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_DRAINAGE_10.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_11.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_CONTOUR_12.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_OTHERLOCATION_13.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_GOVERNMENTOFFICES_14.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_AKSHAYACENTRE_15.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_ANGANAWADI_16.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_BANK_17.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_HEALTHCENTRE_18.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_JUNCTION_19.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_MAJORLOCATION_20.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_RATIONSHOP_21.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_SAMSKARIKANILAYAM_22.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_SCHOOL_23.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_WARDNAME_24.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_MUNCIPALITYBOUNDARY_0.set('fieldLabels', {'id': 'no label', });
lyr_SOIL_1.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_GEOLOGY_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_BUILTUP_4.set('fieldLabels', {'source': 'inline label - visible with data', 'height': 'no label', });
lyr_WARDBOUNDARY_9.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_DRAINAGE_10.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ROAD_11.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_CONTOUR_12.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_OTHERLOCATION_13.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_GOVERNMENTOFFICES_14.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_AKSHAYACENTRE_15.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_ANGANAWADI_16.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_BANK_17.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_HEALTHCENTRE_18.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_JUNCTION_19.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_MAJORLOCATION_20.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_RATIONSHOP_21.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_SAMSKARIKANILAYAM_22.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_SCHOOL_23.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_WARDNAME_24.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WARDNAME_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});