var visable = false;

var anumation_hide = [
    {id: "#je", fadeout: 100, timeout: 100, hide: false},
    {id: "#cb", fadeout: 100, timeout: 100, hide: false},
    {id: "#ca", fadeout: 100, timeout: 100, hide: false},
    {id: "#li", fadeout: 100, timeout: 100, hide: false},
    {id: "#bl", fadeout: 100, timeout: 100, hide: false},
    {id: "#sh", fadeout: 100, timeout: 100, hide: false},
    {id: "#o_p", fadeout: 100, timeout: 100, hide: false},
    {id: "#clock", fadeout: 100, timeout: 100, hide: false},
    {id: "#dadgostari_s", fadeout: 100, timeout: 100, hide: true},
    {id: "#taxi_s", fadeout: 100, timeout: 100, hide: true},
    {id: "#news_s", fadein: 100, timeout: 100, show: true},
    {id: "#mechanic_s", fadein: 100, timeout: 100, show: true},
    {id: "#doctor_s", fadein: 100, timeout: 100, show: true},
    {id: "#police_s", fadein: 100, timeout: 100, show: true},
    {id: "#sheriff_s", fadein: 100, timeout: 100, show: true},
    {id: "#wlc", fadein: 100, timeout: 100, show: false},
    {id: "#logo", fadein: 100, timeout: 100, show: false},
    {id: "#scoreboard", fadein: 100, timeout: 100, show: true},

]

var anumation_show = [
    {id: "#scoreboard", fadein: 100, timeout: 100, show: false},
    {id: "#logo", fadein: 100, timeout: 100, show: false},
    {id: "#wlc", fadein: 100, timeout: 100, show: false},
    {id: "#police_s", fadein: 100, timeout: 100, show: true},
    {id: "#sheriff_s", fadein: 100, timeout: 100, show: true},
    {id: "#doctor_s", fadein: 100, timeout: 100, show: true},
    {id: "#mechanic_s", fadein: 100, timeout: 100, show: true},
    {id: "#news_s", fadein: 100, timeout: 100, show: true},
    {id: "#taxi_s", fadein: 100, timeout: 100, show: true},
    {id: "#dadgostari_s", fadein: 100, timeout: 100, show: true},
    {id: "#clock", fadein: 100, timeout: 100, show: false},
    {id: "#o_p", fadein: 100, timeout: 100, show: false},
    {id: "#sh", fadein: 100, timeout: 100, show: false},
    {id: "#bl", fadein: 100, timeout: 100, show: false},
    {id: "#cb", fadein: 100, timeout: 100, show: false},
    {id: "#ca", fadein: 100, timeout: 100, show: false},
    {id: "#li", fadein: 100, timeout: 100, show: false},
    {id: "#je", fadein: 100, timeout: 100, show: false},
]

function hide_el(id, fadeout, timeout, hof){
    setTimeout(function(){
        if (hof){
            $(id).hide(fadeout);
        }else{
            $(id).fadeOut(fadeout);
        }
    },timeout);
}

function show_el(id, fadeout, timeout, sof){
    setTimeout(function(){
        if (sof){
            $(id).show(fadeout);
        }else{
            $(id).fadeIn(fadeout);
        }
    },timeout);
}

function menu_hide(){
    for (i = 0; i < anumation_hide.length; i++) {
        hide_el(anumation_hide[i]['id'], anumation_hide[i]['fadeout'], anumation_hide[i]['timeout'], anumation_hide[i]['hide'])
    }
}

function menu_show(){
    for (i = 0; i < anumation_show.length; i++) {
        show_el(anumation_show[i]['id'], anumation_show[i]['fadein'], anumation_show[i]['timeout'], anumation_show[i]['show'])
    }
}

$(document).ready(function(){
    for (i = 0; i < anumation_show.length; i++) {
        $(anumation_show[i]['id']).css("display", "none");
    }
})


$(function () {
	window.addEventListener('message', function (event) {

		switch (event.data.action) {
			case 'toggle':
                $('body').css({'display':'block'})
				if (visable) {
                    menu_hide()
				} else {
                    menu_show();
				}

				visable = !visable;
				break;

			case 'close':
				$('#scoreboard').fadeOut();
				visable = false;
				break;

			case 'updatePlayerJobs':
				var jobs = event.data.jobs;

				$('#player_count').html(jobs.player_count);

				$('#ems').html(jobs.ems);
				$('#police').html(jobs.police);
                $('#sheriff').html(jobs.sheriff);
				$('#taxi').html(jobs.taxi);
				$('#mechanic').html(jobs.mechanic);
				$('#dadgostari').html(jobs.dadgostari);
				$('#news').html(jobs.weazel);
				break;

			case 'updatePlayerList':
                var count = event.data.players
				$('#online_p').html(count);
				break;

			case 'updatePoliceCount': // #e94444 | #4fca4f
				var count = event.data.policeCount;
				if (count >= 8) {
                    $('.div-block-3-dup').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup2').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup3').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup4').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup5').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup6').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
					// 4 green
				} else if (count >= 6) {
                    $('.div-block-3-dup').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup2').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup4').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup3').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup5').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup6').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
					// 3 green 1 red
				} else if (count >= 4) {
                    $('.div-block-3-dup').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup2').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup3').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup4').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup5').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup6').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
					// 2 green 2 red
				} else if (count >= 2) {
                    $('.div-block-3-dup').css({'background-color':'rgba(17, 189, 94, 0.83)','box-shadow':'0 0 7px 0 #11bd5e'})
                    $('.div-block-3-dup2').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup3').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup4').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup5').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup6').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
					// 1 green 3 red
				} else {
                    $('.div-block-3-dup').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup2').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup3').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup4').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup5').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
                    $('.div-block-3-dup6').css({'background-color':'rgba(233, 16, 41, 0.83)','box-shadow':'0 0 7px 0 #b81212'})
				}
				break;


			case 'updateServerInfo':
				if (event.data.maxPlayers) {
					$('#max_players').html(event.data.maxPlayers);
				}

				if (event.data.playTime) {
					$('#server_time').html(event.data.playTime);
				}

				break;

			default:
				//console.log('esx_scoreboard: unknown action!');
				break;
		}
	}, false);
});
