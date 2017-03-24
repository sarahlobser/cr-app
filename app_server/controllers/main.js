module.exports.index = function(req, res){
      res.render('index', {title : 'XSS Ripe'});
};

module.exports.xssplease = function(req, res){
    if(req.body.postInfo){
        var list = [];
        if (req.signedCookies.list){
            list = req.signedCookies.list;
            list.push(req.body.postInfo);
            res.cookie('list', list, {signed : true});
        } else {
            list.push(req.body.postInfo);
            res.cookie('list', list, {signed : true});
        }
    }
    
    res.cookie('secureCookie', {valuable:req.query.getInfo}, {signed:true});
    res.render('xssme', {getInput:req.query.getInfo, 
                         postInput:req.body.postInfo});
};

module.exports.exposeCookies = function(req, res){
    res.send(req.cookies);
};

module.exports.exposeSignedCookies = function(req, res){
    res.send(req.signedCookies);
};
