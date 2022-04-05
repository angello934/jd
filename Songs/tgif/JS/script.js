//    
    var fin = 241500;
    var delay = 2300;
    var inicio = 6; //en segundos

// Videos

    // Coreo
    var playback = document.getElementById("playback");
    var playbackctn = document.getElementById("playbackctn");

    // intro/outro
    var intro = document.getElementById("intro");
    var introctn = document.getElementById("introctn");

    var outro = document.getElementById("outro");
    var outroctn = document.getElementById("outroctn");

    //Goldmove
    var goldm = document.getElementById("gold");
    var goldmctn = document.getElementById("goldctn");



// hud
var hudf = document.getElementById('hud');
    var listapictos = document.getElementById('listapicto');
//Carga
var prvws = document.getElementById('prvw');
//Contador
var cntador = document.getElementById('contador');
var nameart = document.getElementById('name');




//Coreo+intro+outro+gold
var vdoctn = document.getElementById('videoctn');



// Fondo2
var bg2_sound = document.getElementById("bg-2-sound");
// Fondo
var bg_sound = document.getElementById("bg-sound");

var pictogramas = document.getElementsByClassName('imgpictocl')


var btln = document.getElementById("Beatline");

var BPM = 57
var BPS = BPM/60

var imagendelCoach = document.getElementById("coachimg")

function cargadedocumento(){
    imagendelCoach.style.animation = "beatimg " + BPS/2 + "s infinite alternate";
    bg_sound.muted = false;
}


document.addEventListener('DOMContentLoaded', cargadedocumento, false)



    function none (nonen){
    nonen.style.display = "none";
    }


    function start(){
        playback.play();
        var dur = playback.duration;
        var iniciaren = (inicio*100)/dur;

        playback.currentTime = iniciaren;

        intro.play();
        document.body.style.cursor = "none"
        prvws.classList.add ("hidden");
        bg_sound.pause();
        hudf.classList.remove ("hidden_hud");
        nameart.classList.add ("hidden");
        
        introctn.style.removeProperty ("display");
        playbackctn.style.removeProperty ("display");
        listapictos.style.removeProperty ("display");
        setTimeout(function(){
            intro.style.animation = "introvdo 1.5s forwards";
            setTimeout(function(){
                none(introctn);
                none(prvws);
            },1500)

        },600)

        setTimeout(function(){
            btln.style.animation = "beat alternate ease-out infinite " + BPS/4 + "s"
        },310)

    };


    function millscnd(){

        var time = playback.currentTime;
        var milli_seconds = parseInt(time * 1000);

        // var pContador = document.getElementById('contador');

        // pContador.textContent = milli_seconds;

        // console.log(milli_seconds);

        return milli_seconds
    };


    function pictoStar(pictodelayy, pictocodd){
    var pictocod = pictocodd;
    var pictodelay = pictodelayy - delay;
    var Pictoxx = document.getElementById(pictocod);
    var allPicto = document.querySelector("#" + pictocod +" img");

    allPicto.style.animation = "beatpicto " + BPS/2 + "s infinite alternate";

    if(pictodelay< millscnd() && pictodelay + 1000 > millscnd() ){
        // Pictoxx.style.removeProperty('display');
        Pictoxx.style.animation = "pictoAnimate linear 2.5s";
        setTimeout(function(){
            Pictoxx.style.removeProperty('animation');
            // none(Pictoxx); 
        },2500)
    };
    };


    function GoldMove(GldMvv){
        var GldMv = GldMvv - delay

        if(GldMv< millscnd() && GldMv + 1000 > millscnd() ){
            goldmctn.style.removeProperty('display');
            goldm.play();
            setTimeout(function(){
                none(goldmct);
            },4000)
        };
    };


    function End(){
        if(fin< millscnd() && fin + 1000 > millscnd() ){
            outroctn.style.removeProperty('display');
            outro.style.animation = "outrovdo 0.5s forwards";
            outro.play();
            hudf.style.animation = "outrovdo 0.5s reverse forwards";

            setTimeout(function(){
                none(vdoctn);
                none(hudf);
                none(prvws);
                none(cntador);
                bg2_sound.play();
                document.body.style.cursor = "url(../../cursor.png),auto"
            },2100)
        }
    };


    function pictocompi(){
        millscnd();

        End();

        GoldMove(82346);
        GoldMove(159179);
        GoldMove(187914);
        
        pictoStar(7583, "pct015");
        pictoStar(9460, "pct008");
        pictoStar(11401, "pct014");
        pictoStar(13268, "pct007");
        pictoStar(15295, "pct015");
        pictoStar(17097, "pct008");
        pictoStar(19092, "pct014");
        pictoStar(21034, "pct007");
        pictoStar(22964, "pct034");
        pictoStar(23358, "pct035");
        pictoStar(24629, "pct036");
        pictoStar(26697, "pct034");
        pictoStar(27209, "pct035");
        pictoStar(28394, "pct036");
        pictoStar(30558, "pct034");
        pictoStar(31050, "pct035");
        pictoStar(32233, "pct036");
        pictoStar(34387, "pct034");
        pictoStar(34921, "pct035");
        pictoStar(36147, "pct036");
        pictoStar(38803, "pct030");
        pictoStar(39669, "pct029");
        pictoStar(46399, "pct030");
        pictoStar(50314, "pct006");
        pictoStar(51231, "pct003");
        pictoStar(53619, "pct037");
        pictoStar(54153, "pct001");
        pictoStar(55529, "pct018");
        pictoStar(56031, "pct020");
        pictoStar(56521, "pct019");
        pictoStar(56991, "pct002");
        pictoStar(57523, "pct037");
        pictoStar(58004, "pct001");
        pictoStar(59347, "pct018");
        pictoStar(59893, "pct020");
        pictoStar(60403, "pct019");
        pictoStar(61279, "pct037");
        pictoStar(61822, "pct001");
        pictoStar(63188, "pct018");
        pictoStar(63636, "pct020");
        pictoStar(64178, "pct019");
        pictoStar(64553, "pct002");
        pictoStar(65107, "pct024");
        pictoStar(66313, "pct012");
        pictoStar(68916, "pct021");
        pictoStar(71102, "pct023");
        pictoStar(72755, "pct021");
        pictoStar(74996, "pct023");
        pictoStar(76520, "pct021");
        pictoStar(78836, "pct023");
        pictoStar(80403, "pct021");
        pictoStar(82335, "pct009");
        pictoStar(84383, "pct015");
        pictoStar(86260, "pct008");
        pictoStar(88201, "pct014");
        pictoStar(90068, "pct007");
        pictoStar(92095, "pct015");
        pictoStar(93897, "pct008");
        pictoStar(95892, "pct014");
        pictoStar(97834, "pct007");
        pictoStar(99764, "pct034");
        pictoStar(100158, "pct035");
        pictoStar(101429, "pct036");
        pictoStar(103497, "pct034");
        pictoStar(104009, "pct035");
        pictoStar(105194, "pct036");
        pictoStar(107358, "pct034");
        pictoStar(107850, "pct035");
        pictoStar(109033, "pct036");
        pictoStar(111187, "pct034");
        pictoStar(111721, "pct035");
        pictoStar(112947, "pct036");
        pictoStar(115603, "pct030");
        pictoStar(116469, "pct029");
        pictoStar(123199, "pct030");
        pictoStar(127114, "pct006");
        pictoStar(128031, "pct003");
        pictoStar(130419, "pct037");
        pictoStar(130953, "pct001");
        pictoStar(132329, "pct018");
        pictoStar(132831, "pct020");
        pictoStar(133321, "pct019");
        pictoStar(133791, "pct002");
        pictoStar(134323, "pct037");
        pictoStar(134804, "pct001");
        pictoStar(136147, "pct018");
        pictoStar(136693, "pct020");
        pictoStar(137203, "pct019");
        pictoStar(138079, "pct037");
        pictoStar(138622, "pct001");
        pictoStar(139988, "pct018");
        pictoStar(140436, "pct020");
        pictoStar(140978, "pct019");
        pictoStar(141353, "pct002");
        pictoStar(141907, "pct024");
        pictoStar(143113, "pct012");
        pictoStar(145716, "pct021");
        pictoStar(147902, "pct023");
        pictoStar(149555, "pct021");
        pictoStar(151796, "pct023");
        pictoStar(153320, "pct021");
        pictoStar(155636, "pct023");
        pictoStar(157203, "pct021");
        pictoStar(159135, "pct009");
        pictoStar(161213, "pct015");
        pictoStar(163090, "pct008");
        pictoStar(165031, "pct014");
        pictoStar(166898, "pct007");
        pictoStar(168925, "pct015");
        pictoStar(170727, "pct008");
        pictoStar(172722, "pct014");
        pictoStar(174664, "pct007");
        pictoStar(176979, "pct028");
        pictoStar(177961, "pct026");
        pictoStar(180777, "pct027");
        pictoStar(181799, "pct025");
        pictoStar(184147, "pct024");
        pictoStar(186045, "pct033");
        pictoStar(187987, "pct032");
        pictoStar(189522, "pct033");
        pictoStar(191070, "pct022");
        pictoStar(191881, "pct037");
        pictoStar(192415, "pct001");
        pictoStar(193791, "pct018");
        pictoStar(194293, "pct020");
        pictoStar(194783, "pct019");
        pictoStar(195253, "pct002");
        pictoStar(195785, "pct037");
        pictoStar(196266, "pct001");
        pictoStar(197609, "pct018");
        pictoStar(198155, "pct020");
        pictoStar(198665, "pct019");
        pictoStar(199541, "pct037");
        pictoStar(200084, "pct001");
        pictoStar(201450, "pct018");
        pictoStar(201898, "pct020");
        pictoStar(202440, "pct019");
        pictoStar(202815, "pct002");
        pictoStar(203369, "pct024");
        pictoStar(204575, "pct012");
        pictoStar(207178, "pct021");
        pictoStar(209364, "pct023");
        pictoStar(211017, "pct021");
        pictoStar(213258, "pct023");
        pictoStar(214782, "pct021");
        pictoStar(217098, "pct023");
        pictoStar(218665, "pct021");
        pictoStar(222547, "pct011");
        pictoStar(224467, "pct016");
        pictoStar(226409, "pct000");
        pictoStar(228338, "pct017");
        pictoStar(230322, "pct011");
        pictoStar(232179, "pct016");
        pictoStar(234099, "pct000");
        pictoStar(236147, "pct017");
    
    };


var ani = setInterval(pictocompi,100);

















