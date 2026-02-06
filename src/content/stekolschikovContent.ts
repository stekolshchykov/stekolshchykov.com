export type Locale = "ru" | "en" | "uk";

export interface SourceTexts {
  hi_title: string;
  hi_post_title: string;
  hi_nav: string;
  hi_nav_a: string;
  hi_nav_a2: string;
  hi_nav_a3: string;
  hi_nav_b: string;
  hi_nav_c: string;
  hi_nav_d: string;
  about_me_title: string;
  about_me_post_title: string;
  about_me_info: string;
  about_me_info_full: string;
  contacts_title: string;
  contacts_phone: string;
  cooperation_title: string;
  cooperation_post_title: string;
  cooperation_text: string;
  skills_title: string;
  skills_post_title: string;
  skills_used_recently: string;
  skills_used_before: string;
}

export interface UiTexts {
  personName: string;
  personRole: string;
  welcome: string;
  about: string;
  skills: string;
  cooperation: string;
  contacts: string;
  work: string;
  language: string;
  viewProject: string;
  aboutPhotoAlt: string;
  contactEmail: string;
  contactSkype: string;
  contactTelegram: string;
  workTitle: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface WorkItem {
  title: string;
  url: string;
}

export interface ContactLinks {
  email: string;
  skype: string;
  phone: string;
  telegram: string;
}

export const sourceTexts: Record<Locale, SourceTexts> = {
  "ru": {
    "hi_title": "Привет! Вы находитесь на моем сайте резюме!",
    "hi_post_title": "Сайт представлен в виде куба. Для навигации воспользуйтесь клавишами на клавиатуре или кнопками на экране.",
    "hi_nav": "Навигация:",
    "hi_nav_a": "A - приветствие (Вы сейчас здесь)",
    "hi_nav_a2": "A2 - навыки (для перехода ",
    "hi_nav_a3": "A3 - обо мне (для перехода ",
    "hi_nav_b": "B - сотрудничество (для перехода ",
    "hi_nav_c": "C - контакты (для перехода ",
    "hi_nav_d": "D - фриланс-лента (для перехода ",
    "about_me_title": "Обо мне",
    "about_me_post_title": "Кратко обо мне",
    "about_me_info": "<span class='fb'>Имя</span>: Виталий<br><span class='fb'>Фамилия</span>: Стекольщиков<br><span class='fb'>Год рождения</span>: 1988<br><span class='fb'>Образование</span>: MTU Kerry (Software Development, в процессе)<br><span class='fb'>Страна</span>: Ирландия<br><span class='fb'>Город</span>: Килларни<br><span class='fb'>Статус</span>: Холост",
    "about_me_info_full": "Сейчас я живу в Ирландии, в городе Килларни, и учусь в MTU Kerry по направлению Software Development (программирование).<br><br>На волонтерских началах поддерживаю разработку проекта Oliver School в Килларни: мы делаем удобные цифровые решения для учеников и их водителей.<br><br>Параллельно веду несколько проектов полного цикла — от идеи и дизайна до запуска, коммерческой поддержки и развития.<br><br>Сейчас я сфокусирован на AI-автоматизации и выстраивании автономных машин-сотрудников, которые помогают бизнесу ускорять процессы и масштабировать результат.",
    "contacts_title": "Контакты",
    "contacts_phone": "Телефон",
    "cooperation_title": "Сотрудничество",
    "cooperation_post_title": "В настоящее время сотрудничество осуществляется по следующим направлениям:",
    "cooperation_text": "<div class='col-md-3'><h3>Заказчикам</h3></div><div class='col-md-9'><h3>Предоставляются услуги по веб-программированию низкой и средней сложности. Разработка осуществляется по следующему алгоритму:<ol><li>Заказчик делает заказ и предлагает желаемую цену;</li><li>Если исполнитель может выполнить заказ, он составит техническое задание (ТЗ) вместе с заказчиком. Если исполнитель не может выполнить заказ, он предложит альтернативное решение;</li><li>Исполнитель устанавливает сроки и цену на основе ТЗ;</li><li>Если заказчик согласен с ценой и сроками, работа выполняется по частям (от 4 до 10);</li><li>После оплаты первой части исполнитель приступает к выполнению заказа;</li><li>После завершения каждой части заказчик проверяет ее. Если часть выполнена не полностью, заказчик возвращает ее на доработку;</li><li>Если часть выполнена полностью, заказчик оплачивает вторую часть, и исполнитель приступает к выполнению следующей.</li></ol><em>и так далее.</em></h3></div><div class='col-md-3'><h3>Компаниям</h3></div><div class='col-md-9'><h3>С компаниями возможно сотрудничество с различной степенью занятости. При найме на постоянную работу возможно выполнение ТЗ или стажировка.</h3></div><div class='col-md-3'><h3>Разработчикам</h3></div><div class='col-md-9'><h3>Возможное временное или постоянное сотрудничество со специалистами разных уровней в следующих областях:<ul><li>Дизайн;</li><li>Программирование;</li><li>Маркетинг и информационное продвижение;</li><li>Контент-менеджмент.</li></ul></h3></div><div class='col-md-3'><h3>Благотворительным и некоммерческим организациям</h3></div><div class='col-md-9'><h3>Сотрудничество с благотворительными и некоммерческими организациями может быть осуществлено на бесплатной основе. Подробности такого сотрудничества обсуждаются индивидуально.</h3></div>",
    "skills_title": "Навыки",
    "skills_post_title": "Мои навыки, которые могут вас заинтересовать",
    "skills_used_recently": "Использовались недавно",
    "skills_used_before": "Использовались ранее"
  },
  "en": {
    "hi_title": "Hello! Now you find yourself on my CV website!",
    "hi_post_title": "The site is presented in the form of a cube. To navigate, use the keys on the keyboard or buttons on the screen.",
    "hi_nav": "Navigation:",
    "hi_nav_a": "A - greeting (you are here)",
    "hi_nav_a2": "A2 - skills (to go ",
    "hi_nav_a3": "A3 - about me (to go ",
    "hi_nav_b": "B - collaboration (to go ",
    "hi_nav_c": "C - contacts (to go ",
    "hi_nav_d": "D - freelance-tape (to go ",
    "about_me_title": "About me",
    "about_me_post_title": "Briefly about me",
    "about_me_info": "<span class='fb'>Name</span>: Vitaly<br> <span class='fb'>Surname</span>: Stekolshchykov<br><span class='fb'>Year of birth</span>: 1988<br><span class='fb'>Education</span>: MTU Kerry (Software Development, in progress)<br><span class='fb'>Country</span>: Ireland<br> <span class='fb'>City</span>: Killarney<br> <span class='fb'>Status</span>: Single",
    "about_me_info_full": "I currently live in Killarney, Ireland, and I am studying Software Development at MTU Kerry.<br><br>On a volunteer basis, I support the Oliver School project in Killarney, where we are building practical digital tools for students and their drivers.<br><br>I also run several full-cycle projects — from idea and design to production launch, commercial support, and ongoing growth.<br><br>Right now I am focused on AI automation and building autonomous digital employee systems that help businesses speed up processes and scale outcomes.",
    "contacts_title": "Contacts",
    "contacts_phone": "Phone",
    "cooperation_title": "Collaboration",
    "cooperation_post_title": "Currently, collaboration is performed in the areas as follows:",
    "cooperation_text": "<div class='col-md-3'><h3>Customers</h3></div><div class='col-md-9'><h3>The services for low and medium complexity web programming are provided. The programming is carried out according to the following pattern:<ol><li>A customer makes an order and proposes a preferred price;</li><li>If the executive is able to fulfill the order, they will compile the terms of reference (TOR) together with the customer. If the executive fails to fulfill the order, they will offer an alternative way of its implementation;</li><li>The executive sets the timelines and price based on the TOR;</li><li>If the customer agrees with the price and timelines, the work will be performed in parts (from 4 to 10);</li><li>When the first part is paid, the executive proceeds to implement the order;</li><li>When any part is completed, the customer checks it. If a part is not completed, the customer sends it back for an update;</li><li>If the part is completed, the customer pays for the second one, and after that, the executive starts to implement it.</li></ol><em>and so on and so forth.</em></h3></div><div class='col-md-3'><h3>Companies</h3></div><div class='col-md-9'><h3>Collaboration with companies provides full or partial employment. If a permanent employment is obtained, performance of TOR or probation period is admissible.</h3></div><div class='col-md-3'><h3>Developers</h3></div><div class='col-md-9'><h3>Possible temporary or permanent collaboration with specialists of different levels in the following areas:<ul><li>Design;</li><li>Programming;</li><li>Marketing promotion and information;</li><li>Content management.</li></ul></h3></div><div class='col-md-3'><h3>Charitable and non-profit organizations</h3></div><div class='col-md-9'><h3>Collaboration with charitable and non-profit organizations could be performed on a gratuitous basis. Details of such cooperation are discussed in an individual talk.</h3></div>",
    "skills_title": "Skills",
    "skills_post_title": "My skills that might interest you",
    "skills_used_recently": "Used recently",
    "skills_used_before": "Used before"
  },
  "uk": {
    "hi_title": "Привіт! Ви на моєму сайті резюме!",
    "hi_post_title": "Сайт представлений у вигляді куба. Для навігації скористайтеся клавішами на клавіатурі або кнопками на екрані.",
    "hi_nav": "Навігація:",
    "hi_nav_a": "A - привітання (ви зараз тут)",
    "hi_nav_a2": "A2 - навички (для переходу ",
    "hi_nav_a3": "A3 - про мене (для переходу ",
    "hi_nav_b": "B - співпраця (для переходу ",
    "hi_nav_c": "C - контакти (для переходу ",
    "hi_nav_d": "D - фриланс-стрічка (для переходу ",
    "about_me_title": "Про мене",
    "about_me_post_title": "Коротко про мене",
    "about_me_info": "<span class='fb'>Ім'я</span>: Віталій<br><span class='fb'>Прізвище</span>: Стекольщиков<br><span class='fb'>Рік народження</span>: 1988<br><span class='fb'>Освіта</span>: MTU Kerry (Software Development, у процесі)<br><span class='fb'>Країна</span>: Ірландія<br><span class='fb'>Місто</span>: Кілларні<br><span class='fb'>Статус</span>: Неодружений",
    "about_me_info_full": "Зараз я живу в Ірландії, у місті Кілларні, та навчаюся в MTU Kerry за напрямом Software Development (програмування).<br><br>На волонтерських засадах підтримую розробку проєкту Oliver School у Кілларні: ми створюємо зручні цифрові рішення для учнів і їхніх водіїв.<br><br>Паралельно веду кілька проєктів повного циклу — від ідеї та дизайну до запуску, комерційної підтримки й подальшого розвитку.<br><br>Зараз я сфокусований на AI-автоматизації та побудові автономних машин-співробітників, які допомагають бізнесу прискорювати процеси й масштабувати результат.",
    "contacts_title": "Контакти",
    "contacts_phone": "Телефон",
    "cooperation_title": "Співпраця",
    "cooperation_post_title": "В даний час співпраця здійснюється за наступними напрямками:",
    "cooperation_text": "<div class='col-md-3'><h3>Замовникам</h3></div><div class='col-md-9'><h3>Надаються послуги з веб-програмування низької та середньої складності. Розробка здійснюється за наступним алгоритмом:<ol><li>Замовник робить замовлення та пропонує бажану ціну;</li><li>Якщо виконавець може виконати замовлення, він складе технічне завдання (ТЗ) разом із замовником. Якщо виконавець не може виконати замовлення, він запропонує альтернативне рішення;</li><li>Виконавець встановлює терміни і ціну на основі ТЗ;</li><li>Якщо замовник погоджується з ціною і термінами, робота виконується частинами (від 4 до 10);</li><li>Після оплати першої частини виконавець приступає до виконання замовлення;</li><li>Після завершення кожної частини замовник перевіряє її. Якщо частина виконана не повністю, замовник повертає її на доопрацювання;</li><li>Якщо частина виконана повністю, замовник оплачує другу частину, і виконавець приступає до виконання наступної.</li></ol><em>і так далі.</em></h3></div><div class='col-md-3'><h3>Компаніям</h3></div><div class='col-md-9'><h3>З компаніями можливе співробітництво з різною степеню зайнятості. При наймі на постійну роботу можливе виконання ТЗ або стажування.</h3></div><div class='col-md-3'><h3>Розробникам</h3></div><div class='col-md-9'><h3>Можливе тимчасове або постійне співробітництво зі спеціалістами різного рівня в наступних областях:<ul><li>Дизайн;</li><li>Програмування;</li><li>Маркетинг і інформаційне просування;</li><li>Контент-менеджмент.</li></ul></h3></div><div class='col-md-3'><h3>Благодійним і неприбутковим організаціям</h3></div><div class='col-md-9'><h3>Співпраця з благодійними та неприбутковими організаціями може бути здійснена на безкоштовній основі. Деталі такої співпраці обговорюються індивідуально.</h3></div>",
    "skills_title": "Навички",
    "skills_post_title": "Мої навички, які можуть вас зацікавити",
    "skills_used_recently": "Використовувалися недавно",
    "skills_used_before": "Використовувалися раніше"
  }
} as const;

export const uiTexts: Record<Locale, UiTexts> = {
  "ru": {
    "personName": "Виталий Стекольщиков",
    "personRole": "Software Developer",
    "welcome": "Приветствие",
    "about": "Обо мне",
    "skills": "Навыки",
    "cooperation": "Сотрудничество",
    "contacts": "Контакты",
    "work": "GitHub активность",
    "language": "Язык",
    "viewProject": "Открыть проект",
    "aboutPhotoAlt": "Виталий Стекольщиков",
    "contactEmail": "Email",
    "contactSkype": "Skype",
    "contactTelegram": "Telegram",
    "workTitle": "GitHub активность"
  },
  "en": {
    "personName": "Vitaly Stekolshchykov",
    "personRole": "Software Developer",
    "welcome": "Welcome",
    "about": "About",
    "skills": "Skills",
    "cooperation": "Collaboration",
    "contacts": "Contacts",
    "work": "GitHub activity",
    "language": "Language",
    "viewProject": "Open project",
    "aboutPhotoAlt": "Vitaly Stekolshchykov",
    "contactEmail": "Email",
    "contactSkype": "Skype",
    "contactTelegram": "Telegram",
    "workTitle": "GitHub activity"
  },
  "uk": {
    "personName": "Віталій Стекольщиков",
    "personRole": "Software Developer",
    "welcome": "Привітання",
    "about": "Про мене",
    "skills": "Навички",
    "cooperation": "Співпраця",
    "contacts": "Контакти",
    "work": "GitHub активність",
    "language": "Мова",
    "viewProject": "Відкрити проєкт",
    "aboutPhotoAlt": "Віталій Стекольщиков",
    "contactEmail": "Email",
    "contactSkype": "Skype",
    "contactTelegram": "Telegram",
    "workTitle": "GitHub активність"
  }
} as const;

export const skillsRecent: SkillItem[] = [
  {
    "name": "HTML",
    "level": 90
  },
  {
    "name": "CSS",
    "level": 90
  },
  {
    "name": "SASS",
    "level": 90
  },
  {
    "name": "Strapi",
    "level": 70
  },
  {
    "name": "NPM scripts",
    "level": 80
  },
  {
    "name": "PHP",
    "level": 60
  },
  {
    "name": "Blender",
    "level": 30
  },
  {
    "name": "JS",
    "level": 75
  },
  {
    "name": "Testing(cypress, mocha, chai...)",
    "level": 50
  },
  {
    "name": "SH script",
    "level": 85
  },
  {
    "name": "Angular",
    "level": 65
  },
  {
    "name": "React",
    "level": 70
  },
  {
    "name": "NextJS",
    "level": 70
  },
  {
    "name": "Bootstrap",
    "level": 60
  },
  {
    "name": "taiga-ui",
    "level": 50
  },
  {
    "name": "Git",
    "level": 80
  },
  {
    "name": "Node.js",
    "level": 70
  },
  {
    "name": "Electron",
    "level": 60
  },
  {
    "name": "NPM",
    "level": 80
  },
  {
    "name": "SWIFT",
    "level": 30
  },
  {
    "name": "RIDE",
    "level": 60
  },
  {
    "name": "MySQL/MongoDB/Postgres",
    "level": 40
  },
  {
    "name": "Linux serve",
    "level": 50
  },
  {
    "name": "Docker",
    "level": 60
  },
  {
    "name": "Kubernetes",
    "level": 50
  },
  {
    "name": "GitLab CI/CD",
    "level": 50
  },
  {
    "name": "GitHub CI/CD",
    "level": 40
  },
  {
    "name": "Gulp/Grunt",
    "level": 40
  },
  {
    "name": "Figma/Pixso",
    "level": 60
  }
];

export const skillsBefore: SkillItem[] = [
  {
    "name": "Swagger",
    "level": 60
  },
  {
    "name": "Firebase",
    "level": 30
  },
  {
    "name": "Ionic",
    "level": 30
  },
  {
    "name": "Dart",
    "level": 35
  },
  {
    "name": "React Native",
    "level": 10
  },
  {
    "name": "Python",
    "level": 20
  },
  {
    "name": "JAVA",
    "level": 20
  },
  {
    "name": "C/С++/C#",
    "level": 10
  },
  {
    "name": "Delphi",
    "level": 5
  },
  {
    "name": "Webpack",
    "level": 40
  },
  {
    "name": "Photoshop",
    "level": 40
  },
  {
    "name": "Management, organization of work teams",
    "level": 60
  }
];

export const contactLinks: ContactLinks = {
  "email": "stekolshchykov@gmail.com",
  "skype": "v.a.stekolschikov",
  "phone": "0879906161",
  "telegram": "@stekolshchykov",
};

export const personalSiteUrl = "https://stekolshchykov.com";
export const githubUsername = "stekolshchykov";
export const githubProfileUrl = `https://github.com/${githubUsername}`;

export const workItems: WorkItem[] = [
  {
    "title": "Waves DAO",
    "url": "https://dao.wavesassociation.org/"
  },
  {
    "title": "Waves enterprise",
    "url": "https://wavesenterprise.com/"
  },
  {
    "title": "Waves keeper",
    "url": "https://keeper-wallet.app/"
  },
  {
    "title": "Waves labs",
    "url": "https://waveslabs.com/"
  },
  {
    "title": "Waves school",
    "url": "https://wavesschool.com/"
  },
  {
    "title": "Waves Ducks",
    "url": "https://wavesducks.com/"
  },
  {
    "title": "Waves tech",
    "url": "https://waves.tech/"
  },
  {
    "title": "WE vote",
    "url": "https://we.vote/"
  },
  {
    "title": "gitlab-env-generator",
    "url": "https://www.npmjs.com/package/strapi-3-deep-export-to-csv-plugin"
  },
  {
    "title": "strapi-3-deep-export-to-csv-plugin",
    "url": "https://www.npmjs.com/package/gitlab-env-generator"
  },
  {
    "title": "LESK Android",
    "url": "https://play.google.com/store/apps/details?id=ru.lesk.mobapp&hl=ru"
  },
  {
    "title": "LESK iOS",
    "url": "https://apps.apple.com/ru/app/%D0%BB%D1%8D%D1%81%D0%BA-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0/id1136740155"
  },
  {
    "title": "FISSMAN Android",
    "url": "https://play.google.com/store/apps/details?id=com.team.noty.fissman&hl=ru"
  },
  {
    "title": "FISSMAN iOS",
    "url": "https://apps.apple.com/ru/app/fissman/id1292355160"
  },
  {
    "title": "Crab",
    "url": "https://github.com/StekolschikovV/crab"
  },
  {
    "title": "brain-plus-plus",
    "url": "https://github.com/StekolschikovV/brain-plus-plus"
  },
  {
    "title": "Solar System",
    "url": "https://stekolschikovv.github.io/Solar-System/"
  },
  {
    "title": "miniature",
    "url": "https://github.com/doreminiature/miniature"
  },
  {
    "title": "VYoutubeDownloader",
    "url": "https://github.com/StekolschikovV/VYoutubeDownloader"
  },
  {
    "title": "Искать на торрентах",
    "url": "https://chrome.google.com/webstore/detail/ldifejjbhohmbcmepeoapookgnilmjlk/preview?hl=ru&authuser=0"
  },
  {
    "title": "ОЗВУЧИТЬ ТЕКСТ",
    "url": "https://chrome.google.com/webstore/detail/kpnkbhknpcppndkdibmjpfibifahoppf/preview?hl=ru&authuser=0"
  },
  {
    "title": "Ojos azul",
    "url": "https://github.com/StekolschikovV/Ojos-azul"
  },
  {
    "title": "FlowerDelivery",
    "url": "https://github.com/StekolschikovV/FlowerDelivery"
  },
  {
    "title": "BattleBlocks",
    "url": "https://stekolschikovv.github.io/BattleBlocks/"
  },
  {
    "title": "vk-bot",
    "url": "https://github.com/StekolschikovV/vk-bot-for-groups"
  },
  {
    "title": "Arina Kravchuk",
    "url": "http://arinakravchuk.com/"
  },
  {
    "title": "Rheumatology",
    "url": "http://rheumatology.newyorkmarketing.nyc/"
  },
  {
    "title": "Video limit time",
    "url": "https://codepen.io/stekolschikov/pen/ezvOqQ"
  },
  {
    "title": "CMD",
    "url": "http://rheumatology.newyorkmarketing.nyc/"
  },
  {
    "title": "GAP",
    "url": "http://glamourandpet.nyad.nyc/"
  },
  {
    "title": "BTH",
    "url": "http://www.physicaltherapybrooklyn.com/"
  },
  {
    "title": "sflower",
    "url": "http://www.sflower.co.il/"
  },
  {
    "title": "machsan",
    "url": "http://www.machsan.co.il/"
  },
  {
    "title": "blinok",
    "url": "http://www.blinok.ua/"
  },
  {
    "title": "makesold",
    "url": "http://www.makesold.com/"
  },
  {
    "title": "timestyle",
    "url": "http://www.timestyle.com.ua/"
  },
  {
    "title": "ekstrakt-trav",
    "url": "http://ekstrakt-trav.com/"
  },
  {
    "title": "English tutor",
    "url": "http://english-tutor-ann.com/"
  },
  {
    "title": "fleur-parfum",
    "url": "http://fleur-parfum.com/"
  },
  {
    "title": "hillula",
    "url": "http://hillula.glenview-locksmith.com/"
  },
  {
    "title": "Analytics",
    "url": "https://youtu.be/mKI3xMdzmfM"
  },
  {
    "title": "react-tifgrv",
    "url": "https://stackblitz.com/edit/react-tifgrv"
  },
  {
    "title": "vBot",
    "url": "https://www.youtube.com/playlist?list=PLzGr33BqXqFUhWDot5EzDFhjpBItIvgQU"
  },
  {
    "title": "Gist script",
    "url": "https://chrome.google.com/webstore/detail/gist-script/ickdjfkdgfpkjanbmjepbabbdmiijdpm?hl=ru"
  },
  {
    "title": "NNMCLUB",
    "url": "https://chrome.google.com/webstore/detail/nnmclub/jlaiddkhjabbbigfglnpbmojdckegoga?hl=ru"
  },
  {
    "title": "Owl reader",
    "url": "https://chrome.google.com/webstore/detail/owl-reader/gmecdgihcpaladeedjghilonehdjbehi?hl=ru"
  },
  {
    "title": "https://infovizion.ru",
    "url": "https://infovizion.ru"
  },
  {
    "title": "goodday",
    "url": "http://goodday.od.ua/"
  },
  {
    "title": "CV Yeromina",
    "url": "http://yeromina.com/"
  },
  {
    "title": "React Native: Школа 28 Демо",
    "url": "https://play.google.com/store/apps/details?id=com.stekolschikov.school28demo"
  },
  {
    "title": "React Native: ПБ курс валют",
    "url": "https://play.google.com/store/apps/details?id=com.stekolschikov.pbExchangeRates"
  },
  {
    "title": "TT: blagoy-art",
    "url": "https://github.com/StekolschikovV/blagoy-art"
  },
  {
    "title": "Start Tab",
    "url": "https://chrome.google.com/webstore/detail/start-tab/gmojlojcopjciigdbdddmbnpkamcijmk?hl=ru"
  },
  {
    "title": "Conf: get-site-ip-react.js-php",
    "url": "https://github.com/StekolschikovV/get-site-ip-react.js-php"
  },
  {
    "title": "artCalc",
    "url": "https://github.com/StekolschikovV/artCalc"
  },
  {
    "title": "KinoOline",
    "url": "https://github.com/StekolschikovV/KinoOline"
  }
];
