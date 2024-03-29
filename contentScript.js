function insertPoopButton() {
  var textarea = document.querySelector("#note_note:not(.textarea-with-poop)");

  var poopButton = document.createElement('button');
  poopButton.innerHTML = '💩';

  poopButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var comment = comments[Math.floor(Math.random() * comments.length)];

    var textareaPrefix = textarea.value ? '\n' : '';
    textarea.value += textareaPrefix + comment + ' 💩';
  }, false);

  textarea.parentNode.insertBefore(poopButton, textarea.nextSibling);
  textarea.classList.add('textarea-with-poop');
}

var observer = new MutationObserver(function (mutations) {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;

      if (node.matches('#note_note')) {
        insertPoopButton();
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true });


var comments = [
  "Код говно.",
  "Это надо переписать.",
  "Ты чем вообще думаешь?",
  "Так никто не пишет.",
  "Ебанёт.",
  "И как это поддерживать?",
  "Пиздец!",
  "Ебать ну и хуйня!",
  "Ты пидор и точка.",
  "Мы же полгода назад устно договаривались не делать так.",
  "Я это ревьюить больше не буду, ищи кого-нибудь ещё.",
  "Ты этот говнокод из своего днк взял?",
  "Обезьяну посади - сделает лучше!",
  "Ты вообще чтоли животное?",
  "Господь дал нам интеллект, но ты, я смотрю, от подарков отказываешься",
  "Ещё раз так сделаешь - я тебя найду",
  "Маме твоей вечером покажу это, если не исправишь.",
  "Неудивительно, что от тебя отец ушёл.",
  "Если бы я просто на клавиатуру сел - было бы также, как у тебя.",
  "Если ты считаешь, что это ок, то как ты вообще дверь открываешь?",
  "Буду просить, чтобы тебя повысили, так как тебе нужны деньги на лечение.",
  "Да я о твоей ориентации давно догадался, можешь расслабиться.",
  "Из KFC сбежал какой-то недожаренный петух и пытается это вкомитить.",
  "Из-за тебя я всегда работу найду, спасибо!",
  "А сначала казался нормальным человеком…",
  "В следующий раз буду смотреть это до обеда.",
  "У меня от этого говна зрение на единицу село.",
  "Твои пр- это артхаус.",
  "Давай ты больше не будешь шутить в пулл реквестах?",
  "У твоих родителей есть живые дети?",
  "Если бы мы сидели в комнате с в комнате с Гитлером и Сталиным,у меня было бы два патрона,то я бы за такое выстрелил в тебя дважды",
  "Что общего между художественным фильмом «two girls one cup» и этим ПР? И там, и тут жрут говно",
  "Жаль отменили смертную казнь.",
  "Тебе вообще людей не жалко?",
  "Когда читаю твой код, то постоянно чихаю, потому что у меня аллергия на чушь!",
  "Я, конечно, не гинеколог, но это пизда!",
  "Ты вообще в курсе, что это все видят?",
  "Ты не говорил, что с цирковым прошлым",
  "После этого пр не забудь руки помыть",
  "И давно это с тобой?",
  "Уважаемый, еб вашу мать, вам там нормально?",
  "Извините, а адекватность выйдет?",
  "Ну, ты хотя бы пытался!",
  "Лучше бы собаку завели",
  "Думать - не твоя сильная сторона",
  "Ты молодец(нет)",
  "Когда бог раздавал мозги, то ты, похоже, стоял между утконосом и голубем",
  "Когда я говорю, что это говнокод даже голуби головой кивают",
  "Твои пулл реквесты - это комедия, а последний и вовсе триллер",
  "Кошечка говорит мяу, коровка говорит му, я говорю ты ебанутый такое писать?",
  "H-водород, С-углерод, O- иди переписывай, урод",
  "Ты не узнавал, этот стиль и подход - заразный? ",
  "Если бы у меня не было высшего образования, я бы не понял ни строчки, молодец!",
  "Ты на 1xbet за машин против человечества поставил?",
  "Ты доказательство того, что человечество обречено",
  "Открыл сейчас этот твой код и в городе ввели чрезвычайные ситуации техногенного характера",
  "Жаль, что у тебя кончился испытательный срок!",
  "Я бы мог сейчас с тобой согласиться, но тогда мы оба будем не правы",
  "Ты, я смотрю, и с дипломом, программер хуевый, иди на завод делать рубанок новый",
  "У нас в проекте была проблема с производительностью, но я смотрю у нас есть кое-что хуже",
  "Я понимаю, тяжелое детство, никто не любил, но нас то за что?",
  "Ты читал вообще то, что написал? Или тоже не смог?",
  "Твой код как лук, когда смотрю на него - плакать хочется",
  "В каком переходе диплом покупал - там и жить будешь после такого",
  "Если это увидит тимлид, то на его похороны ты будешь скидываться",
  "В этой программе я вижу только одну ошибку - ее автора",
  "Понял почему ты вечно в наушниках - чтобы окончательно не потерять остатки мозгов",
  "Твой код, как мой любимый сериал - это просто клиника",
  "Я смотрю ты думаешь, что эксепшон - не зубы, вылетит, не поймаешь?",
  "Продолжай коммитить, когда нибудь тебе повезет",
  "Твой пулл реквест - это компост",
  "Это кодогенеарция?",
  "Верни обратно как было, пока никто не видел",
  "Мы пишем в парадигме, где тебе, похоже не место",
  "Не буду писать ничего плохого, так как иначе это будет расценено как жёсткое обращение с животными",
  "Ты талант! Так плохо написать не каждый может.Да и не каждому надо",
  "Ни на что не намекаю, но ты тупой?",
  "Судя по тому, что я увидел, секрет твоей диеты в том, что ты вилкой суп ешь",
  "Можешь назвать год, когда ты последний раз думал? Это было до рождества Христова?",
  "Тех, кто так таски закрывает, я бы сам на пару лет бы закрыл",
  "Вот поэтому горшок и умер",
  "Знаешь, есть такой принцип AHA, так вот ты пошёл дальше и все что я могу написать это AHAHAHA",
  "В тихом омуте, как говорится",
  "Рекомендую прочесть книжку по архитектуре до того, как она физически в вашу голову войдёт",
  "Если бы я писал тебе характеристику, то в слове «профнепригодность» я бы «проф» вообще убрал бы",
  "Все мы, кто смотрел на эту работу, получили практически физический ущерб организму.",
  "Когда смотрел пр выключили электричество, но код настолько плох, что напряжение осталось",
  "Есть разные виды инъекций, dependency injection, sql injection, так вот после того, что я прочитал - по ебалу injection хочется сделать",
  "Если не удалишь этот кусок, то я принесу соломы и будет точно как в хлеву.",
  "Мне импонирует твой стиль разработки «смотрите как не надо делать», но даже это уже перебор",
  "Интеллектуальное поражение",
  "Это фиаско, господа",
  "Хуже, чем очень плохо",
  "Если ты так и дальше продолжишь писать, то при следующей major сборки тебя garbage collector соберет",
  "Лучше бы ты просто выгорел",
  "У тебя есть inteliji idea, у меня есть idea и моя идея - вообще это не мерджить",
  "Ты первый человек на земле с однозначным значением IQ? Других объяснений этому я пока не вижу.",
  "Такое впечатление, что сюда ядерная ракета попала, что вообще здесь произошло?",
  "Этот код не завелся, но зато завел меня.",
  "Пора заканчивать это блядство."
];