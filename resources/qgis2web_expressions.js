// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return values[0] ? values[1] : values[2];
}

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_zugeordnetesEigentum_9rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1920 = 'nein' AND Eigentümer_1920 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1920 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1920')  == 'nein') && (feature.get('Eigentümer_1920')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1920')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1920')  == 'nein') && (feature.get('Eigentümer_1920')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1920')  === null));
    }
}


function exp_Personen_10rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1920 = 'ja' AND E_Pers_Ges_Pol_1920 = 'Person' AND E_Wechsel_vorher_Ujahr_1920 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1920')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1920')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1920')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1920')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1920')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1920')  === null));
    }
}


function exp_zugeordnetesEigentum_12rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'nein' AND Eigentümer_1925 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1925 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'nein') && (feature.get('Eigentümer_1925')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'nein') && (feature.get('Eigentümer_1925')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'nein'));
    }
}


function exp_zugeordnetesEigentum_12rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'nein' AND Eigentümer_1925 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1925 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'nein') && (feature.get('Eigentümer_1925')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'nein') && (feature.get('Eigentümer_1925')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  === null));
    }
}


function exp_Eigentmerinunbekannt_13rule0_eval_expression(context) {
    // Eigentümer_1925 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Eigentümer_1925')  == 'unbekannt');
    } else {
        return (feature.get('Eigentümer_1925')  == 'unbekannt');
    }
}


function exp_Personen_14rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'ja' AND E_Pers_Ges_Pol_1925 = 'Person' AND E_Wechsel_vorher_Ujahr_1925 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'ja'));
    }
}


function exp_Personen_14rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'ja' AND E_Pers_Ges_Pol_1925 = 'Person' AND E_Wechsel_vorher_Ujahr_1925 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'nein'));
    }
}


function exp_Personen_14rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'ja' AND E_Pers_Ges_Pol_1925 = 'Person' AND E_Wechsel_vorher_Ujahr_1925 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  == 'neu'));
    }
}


function exp_Personen_14rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1925 = 'ja' AND E_Pers_Ges_Pol_1925 = 'Person' AND E_Wechsel_vorher_Ujahr_1925 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1925')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1925')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1925')  === null));
    }
}


function exp_zugeordnetesEigentum_16rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'nein' AND Eigentümer_1935 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1935 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'ja'));
    }
}


function exp_zugeordnetesEigentum_16rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'nein' AND Eigentümer_1935 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1935 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'nein'));
    }
}


function exp_zugeordnetesEigentum_16rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'nein' AND Eigentümer_1935 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1935 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'neu'));
    }
}


function exp_zugeordnetesEigentum_16rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'nein' AND Eigentümer_1935 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1935 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'nein') && (feature.get('Eigentümer_1935')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    }
}


function exp_Eigentmerinunbekannt_17rule0_eval_expression(context) {
    // Eigentümer_1935 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Eigentümer_1935')  == 'unbekannt');
    } else {
        return (feature.get('Eigentümer_1935')  == 'unbekannt');
    }
}


function exp_Gesellschaften_18rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'ja' AND E_Pers_Ges_Pol_1935 = 'Gesellschaft' AND E_Wechsel_vorher_Ujahr_1935 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    }
}


function exp_Personen_19rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'ja' AND E_Pers_Ges_Pol_1935 = 'Person' AND E_Wechsel_vorher_Ujahr_1935 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'ja'));
    }
}


function exp_Personen_19rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'ja' AND E_Pers_Ges_Pol_1935 = 'Person' AND E_Wechsel_vorher_Ujahr_1935 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'nein'));
    }
}


function exp_Personen_19rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'ja' AND E_Pers_Ges_Pol_1935 = 'Person' AND E_Wechsel_vorher_Ujahr_1935 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  == 'neu'));
    }
}


function exp_Personen_19rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1935 = 'ja' AND E_Pers_Ges_Pol_1935 = 'Person' AND E_Wechsel_vorher_Ujahr_1935 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1935')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1935')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1935')  === null));
    }
}


function exp_zugeordnetesEigentum_21rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'nein' AND Eigentümer_1939 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1939 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'nein'));
    }
}


function exp_zugeordnetesEigentum_21rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'nein' AND Eigentümer_1939 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1939 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'neu'));
    }
}


function exp_zugeordnetesEigentum_21rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'nein' AND Eigentümer_1939 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1939 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'nein') && (feature.get('Eigentümer_1939')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    }
}


function exp_Eigentmerinunbekannt_22rule0_eval_expression(context) {
    // Eigentümer_1939 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Eigentümer_1939')  == 'unbekannt');
    } else {
        return (feature.get('Eigentümer_1939')  == 'unbekannt');
    }
}


function exp_Gesellschaften_23rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Gesellschaft' AND E_Wechsel_vorher_Ujahr_1939 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    }
}


function exp_Personen_24rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Person' AND E_Wechsel_vorher_Ujahr_1939 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'ja'));
    }
}


function exp_Personen_24rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Person' AND E_Wechsel_vorher_Ujahr_1939 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'nein'));
    }
}


function exp_Personen_24rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Person' AND E_Wechsel_vorher_Ujahr_1939 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'neu'));
    }
}


function exp_Personen_24rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Person' AND E_Wechsel_vorher_Ujahr_1939 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'unbekannt'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  == 'unbekannt'));
    }
}


function exp_Personen_24rule4_eval_expression(context) {
    // Eigentümer_Wohnsitz_1939 = 'ja' AND E_Pers_Ges_Pol_1939 = 'Person' AND E_Wechsel_vorher_Ujahr_1939 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1939')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1939')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1939')  === null));
    }
}


function exp_zugeordnetesEigentum_26rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'nein' AND Eigentümer_1951 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1951 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'nein') && (feature.get('Eigentümer_1951')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'nein') && (feature.get('Eigentümer_1951')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'ja'));
    }
}


function exp_zugeordnetesEigentum_26rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'nein' AND Eigentümer_1951 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1951 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'nein') && (feature.get('Eigentümer_1951')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'nein') && (feature.get('Eigentümer_1951')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'nein'));
    }
}


function exp_Eigentmerinunbekannt_27rule0_eval_expression(context) {
    // Eigentümer_1951 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Eigentümer_1951')  == 'unbekannt');
    } else {
        return (feature.get('Eigentümer_1951')  == 'unbekannt');
    }
}


function exp_Personen_28rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'ja' AND E_Pers_Ges_Pol_1951 = 'Person' AND E_Wechsel_vorher_Ujahr_1951 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'ja'));
    }
}


function exp_Personen_28rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'ja' AND E_Pers_Ges_Pol_1951 = 'Person' AND E_Wechsel_vorher_Ujahr_1951 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'nein'));
    }
}


function exp_Personen_28rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'ja' AND E_Pers_Ges_Pol_1951 = 'Person' AND E_Wechsel_vorher_Ujahr_1951 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  == 'neu'));
    }
}


function exp_Personen_28rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1951 = 'ja' AND E_Pers_Ges_Pol_1951 = 'Person' AND E_Wechsel_vorher_Ujahr_1951 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1951')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1951')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1951')  === null));
    }
}


function exp_zugeordnetesEigentum_30rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'nein' AND Eigentümer_1960 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1960 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'ja'));
    }
}


function exp_zugeordnetesEigentum_30rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'nein' AND Eigentümer_1960 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1960 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'nein'));
    }
}


function exp_zugeordnetesEigentum_30rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'nein' AND Eigentümer_1960 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1960 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'neu'));
    }
}


function exp_zugeordnetesEigentum_30rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'nein' AND Eigentümer_1960 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1960 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'unbekannt'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'nein') && (feature.get('Eigentümer_1960')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'unbekannt'));
    }
}


function exp_PolitischeEntitten_31rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Politische Entität' AND E_Wechsel_vorher_Ujahr_1960 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Politische Entität')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Politische Entität')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    }
}


function exp_Gesellschaften_32rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Gesellschaft' AND E_Wechsel_vorher_Ujahr_1960 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    }
}


function exp_Personen_33rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Person' AND E_Wechsel_vorher_Ujahr_1960 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'ja'));
    }
}


function exp_Personen_33rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Person' AND E_Wechsel_vorher_Ujahr_1960 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'nein'));
    }
}


function exp_Personen_33rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Person' AND E_Wechsel_vorher_Ujahr_1960 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'neu'));
    }
}


function exp_Personen_33rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Person' AND E_Wechsel_vorher_Ujahr_1960 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'unbekannt'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  == 'unbekannt'));
    }
}


function exp_Personen_33rule4_eval_expression(context) {
    // Eigentümer_Wohnsitz_1960 = 'ja' AND E_Pers_Ges_Pol_1960 = 'Person' AND E_Wechsel_vorher_Ujahr_1960 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1960')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1960')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1960')  === null));
    }
}


function exp_zugeordnetesEigentum_35rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'nein' AND Eigentümer_1973 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1973 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    }
}


function exp_zugeordnetesEigentum_35rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'nein' AND Eigentümer_1973 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1973 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'nein'));
    }
}


function exp_zugeordnetesEigentum_35rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'nein' AND Eigentümer_1973 IS NOT 'unbekannt' AND E_Wechsel_vorher_Ujahr_1973 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'nein') && (feature.get('Eigentümer_1973')  !== 'unbekannt')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'neu'));
    }
}


function exp_Eigentmerinunbekannt_36rule0_eval_expression(context) {
    // Eigentümer_1973 = 'unbekannt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('Eigentümer_1973')  == 'unbekannt');
    } else {
        return (feature.get('Eigentümer_1973')  == 'unbekannt');
    }
}


function exp_PolitischeEntitten_37rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Politische Entität' AND E_Wechsel_vorher_Ujahr_1973 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Politische Entität')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Politische Entität')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    }
}


function exp_Gesellschaften_38rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Gesellschaft' AND E_Wechsel_vorher_Ujahr_1973 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    }
}


function exp_Gesellschaften_38rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Gesellschaft' AND E_Wechsel_vorher_Ujahr_1973 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Gesellschaft')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    }
}


function exp_Personen_39rule0_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Person' AND E_Wechsel_vorher_Ujahr_1973 = 'ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'ja'));
    }
}


function exp_Personen_39rule1_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Person' AND E_Wechsel_vorher_Ujahr_1973 = 'nein'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'nein'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'nein'));
    }
}


function exp_Personen_39rule2_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Person' AND E_Wechsel_vorher_Ujahr_1973 = 'neu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'neu'));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  == 'neu'));
    }
}


function exp_Personen_39rule3_eval_expression(context) {
    // Eigentümer_Wohnsitz_1973 = 'ja' AND E_Pers_Ges_Pol_1973 = 'Person' AND E_Wechsel_vorher_Ujahr_1973 IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    } else {
        return (((feature.get('Eigentümer_Wohnsitz_1973')  == 'ja') && (feature.get('E_Pers_Ges_Pol_1973')  == 'Person')) && (feature.get('E_Wechsel_vorher_Ujahr_1973')  === null));
    }
}