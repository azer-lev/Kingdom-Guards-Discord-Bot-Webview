module.exports.getHead = function() {
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Upcoming Events - Webview</title><link rel="stylesheet" href="/css/events.css"/><link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous"></head><body><div class="header"><div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed"><a class="pure-menu-heading" href="">Levitation - Webview</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="../index.html" class="pure-menu-link">Home</a></li><li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Events</a></li><li class="pure-menu-item"><a href="tickets.html" class="pure-menu-link">Tickets</a></li></ul></div></div>'
}

module.exports.getFooter = function() {
    return '<div class="content"><div class="pure-g"><div class="l-box-lrg pure-u-1 pure-u-md-3-5"><h4>Contact Us</h4><p>For additional information, bugreports etc please contact azer#1685 on discord or <a href="https://twitter.com/paradad0x">@paradad0x</a> on twitter</p></div></div></div></div></body></html>'
}

module.exports.getContentHead = function() {
    return '<div class="content-wrapper"><div class="content"><table class="pure-table"><thead><tr><th>#</th><th>Event</th><th>Time</th><th>Information</th><th>Created by</th></tr></thead><tbody>'
}

module.exports.getContentBody = function() {
    return '</tbody></table></div>'
}

module.exports.getContent = async function(data) {
    let str = ''
    for(let i = 0; i < data.length; i++) {
        let date = new Date()
        date.setTime(data[i]['event_time'])
        if(i % 2 == 0) {
            str += '<tr class="pure-table-odd">'
        }else {
            str += '<tr>'
        }
        str += '<td>' + data[i]['id'] + '</td>'
        str += '<td>' + data[i]['event_name'] + '</td>'
        str += '<td>' + date.toUTCString() + '</td>'
        str += '<td>' + data[i]['event_information'] + '</td>'
        str += '<td>' + data[i]['created_by'] + '</td>'
        str += '</tr>'
    }
    return str
}