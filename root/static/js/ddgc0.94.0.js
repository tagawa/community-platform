function set_url_to_redirect(a){a.href="/redir/?u="+encodeURIComponent(a.href)}function showFormAddUserLanguage(){$("#formAddUserLanguage").fadeIn(),$("#btnAddNewLanguage").fadeOut()}function validateFormAddUserLanguage(){return selectedLanguage=$("#language_id :selected").text().substring(16,21),-1!=$.inArray(selectedLanguage,userLanguages)?!1:!0}function validateFormGravatar(){return""==$("#gravatar_email").val()?($("#error_gravatar_invalid_email").fadeIn(),!1):!0}function validateFormLogin(){return""===$("#username").val()||""===$("#password").val()?($("#invalidForm").fadeIn(),!1):!0}function showLanguageBox(){return"none"==$("#languageBox").css("display")?($("#languageBox").slideDown(),$("#btnChooseLanguage").html("&#9650;")):($("#languageBox").slideUp(),$("#btnChooseLanguage").html("&#9660;")),!1}$(document).ready(function(){function a(a){a.not(".fb-step--optional").addClass("fb-step--active"),a.find(".js-fb-step__toggle").toggleClass("fb-step__toggle--hide"),a.find(".js-fb-step__input").focus(),a.find(".js-fb-step__arrow").toggleClass("ddgi-arrow-left").toggleClass("ddgi-arrow-up"),a.unbind("click")}function b(a,b,c){var d=c.val();if(document.selection)c.focus(),sel=document.selection.createRange(),sel.text=a+sel.text+b;else if(c[0].selectionStart||"0"==c[0].selectionStart){c.focus();var e=c[0].selectionStart,f=c[0].selectionEnd;d=d.substring(0,e)+a+d.substring(e,f)+b+d.substring(f,d.length)}else d+=a+b;c.val(d),c.focus()}$(".no-js").addClass("js").removeClass("no-js"),$(".js-remove").remove(),$(".comment.tier1-new .comment_reply, .thread-wrap .comment_reply").removeClass("js-hide"),$(".thread-wrap .comment_reply").toggleClass("hide"),$(".text").addPlaceholder(),$(".token-input").addPlaceholder(),$(".token-input").change(function(){$(".token-submit").removeClass("js-hide")}),$(".js-bbcode").bbcode(),$("select.language_grade, select.language_select, select.js-select").select2({placeholder:$(this).data("placeholder"),minimumResultsForSearch:10}),$(".paging-menu select, .js-select-simple").select2({minimumResultsForSearch:99}),$(".hide-translations").click(function(a){$(this).parent().addClass("hide").siblings(".current-translations-min").removeClass("hide"),a.preventDefault()}),$(".add-translations").click(function(a){$(this).parent().addClass("hide").siblings(".current-translations-min").removeClass("hide"),$(this).parents("fieldset.row").children(".user-translation").removeClass("js-hide"),$(".token-submit").removeClass("js-hide"),a.preventDefault()}),$(".show-translations").click(function(a){$(this).parent().addClass("hide").siblings(".current-translations").removeClass("hide"),$(this).parents("fieldset.row").children(".user-translation").addClass("js-hide"),$(".token-submit").addClass("js-hide"),a.preventDefault()}),$(".comment-toggle").click(function(a){$(this).closest(".comment").toggleClass("min").toggleClass("max"),a.preventDefault()}),$("a[href^='http']").mousedown(function(){current_hostname=location.hostname,current_hostname.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),hostname_re=new RegExp("^https?:\\/\\/(\\w+\\.)?(duckduckgo\\.com|"+current_hostname+")"),-1===this.href.search(hostname_re)&&set_url_to_redirect(this)}),$(".autosubmit").change(function(){$(this).parents("form").submit()}),$(".js-palm-toggle").click(function(a){a.preventDefault(),$(this).siblings(".palm-hide").toggle(),$(this).toggle()}),$(".js-toggle-sibling").click(function(a){a.preventDefault();var b=$(this).parent().find(".is-closed, .is-open");$(b).hasClass("is-open")?b.addClass("is-closed").removeClass("is-open"):($(this).hasClass("is-exclusive")&&$(this).parent().parent().find(".is-open").addClass("is-closed").removeClass("is-open"),b.toggleClass("is-closed").toggleClass("is-open"))}),$(".content-box-toggleclick").each(function(){var a=$(this).toggleClass("is-closed"),b=$(this).children(".body").hide();$(this).children(".head").click(function(){a.hasClass("only")&&$(".content-box-toggleclick").each(function(){$(this).is(a)||($(this).removeClass("is-open").addClass("is-closed"),$(this).children(".body").hide("fast"))}),b.toggle("fast"),a.toggleClass("is-closed"),a.toggleClass("is-open")})}),$(".content-box-click").addClass("is-open").toggleClass("is-closed"),$(".content-box-click").children(".body").toggle();var c=document.location.hash,d=$("#"+c.slice(1));d.length&&d.parent().hasClass("comment")&&d.parent().addClass("comment--highlight"),$(".js-fb-step--deactivate").parent().removeClass("fb-step--active"),$(".js-fb-step").on("change, click",function(){$(this).find(".js-fb-step__input").focus()}),$(".js-fb-step__input").change(function(){var a="";a=$(this).val(),$(this).parents(".js-fb-step").find(".js-fb-step__output").text(a)}),$(".js-fb-step__input").blur(function(){if(""!=$(this).val()){var b=$(this).parents(".js-fb-step");b.removeClass("fb-step--active"),b.removeClass("fb-step--error"),b.find(".js-fb-step__toggle").toggleClass("fb-step__toggle--hide"),b.find(".js-fb-step__arrow").toggleClass("ddgi-arrow-left").toggleClass("ddgi-arrow-up"),b.bind("click",function(){var b=$(this);a(b)})}}),$(".js-fb-step--toggle").click(function(){var b=$(this);a(b)}),$("div#set_gravatar_email").hide(),$("a#add_gravatar_email").click(function(){$("div#set_gravatar_email").show()}),$("a.vote_link, .js-vote-link").click(function(a){a.preventDefault();var b=$(this).siblings().first(),c=$(this).parent(),d=$(this);$.ajax({url:$(this).attr("href"),beforeSend:function(a){c.append('<img class="loading-image"src="/static/images/ajax-loader.gif"/>')},success:function(a){c.children(".loading-image").hide(),c.toggleClass("voted"),d.children(":first").toggleClass("checked"),d.attr("href").match(/vote\/1/)?d.attr("href",d.attr("href").replace(/vote\/1/,"vote/0")):d.attr("href").match(/vote\/0/)&&d.attr("href",d.attr("href").replace(/vote\/0/,"vote/1")),b.html(a.vote_count)}})}),$("a.finishwizard").click(function(a){a.preventDefault();var b=$(this);$.ajax({url:b.attr("href"),beforeSend:function(a){b.replaceWith('<img class="loading-image"src="/static/images/ajax-loader.gif"/>')},success:function(a){$("#wizard_running_info").remove()}})}),$("a.email_verify").click(function(a){a.preventDefault();var b=$(this);$.ajax({url:b.attr("href"),beforeSend:function(a){b.html('Verify <img class="loading-image"src="/static/images/ajax-loader.gif"/>')},success:function(a){$("a.email_verify").remove()}})}),$("a.campaign_nothanks").click(function(a){a.preventDefault();var b=$(this);$.ajax({url:b.attr("href"),beforeSend:function(a){b.replaceWith('<img class="loading-image"src="/static/images/ajax-loader.gif"/>')},success:function(a){$("#campaign_info").remove()}})}),$("a.checkfalse_link").click(function(a){a.preventDefault();var b=$(this).parent();$.ajax({url:$(this).attr("href"),beforeSend:function(a){b.html('<img class="loading-image"src="/static/img/ajax-loader.gif"/>')},success:function(a){var c=a.check_result?"VALID":"INVALID";b.html('<div class="button">'+c+"</div>")}})}),$("a.notification__close").click(function(a){a.preventDefault();var b=$(this).parent().parent();$.ajax({url:$(this).attr("href"),beforeSend:function(a){b.find("div.notification").addClass("notification--close")},success:function(a){b.hide("slow",function(){b.remove()})}})}),$("a.moderation__close").click(function(a){a.preventDefault();var b=$(this).parent().parent();b.css("background-color","red"),$.ajax({url:$(this).attr("href"),beforeSend:function(a){b.addClass("notification--close")},success:function(a){a.ok?b.hide("slow",function(){b.remove()}):(a.error&&alert(a.error),b.removeClass("notification--close"))}})}),$("a.report__close").click(function(a){a.preventDefault();var b=$(this).parent().parent();b.css("background-color","red"),$.ajax({url:$(this).attr("href"),beforeSend:function(a){b.addClass("notification--close")},success:function(a){a.ok?b.hide("slow",function(){b.remove()}):(a.error&&alert(a.error),b.removeClass("notification--close"))}})}),$(".js-thread-reply").click(function(a){a.preventDefault(),$(this).siblings(".js-thread-cancel").toggleClass("hide"),$(this).toggleClass("hide"),$(this).parents(".thread").parent().children(".comment_reply").removeClass("hide")}),$(".js-thread-cancel").click(function(a){a.preventDefault(),$(this).siblings(".js-thread-reply").toggleClass("hide"),$(this).toggleClass("hide"),$(this).parents(".thread").parent().children(".comment_reply").addClass("hide")}),$(".js-comment-reply, .js-comment-cancel").click(function(a){var b,c,d;a.preventDefault(),b=$(this).attr("data-target"),b&&(c=$(".js-reply_"+b),$(".js-cancel_link_"+b).toggleClass("hide"),$(".js-reply_link_"+b).toggleClass("hide"),$(this).hasClass("js-comment-reply")&&(c.removeClass("js-hide").children(".comment_reply").removeClass("js-hide"),c.find(".text").focus(),$(document).scrollTop()>c.offset().top&&(d=c.offset().top-50,$("body").animate({scrollTop:d},"fast"))),$(this).hasClass("js-comment-cancel")&&c.addClass("js-hide"))}),$("a.comment_expand_link").click(function(a){a.preventDefault(),$(this).parent().html($(this).next(".comment_expanded_content").html())}),$("div").on("click",".notice .close",function(a){$(this).parent().fadeOut()}),"undefined"!=typeof userHasLanguages&&userHasLanguages&&($("#btnAddNewLanguage").show(),$("#formAddUserLanguage").hide(),$("table.account-table [id^=update_]").hide()),$("table.account-table").each(function(){$(this).on("change","select",function(){grade=$("option:selected",this).val(),language=$(this).attr("id").substring(6),href="?add_user_language="+language,href+="&grade="+grade,$("#update_"+language).fadeIn(),$("#update_"+language).attr("href",href)})}),"undefined"!=typeof breadcrumb_right&&"language"==breadcrumb_right&&$("#languageBox").hide(),$("*[data-bbcode]").click(function(a){a.preventDefault();var c=$(this).parent().parent().find("textarea"),d=$(this).attr("data-bbcode"),e="["+d+"]",f="[/"+d+"]",g="";if("img"==d){if(g=prompt("Enter image URL","http://"),!g)return;e+=g}else if("url"==d){if(g=prompt("Enter URL","http://"),!g)return;e="[url href="+g+"]"}b(e,f,c)}),$(".has-bbcode").keydown(function(a){return 66!=a.which&&73!=a.which&&85!=a.which||!a.ctrlKey||a.shiftKey?void 0:(a.preventDefault(),66==a.which&&b("[b]","[/b]",$(this)),73==a.which&&b("[i]","[/i]",$(this)),85==a.which&&b("[u]","[/u]",$(this)),!1)}),$(".js-report-content").on("click",function(a){var b=$(this).attr("data-reveal-id"),c=$("#"+b),d=$(this).attr("data-context-id"),e=$(this).attr("data-context"),f=c.find(".js-context"),g=c.find(".js-context-id");d!==g.val()&&(f.val(e),g.val(d),c.find(".radio").removeAttr("checked"))}),function(a){a(".js-reveal, a[data-reveal-id]").on("click",function(b){if(b.preventDefault(),a(this).attr("data-reveal-id")){var c=a(this).attr("data-reveal-id");a("#"+c).reveal(a(this).data())}}),a.fn.reveal=function(b){var c={animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:!0,dismissmodalclass:"close-modal"},b=a.extend({},c,b);return this.each(function(){function c(){g=!1}function d(){g=!0}var e=a(this),f=parseInt(e.css("top")),g=(e.height()+f,!1),h=a(".reveal-modal-bg");0==h.length&&(h=a('<div class="reveal-modal-bg" />').insertAfter(e)),e.bind("reveal:open",function(){h.unbind("click.modalEvent"),a("."+b.dismissmodalclass).unbind("click.modalEvent"),g||(d(),("fadeAndPop"==b.animation||"popDown"==b.animation)&&("fadeAndPop"==b.animation?top_amnt="20%":top_amnt=0,e.css({opacity:0,visibility:"visible"}),h.fadeIn(b.animationspeed/2),e.delay(b.animationspeed/2).animate({top:top_amnt,opacity:1},b.animationspeed,c())),"fade"==b.animation&&(e.css({opacity:0,visibility:"visible"}),h.fadeIn(b.animationspeed/2),e.delay(b.animationspeed/2).animate({opacity:1},b.animationspeed,c())),"none"==b.animation&&(e.css({visibility:"visible"}),h.css({display:"block"}),c())),e.unbind("reveal:open"),b.lazyload&&e.attr("src",e.data("src"))}),e.bind("reveal:close",function(){g||(d(),("fadeAndPop"==b.animation||"popDown"==b.animation)&&(h.delay(b.animationspeed).fadeOut(b.animationspeed),"fadeAndPop"==b.animation?top_amnt="-100%":top_amnt="-200%",e.animate({top:top_amnt,opacity:0},b.animationspeed/2,function(){e.css({top:f,opacity:1,visibility:"hidden"}),c()})),"fade"==b.animation&&(h.delay(b.animationspeed).fadeOut(b.animationspeed),e.animate({opacity:0},b.animationspeed,function(){e.css({opacity:1,visibility:"hidden",top:f}),c()})),"none"==b.animation&&(e.css({visibility:"hidden",top:f}),h.css({display:"none"}))),e.unbind("reveal:close")}),e.trigger("reveal:open");a("."+b.dismissmodalclass).bind("click.modalEvent",function(){e.trigger("reveal:close")});b.closeonbackgroundclick&&(h.css({cursor:"pointer"}),h.bind("click.modalEvent",function(){e.trigger("reveal:close")})),a("body").keyup(function(a){27===a.which&&e.trigger("reveal:close")})})}}(jQuery)}),function(a){a.fn.bbcode=function(b){var b=a.extend({tag_bold:!0,tag_italic:!0,tag_underline:!0,tag_link:!0,tag_image:!0,tag_code:!0,button_icon:!0},b||{}),c='<div class="comment-controls  button-group">';b.tag_bold&&(c+='<button class="button" title="Bold Text (Ctrl+B)" data-bbcode="b">',c+=b.button_icon?'<i class="icon-bold"></i>':"Bold",c+="</button>"),b.tag_italic&&(c+='<button class="button" title="Italic Text (Ctrl+I)" data-bbcode="i">',c+=b.button_icon?'<i class="icon-italic"></i>':"Italic",c+="</button>"),b.tag_underline&&(c+='<button class="button  palm-hide" title="Underline Text (Ctrl+U)" data-bbcode="u">',c+=b.button_icon?'<i class="icon-underline"></i>':"Undescore",c+="</button>"),b.tag_image&&(c+='<button class="button  palm-hide" title="Add an Image" data-bbcode="img">',c+=b.button_icon?'<i class="icon-picture"></i>':"Image",c+="</button>"),b.tag_link&&(c+='<button class="button" title="Add a Link" data-bbcode="url">',c+=b.button_icon?'<i class="icon-link"></i>':"Link",c+="</button>"),b.tag_code&&(c+='<button class="button  palm-hide" title="Add Example Code (Ctrl+ALT+DEL) --haha just hidding" data-bbcode="code">',c+=b.button_icon?'<i class="icon-code"></i>':"Code",c+="</button>"),c+="</div>",a(this).addClass("has-bbcode"),a(this).after(c)}}(jQuery),$(document).ready(function(){$("#mail1").submit(function(a){a.preventDefault();var b=$("#mail1").serialize();$.ajax({url:"/campaign/respond",data:b,type:"POST",success:function(a){$("#mailform"+a.campaign_id).addClass("hide"),$("#returndate").html(a.return_on),$("#thankyou1").removeClass("hide")},error:function(a){jsondata=jQuery.parseJSON(a.responseText),"undefined"==typeof jsondata.errstr?$("#mailerr1").html('<i class="icn icon-warning-sign"></i>Sorry, an unknown error occurred. Please try again later.').addClass("notice"):$("#mailerr1").html('<i class="icn icon-warning-sign"></i>'+jsondata.errstr).addClass("notice")}})}),$("#mail2").submit(function(a){a.preventDefault();var b=$("#mail2").serialize();$.ajax({url:"/campaign/respond",data:b,type:"POST",success:function(a){$("#mailform"+a.campaign_id).addClass("hide"),$("#couponcode").html(a.coupon),$("#thankyou2").removeClass("hide")},error:function(a){jsondata=jQuery.parseJSON(a.responseText),"undefined"==typeof jsondata.errstr?$("#mailerr2").html('<i class="icn icon-warning-sign"></i>Sorry, an unknown error occurred. Please try again later.').addClass("notice"):$("#mailerr2").html('<i class="icn icon-warning-sign"></i>'+jsondata.errstr).addClass("notice")}})})});