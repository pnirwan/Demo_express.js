//simple function that render the views
exports.index = function (req, res){

    //passing json object that rep. view model (passing some info to view, data we want to sent bck to view)
    res.render('home/index', { title: 'Home page', paragraph: 'Welcome to first home page' });
};

exports.contact = function (req, res){

    //passing json object that rep. view model (passing some info to view, data we want to sent bck to view)
    res.render('home/contact', { email: "sales@primarymodules.com", telephone: "+1 647 476 2711"});
};


