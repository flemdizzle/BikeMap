$(window).load(function() {
  loadScript();
});

var map;
var poly;
function initialize() {
        var markerCoords1 = new google.maps.LatLng(38.8561, -77.0512);
        var markerCoords2 = new google.maps.LatLng(38.85725, -77.05332);
        var markerCoords3 = new google.maps.LatLng(38.8564, -77.0492);
        var markerCoords4 = new google.maps.LatLng(38.86017, -77.049593);
        var markerCoords5 = new google.maps.LatLng(38.857866, -77.05949);
        var markerCoords6 = new google.maps.LatLng(38.862303, -77.059936);
        var markerCoords7 = new google.maps.LatLng(38.8637, -77.0633);
        var markerCoords8 = new google.maps.LatLng(38.8573, -77.0511);
        var markerCoords9 = new google.maps.LatLng(38.8629, -77.0528);
        var markerCoords10 = new google.maps.LatLng(38.848441, -77.051516);
        var markerCoords11 = new google.maps.LatLng(38.8426, -77.0502);
        var markerCoords12 = new google.maps.LatLng(38.8533, -77.0498);
        var markerCoords13 = new google.maps.LatLng(38.850688, -77.05152);
        var markerCoords14 = new google.maps.LatLng(38.9003, -77.0429);
        var markerCoords15 = new google.maps.LatLng(38.9176, -77.0321);
        var markerCoords16 = new google.maps.LatLng(38.929464, -77.027822);
        var markerCoords17 = new google.maps.LatLng(38.926088, -77.036536);
        var markerCoords18 = new google.maps.LatLng(38.922925, -77.042581);
        var markerCoords19 = new google.maps.LatLng(38.9268, -77.0322);
        var markerCoords20 = new google.maps.LatLng(38.923203, -77.047637);
        var markerCoords21 = new google.maps.LatLng(38.9319, -77.0388);
        var markerCoords22 = new google.maps.LatLng(38.8767, -77.0178);
        var markerCoords23 = new google.maps.LatLng(38.90985, -77.034438);
        var markerCoords24 = new google.maps.LatLng(38.912682, -77.031681);
        var markerCoords25 = new google.maps.LatLng(38.9086, -77.0323);
        var markerCoords26 = new google.maps.LatLng(38.8963, -77.045);
        var markerCoords27 = new google.maps.LatLng(38.9008, -77.047);
        var markerCoords28 = new google.maps.LatLng(38.936043, -77.024649);
        var markerCoords29 = new google.maps.LatLng(38.9375, -77.0328);
        var markerCoords30 = new google.maps.LatLng(38.9346, -76.9955);
        var markerCoords31 = new google.maps.LatLng(38.90304, -77.019027);
        var markerCoords32 = new google.maps.LatLng(38.8896, -76.9769);
        var markerCoords33 = new google.maps.LatLng(38.9308, -77.0315);
        var markerCoords34 = new google.maps.LatLng(38.8601, -76.9672);
        var markerCoords35 = new google.maps.LatLng(38.934267, -77.057979);
        var markerCoords36 = new google.maps.LatLng(38.878, -76.9607);
        var markerCoords37 = new google.maps.LatLng(38.897063, -76.947446);
        var markerCoords38 = new google.maps.LatLng(38.901385, -76.941877);
        var markerCoords39 = new google.maps.LatLng(38.862669, -76.994637);
        var markerCoords40 = new google.maps.LatLng(38.867373, -76.988039);
        var markerCoords41 = new google.maps.LatLng(38.8952, -77.0436);
        var markerCoords42 = new google.maps.LatLng(38.919077, -77.000648);
        var markerCoords43 = new google.maps.LatLng(38.9172, -77.0259);
        var markerCoords44 = new google.maps.LatLng(38.9249, -77.0222);
        var markerCoords45 = new google.maps.LatLng(38.8743, -77.0057);
        var markerCoords46 = new google.maps.LatLng(38.9154, -77.0446);
        var markerCoords47 = new google.maps.LatLng(38.9155, -77.0222);
        var markerCoords48 = new google.maps.LatLng(38.854132, -77.053703);
        var markerCoords49 = new google.maps.LatLng(38.8763, -77.0037);
        var markerCoords51 = new google.maps.LatLng(38.9101, -77.0444);
        var markerCoords52 = new google.maps.LatLng(38.9057, -77.0056);
        var markerCoords53 = new google.maps.LatLng(38.90534, -77.046774);
        var markerCoords54 = new google.maps.LatLng(38.90276, -77.03863);
        var markerCoords55 = new google.maps.LatLng(38.899408, -77.015289);
        var markerCoords56 = new google.maps.LatLng(38.8851, -77.0023);
        var markerCoords57 = new google.maps.LatLng(38.8803, -76.9862);
        var markerCoords58 = new google.maps.LatLng(38.884, -76.9861);
        var markerCoords59 = new google.maps.LatLng(38.9121, -77.0387);
        var markerCoords60 = new google.maps.LatLng(38.944551, -77.063896);
        var markerCoords61 = new google.maps.LatLng(38.9126, -77.0135);
        var markerCoords62 = new google.maps.LatLng(38.8792, -76.9953);
        var markerCoords63 = new google.maps.LatLng(38.938736, -77.087171);
        var markerCoords64 = new google.maps.LatLng(38.934751, -77.074647);
        var markerCoords65 = new google.maps.LatLng(38.947774, -77.032818);
        var markerCoords66 = new google.maps.LatLng(38.865784, -76.9784);
        var markerCoords67 = new google.maps.LatLng(38.873057, -76.971015);
        var markerCoords68 = new google.maps.LatLng(38.886952, -76.996806);
        var markerCoords69 = new google.maps.LatLng(38.899632, -77.031686);
        var markerCoords70 = new google.maps.LatLng(38.894, -76.947974);
        var markerCoords71 = new google.maps.LatLng(38.887237, -77.028226);
        var markerCoords72 = new google.maps.LatLng(38.9022212, -77.059219);
        var markerCoords73 = new google.maps.LatLng(38.933668, -76.991016);
        var markerCoords74 = new google.maps.LatLng(38.894919, -77.046587);
        var markerCoords75 = new google.maps.LatLng(38.886266, -77.022241);
        var markerCoords76 = new google.maps.LatLng(38.893028, -77.026013);
        var markerCoords77 = new google.maps.LatLng(38.895184, -77.054845);
        var markerCoords78 = new google.maps.LatLng(38.884, -76.995397);
        var markerCoords79 = new google.maps.LatLng(38.904742, -77.041606);
        var markerCoords80 = new google.maps.LatLng(38.947607, -77.079382);
        var markerCoords81 = new google.maps.LatLng(38.9003, -76.9882);
        var markerCoords82 = new google.maps.LatLng(38.897222, -77.019347);
        var markerCoords83 = new google.maps.LatLng(38.8991, -77.0337);
        var markerCoords84 = new google.maps.LatLng(38.90572, -77.022264);
        var markerCoords85 = new google.maps.LatLng(38.927872, -77.043358);
        var markerCoords86 = new google.maps.LatLng(38.903407, -77.043648);
        var markerCoords87 = new google.maps.LatLng(38.90375, -77.06269);
        var markerCoords88 = new google.maps.LatLng(38.87675, -77.02127);
        var markerCoords89 = new google.maps.LatLng(38.894758, -76.997114);
        var markerCoords90 = new google.maps.LatLng(38.916442, -77.0682);
        var markerCoords91 = new google.maps.LatLng(38.900283, -77.029822);
        var markerCoords92 = new google.maps.LatLng(38.8997, -77.023086);
        var markerCoords93 = new google.maps.LatLng(38.932514, -76.992889);
        var markerCoords94 = new google.maps.LatLng(38.910972, -77.00495);
        var markerCoords95 = new google.maps.LatLng(38.899972, -76.998347);
        var markerCoords96 = new google.maps.LatLng(38.900412, -77.001949);
        var markerCoords97 = new google.maps.LatLng(38.900413, -76.982872);
        var markerCoords98 = new google.maps.LatLng(38.889955, -77.000349);
        var markerCoords99 = new google.maps.LatLng(38.890461, -76.988355);
        var markerCoords100 = new google.maps.LatLng(38.8692, -76.9599);
        var markerCoords101 = new google.maps.LatLng(38.894832, -76.987633);
        var markerCoords102 = new google.maps.LatLng(38.91554, -77.03818);
        var markerCoords103 = new google.maps.LatLng(38.898364, -77.027869);
        var markerCoords104 = new google.maps.LatLng(38.894514, -77.031617);
        var markerCoords105 = new google.maps.LatLng(38.897324, -77.022322);
        var markerCoords106 = new google.maps.LatLng(38.902061, -77.038322);
        var markerCoords107 = new google.maps.LatLng(38.908905, -77.04478);
        var markerCoords108 = new google.maps.LatLng(38.895344, -77.016106);
        var markerCoords109 = new google.maps.LatLng(38.8923, -77.0436);
        var markerCoords110 = new google.maps.LatLng(38.90774, -77.071652);
        var markerCoords111 = new google.maps.LatLng(38.899983, -76.991383);
        var markerCoords112 = new google.maps.LatLng(38.903827, -77.053485);
        var markerCoords113 = new google.maps.LatLng(38.89696, -77.00493);
        var markerCoords114 = new google.maps.LatLng(38.897446, -77.009888);
        var markerCoords115 = new google.maps.LatLng(38.905607, -77.027137);
        var markerCoords116 = new google.maps.LatLng(38.922581, -77.070334);
        var markerCoords117 = new google.maps.LatLng(38.898069, -77.031823);
        var markerCoords118 = new google.maps.LatLng(38.844015, -77.050537);
        var markerCoords124 = new google.maps.LatLng(38.88412, -77.04657);
        var markerCoords125 = new google.maps.LatLng(38.897857, -77.026975);
        var markerCoords126 = new google.maps.LatLng(38.896104, -77.049882);
        var markerCoords127 = new google.maps.LatLng(38.897315, -77.070993);
        var markerCoords128 = new google.maps.LatLng(38.8946, -77.072305);
        var markerCoords129 = new google.maps.LatLng(38.893648, -77.076701);
        var markerCoords130 = new google.maps.LatLng(38.891696, -77.0846);
        var markerCoords131 = new google.maps.LatLng(38.892164, -77.079375);
        var markerCoords132 = new google.maps.LatLng(38.86559, -76.952103);
        var markerCoords133 = new google.maps.LatLng(38.892459, -77.046567);
        var markerCoords134 = new google.maps.LatLng(38.889, -77.0925);
        var markerCoords135 = new google.maps.LatLng(38.920669, -77.04368);
        var markerCoords136 = new google.maps.LatLng(38.906602, -77.038785);
        var markerCoords137 = new google.maps.LatLng(38.9059, -77.0325);
        var markerCoords138 = new google.maps.LatLng(38.8904, -77.0889);
        var markerCoords139 = new google.maps.LatLng(38.8881, -77.09308);
        var markerCoords140 = new google.maps.LatLng(38.88786, -77.094875);
        var markerCoords141 = new google.maps.LatLng(38.89968, -77.041539);
        var markerCoords142 = new google.maps.LatLng(38.887299, -77.018939);
        var markerCoords143 = new google.maps.LatLng(38.88412, -77.017445);
        var markerCoords144 = new google.maps.LatLng(38.881185, -77.001828);
        var markerCoords145 = new google.maps.LatLng(38.912719, -77.022155);
        var markerCoords146 = new google.maps.LatLng(38.9418, -77.0251);
        var markerCoords147 = new google.maps.LatLng(38.915417, -77.012289);
        var markerCoords148 = new google.maps.LatLng(38.928156, -77.02344);
        var markerCoords149 = new google.maps.LatLng(38.917761, -77.04062);
        var markerCoords150 = new google.maps.LatLng(38.889935, -76.93723);
        var markerCoords151 = new google.maps.LatLng(38.930282, -77.055599);
        var markerCoords152 = new google.maps.LatLng(38.896544, -76.96012);
        var markerCoords153 = new google.maps.LatLng(38.905126, -77.056887);
        var markerCoords154 = new google.maps.LatLng(38.88732, -76.983569);
        var markerCoords155 = new google.maps.LatLng(38.844711, -76.987823);
        var markerCoords156 = new google.maps.LatLng(38.876393, -77.107735);
        var markerCoords157 = new google.maps.LatLng(38.8815, -77.10396);
        var markerCoords158 = new google.maps.LatLng(38.896923, -77.086502);
        var markerCoords159 = new google.maps.LatLng(38.90268, -77.02674);
        var markerCoords160 = new google.maps.LatLng(38.885801, -77.097745);
        var markerCoords161 = new google.maps.LatLng(38.896015, -77.078107);
        var markerCoords162 = new google.maps.LatLng(38.87861, -77.006004);
        var markerCoords163 = new google.maps.LatLng(38.922649, -77.077271);
        var markerCoords164 = new google.maps.LatLng(38.928743, -77.012457);
        var markerCoords165 = new google.maps.LatLng(38.882788, -77.103148);
        var markerCoords166 = new google.maps.LatLng(38.88397, -77.10783);
        var markerCoords167 = new google.maps.LatLng(38.884734, -77.093485);
        var markerCoords168 = new google.maps.LatLng(38.888553, -77.032429);
        var markerCoords169 = new google.maps.LatLng(38.888767, -77.02858);
        var markerCoords170 = new google.maps.LatLng(38.87887, -77.1207);
        var markerCoords171 = new google.maps.LatLng(38.894573, -77.01994);
        var markerCoords172 = new google.maps.LatLng(38.893241, -77.086045);
        var markerCoords173 = new google.maps.LatLng(38.89593, -77.089006);
        var markerCoords174 = new google.maps.LatLng(38.89054, -77.08095);
        var markerCoords175 = new google.maps.LatLng(38.880834, -77.091129);
        var markerCoords176 = new google.maps.LatLng(38.881044, -77.111768);
        var markerCoords177 = new google.maps.LatLng(38.882629, -77.109366);
        var markerCoords178 = new google.maps.LatLng(38.879819, -77.037413);
        var markerCoords179 = new google.maps.LatLng(38.866611, -76.985238);
        var markerCoords180 = new google.maps.LatLng(38.883921, -77.116817);
        var markerCoords181 = new google.maps.LatLng(38.880151, -77.107673);
        var markerCoords182 = new google.maps.LatLng(38.884616, -77.10108);
        var markerCoords183 = new google.maps.LatLng(38.90509, -76.9941);
        var markerCoords185 = new google.maps.LatLng(38.903584, -77.044789);
        var markerCoords186 = new google.maps.LatLng(38.903819, -77.0284);
        var markerCoords187 = new google.maps.LatLng(38.901539, -77.046564);
        var markerCoords188 = new google.maps.LatLng(38.902204, -77.04337);
        var markerCoords189 = new google.maps.LatLng(38.803124, -77.040363);
        var markerCoords190 = new google.maps.LatLng(38.804718, -77.043363);
        var markerCoords191 = new google.maps.LatLng(38.810743, -77.044664);
        var markerCoords192 = new google.maps.LatLng(38.805317, -77.049883);
        var markerCoords193 = new google.maps.LatLng(38.902, -77.03353);
        var markerCoords194 = new google.maps.LatLng(38.805648, -77.05293);
        var markerCoords195 = new google.maps.LatLng(38.811456, -77.050276);
        var markerCoords196 = new google.maps.LatLng(38.814577, -77.052808);
        var markerCoords197 = new google.maps.LatLng(38.805767, -77.06072);
        var markerCoords198 = new google.maps.LatLng(38.9066, -77.05152);
        var markerCoords199 = new google.maps.LatLng(38.895914, -77.026064);
        var markerCoords200 = new google.maps.LatLng(38.90088, -77.048911);
        var markerCoords201 = new google.maps.LatLng(38.883669, -77.113905);
        var markerCoords202 = new google.maps.LatLng(38.884961, -77.08777);
        var markerCoords203 = new google.maps.LatLng(38.889365, -77.077294);
        var markerCoords204 = new google.maps.LatLng(38.888251, -77.049426);
        var markerCoords206 = new google.maps.LatLng(38.894722, -77.045128);
        var markerCoords207 = new google.maps.LatLng(38.90093, -77.018677);
        var markerCoords208 = new google.maps.LatLng(38.943837, -77.077078);
        var markerCoords209 = new google.maps.LatLng(38.954812, -77.082426);
        var markerCoords210 = new google.maps.LatLng(38.905707, -77.003041);
        var markerCoords211 = new google.maps.LatLng(38.863833, -77.080319);
        var markerCoords212 = new google.maps.LatLng(38.857803, -77.086733);
        var markerCoords213 = new google.maps.LatLng(38.846222, -77.069275);
        var markerCoords214 = new google.maps.LatLng(38.918809, -77.041571);
        var markerCoords215 = new google.maps.LatLng(38.956595, -77.019815);
        var markerCoords216 = new google.maps.LatLng(38.949662, -77.027333);
        var markerCoords217 = new google.maps.LatLng(38.942016, -77.032652);
        var markerCoords218 = new google.maps.LatLng(38.956432, -77.032947);
        var markerCoords219 = new google.maps.LatLng(38.847977, -77.075104);
        var markerCoords220 = new google.maps.LatLng(38.8444, -77.085931);
        var markerCoords221 = new google.maps.LatLng(38.860789, -77.09586);
        var markerCoords222 = new google.maps.LatLng(38.835213, -77.094295);
        var markerCoords223 = new google.maps.LatLng(38.84232, -77.089555);
        var markerCoords224 = new google.maps.LatLng(38.848454, -77.084918);
        var markerCoords225 = new google.maps.LatLng(38.987, -77.029417);
        var markerCoords226 = new google.maps.LatLng(38.90849, -77.063586);
        var markerCoords227 = new google.maps.LatLng(38.854691, -77.100555);
        var markerCoords228 = new google.maps.LatLng(38.955016, -77.069956);
        var markerCoords229 = new google.maps.LatLng(38.908142, -77.038359);
        var markerCoords230 = new google.maps.LatLng(38.92333, -77.0352);
        var markerCoords231 = new google.maps.LatLng(38.889988, -76.995193);
        var markerCoords232 = new google.maps.LatLng(38.912659, -77.017669);
        var markerCoords233 = new google.maps.LatLng(38.889908, -76.983326);
        var markerCoords234 = new google.maps.LatLng(38.897274, -76.994749);
        var markerCoords235 = new google.maps.LatLng(38.927095, -76.978924);
        var markerCoords236 = new google.maps.LatLng(38.897195, -76.983575);
        var markerCoords237 = new google.maps.LatLng(38.928644, -76.990955);
        var markerCoords238 = new google.maps.LatLng(38.884085, -76.957461);
        var markerCoords239 = new google.maps.LatLng(38.843222, -76.999388);
        var markerCoords240 = new google.maps.LatLng(38.863897, -76.990037);
        var markerCoords241 = new google.maps.LatLng(38.903732, -76.987211);
        var markerCoords242 = new google.maps.LatLng(38.916787, -77.028139);
        var markerCoords243 = new google.maps.LatLng(38.852248, -77.105022);
        var markerCoords244 = new google.maps.LatLng(38.834108, -77.087323);
        var markerCoords245 = new google.maps.LatLng(38.880705, -77.08596);
        var markerCoords246 = new google.maps.LatLng(38.867262, -77.072315);
        var markerCoords247 = new google.maps.LatLng(38.887378, -77.001955);
        var markerCoords248 = new google.maps.LatLng(38.894851, -77.02324);
        var markerCoords249 = new google.maps.LatLng(38.917622, -77.01597);
        var markerCoords250 = new google.maps.LatLng(38.918155, -77.004746);
        var markerCoords251 = new google.maps.LatLng(38.892275, -77.013917);
        var markerCoords252 = new google.maps.LatLng(38.88731, -77.01397);
        var markerCoords253 = new google.maps.LatLng(38.887312, -77.025762);
        var markerCoords254 = new google.maps.LatLng(38.927497, -76.997194);
        var markerCoords255 = new google.maps.LatLng(38.862478, -77.086599);
        var markerCoords256 = new google.maps.LatLng(38.856319, -77.11153);
        var markerCoords257 = new google.maps.LatLng(38.871822, -77.107906);
        var markerCoords258 = new google.maps.LatLng(38.985404, -77.023082);
        var markerCoords259 = new google.maps.LatLng(38.981103, -77.097426);
        var markerCoords260 = new google.maps.LatLng(38.983838, -77.09221);
        var markerCoords261 = new google.maps.LatLng(39.096312, -77.192672);
        var markerCoords262 = new google.maps.LatLng(39.093783, -77.202501);
        var markerCoords263 = new google.maps.LatLng(38.988562, -77.096539);
        var markerCoords264 = new google.maps.LatLng(39.084125, -77.151291);
        var markerCoords265 = new google.maps.LatLng(38.98954, -77.098029);
        var markerCoords266 = new google.maps.LatLng(39.094772, -77.145213);
        var markerCoords267 = new google.maps.LatLng(38.98128, -77.011336);
        var markerCoords268 = new google.maps.LatLng(38.983627, -77.006311);
        var markerCoords269 = new google.maps.LatLng(38.99521, -77.02918);
        var markerCoords270 = new google.maps.LatLng(38.983525, -77.095367);
        var markerCoords271 = new google.maps.LatLng(38.961763, -77.085998);
        var markerCoords272 = new google.maps.LatLng(38.921074, -77.031887);
        var markerCoords273 = new google.maps.LatLng(38.87501, -77.0024);
        var markerCoords274 = new google.maps.LatLng(38.920387, -77.025672);
        var markerCoords275 = new google.maps.LatLng(38.876737, -76.994468);
        var markerCoords276 = new google.maps.LatLng(39.120045, -77.156985);
        var markerCoords277 = new google.maps.LatLng(39.099376, -77.188014);
        var markerCoords278 = new google.maps.LatLng(39.083705, -77.149443);
        var markerCoords279 = new google.maps.LatLng(39.123513, -77.15741);
        var markerCoords280 = new google.maps.LatLng(38.990249, -77.02935);
        var markerCoords281 = new google.maps.LatLng(39.107709, -77.152072);
        var markerCoords282 = new google.maps.LatLng(38.982456, -77.091991);
        var markerCoords283 = new google.maps.LatLng(39.000578, -77.00149);
        var markerCoords284 = new google.maps.LatLng(39.095661, -77.159048);
        var markerCoords285 = new google.maps.LatLng(38.989724, -77.023854);
        var markerCoords286 = new google.maps.LatLng(38.975, -77.01121);
        var markerCoords287 = new google.maps.LatLng(38.977933, -77.006472);
        var markerCoords288 = new google.maps.LatLng(38.992375, -77.100104);
        var markerCoords289 = new google.maps.LatLng(38.990639, -77.100239);
        var markerCoords290 = new google.maps.LatLng(38.977093, -77.094589);
        var markerCoords291 = new google.maps.LatLng(39.102099, -77.200322);
        var markerCoords292 = new google.maps.LatLng(39.094103, -77.132954);
        var markerCoords293 = new google.maps.LatLng(39.076331, -77.141378);
        var markerCoords294 = new google.maps.LatLng(39.102212, -77.177091);
        var markerCoords295 = new google.maps.LatLng(38.992679, -77.029457);
        var markerCoords296 = new google.maps.LatLng(38.999388, -77.031555);
        var markerCoords297 = new google.maps.LatLng(38.997033, -77.025608);
        var markerCoords298 = new google.maps.LatLng(39.114688, -77.171487);
        var markerCoords299 = new google.maps.LatLng(39.110314, -77.182669);
        var markerCoords301 = new google.maps.LatLng(38.923583, -77.050046);
        var markerCoords302 = new google.maps.LatLng(38.90706, -77.015231);
        var markerCoords303 = new google.maps.LatLng(38.898536, -76.931862);
        var markerCoords304 = new google.maps.LatLng(38.908473, -76.933099);
        var markerCoords305 = new google.maps.LatLng(38.878433, -77.03023);
        var markerCoords306 = new google.maps.LatLng(38.873755, -77.089233);
        var markerCoords307 = new google.maps.LatLng(38.86646, -77.04826);
        var markerCoords308 = new google.maps.LatLng(38.999634, -77.109647);
        var markerCoords309 = new google.maps.LatLng(38.96115, -77.088659);
        var markerCoords310 = new google.maps.LatLng(38.899703, -77.008911);
        var markerCoords311 = new google.maps.LatLng(38.837666, -77.09482);
        var markerCoords312 = new google.maps.LatLng(38.873219, -77.082104);
        var markerCoords313 = new google.maps.LatLng(38.869418, -77.095596);
        var markerCoords314 = new google.maps.LatLng(38.941154, -77.062036);
        var markerCoords315 = new google.maps.LatLng(39.103091, -77.196442);
        var markerCoords316 = new google.maps.LatLng(39.097636, -77.196636);
        var markerCoords317 = new google.maps.LatLng(38.997445, -77.023894);
        var markerCoords318 = new google.maps.LatLng(39.085394, -77.145803);
        var markerCoords319 = new google.maps.LatLng(38.900358, -77.012108);
        var markerCoords320 = new google.maps.LatLng(38.952369, -77.002721);
        var markerCoords321 = new google.maps.LatLng(38.975219, -77.016855);
        var markerCoords322 = new google.maps.LatLng(38.920682, -76.995876);
        var markerCoords323 = new google.maps.LatLng(38.866471, -77.076131);
        var markerCoords324 = new google.maps.LatLng(38.839912, -77.087083);
        var markerCoords325 = new google.maps.LatLng(39.119765, -77.166093);
        var markerCoords326 = new google.maps.LatLng(38.964992, -77.103381);
        var markerCoords327 = new google.maps.LatLng(39.084379, -77.146866);
        var markerCoords328 = new google.maps.LatLng(38.984691, -77.094537);
        var markerCoords329 = new google.maps.LatLng(38.88992, -77.071301);
        var markerCoords330 = new google.maps.LatLng(38.903582, -77.067786);
        var markerCoords331 = new google.maps.LatLng(38.804378, -77.060866);
        var markerCoords332 = new google.maps.LatLng(38.894941, -77.09169);
        var markerCoords333 = new google.maps.LatLng(38.869442, -77.104503);
        var markerCoords334 = new google.maps.LatLng(38.898404, -77.024281);
        var markerCoords335 = new google.maps.LatLng(38.897612, -77.080851);
        var markerCoords336 = new google.maps.LatLng(38.901755, -77.051084);
        var markerCoords337 = new google.maps.LatLng(38.801111, -77.068952);
        var markerCoords338 = new google.maps.LatLng(38.82175, -77.047494);
        var markerCoords339 = new google.maps.LatLng(38.802677, -77.063562);
        var markerCoords340 = new google.maps.LatLng(38.820064, -77.057619);
        var markerCoords341 = new google.maps.LatLng(38.82595, -77.058541);
        var markerCoords342 = new google.maps.LatLng(38.820932, -77.053096);
        var markerCoords343 = new google.maps.LatLng(38.833077, -77.059821);
        var markerCoords344 = new google.maps.LatLng(38.890612, -77.084801);
        var markerCoords345 = new google.maps.LatLng(38.986743, -77.000035);
        var markerCoords346 = new google.maps.LatLng(38.864702, -77.048672);
        var markerCoords347 = new google.maps.LatLng(38.96497, -77.075946);
        var markerCoords348 = new google.maps.LatLng(38.90381, -77.034931);
        var markerCoords349 = new google.maps.LatLng(38.89841, -77.039624);
        var mapOptions = {
          center: new google.maps.LatLng(38.895673, -77.050494),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.NORMAL
        };
        // initializing map
        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        
        // simple marker
        var marker = createMarker(markerCoords1, map, "Hi");
        //directions
       var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();

       directionsDisplay.setMap(map);

       var directionsRequest = {
        origin: "4141 North Henderson rd, Arlington, VA 22203",
        destination: "General Assembly, 15th Street Northwest, Washington, DC 20005",
        travelMode: google.maps.TravelMode.BICYCLING
       };
       directionsService.route(directionsRequest, function(response, status) {
        //Check if request is successful
        if (status == google.maps.DirectionsStatus.OK) {
          console.log(status);
          directionsDisplay.setDirections(response); //Display the directions result
        }
       }); 
        // custom marker
        // var customMarker = createCustomMarker(markerCoords1, map, "Hi");

        // add infowindow when clicking on the simple marker marker
        // var info = createInfoWindow("Congratulation!");
        // google.maps.event.addListener(marker, 'click', function() {
        //   info.open(map,marker);
        // });

        // drawing points
        /*google.maps.event.addListener(map, 'click', function(e){
          createMarker(getCurrentPosition(e), map, "Hello World!");
        });*/


        // drawing dynamic polyline
        //   var polyOptions = {
        //     strokeColor: '#000000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 3
        //   };
        // poly = new google.maps.Polyline(polyOptions);
        // poly.setMap(map);
        // google.maps.event.addListener(map, 'click', addLatLng);
        
        // drawing custom dynamic polyline ( with dashes/ symbols)
        // Define the symbol, using one of the predefined paths ('CIRCLE')
        // supplied by the Google Maps JavaScript API.
        // var lineSymbol = {
        //   path: google.maps.SymbolPath.CIRCLE,
        //   scale: 8,
        //   strokeColor: '#393'
        // };
        // drawing static polyline
        // var lineCoordinates = [
        //   new google.maps.LatLng(30.055487, 31.279766),
        //   new google.maps.LatLng(30.223356, 31.324345),
        //   new google.maps.LatLng(30.345656, 31.567677),
        //   new google.maps.LatLng(30.565678, 31.676887)
        // ];
        // createPolyline(map,lineCoordinates,lineSymbol);
        // animateCircle();

   }
// function animateCircle() {
//     var count = 0;
//     window.setInterval(function() {
//       count = (count + 1) % 200;

//       var icons = line.get('icons');
//       icons[0].offset = (count / 2) + '%';
//       line.set('icons', icons);
//   }, 20);
// }

// function addLatLng(event){  
//     var path = poly.getPath();
//     // Because path is an MVCArray, we can simply append a new coordinate
//     // and it will automatically appear.
//     path.push(event.latLng);
// }
// function createPolyline(map,lineCoordinates,lineSymbol){
//    var linePath = new google.maps.Polyline({
//     path: lineCoordinates,
//     geodesic: true,
//     strokeColor: '#FF0000',
//     strokeOpacity: 1.0,
//     strokeWeight: 2,
//      icons: [{
//       icon: lineSymbol,
//       offset: '100%'
//     }]
//   });
//    linePath.setMap(map);
// }

// function createInfoWindow(text){
//   var infowindow = new google.maps.InfoWindow({
//     content: text
//   });
//   return infowindow;
// }

// function getCurrentPosition(e){
//   var markercoords = new google.maps.LatLng(e.latLng.lat(),e.latLng.lng());
//   return markercoords;
// }


function createMarker(coords, map, title){
    marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: title,
    animation: google.maps.Animation.DROP
  });
}
// function createCustomMarker(coords,map,title){
//     marker = new google.maps.Marker({
//     position: coords,
//     map: map,
//     title: title,
//     icon: createImage("/assets/icon.png"),
//     draggable: true,
//     animation: google.maps.Animation.DROP
//   }); 
//     return marker;
// }

// function createImage(url){
//     var image = {
//     url: url,
//     // This marker is 20 pixels wide by 32 pixels tall.
//     size: new google.maps.Size(32, 32),
//     // The origin for this image is 0,0.
//     origin: new google.maps.Point(0,0),
//     // The anchor for this image is the base of the flagpole at 0,32.
//     anchor: new google.maps.Point(0, 32)
//   };
//   return image;
// }
// var directionsService = new google.maps.DirectionsService();
// var directionsDisplay = new google.maps.DirectionsRenderer();
//  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//  directionsDisplay.setMap(map);

//  var directionsRequest = {
//   origin: "Arlington, VA",
//   destination: "Washington, DC",
//   travelMode: google.maps.TravelMode.BICYCLING
//  };
//  directionsService.route(directionRequest, function(response, status) {
//   //Check if request is successful
//   if (status == google.maps.DirectionsStatus.OK) {
//     console.log(status);
//     directionsDisplay.setDirections(response); //Display the directions result
//   }
//  });

function loadScript() {
  console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  
  script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false' +

    '&callback=initialize';
  document.body.appendChild(script);
}