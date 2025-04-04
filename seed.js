// seed.js
const { db, ready } = require('./database');
ready.then(() => {
    db.serialize(() => {
        // your DB insert logic here
    });
}).catch((err) => {
    console.error("Database not ready:", err.message);
});
const factsData = [
    { source: 'Yugto 1', definition: '1861-1872:Mula Kapanganakan Hanggang Pag-aaral sa Binan' },
    { source: 'Yugto 2', definition: 'Pag-aaral sa Ateneo Municipal, Hulyo 1872-1877 Bachiller en Artes' },
    { source: 'Yugto 3', definition: 'Pag-aaral sa UST, 1878-1882 Filosofia y Letras Medisina' },
    { source: 'Yugto 4', definition: 'Unang Pangingibang-Bansa at Unang Pagbabalik sa Pilipinas, 1882-1888' },
    { source: 'Yugto 5', definition: 'Ang Pangalawang Pangingibang Bansa 1888-1891' },
    { source: 'Yugto 6', definition: 'Pagbalik sa Lupang Tinubuan, (Enero 26, 1892- Agosto  1896): Ang Pagsasakatuparan ng Ideya ng Himagsikan ' }
];

const resourcesData = [
    { title: 'Video: What is a Nation?', type: 'video', url: 'https://www.youtube.com/watch?v=9hjaA7VEy0s', icon_class: 'fas fa-video' },
    { title: 'Video: The difference between Country, State, Republic and Nation. Explained.', type: 'video', url: 'https://www.youtube.com/watch?v=wB8QYNDiOJc&ab_channel=Explain-o-sphere', icon_class: 'fas fa-video' },
    { title: 'Video: Ch. 8 Nation State Definition, Examples & Characteristics Video', type: 'video', url: 'https://www.youtube.com/watch?v=DK_4UJkuxXA&ab_channel=ShawnDuff', icon_class: 'fas fa-video' },
    { title: 'Article: Imagined Communites- Benedict Anderson', type: 'article', url: 'https://is.muni.cz/el/1423/podzim2013/SOC571E/um/Anderson_B_-_Imagined_Communities.pdf', icon_class: 'fas fa-newspaper' },
    { title: 'Article: What is a Nation? - Ernest Renan', type: 'article', url: 'http://ucparis.fr/files/9313/6549/9943/What_is_a_Nation.pdf', icon_class: 'fas fa-newspaper' },
    { title: 'Article: Filipino First- Claro M. Recto, Champion of Filipino Nationalism', type: 'article', url: 'https://nhcp.gov.ph/filipino-first-claro-m-recto-champion-of-filipino-nationalism/', icon_class: 'fas fa-newspaper' }
];

const postsData = [
    {
        slug: 'claro-m-recto', // Use for URL: /blog/claro-m-recto
        title: 'Claro M. Recto',
        author: 'Ma. Army Espe',
        publish_date: '2025-02-13',
        image_url: '/images/Post1Thumb.jpg', // Path relative to public/
        excerpt: 'Itinaguyod ni Claro M. Recto ang isang malaya, makapangyarihan, at may sariling pagkakakilanlang bansa sa pamamagitan ng nasyonalismo...',
        content: `
            <img class="header" src="/images/Post1Thumb.jpg" alt="Post Image">
            <div class="post-content">
                <h2>Ang Pananaw ni Claro M. Recto sa Nasyonalismo at Kasarinlan</h2>
                <p class="post-meta">Published on <span>February 13, 2025</span> | Awtor: <span>Ma. Army Espe</span></p>
                <h3>ANG KANYANG PANANAW SA NASYON</h3>
                <img class="full" src="/images/post5_1.jpg" alt="">
                <p>Si Claro M. Recto ay isang tanyag na makabayan, manunulat, at politiko sa Pilipinas na nagtaguyod ng isang malaya at makapangyarihang bansa. Sa kanyang mga talumpati at akda, binigyang-diin niya na ang isang nasyon ay hindi lamang isang grupo ng tao na naninirahan sa iisang teritoryo, kundi isang komunidad na may malalim na pagkakaugnay sa kasaysayan, kultura, at pambansang diwa. Para kay Recto, ang isang tunay na nasyon ay yaong may sariling pagkakakilanlan at hindi umaasa o nagpapasakop sa kapangyarihan ng ibang bansa.</p>
                <h1>Ang Nasyon Bilang Isang Malayang Komunidad</h1>
                <p>Naniniwala si Recto na ang nasyon ay dapat maging ganap na malaya at soberano, hindi lamang sa aspetong politikal kundi pati na rin sa ekonomiya at kultura. Para sa kanya, ang isang bansa na umaasa sa dayuhang kapangyarihan o impluwensya ay hindi maaaring matawag na tunay na malaya. Sa ganitong pananaw, binatikos niya ang labis na pagpapakupkop ng Pilipinas sa Estados Unidos, na ayon sa kanya ay hadlang sa tunay na pagsasarili ng bansa.</p>
                <p>Bukod dito, itinuturing niya ang nasyon bilang isang pamana ng kasaysayan, isang pinag-isang grupo ng tao na nagbahagi ng parehong pakikibaka at tagumpay. Tulad ng sinabi niya sa kanyang mga talumpati, ang kasaysayan ng isang bansa ay siyang bumubuo sa pagkakakilanlan nito. Ang isang nagkakaisang nasyon ay hindi lamang batay sa wika o relihiyon kundi sa isang malalim na kolektibong alaala ng kanilang nakaraan.</p>
                <h1>Ang Pambansang Identidad Bilang Pundasyon ng Nasyon</h1>
                <p>Para kay Recto, ang isang bansa ay hindi lamang dapat magkaroon ng territorial integrity kundi dapat ding pagyamanin ang kanyang sariling kultura at kaakuhan. Matibay ang kanyang paniniwala na ang wikang pambansa ay isang mahalagang aspeto ng pagkakaisa ng isang bansa. Dahil dito, sinuportahan niya ang paggamit ng wikang Filipino sa edukasyon, batas, at iba pang opisyal na usapin upang palakasin ang pambansang identidad ng Pilipinas.</p>
                <p>Dagdag pa rito, binigyang-diin niya ang pangangailangan ng isang independyenteng patakarang panlabas. Naniniwala siya na hindi dapat umasa ang Pilipinas sa mga dayuhang bansa upang mapaunlad ang sarili nitong ekonomiya at seguridad. Sa kanyang mga isinulat, ipinaalala niya na ang tunay na nasyon ay yaong nakapagsasarili at kayang ipaglaban ang sariling interes laban sa mga banyagang impluwensya.</p>
                <h1>Ang Nasyonalismo Ayon kay Recto</h1>
                <p>Para kay Recto, ang nasyonalismo ay hindi lamang isang ideolohiyang pampolitika kundi isang malalim na pananampalataya sa kakayahan ng sariling bayan. Ayon sa kanya, ang tunay na pagmamahal sa bayan ay hindi lamang ipinapakita sa pamamagitan ng pagsunod sa batas kundi sa aktibong pagtatanggol sa kasarinlan ng bansa laban sa anumang banta ng dayuhang pananakop o panghihimasok.</p>
                <p>Sa kanyang mga akda, mariin niyang ipinahayag na ang nasyonalismo ay hindi dapat maging makasarili o agresibo, kundi dapat itong maging isang mapanagutang adhikain na naglalayong itaguyod ang kapakanan ng sariling bansa nang hindi nakakasama sa iba. Sa madaling salita, ang nasyonalismo para kay Recto ay isang pagtutulak sa tunay na kasarinlan—isang patuloy na pagsisikap na palakasin ang sariling bansa sa pamamagitan ng edukasyon, ekonomiya, at kultura.</p>
            </div>
        ` // --- IMPORTANT: Paste the FULL inner HTML content of the Recto post here ---
    },
    {
        slug: 'ernest-renan',
        title: 'Ernest Renan',
        author: 'Joshua Miguel Cuarte', 
        publish_date: '2025-02-14',
        image_url: '/images/Post3.jpg',
        excerpt: 'Si Ernest Renan ay isang Pranses na pilosopo at manunulat na nagpakilala sa ideya ng nasyon bilang isang espiritwal na prinsipyo...',
        content: `
        <img class="header" src="/images/post2_image.jpg" alt="Post Image">
        <div class="post-content">
            <h2>Ernest Renan at ang Konsepto ng Nasyon: Isang Espiritwal na Prinsipyo</h2>
            <p class="post-meta">Published on <span>February 13, 2025</span>| Awtor: <span> Joshua Miguel Cuarte</span></p>
            <h1>Sino ba si Ernest Renan?</h1>
            <p>Si Ernest Renan, isang Pranses na pilosopo at manunulat, ay isa sa mga pangunahing nag-ambag sa ating pag-unawa sa nasyon at nasyonalismo. Sa kanyang tanyag na panayam na "Qu'est-ce qu'une nation?" (Ano ang Isang Nasyon?), inilatag niya ang kanyang mga ideya na patuloy na pumukaw ng debate at inspirasyon hanggang sa kasalukuyan.</p>
            <h1>Ang Nasyon Bilang Isang Espiritwal na Prinsipyo</h1>
            <p>Para kay Renan, ang nasyon ay hindi lamang isang grupo ng mga taong naninirahan sa isang tiyak na teritoryo o mayroong magkatulad na wika at kultura. Higit pa rito, ito ay isang "espiritwal na prinsipyo," isang "kaluluwa," isang "pinagsamang alaala" at isang "pagnanais na magpatuloy sa buhay na magkasama."</p>
            <p>Binigyang diin ni Renan ang kahalagahan ng “pinagsasalong kasaysayan”. Ang mga tao na bumubuo sa isang nasyon ay mayroong pinagsamang karanasan, mga tagumpay at kabiguan, na nagbubuklod sa kanila at lumilikha ng isang pakiramdam ng pagkakaisa. Ngunit hindi lamang ang nakaraan ang mahalaga. Ayon kay Renan, ang nasyon ay isang <strong>"araw-araw na plebisito."</strong> Ito ay nangangahulugan na ang pagiging bahagi ng isang nasyon ay isang patuloy na pagpapasya, isang araw-araw na pagpili na isama ang sarili sa komunidad at ipagpatuloy ang pagbabahagi ng buhay at kapalaran nito.</p>
            <h1>Ang Nasyon Bilang Isang "Komunidad ng mga Alaala”</h1> 
            <p>Ang nasyon ay isang "komunidad ng mga alaala," kung saan ang mga tao ay nagbabahagi ng mga alaala ng nakaraan at mayroong magkatulad na mga pangarap para sa kinabukasan. Ito ay isang "moral na konsensya," isang pakiramdam ng responsibilidad sa isa't isa at sa kinabukasan ng nasyon.</p>
            <h1>Ang Nasyonalismo ay Hindi Dapat Maging Eksklusibo</h1>
            <p>Binigyang-diin ni Renan na ang nasyonalismo ay hindi dapat maging eksklusibo o mapanakop. Ang bawat nasyon ay may karapatang ipagtanggol ang kanyang sariling pagkakakilanlan at interes, ngunit hindi ito dapat humantong sa pagkamuhi o pag-aaway sa ibang mga nasyon. Ang tunay na nasyonalismo ay nakabatay sa paggalang sa karapatan ng bawat nasyon na maging malaya at magkaroon ng sariling identidad.</p>  
            <h1>Ang Pamana ni Renan sa Nasyonalismo </h1>
            <p>Ang mga ideya ni Renan tungkol sa nasyon at nasyonalismo ay nananatiling mahalaga at makabuluhan hanggang sa kasalukuyan. Ang kanyang konsepto ng nasyon bilang isang "araw-araw na plebisito" ay nagpapaalala sa atin na ang pagiging bahagi ng isang nasyon ay isang aktibong pagpapasya at isang patuloy na pangako. Ang kanyang diin sa kahalagahan ng pinagsasaluhang kasaysayan at alaala ay nagpapaalala sa atin na ang nasyon ay isang komunidad na pinagbubuklod ng mga karanasan at pangarap.</p>  
            <p>Sa pamamagitan ng pag-unawa sa mga ideya ni Renan, maaari tayong magkaroon ng mas malalim na pagpapahalaga sa ating sariling nasyon at sa ating papel bilang mga mamamayan nito. Maaari rin tayong magkaroon ng mas kritikal na pananaw sa mga isyu ng nasyonalismo at pag-iwas sa mga anyo nito na mapanakop at eksklusibo.</p>
        </div>
        ` 
    },
    {
        slug: 'benedict-anderson',
        title: 'Benedict Anderson',
        author: null,
        publish_date: '2025-02-14',
        image_url: '/images/Post2.webp',
        excerpt: 'Ayon kay Benedict Anderson, ang nasyon ay isang “imagined community” na umiiral sa imahinasyon ng mga miyembro nito...',
        content: `
        <img class="header" src="/images/Post2.webp" alt="Post Image">
        <div class="post-content">
            <h2>Ang Konsepto ng Nasyon Ayon kay Benedict Anderson: Isang Imagined Community</h2>
            <p class="post-meta">Published on <span>February 13, 2025</span> | Awtor: <span>Marina Franzesca Tapia</span></p>
            <p>Ayon kay Benedict Anderson, ang nasyon ay isang “imagined community,” o isang komunidad na umiiral lamang sa imahinasyon ng mga miyembro nito. Bagamat hindi magkakakilala ang lahat ng tao sa loob ng nasyon, nararamdaman nila ang isang malalim na pagkakaugnay at pagkakabilang. Ang damdaming ito ay nabubuo sa pamamagitan ng pagbabahagi ng wika, kasaysayan, at kultura, na nagpapalakas sa ideya ng pagiging bahagi ng isang kabuuan.</p>
            <p>Ipinakilala ni Anderson ang konsepto ng imagined community sa kanyang 1983 na aklat na Imagined Communities bilang isang paraan upang maunawaan ang mga pinagmulan at paglaganap ng nasyonalismo. Siya ay nangangatwiran na ang isang bansa ay hindi isang nasasalat, natural na nagaganap na entidad kundi isang binuo ng lipunan, na nabuo at pinapanatili ng kolektibong imahinasyon ng mga tao nito.</p>
            <h1>Ipinaliwanag ni Anderson ang mga sumusunod na argumento bilang pampatibay sa kaniyang konsepto ng nasyon:</h1>
            <ul>
                <li><strong>Ang nasyon ay hindi pisikal, kundi sosyal at kultural na konsepto:</strong> Ang mga miyembro ng nasyon ay hindi lahat magkakakilala, ngunit mayroon silang iisang “collective identity” dahil sa emosyonal na pagtingin sa komunidad ng nasyon na kung saan sila ay bahagi.</li>
                <li><strong>Ang nasyon ay limitado:</strong> Ang mga katangian ng isang “imagined community” bilang nasyon at ang mga hangganan nito ay ang nagiging punto ng pagkakaiba ng pagkakakilanlan nito sa mga ibang nasyon.</li>
                <li><strong>Ang nasyon ay isang modernong konsepto:</strong> Hindi tulad ng pang-etnikong pagkakakilanlan, ang nasyonal na pagkakakilanlan ay hindi natural na pangyayari, kundi ito ay isang modernong konsepto na bunga ng pag-usbong ng mga panibagong ideya at politikal, sosyal, at teknolohikal na pagbabago sa lipunan (tulad ng rebolusyon, industriyalisasyon, atbp.).</li>
                <li><strong>Ang nasyon ay produkto ng nasyonalismo:</strong> Sa konteksto ng kolonyalismo, ang mga kolonya ay walang sariling konsepto ng nasyon, ngunit, mayroon nang nasyonalismo sa panahong iyon, na mapapatunayan ng mga rebolusyon at pag-rebelde ng iilang miyembro ng lipunan sa panahong iyon (hal. Jose Rizal sa panahon ng kolonisasyon ng Espanya). Ang resulta ng mga ganitong kilusang nasyonalista ay nagbibigay-daan sa pagsibol ng pagdama ng “emotional power” at “sense of belonging” ng mga miyembro ng lipunan, at dito nagsisimula ang paglaganap ng pagbuo ng “identity” ng isang lipunan at tauhan bilang nasyon.</li>
            </ul>
        </div>
        ` 
    },
    {
        slug: 'konsepto-ng-nasyon',
        title: 'Ang Konsepto ng Nasyon Ayon kina Recto, Renan at Anderson',
        author: null,
        publish_date: '2025-02-14',
        image_url: '/images/Post4.jpg',
        excerpt: 'Ang nasyon ay isang masalimuot na konsepto na ipinakita nina Claro M. Recto, Ernest Renan, at Benedict Anderson...',
        content: `
            <img class ="header" src="/images/Post4.jpg" alt="Post Image">
            <div class="post-content">
                <h2>Ang Konsepto ng Nasyon Ayon kina Recto, Renan at Anderson</h2>
                <p class="post-meta">Published on <span>February 13, 2025</span> | Awtor: <span> Karlos Emmanuel Alfonso</span></p>
                <p>Ang nasyon ay isang masalimuot at dinamikong konsepto na may iba’t ibang interpretasyon batay sa pananaw nina Claro M. Recto, Ernest Renan, at Benedict Anderson. Bagamat may pagkakaiba sa kanilang mga pananaw, lahat ay sumasang-ayon na ang nasyon ay hindi isang simpleng pangkat ng mga tao sa isang tiyak na teritoryo, kundi isang ideyang hinuhubong ng kasaysayan, kultura, at kolektibong kalooban ng mamamayan.</p>

                <h1>Ang Nasyon bilang Malayang Komunidad (Recto)</h1>
                <p>Para kay Recto, ang nasyon as isang ganap na malayang komunidad na may sariling identidad, kasaysayan, at kultura. Ang tunay na nasyonalismo, ayon sa kanya, ay nakabatay sa kalayaan mula sa dayuhang impluwansya at sa pagpapalakas ng pambansang wika, ekonomiya, at soberanya.</p>
                
                <h1>Ang Nasyon Bilang Espiritwal na Prinsipyo (Renan)</h1>
                <img class="full" src="/images/post4_1.jpg" alt="Post">
                <p>Samantala, si Renan ay nagbibigay-diin sa nasyon bilang isang espiritwal na prinsiplyo na nabubuo mula sa pinagsaluhang alaala at patuloy na kalooban ng mga tao na mamuhay bilang isang komunidad. Para sa kanya, ang pagiging bahagi ng isang nasyon ay isang “araw-araw na plebisito,” isang patuloy na pagpili ng mamamayan na ipagpatuloy ang kanilang kolektibong pagkakakilanlan.</p>

                <h1>Ang Nasyon bilang Isang “Imagined Community” (Anderson)</h1>
                <img class="full" src="/images/post4_2.jpg" alt="Post">
                <p>Sa kabilang banda, si Anderson ay nagpakilala ng konsepto ng “Imagined Community,” kung saan ang nasyon ay isang produkto ng kolektibong imahinasyon. Ayon sa kanya, ang nasyonalismo ang unang lumitaw bago ang mismong nasyon, at ito ay lumakas dahil sa paglaganap ng print capitalism na nagbigay daan sa pagbuo ng pambansang kamalayan.</p>

                <h1>Kongklusyon</h1>
                <p>Sa kabuuan, ang tatlong pananaw ay nagpapakita na ang nasyon ay hindi isang likas o pisikal na edtidad kundi isang panlipunang konstruksyon. Ito ay binubuo at pinapanatili ng kasaysayan, kultura, kita, at kolektibong pagkilala ng mamamayan sa kanilang pagiging bahagi ng isang pambansang komunidad. Ang nasyon ay patuloy na nabubuo at nagbabago depende sa mga desisyon, aksyon at paniniwala ng mga mamamayan nito.</p>
        </div>
        ` 
    },
     {
        slug: 'bayan-muna-bago-sarili',
        title: 'Bayan Muna, Bago ang Sarili: Muling Pagbuhay sa Nasyonalismong Pilipino',
        author: null,
        publish_date: '2025-02-14',
        image_url: '/images/Post5Thumb.jpg',
        excerpt: 'Ayon kay Claro M. Recto, ang nasyonalismong Pilipino ay isang malalim na pagmamahal sa bansa...',
        content: `
                    <img class="header" src="/images/Post5Thumb.jpg"alt="Post Image">
                    <div class="post-content">
                        <h2>Bayan Muna, Bago ang Sarili: Muling Pagbuhay sa Nasyonalismong Pilipino </h2>
                        <p class="post-meta">Published on <span>February 13, 2025</span> | Awtor: <span>Joshua Miguel Cuarte</span></p>
                        <p>Si Claro M. Recto, isang higanteng pigura sa kasaysayan ng Pilipinas, ay nag-iwan ng hindi maipapawing marka sa ating pag-unawa sa nasyonalismo. Ang kanyang mga ideya, bagamat nakaugat sa isang tiyak na panahon, ay nananatiling lubhang may kaugnayan ngayon. Ang blog post na ito ay naglalayong tuklasin ang pananaw ni Recto sa nasyonalismong Pilipino at kung paano natin ito maipapamumuhay sa ating modernong konteksto</p>
                        <h1>Ano ang Nasyonalismong Pilipino, Ayon kay Recto?</h1>
                        <img class="full" src="/images/post5_1.jpg" alt="Post Image">
                        <p>Para kay Recto, ang nasyonalismong Pilipino ay hindi lamang pagwagayway ng bandila o pagbigkas ng mga makabayang slogan. Ito ay isang malalim, maraming aspetong pagmamahal sa bansa – isang pakiramdam ng koneksyon, pagkakaisa, at responsibilidad sa kapwa Pilipino. Binigyang diin niya ang ilang mahahalagang sangkap:</p>
                        <ul>
                            <li><strong>Pagmamahal sa Kultura at Wika:</strong> Ang pagpapahalaga sa ating iba't ibang tradisyon, sining, at wika ay mahalaga. Ito ang mga hibla na naghabi sa ating pambansang pagkakakilanlan.</li>
                            <li><strong>Paggalang sa Kasaysayan:</strong> Ang pag-unawa sa ating nakaraan – kapwa ang mga tagumpay at ang mga paghihirap – ay mahalaga. Nagbibigay ito ng konteksto para sa ating kasalukuyan at gumagabay sa ating kinabukasan. Gaya ng sinabi ni Miguel, "Binigyang diin ni Claro M. Recto ang napakahalagang papel ng nakaraan at kasaysayan sa paghubog at pagpapalakas ng nasyonalismong Pilipino...Ang pag-aaral ng kasaysayan...ay nagsisilbing mahalagang pinagmumulan ng inspirasyon at gabay para sa mga Pilipino..."</li>
                            <li><strong>Pagtanggi sa Dayuhang Impluwensya:</strong> Itinaguyod ni Recto ang isang mapanuring diskarte sa mga dayuhang impluwensya. Bagamat hindi tinatanggihan ang lahat ng dayuhan, binigyang diin niya ang kahalagahan ng pagprioridad sa ating pambansang interes at pagprotekta sa ating soberanya.</li>
                            <li><strong>Pagbuo ng Pambansang Pagkakakilanlan:</strong> Ang pagbuo ng isang malakas na pakiramdam kung sino tayo bilang mga Pilipino, na naiiba sa ibang mga bansa, ay mahalaga. Kabilang dito ang pagkilala sa ating mga ibinahaging pagpapahalaga, hangarin, at karanasan.</li>
                            <li><strong>Pagsusulong ng Pambansang Kamalayan:</strong> Ang pagiging mulat sa mga hamon na kinakaharap ng ating bansa at ang aktibong pakikilahok sa paghahanap ng mga solusyon ay isang tanda ng isang tunay na nasyonalista.</li>
                        </ul>
                    </div>
        ` 
    },
    {
        slug: 'widened-referendum-act',
        title: 'Araw-araw na plebisito: Widened Referendum Act',
        author: null,
        publish_date: '2025-02-14',
        image_url: '/images/Post6Thumb.png',
        excerpt: 'Ang "Widened Referendum Act" ay isang batas na naglalayong palawakin ang paggamit ng referendum...',
        content: `
                    <img class="header" src="/images/Post6Thumb.png"alt="Post Image">
                    <div class="post-content">
                        <h2>Araw-araw na plebisito: Widened Referendum Act </h2>
                        <p class="post-meta">Published on <span>February 13, 2025</span> | Awtor: <span>Matthew Theodore Borromeo</span></p>
                        <p>Ang mga ideya nina Renan, Anderson, at Recto tungkol sa nasyon at nasyonalismo ay maaaring gamitin bilang batayan sa paggawa ng mga batas ng ating bansa. Ang pagkakatulad ng kanilang mga ideolohiya ay ang pagkilala na ang pinakaimportanteng aspeto ng nasyon ay ang pagkakaisa ng mga mamamayan. Ang nasyon ay isang ‘araw-araw na plebisito,’ isang imagined community na nabuo sa shared experiences, at may pambansang interes at pagnanais ng soberanya. Lahat ng ito ay mga aspeto ng demokrasya.</p>
                        <h1>Sa ganitong diwa, ipapanukala ko ang batas na "Widened Referendum Act."</h1>
                        <p>Ang batas na ito ay magpapalawak sa paggamit ng referendum sa bansa para bigyan ng boses ang mga mamamayan sa mahahalagang usaping pambansa. Ang referendum ay isang direktang paraan ng pagpapahayag ng opinyon ng mga tao sa pamamagitan ng pagboto sa isang partikular na usapin o batas.</p>
                        <h1>Mga Pangunahing Probisyon:</h1>
                        <ul>
                            <li><strong>Mas Malawak na Saklaw ng Referendum</strong> – Ang mga mamamayan ay magkakaroon ng mas maraming pagkakataon na makilahok sa mga desisyon ng gobyerno, lalo na sa mga isyung may direktang epekto sa pambansang interes.</li>
                            <li><strong>Madaling Pagsasagawa ng Referendum</strong> – Pagpapadali sa proseso ng pagsasagawa ng referendum sa pamamagitan ng digital platforms, local voting centers, at iba pang accessible na paraan.</li>
                            <li><strong>Mas Malawak na Representasyon</strong> – Sisiguraduhin na ang bawat sektor ng lipunan ay may pantay na oportunidad na maipahayag ang kanilang opinyon sa mga isyu.</li>
                            <li><strong>Proteksyon Laban sa Manipulasyon</strong> – Magkakaroon ng mahigpit na regulasyon laban sa political interference, vote-buying, at misinformation upang mapanatili ang integridad ng referendum.</li>
                        </ul>
                        <h1>Benepisyo ng Batas:</h1>
                        <ul>
                            <li>Mas aktibong partisipasyon ng mamamayan sa demokrasya.</li>
                            <li>Mas mabilis at epektibong tugon sa mga isyung pambansa.</li>
                        </ul>
                        <p>Sa pamamagitan ng Widened Referendum Act, masisigurado natin na ang nasyon ay tunay na nasa kamay ng mga mamamayan, at hindi lamang ng iilang makapangyarihang indibidwal. Ang pagpapatibay ng ganitong batas ay isang hakbang patungo sa isang mas malaya, mas makatarungan, at mas makabayang Pilipinas.</p>

                    </div>
        ` 
    },
    {
        slug: 'pamana-ni-rizal',
        title: 'Written Narrative 3 : Ang Pamana ni Rizal: Isang Paglalakbay ng Pagbabago',
        author: 'Joshua Miguel Cuarte',
        publish_date: '2025-04-04',
        image_url: '/images/Post1.jpg',
        excerpt: 'Si Jose Rizal, ang pambansang bayani ng Pilipinas, ay hindi lamang isang makata at manunulat...',
        content: `
                    <img class="header" src="/images/Post1Thumb.jpg" alt="Post Image">
                    <div class="post-content">
                        <h2>Written Narrative 3 : Ang Pamana ni Rizal: Isang Paglalakbay ng Pagbabago</h2>
                        <p class="post-meta">Published on <span>April 4, 2025</span> | Awtor: <span>Joshua Miguel Cuarte</span></p>
                        <h1>ANG KANYANG PANANAW SA NASYON</h1>
                        <p>Si Jose Rizal, ang pambansang bayani ng Pilipinas, ay hindi lamang isang makata at manunulat, kundi isang simbolo ng pag-asa, tapang, at pagmamahal sa bayan. Ang kanyang buhay ay isang paglalakbay na puno ng mga aral at inspirasyon para sa ating lahat.</p>

                        <div class="section">
                            <h2>Yugto 1: Mula sa Kapanganakan Hanggang sa Pag-aaral sa Biñan (1861-1872)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Pag-usbong ng Kamulatan: Rizal, ang Binhi ng Pagbabago<br>
                            <p>Sa yugtong ito, si Rizal ay isang batang nagmamasid, nagtatanong, at nagsisimulang makaramdam ng mga kawalan ng katarungan sa kanyang paligid. Ang kanyang maagang pagkamulat sa pang-aabuso, ang pagkakulong ng kanyang ina, at ang pagbitay sa Gomburza ay nagtanim ng binhi ng pagkadismaya sa kolonyal na sistema. Dahil sa mga pangyayaring ito, si Rizal ay naging isang batang may pagmamalasakit sa kanyang bayan at may pagnanais na magkaroon ng pagbabago.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Ang Pilipinas ay nasa ilalim ng kolonyal na pang-aapi ng Espanya. Ang mga ideya ng Enlightenment ay nagsisimulang kumalat.</li>
                            <li><strong>Turning Points:</strong> Pagkabilanggo ng kanyang ina at pagbitay sa Gomburza.</li>
                            <li><strong>Pilosopiya:</strong> Maagang pagmamahal sa bayan at wika; paninindigan para sa katarungan at edukasyon.</li>
                            <li><strong>Mga Akda:</strong> <span class="quote">"Ang hindi magmahal sa kanyang salita, mahigit sa hayop at malansang isda."</span> (Sa Aking Mga Kabata)</li>
                            </ul>
                        </div>

                        <div class="section">
                            <h2>Yugto 2: Pag-aaral sa Ateneo Municipal (1872-1877)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Paglilinang ng Talino: Rizal, ang Estudyanteng Nagtagumpay
                            <p>Si Rizal ay isang estudyanteng puno ng talento at determinasyon. Sa Ateneo Municipal, hinasa niya ang kanyang talino at kakayahan.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Mataas na kalidad ng edukasyon, Hispanisasyon.</li>
                            <li><strong>Turning Points:</strong> Akademikong tagumpay, pantay na pagtrato sa Ateneo.</li>
                            <li><strong>Pilosopiya:</strong> Paniniwala sa kakayahan ng Pilipino, kagustuhang makiisa sa sibilisasyong Espanyol.</li>
                            <li><strong>Mga Akda:</strong> Memoir of A Student in Manila, Intimate Alliance Between Religion and Good Education, Education Gives Luster to the Motherland, Un Recuerdo A Mi Pueblo, To the Child Jesus, To the Virgin Mary</li>
                            </ul>
                        </div>

                        <div class="section">
                            <h2>Yugto 3: Pag-aaral sa UST (1878-1882)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Pagsibol ng Nasyonalismo: Rizal, ang Mapanuring Intelektwal
                            <p>Naging kritikal si Rizal sa sistema ng edukasyon dahil sa diskriminasyong naranasan niya sa UST.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Konserbatibo at makalumang sistema sa UST, pabor sa mga Espanyol.</li>
                            <li><strong>Turning Points:</strong> Diskriminasyon sa UST, pagnanais tulungan ang ina.</li>
                            <li><strong>Pilosopiya:</strong> Kahalagahan ng edukasyon, paninindigan laban sa pang-aapi.</li>
                            <li><strong>Mga Akda:</strong> Sa Aking Mga Kabata, El Consejo de los Dioses, Carta a Mi Madre</li>
                            </ul>
                        </div>

                        <div class="section">
                            <h2>Yugto 4: Unang Pangingibang-Bansa at Unang Pagbabalik sa Pilipinas (1882-1887)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Pagpapalawak ng Pananaw: Rizal, ang Repormistang Naghahanap ng Liwanag
                            <p>Sa Europa, nakita ni Rizal ang pagkakaiba ng kalayaan ng ibang bansa at ang sitwasyon sa Pilipinas.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Ideya ng kalayaan at karapatang pantao sa Europa; patuloy na kolonyalismo sa Pilipinas.</li>
                            <li><strong>Turning Points:</strong> Karanasan sa Europa, paglalathala ng <em>Noli Me Tangere</em>.</li>
                            <li><strong>Pilosopiya:</strong> Edukasyon at reporma bilang susi sa pagbabago; mapayapang paraan ng pakikibaka.</li>
                            <li><strong>Mga Akda:</strong> Noli Me Tangere, El Amor Patrio, Talumpati kina Juan Luna at Felix Resurreccion Hidalgo</li>
                            </ul>
                        </div>

                        <div class="section">
                            <h2>Yugto 5: Pangalawang Pangingibang-Bansa (1888-1891)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Radikalisasyon ng Repormista: Rizal, ang Tagapagsulong ng Pagbabago
                            <p>Mas naging matapang si Rizal sa yugtong ito dahil sa kabiguang makamit ang reporma sa mapayapang paraan.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Patuloy na pang-aapi; kabiguan ng mga repormang proyekto.</li>
                            <li><strong>Turning Points:</strong> Insidente sa Calamba, pagbabawal ng <em>Noli Me Tangere</em>.</li>
                            <li><strong>Pilosopiya:</strong> Pagkilos na mas matatag; paghahanap ng alternatibong paraan ng pakikibaka.</li>
                            <li><strong>Mga Akda:</strong> El Filibusterismo, Tungkol sa Katamaran ng mga Pilipino, Ang Pilipinas sa Loob ng Sandaang Taon, Liham sa mga Kababaihan ng Malolos</li>
                            </ul>
                        </div>

                        <div class="section">
                            <h2>Yugto 6: Pagbalik sa Lupang Tinubuan (1892-1896)</h2>
                            <strong>Pansariling Titulo:</strong> Ang Pagsasakatuparan ng Himagsikan: Rizal, ang Martir ng Bayan
                            <p>Itinatag ni Rizal ang La Liga Filipina upang pag-isahin ang mga Pilipino, ngunit naging martir sa kabila ng kanyang layuning mapayapang pagbabago.</p>
                            <ul>
                            <li><strong>Kapaligiran at Panahon:</strong> Lumalakas ang damdaming makabayan; patuloy ang panunupil ng kolonyal na pamahalaan.</li>
                            <li><strong>Turning Points:</strong> La Liga Filipina, pagka-exile sa Dapitan, pagboluntaryo sa Cuba.</li>
                            <li><strong>Pilosopiya:</strong> Kailangan ng matatag na rebolusyon; moral at pansibikong pagbabago ang unang hakbang.</li>
                            <li><strong>Mga Akda:</strong> Saligang Batas ng La Liga Filipina, mga proyekto sa Dapitan</li>
                            </ul>
                        </div>

                    </div>
        ` 
    }
    // ... Add other posts here
];


db.serialize(() => {
    // Use BEGIN/COMMIT for faster bulk inserts
    db.run("BEGIN TRANSACTION;");

    // Clear existing data (optional, useful during development)
    // db.run("DELETE FROM facts;");
    // db.run("DELETE FROM resources;");
    // db.run("DELETE FROM posts;");


    // Insert Facts
    const stmtFacts = db.prepare("INSERT INTO facts (source, definition) VALUES (?, ?) ON CONFLICT(source) DO NOTHING"); // Avoid duplicates
    factsData.forEach(fact => {
        stmtFacts.run(fact.source, fact.definition, (err) => {
           if (err) console.error("Error inserting fact:", fact.source, err.message);
        });
    });
    stmtFacts.finalize();
    console.log("Facts seeded.");

    // Insert Resources
    const stmtResources = db.prepare("INSERT INTO resources (title, type, url, icon_class) VALUES (?, ?, ?, ?) ON CONFLICT(url) DO NOTHING"); // Avoid duplicates
    resourcesData.forEach(resource => {
        stmtResources.run(resource.title, resource.type, resource.url, resource.icon_class, (err) => {
           if (err) console.error("Error inserting resource:", resource.title, err.message);
        });
    });
    stmtResources.finalize();
    console.log("Resources seeded.");

    // Insert Posts
    const stmtPosts = db.prepare("INSERT INTO posts (slug, title, author, publish_date, image_url, excerpt, content) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(slug) DO NOTHING"); // Avoid duplicates
    postsData.forEach(post => {
        // Ensure content is not null or undefined before inserting
        const contentToInsert = post.content || '';
        stmtPosts.run(post.slug, post.title, post.author, post.publish_date, post.image_url, post.excerpt, contentToInsert, (err) => {
            if (err) console.error("Error inserting post:", post.title, err.message);
        });
    });
    stmtPosts.finalize();
    console.log("Posts seeded.");


    db.run("COMMIT;", (err) => {
        if (err) {
            console.error("Error committing transaction:", err.message);
        } else {
            console.log("Database seeding complete.");
        }
        // Close the database connection after seeding
        db.close((err) => {
            if (err) {
                console.error("Error closing database after seeding:", err.message);
            } else {
                console.log("Database connection closed.");
            }
        });
    });
});