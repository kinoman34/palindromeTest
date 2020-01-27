// Application JS

$(function () {
    
    window.application = {
        
        // Application settings
        settings : {
            debug : false,
            requestUrl : "/request.php",
            selectors : {
                srb : "[data=\"search-result\"]",
                sf : "[data=\"search-form\"]",
                rh : "[data=\"result-head\"]",
                rb : "[data=\"result-block\"]"
            }
        },
        
        // Submit form handler
        doSubmit : function () {
            
            var self = this;
            $(self.settings.selectors.sf).on('submit', function (e) {
                var ajaxParams = {};
                e.preventDefault();
                
                if (!$(self.settings.selectors.srb).hasClass('hide')) {
                    $(self.settings.selectors.srb).addClass('hide');
                }
                
                ajaxParams.url = self.settings.requestUrl;
                ajaxParams.async = true;
                ajaxParams.data = $(this).serialize();
                
                ajaxParams.success = function (r) {
                    
                    if (self.settings.debug) {
                        console.warn('Ajax response on success log');
                        console.log(r);
                    }
                    
                    if (self.isJson(r)) {
                        // success
                        var answer = JSON.parse(r);
                        
                        if (self.settings.debug) {
                            console.warn('Ajax response on success IN OBJECT log');
                            console.log(answer);
                        }
                        
                        if (answer.errors && answer.errors.searchString) {
                            self.sendErrorMsg(answer.errors.searchString[0]);
                        } else if (answer.errors && answer.errors.nulledSearch) {
                                $(self.settings.selectors.srb).toggleClass('hide');
                                self.redrawSearchHeading(0);
                                self.redrawSearchResult([]);
                        } else {
                            if (typeof answer == 'object') {
                                $(self.settings.selectors.srb).toggleClass('hide');
                                self.redrawSearchHeading(answer.length);
                                self.redrawSearchResult(answer);
                            } else {
                                // error
                            }
                        }
                        
                    } else {
                        self.sendErrorMsg('Error on the server answer, please try again later');
                    }
                }
                
                ajaxParams.error = function (r) {
                    
                    if (self.settings.debug) {
                        console.warn('Ajax response on fail log');
                        console.log(r);
                    }
                    
                    self.sendErrorMsg('Error on the server answer, please try again later');
                }
                
                if (self.settings.debug) {
                    console.warn('Ajax params log');
                    console.log(ajaxParams)
                }
                
                $.ajax(ajaxParams);
                
            });
            
        },
        
        // Is JSON type function 
        isJson : function (str) {
            if (typeof str !== 'string') return false;
            try {
                const result = JSON.parse(str);
                const type = Object.prototype.toString.call(result);
                return type === '[object Object]' 
                    || type === '[object Array]';
            } catch (err) {
                return false;
            }
        },
        
        // Send error msg to front
        sendErrorMsg : function (msg) {
            if (typeof msg !== 'string' || msg.length == 0) return false;
            alert(msg);
        },
        
        // Redraw front searching header string
        redrawSearchHeading : function (count) {
            var self = this, resultString = "";
            if (typeof count !== 'number') return false;
            resultString = count > 0 ? 
                self.num2str(count, ["Найден ", "Найдено ", "Найдено "]) + count 
                + self.num2str(count, [" палиндром", " палиндрома", " палиндромов"]) 
                    : 
                "Не найдено ни одного палиндрома";
            $(self.settings.selectors.rh).text(resultString);
        },
        
        // Redraw front searching result block
        redrawSearchResult : function (array) {
            var self = this, numeredHtmlString = "";
            $(self.settings.selectors.rb).empty();
            if (typeof array !== 'object') return false;

            $.each(array, function(i) {
                numeredHtmlString += "<li>" + array[i] + "</li>";
            });
            
            $(self.settings.selectors.rb).html(numeredHtmlString);
        },
        
        // Number ending string function 
        num2str : function (n, forms) {
            n = Math.abs(n) % 100; var n1 = n % 10;
            if (n > 10 && n < 20) { return forms[2]; }
            if (n1 > 1 && n1 < 5) { return forms[1]; }
            if (n1 == 1) { return forms[0]; }
            return forms[2];
        },
        
        // Init function 
        init : function () {
            
            // Debuging mode
            if (this.settings.debug) {
                console.warn('Debuging enabled');
            }
            
            this.doSubmit();
        }
        
    }
});

document.onreadystatechange = function() {
    //check document state is full complete and sources ready
    if (document.readyState == 'complete' && typeof application === 'object') {
        application.init();
    }
};