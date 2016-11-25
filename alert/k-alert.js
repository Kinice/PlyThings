(function(window, $){

	var HTML = {
        ovl: '<div id="pop-mask"></div>' + '<div id="pop-container">' + '<div class="pop-main"></div>' + '<div class="pop-btn"></div>' + '</div>',
        alert: '<input type="button" value="确定">',
        confirm: '<input type="button" value="取消">' + '<input type="button" value="确定">'
    }

	function winPop(){
		var config = {};
		this.get = function(n){
			return config[n];
		};
		this.set = function(n, v){
			config[n] = v;
		}
		this.init();
	}

	winPop.prototype = {

		init: function(){

		},

		createDom :function(){
			var $body = $('body'),
				$ovl = $('#pop-container');

			if($ovl.length === 0){
				$body.append(HTML.ovl);
			}

			this.set('ovl', $('#pop-container'));
			this.set('mask', $('#pop-mask'));
		},

		bindEvent: function(){
			var that = this,
				$ovl = this.get('ovl'),
				$mask = this.get('ovl');

			$ovl.on('click', '.alertBtn', function(e){
				that.hide();
			});

			$ovl.on('click', '.confirmTrue', function(e){
				var cb = that.get('confirmBack');

				that.hide();

				cb && cb(true);
			});

			$ovl.on('click', '.confirmFalse', function(e){
				var cb = that.get('confirmBack');

				that.hide();

				cb && cb(false);
			});

			$mask.on('click', function(e){
				that.hide();
			});

			$(document).on('keyup', function(e) {
				var kc = e.keyCode,
					cb = that.get('confirmBack');

				console.log(e);

				if(kc === 27) {
					that.hide();
				}else if(kc === 13) {
					that.hide();
					if(that.get('type') === 'confirm') {
						cb && cb(true);
					}
				}
			});
		},

		alert: function(str, btnstr){
			var str = typeof str === 'string' ? str.stoString(),
				$ovl = this.get('ovl');

			this.set('type','alert');
			$ovl.find
		},

		confirm: function(){

		},

		show: function(){

		},

		hide: function(){

		},

		destory: function(){

		}
	}
})(window, $);