$(document).ready(function () {

    const form = $('form');
    form.on('submit', formSend);

    async function formSend (event) {
        event.preventDefault();

        let name = $('input[name=name]'),
        name_text = name.val(),
        email = $('input[name=email]'),
        email_text = email.val();
        
        $.ajax({
            url:'https://formspree.io/f/xqkwzleo',
            method:'POST',
            data: {
                name: name_text,
                email: email_text
            },
            dataType: 'json'
        }).done(function(){
            alert('Данные отправлены');
            form.trigger('reset')
        }).fail(function(){
            alert('Ошибка')
        })
    };


    copies();
    visitors();

});

let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let copies = () => {
    let el = $(".slots .pin");
    let left = +($(el).html());

    left = left > 5 ? left - rand(1, 3) : left - rand(-2, 2);
    if (left < 2) {
        $(el).html(1);
    } else {
        $(el).html(left);
    };

    setTimeout('copies()', rand(9000, 13000));
};

let visitors = () => {
    let el = $(".online .pin");
    let left = +($(el).html());
    let start = left - 20;
    let end = left + 20;
    if (start < 100) {
        start = left;
    };
    if (end > 200) {
        end = left;
    };
    $(el).html(rand(start, end));
    setTimeout('visitors()', rand(3000, 13000));
};