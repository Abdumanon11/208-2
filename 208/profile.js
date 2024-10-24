
document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.textContent = 'About Facebook 2';

    const paragraph = document.createElement('p');
    paragraph.textContent = "Facebook (Фе́йсбу́к[3], [ˈfeɪsˌbʊk]) — крупнейшая социальная сеть в мире[4], которой владеет компания Meta (до 28 октября 2021 года — Facebook Inc.). Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете[5] — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.Первоначально веб-сайт был назван Thefacebook и был доступен только для студентов Гарвардского университета, затем регистрацию открыли для других университетов Бостона, а затем — и для студентов любых учебных учреждений США, имеющих электронный адрес в домене .edu. Начиная с сентября 2006 года сайт доступен для всех пользователей Интернета в возрасте от 13 лет, имеющих адрес электронной почты.Facebook входит в пятёрку наиболее посещаемых веб-сайтов мира. На апрель 2017 года месячная аудитория сети составляет 1,968 миллиарда человек[6]. На июнь 2017 года аудитория Facebook’а составила 2 миллиарда пользователей[1] — это те, кто заходил на сайт хотя бы раз в месяц или за указанный промежуток времени был зафиксирован с помощью кнопки Like и следящих cookie[7]. Суточная активная аудитория в марте составила 720 миллионов человек — столько фиксируется следящей сетью Facebook’а ежедневно. 24 августа 2015 года число посетителей социальной сети Facebook впервые составило один миллиард человек[8]. 1,03 млрд человек в месяц используют мобильное приложение Facebook[9]. Каждый день в социальной сети пользователи оставляют 6 миллиардов «лайков»[10] и комментариев и публикуют 300 миллионов фотографий. На сайте зафиксировано 200 миллиардов «дружеских связей»[10]. Количество просмотров страниц сайта в октябре 2011 года составило 1 триллион[11], количество просмотров видео на сайте достигло в 2015 году отметки в 8 миллиардов в день[12].";

    const button = document.createElement('a');
    button.className = 'button';
    button.href = '/index.html'; 
    button.textContent = 'На главную';
   

    container.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(button);
    document.body.appendChild(container);
});