const hbs = require('hbs'); 
const moment = require('moment');
const { options } = require('./routes.config');

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper('navActive', (navigationPath, expectedPath, options) => {
    return (navigationPath === expectedPath) ? 'active' : '';
});

hbs.registerHelper('elpasedTime', (createdAt, options) => {
    return moment(createdAt).fromNow();
});

hbs.registerHelper('moment', function (date, format) {
    return moment(date).format(format);
 });