document.addEventListener('DOMContentLoaded', function() {
    loadContent('content1-en'); // Load default content

    document.querySelectorAll('.sidebar-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(link.getAttribute('data-content'));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const contentArea = document.querySelector('.content-area');
    const dropdown = document.querySelector('.dropdown');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const contentItems = document.querySelectorAll('.content-item');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-content');
            loadContent(contentId);
            window.scrollTo(0, 0); // Scroll to top
        });
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
        
    });

    dropdown.addEventListener('mouseover', function() {
        this.classList.add('show');
    });

    dropdown.addEventListener('mouseout', function() {
        this.classList.remove('show');
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        contentItems.forEach(item => {
            if (item.getAttribute('data-search').toLowerCase().includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });


    
    



    function loadContent(contentId) {
        if (contentId === 'content1') {
            contentArea.innerHTML = `
                
                    <div class="clearfix"></div>
                    <p>&nbsp;</p>
                    
                    <h2><strong>TUZO YA KISWAHILI YA SAFAL YA FASIHI YA AFRIKA</strong></h2>
            <p>&nbsp;</p>
            <p>Tuzo hii ya kiswahili inafadhiliwa na kampuni ya Safal Group, kupitia matawi yake ya Mabati Rolling Mills (MRM), Kenya na ALAF, Tanzania; na Wakfu wa Ngugi wa Thiong’o.</p>
            <p>Madhumuni makuu ya Tuzo hii, iliyoanzishwa mwaka 2014 na <strong>Dkt. Lizzy Attree</strong> na <strong>Dkt. Mukoma wa Ngugi</strong>, ni kuthamini uandishi kwa lugha za Kiafrika, kuhimiza sanaa ya tafsiri baina ya lugha za Kiafrika zenyewe kwa zenyewe, na pia kutafsiri maandishi ya lugha nyengine kwa lugha za Kiafrika.</p>
            <p>&nbsp;</p>
          


              <div class="slideshow-container">
                  <div class="mySlides fade">
                      <img src="img/mgeni-rasmi2024.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <img src="img/majaliwa.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <img src="img/1st-place.jpg" style="width:100%">
                  </div>

                  <div class="mySlides fade">
                      <img src="img/majaliwa.jpg" style="width:100%">
                  </div>

                  <div class="mySlides fade">
                      <img src="img/dotto.jpg" style="width:100%">
                  </div>
                  <a class="prev">&#10094;</a>
                  <a class="next">&#10095;</a>
              </div>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>


		
  



<p>&nbsp;</p>
<p><img src="img/home6.jpg" style="width:100%"></p>
<p>&nbsp;</p>   
<p><img src="img/Ally.jpg" style="width:100%"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>




<p>&nbsp;</p>
<p>&nbsp;</p>
		

            `;

            initializeSlideshow();
        } else if (contentId === 'content3') {
            const now = new Date();
            const deadline = new Date('2026-03-30T23:59:59'); // Submission deadline
        
            if (now < deadline) {
                // Still accepting submissions – show original content
                contentArea.innerHTML = `
                    <h1 class="entry-title">UTARATIBU WA KUSHIRIKI</h1>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>WITO WA KUWASILISHA MISWADA KATIKA TUZO YA KISWAHILI YA SAFAL YA FASIHI YA AFRIKA - KWA MWAKA 2025</strong></p>
            <p>&nbsp;</p>
            <p>Tuzo ya Kiswahili ya Safal ya Fasihi ya Afrika inawatangazia washiriki kuwasilisha miswada yao kwa ajili ya shindano la mwaka huu wa 2025.<p/>
            <p>&nbsp;</p>
            <p>Hapo awali, Tuzo hii ikiitwa Tuzo ya Kiswahili ya Safal-Cornell ya Fasihi ya Afrika. Sasa jina lake limebadilishwa ili kuakisi jina la mdhamini - yaani kampuni ya Safal Group, kupitia kampuni zake tanzu za Mabati Rolling Mills (MRM) ya Kenya, na ALAF Limited ya Tanzania. Safal Group ni kampuni kubwa inayotengeneza vifaa vya ujenzi katika nchi tisa za Afrika ya Mashariki na Kusini, vyenye ubora wa hali ya juu kwa wateja wake mamilioni barani Afrika. Na pia husambaza bidhaa mbalimbali za chapa ambazo zinaaminika sokoni.</p>
            <p>&nbsp;</p>
            <p>Uwasilishaji wa miswada kwa mashindano ya mwaka huu unaanza tarehe <strong>29 Jan 2025</strong> na kumalizika tarehe <strong>31 Machi, 2025</strong>. Waandishi kutoka Afrika Mashariki, na popote duniani wanaoandika kwa Kiswahili, wanahimizwa kuwasilisha miswada yao na kushiriki katika mashindano. Kwa mara nyengine tena, waandishi wanawake wanahimizwa nao wajitokeze  Kwa wingi kushiriki katika mashindano haya. </p>
            <p>&nbsp;</p>
            <p><img src="img/submission-swahili2025.jpg" style="width:100%"></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>Wanaotaka kushiriki katika shindano la mwaka huu wanahimizwa kuiwasilisha miswada yao  <strong>ambayo haijachapishwa kwa njia yoyote ile</strong> katika tanzu za riwaya, ushairi, mkusanyo wa hadithi fupi, tamthilia, wasifu na riwaya za picha. Vitabu vilivyokwisha chapishwa havitazingatiwa. </h2>
            <p>&nbsp;</p>
            <p>Zawadi za jumla ya <strong>Dola 15,000</strong> za Marekani zitatolewa kama ifuatavyo: mshindi wa kwanza katika utanzu wa riwaya na ushairi kila mmojawao atapata <strong>Dola 5,000;</strong> na washindi wa nafasi ya pili katika utanzu wa riwaya au ushairi, au utanzu wowote mwengine, watapata zawadi ya <strong>Dola 2,500 </strong>kila mmoja</p>
            <p>&nbsp;</p>
            <p><strong>Miswada itakayoshinda itachapishwa vitabu na kampuni ya uchapishaji ya Mkuki na Nyota Publishers (Tanzania),</strong> ambayo inaweza kushirikiana na wachapishaji wengine ili kurahisisha upatikanaji wa vitabu vilivyoshinda. Vitabu vya miswada ya ushairi itakayoshinda vitafasiriwa kwa Kiingereza na kuchapishwa na Africa Poetry Book Fund</p>
            <p>&nbsp;</p>
            <h3>Sherehe ya kuwapa zawadi washindi wa mwaka 2025 itataganzwa, na waandishi wote walioorodheshwa watahudhuria.</h3>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

            <h2>Mwongozo wa Uwasilishaji:</h2>
            <p>&nbsp;</p>

            <p>Wanaotaka kushiriki wanaombwa wapeleke miswada yao kwa anwani hii: <a href=kiswahiliprize@kiswahiliprize.org>kiswahiliprize@kiswahiliprize.org</a> Tarehe ya mwisho ya kupokewa miswada ni 30 Novemba, 2024. <strong>Miswada ya riwaya lazima iwe ni baina ya maneno 40,000 hadi 60,000; mkusanyo wa hadithi fupi usizidi maneno 40,000, na kila hadithi isipungue maneno 1,000 na isizidi maneno 6,000; na diwani ya mashairi iwe ni baina ya kurasa 60 na 70.</strong></p>
            
                `;
            } else {
                // Submission is closed – show animated message
                contentArea.innerHTML = `
                    <div id="closed-message" style="
                        font-size: 26px;
                        text-align: center;
                        color: #b30000;
                        margin-top: 20%;
                        opacity: 0;
                        transition: opacity 2s ease-in-out;
                    ">
                        🛑 Dirisha la kutuma miswada limefungwa.<br><br>
                      
                        <strong>Msimu wa 2025 utatangazwa hivi karibuni</strong>.
                    </div>
                `;
        
                // Trigger fade-in animation after slight delay
                setTimeout(() => {
                    document.getElementById('closed-message').style.opacity = '1';
                }, 100);
            }
        
        
    
        
        } else if (contentId === 'content2') {
            contentArea.innerHTML = `
                    <div class="clearfix"></div>
                    <div class="clearfix"></div>
                    <div class="clearfix"></div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    
                <p><img  src="img/1.jpg" style="width:80%"></p>
                    <p>&nbsp;</p>
                    <div class="clearfix"></div>
                    <p>&nbsp;</p><p>&nbsp;</p>
                    <p>&nbsp;</p><p>&nbsp;</p>


                    <h1 class="entry-title">Anajulikana kama "Mwanafalisafa wa Kiswahili" - SHAABAN ROBERT</h1>
                    <div class="clearfix"></div>
                    <p>&nbsp;</p><p>&nbsp;</p>


                    <p><img class="left-img" src="img/poster1.jpeg"  width="250" height="224"></p>
                    <p><img class="left-img" src="img/poster2.jpeg"  width="250" height="224"></p>
                    <p><img class="left-img" src="img/poster3.jpeg"  width="250" height="224"></p>

                    <div class="clearfix"></div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    <p><img  src="img/poster-4.jpeg" style="width:80%"></p>

                
            `;
        } else if (contentId === 'content4') {
            contentArea.innerHTML = `

				<h1 class="entry-title">Kuhusu Tuzo</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                                <div class="entry-content">

                                

		
<p>Tuzo ya Kiswahili ya Safal ya Fasihi ya Kiafrika ilianzishwa na Mukoma Wa Ngugi na Lizzy Attree 2014 kuimarisha uandishi katika lugha za Kiafrika na kuhimiza utafsiri kutoka, kati ya na kwa lugha za Kiafrika. Tuzo hii inatoa mfano wa kihistoria wa ufadhili kwa Afrika kutoka Waafrika na kuonyesha kuwa hisani ya Kiafrika inaweza na inafaa kuwa kiini cha utungaji wa sanaa za kitamaduni za Kiafrika.”</p>
<p>&nbsp;</p>

<p>Hapo awali, Tuzo hii ikiitwa Tuzo ya Kiswahili ya Safal-Cornell ya Fasihi ya Afrika. Sasa jina lake limebadilishwa ili kuakisi jina la mdhamini - yaani kampuni ya Safal Group, kupitia kampuni zake tanzu za Mabati Rolling Mills (MRM) ya Kenya, na ALAF Limited ya Tanzania. Safal Group ni kampuni kubwa inayotengeneza vifaa vya ujenzi katika nchi tisa za Afrika ya Mashariki na Kusini, vyenye ubora wa hali ya juu kwa wateja wake mamilioni barani Afrika. Na pia husambaza bidhaa mbalimbali za chapa ambazo zinaaminika sokoni.</p>
<p>&nbsp;</p>

<p>Zaidi ya watu milioni 140 wanazungumza Kiswahili katika Afrika Mashariki na Kusini. Kiswahili pia ni mojawapo ya lugha rasmi Kenya na Tanzania. Kupitia waandishi na malenga mashuhuri wa Kiafrika wanaoandika katika Kiswahili kama vile Shaban Roberts na Ebrahim Hussein, kuna sanaa nyingi ya Kiswahili inayoendelea kutumika kama lugha kuu kwenye vyuo vikuu vya kusifika kama Chuo Kikuu cha Nairobi, Chuo Kikuu cha Boston na Chuo Kikuu cha Wisconsin-Madison. Yaani, Kiswahili ni lugha iliyosadikishwa na inafaa kutambuliwa hivyo.</p>
<p>&nbsp;</p>

<p>Msimamo wetu ukiwa lugha zote ziliumbwa sawa na hakuna lugha inayofaa kufaulu kwa gharama ya lugha nyingine, tunapendekeza Tuzo ya Kiswahili ya Fasihi ianzishwe na lengo la kuimarisha kuandika na kusoma katika lugha za Kiafrika. Tuzo za fasihi zinatambua vipaji vipya, zinahimiza waandishi na kuonyesha kuwa kusoma ni muhimu.</p>
<p>&nbsp;</p>

<p>Licha ya kuwepo tuzo za fasihi za kimataifa kama tuzo za Caine na Etisalat iliyoanzishwa majuzi, hakuna tuzo kuu za kimataifa na kiafrika zinazotuza sanaa zilozotungwa katika lugha za Kiafrika. Tuzo ya Fasihi ya Jomo Kenyatta ni tuzo ya mara mbili kila mwaka na inaandaliwa na Shirika la Wachapishaji wa Kenya (Kenya Publishers Association) kutambua kazi bora zilizochapishwa katika Kiingereza na Kiswahili.</p>
<p>&nbsp;</p>

<p>Taarifa hio pekee yake inadokeza kwa nini tuzo ya kimataifa ya fasihi ya Kiswahili ni jambo la kihistoria na inatoa mfano kwa fasihi katika lugha zingine za Kiafrika na kuchangia pakubwa kwa fasihi duniani.</p>
<p>&nbsp;</p>

<p>Kampuni ya&nbsp;<strong>Safal Investments Mauritius Limited&nbsp;</strong>na matawi yake (ambayo ni pamoja na Mabati Rolling Mills Limited, Kenya, na ALAF Limited, Tanzania) inajulikana kwa jina la jumla la The Safal Group. Hii ni kampuni kubwa kabisa inayotengeneza mabati katika nchi 12 za Afrika.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p>
<p>&nbsp;</p>



<img src="img/MRM.PNG" style="width:15%">
<div class="clearfix"></div>
<p><strong>Mabati Rolling Mills Limited (MRM)&nbsp;</strong>ilibuniwa zaidi ya miaka 50 iliyopita. Ni kampuni kubwa kabisa Kenya inayotengeneza mabati ya kuezekea mapaa, na inaongoza katika utanzu huu wa ufundi. Pia inaongoza katika bara la Afrika kwa kutengeneza mabati ikitumia teknolojia ya hali ya juu kabisa inayopatikana duniani. Mabati yake maarufu yanasifika na yanaaminiwa na mamilioni ya wajenzi. www.mabati.com</p>
<p>&nbsp;</p>
<p>&nbsp;</p>




<p><img src="img/MRM-Foundation.JPEG" style="width:20%"></p>
<div class="clearfix"></div>
<p><strong>Safal MRM Foundation</strong>, yenye makao yake Kenya, ni kitengo cha Mabati Rolling Mills na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. Miongoni mwa misaada hiyo, inayotolewa Mariakani, Kenya, ni kuanzisha na kuendelea kugharimia uendeshaji wa Taasisi ya Mabati ya Mafunzo ya Teknolojia (Mabati Technical Training Institute), na Kituo cha Mabati cha Matibabu (Mabati Medical Centre). www.safalmrmfoundation.org</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><img src="img/ALAF.PNG" style="width:15%"></p>
<div class="clearfix"></div><p>&nbsp;</p>
<p><strong>ALAF Limited (ALAF)&nbsp;</strong>ni kampuni ya Tanzania inayoongoza katika utengenezaji wa mabati ya kuezekea mapaa. Tangu ilipobuniwa mwaka 1960, ALAF imeendelea kuchangia kwa kiasi kikubwa katika shughuli za ujenzi nchini. ALAF haitengenezi mabati ya kuezekea mapaa tu, bali pia aina za nyaya za chuma zinazotumika katika ujenzi wa mapaa. ALAF pia inatengeneza mabomba ya metali yanayotumika katika shughuli mbalimbali za ufundi. www.alaf.co.tz</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


<p><img src="img/ALAF-Foundation.JPG" style="width:20%"></p><p>&nbsp;</p><p>&nbsp;</p>
<div class="clearfix"></div>
<p>&nbsp;</p>
<p><strong>Safal ALAF Foundation</strong>, yenye makao yake Tanzania, ni kitengo cha ALAF na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. www.safalalaffoundation.org</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><strong>Idara ya Taaluma za Afrika na Utafiti&nbsp;</strong>inachangia kwa kiasi kikubwa katika shughuli za kitaaluma, kitamaduni na za kijamii kwenye Chuo Kikuu cha Cornell, Ithaca.&nbsp;<a href="http://www.asrc.cornell.edu">http://africana.cornell.edu</a></p>
<p>&nbsp;</p>

<p><strong>Mkuki na Nyota Publishers&nbsp;</strong>ni shirika huru la uchapishaji vitabu vya kimaendeleo, kiukombozi, vya bei nafuu na maridadi. Shirika hili lilianzishwa mwaka 1991 kutokana na ukosefu wa vitabu vya kiwango cha juu nchini Tanzania. Kaulimbiu yake ni kuchapisha “Vitabu Vinavyofaa, Vitabu vya Bei Nafuu, na Vitabu Maridadi.&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p>
<p>&nbsp;</p>

<p><strong>Africa Poetry Book Fund&nbsp;</strong>inaimarisha na kuendeleza uchapishaji wa sanaa za kishairi kupitia vitabu vyake, mashindano, warsha, semina, pamoja na kushirikiana na wachapishaji, matamasha, mawakala, vyuo, vyuo vikuu, makongamano, na vikundi vyengine vinavyohusika na ushairi Afrika.&nbsp;<a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
<p>&nbsp;</p>

<p>Tunawashukuru kwa usaidizi na subira yenu tunavyoendelea katika changamoto hii ya lugha.</p>

                </div>

            `;
        } else if (contentId === 'content5') {
            contentArea.innerHTML = `
                
            <h1>Mwongozo wa Uwasilishaji:</h1>
            <p>&nbsp;</p>
            <p>&nbsp;</p>


            <h2>Wanaotaka kushiriki wanaombwa wapeleke miswada yao kwa anwani hii: <a href=kiswahiliprize@kiswahiliprize.org>kiswahiliprize@kiswahiliprize.org</a> </h2>
            <p>&nbsp;</p>
            <h3>Tarehe ya mwisho ya kupokewa miswada ni 30 Novemba, 2024. <strong>Miswada ya riwaya lazima iwe ni baina ya maneno 40,000 hadi 60,000; mkusanyo wa hadithi fupi usizidi maneno 40,000, na kila hadithi isipungue maneno 1,000 na isizidi maneno 6,000; na diwani ya mashairi iwe ni baina ya kurasa 60 na 70.</strong></h3>
            
            `;
        } else if (contentId === 'content6') {
            contentArea.innerHTML = `
				<h1 class="entry-title">Masharti ya Tuzo</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

		
			<p>Tuzo itatolewa kwa nakala bora ambayo haijachapishwa bado au kitabu kilichochapishwa katika miaka miwili kabla ya mwaka wa tuzo katika tanzu za ngano, ushairi na wasifu, na riwaya. Jumla ya $15,000 iliyopendekezwa kwa tuzo itagawanywa ifuatavyo:</p>
            <p>&nbsp;</p>

            <strong><p>Nafasi ya 1 katika ngano – $5,000</p></strong>

            <strong><p>Nafasi ya 1 katika ushairi – $5,000</p></strong>

            <strong><p>Nafasi ya 2 katika utanzu wowote – $2,500</p></strong>

            <strong><p>Nafasi ya 3 katika utanzu wowote – $2,500</p></strong>
            <p>&nbsp;</p>

            <p>Kitabu au nakala itakayoshinda itachapishwa katika Kiswahili na Wachapishaji wa Kielimu wa Afrika Mashariki (East African Educational Publishers)<b> </b>na diwani ya mashairi bora itatafsiriwa na kuchapishwa kwa Kiingereza na Akiba ya Afrika ya Ushairi (Africa Poetry Book Fund).</p>
            <p>&nbsp;</p>

            <p>Tamasha ya kutoa tuzo itafanyiwa Chuo Kikuu cha Cornell kwenye Idara ya Masomo na Utafiti ya Afrikana. Waandishi wanne watakaotuzwa wataketi Chuo Kikuu cha Cornell kwa muda wa wiki moja kisha wiki moja zaidi katika taasisi inayoshiriki (Marekani ama Afrika). Tamasha za pili na tatu zitafanyiwa Kenya na Tanzania mtawalia.</p>
		
            `;
        }
        else if (contentId === 'content7') {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
            
				<h1 class="entry-title">Waamuzi</h1>
		
			    <h1 style="text-align: center;"><strong>TUZO YA KISWAHILI YA SAFAL YA FASIHI YA AFRIKA </strong></h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

<h2 style="text-align: left;"><strong>Tangazo la Majaji 2021</strong></h1>
<p>&nbsp;</p>

<p>Mwenyekiti wa Bodi ya Wadhamini ya Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Afrika, <strong>Abdilatif Abdalla</strong>. amewatangaza Majaji wa mwaka 2021 kuwa ni <strong>Prof. Aldin K. Mutembei</strong>, <strong>Dkt. Salma Omar Hamad</strong> na <strong>Dkt. Joseph N. Maitaria</strong>. Mwenyekiti wa Bodi alitangaza pia kwamba &nbsp;<strong>Prof. Rocha Chimerah</strong> na <strong>Dkt. Hamisi Babusa</strong> watakuwa majaji wa Tuzo ya Nyabola, tuzo maalumu ya mwaka 2021 kwa vijana wenye umri wa baina ya&nbsp; miaka&nbsp; 18 na 35 walioandika hadithi za kubuni za &nbsp;kisayansi na &nbsp;kidhana.</p>
<p>&nbsp;</p>

<p>“Mwaka huu wa 2021 Tuzo imeshuhudia ongezeko la idadi kubwa ya washiriki ambayo haikutarajiwa – kutoka washiriki 96 mwaka 2019 hadi 256. Vile vile, miswada tuliyoipokea mwaka huu ilitoka nchi 13 na sehemu mbalimbali ulimwenguni: Tanzania, Kenya, Uganda, Burundi, Misri, Nigeria, Marekani, Kanada, Ujerumani, Austria, Uswisi, Finland, na Uholanzi. Tunafurahi sana kuona kwamba sura ya umajumui wa Afrika wa Tuzo hii imevuka mipaka ya bara la Afrika,” amesema Munyao Kilolo, msimamizi wa Tuzo.</p>
<p>&nbsp;</p>

<p>Na Mwenyekiti wa Bodi ya Wadhamini, Abdilatif Abdalla, amesema, “Ni furaha kuu ilioje kuona jinsi washiriki wanavyoongezeka, na pia kuona viwango vya maandishi yanayoletwa kwenye mashindano vikipanda juu kila Tuzo hii inavyoendelea kupata umaarufu na kuwafanya Waafrika kutoka sehemu mbalimbali duniani kushiriki. Ni matumaini yetu kwamba Tuzo hii hatimaye itasaidia katika kulitimiza lengo la Umajumui wa Afrika, ambalo tumekuwa na hamu nalo kwa miaka mingi. Pia nataka kuwahimiza waandishi wanawake washiriki kwenye mashindano ya Tuzo hii kwa idadi kubwa ili kulipunguza hili pengo la kijinsia lililoko hivi sasa.”</p>
<p>Mwanzilishi wa Tuzo Maalumu ya Nyabola, Bi Nanjala Nyabola amesema, “Ni muhimu sana kwamba jamii zinazozungumza Kiswahili zinaendela kuhusika na ubunifu na utumizi wa maneno au maendeleo mapya yanayohusu teknolojia,” aliongeza Nyabola, “na hakuna harakati bora zaidi ya kuendeleza kazi hii ila kwa kuunga mkono uandishi bora kuhusu sayansi na teknolojia”.</p>
<p>Wakishaisoma na kuitathmini miswada iliyotimiza vigezo vya &nbsp;mashindano haya, Majaji watawachagua washiriki watakaoingia katika orodha fupi, ambayo itatangazwa Novemba mwaka huu. Washindi wa kila kitengo watakaofaulu kuingia kwenye orodha ya mwisho ya watatangazwa kwenye sherehe ya kuwatunuku washindi zawadi zao, ambayo mwaka huu itafanyika Dar es Salaam, Tanzania, katikati ya Desemba.</p>
<p>&nbsp;</p>

<p>Baada ya kuyasitisha mashindano ya mwaka 2020 kutokana na kuzuka kwa janga la UVIKO-19, waanzilishi wa tuzo, Dkt. Lizzy Attree na Prof. Mukoma Wa Ngugi, wamefurahishwa kuona mwaka huu mashindano yamerudi tena kwa nguvu mpya. Ukuaji wa Tuzo hii ni mfano mzuri wa kuzitia moyo tuzo nyengine za maandishi kwa lugha za Afrika.</p>
<p>Tuzo ya Kiswahili ya Mabati Cornell ya Fasihi ya Afrika ilianzishwa mwaka 2014 ili kuimarisha uandishi kwa lugha za Afrika na kuhimiza tafsiri kutoka lugha hizo, baina ya lugha hizo zenyewe kwa zenyewe, na kwa lugha hizo.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<h2>Majaji wa 2021</h2>
<p>&nbsp;</p>

    <div class="container-judges">
        <img src="img/Aldin.jpg" alt="Prof. Aldin K. Mutembei" width="261" height="300" class="left-img">
        <p>&nbsp;</p>
        <p><strong>Prof. Aldin K. Mutembei</strong> (Shahada ya Kwanza (Elimu).; Shahada ya Uzamili (Isimu) (Dar); Shahada ya Uzamili (Fasihi); Shahada ya Uzamivu (Leiden) ni Mgoda, Kigoda cha Uprofesa wa Kiswahili cha Mwalimu Julius Nyerere, Chuo Kikuu cha Dar es Salaam. Kabla ya hapo alikuwa Mkurugenzi wa Taasisi ya Taaluma za Kiswahili; na sasa ni Mkurugenzi wa Taasisi ya Confucius, Chuo Kikuu cha Dar es Salaam. Anasomesha Fasihi ya Kiswahili/Kiafrika, Mawasiliano, Nadharia za Uhakiki, Fasihi Simulizi na Lugha ya Kiswahili kwa wazungumzaji wa lugha nyengine. Ameshachapisha vitabu vine, miongoni mwa hivyo ni riwaya <em>Kisiki Kikavu</em> (E &amp; D Limited, 2005) na <em>Korasi Katika Fasihi: Nadharia Mpya ya Uhakiki</em> (Taasisi ya Taaluma za Kiswahili, Chuo Kikuu cha Dar es Salaam, 2012).</p>
    </div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


    <div class="container-judges">
      <img class="left-img" src="img/Dr-Salma-Omar-Hamad.jpg" alt="Dkt. Salma Omar Hamad" width="261" height="300"> 
      <p>&nbsp;</p>
      <p><strong>Dkt. Salma Omar Hamad</strong> alizaliwa Pemba, Zanzibar, mwaka 1980. Hivi sasa ni Mhadhiri wa Fasihi ya Kiswahili na Isimu katika Chuo Kikuu Huria cha Tanzania. Alipata shahada yake ya kwanza ya Kiswahili (Elimu) kutoka Chuo Kikuu cha Taifa Zanzibar (SUZA); na Shahada ya Uzamili (Isimu) kutoka Chuo Kikuu cha Dar es Salaam, Shahada yake ya Uzamivu &nbsp;katika Kiswahili aliipata kutoka Chuo Kikuu cha Taifa Zanzibar. Dkt. Salma ameandika hadithi fupi kadhaa zilizoko kwa wachapishaji zikisubiri kuchapishwa. Pia amechangia hadithi katika mikusanyo ya hadithi fupi; kama vile hadithi yake, “Shibe Inatumaliza” kwenye mkusanyo uitwao <em>Tumbo Lisiloshiba na Hadithi Nyingine</em> (Longhorn Publishers, 2016).</p>
    </div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


    <div class="container-judges">
        <img class="left-img" src="img/MAITARIA.jpg" alt="Dkt. Joseph N. Maitaria" width="261" height="300">
        <p>&nbsp;</p>
        <p><strong>Dkt. Joseph N. Maitaria</strong> ni Mhadhiri Mwandamizi na Mkuu wa Idara ya Sanaa na Lugha, Kitivo cha Elimu na Sayansi za Kijamii, Chuo Kikuu cha Karatina, Kenya. Ana shahada ya Kwanza ya Ualimu (Chuo Kikuu cha Kenyatta) ambapo alisomea Shahada ya Elimu, Kiswahili na Dini. Shahada ya Uzamili alisomea Fasihi ya Kiswahili (Chuo Kikuu cha Kenyatta), na Shahada ya Uzamivu kuhusu Ushairi wa Kiswahili (Chuo Kikuu cha Kenyatta). Yeye pia ni mwanachama na Katibu wa vyama vya kitaaluma vya Kiswahili, kama vile Chama cha Kiswahili cha Afrika Mashariki (CHAKAMA) na Chama cha Kiswahili cha Taifa (CHAKITA), Kenya. Dkt. Maitaria amechapisha vitabu na makala kadhaa kuhusu Fasihi ya &nbsp;Kiswahili kwenye majarida ya kitaaluma.</p>
    </div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>    

    <div class="container-judges">
        <img class="left-img" src="img/Babusa.jpg" alt="Dkt. Hamisi Babusa" width="261" height="300">
        <p>&nbsp;</p>    
        <p><strong>Dkt. Hamisi Babusa</strong> ni Mhadhiri wa Kiswahili na Taaluma ya Ufundishaji Lugha, Chuo Kikuu cha Kenyatta, na kwa sasa ni Mkuu wa Kitengo. Miongoni mwa vyuo vikuu alivyosomesha ni Chuo Kikuu cha St. Lawrence, Marekani. Dkt. Babusa pia ni mwandishi wa kazi za kibunifu na za kitaaluma, miongoni mwa hizo ni <em>Kamusi Teule</em>, ambayo ni kamusi ya methali za Kiswahili na visawe vyake kwa Kiingereza<em>. </em>Amechangia pia katika mikusanyo mbalimbali ya mashairi na hadithi fupi. Pia ameandika vitabu vya watoto, kama vile mfululizo wa <em>Binti Kitabu</em> na wa <em>Makumba</em>, ambazo ni hadithi za kubuni za kisayansi na kidhana. Hadithi hizo zilimfanya kutambuliwa kuwa ni miongoni mwa wanasayansi 20 bora Kenya kwa mwaka 2018.</p>
    </div>
<p>&nbsp;</p>
<p>&nbsp;</p>    
<p>&nbsp;</p>  


    <div class="container-judges"> 
        <img class="left-img" src="img/Rocha.jpg" alt="Prof. Rocha Chimerah" width="300" height="261">
        <p>&nbsp;</p>    
        <p><strong>Prof. Rocha Chimerah</strong> ni Profesa wa Isimu ya Kiswahili katika Chuo Kikuu cha Pwani, Kilifi, Kenya. Alihitimu shahada yake ya uzamivu mwaka 1989, Chuo Kikuu cha Ohio, Marekani. Alisomesha Rwanda kwa miaka minane, na amechapisha makala kadha wa kadha kuhusu Lugha na Fasihi ya Kiswahili katika majarida ya kitaaluma ya Afrika Mashariki na ya nchi za nje. Miongoni mwa riwaya zake zilizochapishwa ni <em>Nyongo Mkalia Ini</em> na <em>Siri Sirini</em> (juzuu tatu), kadhalika na tamthilia. Mwaka 2000 alitunukiwa Tuzo ya Noma kwa kitabu alichoshiriki kukiandika, <em>Ufundishaji wa Fasihi: Nadharia na Mbinu</em>. Kitabu chake kingine,&nbsp; <em>Kiswahili: Past, Present and Future Horizon</em> kiliorodheshwa na Tamasha la Vitabu, Harare, Zimbabwe, mwaka 2002 kuwa ni miongoni mwa Vitabu Bora 100 vya Afrika vya Karne ya 20.</p>
    </div>
<p>&nbsp;</p>    
<p>&nbsp;</p>    
<p>&nbsp;</p>    



<p><strong>Kwa Wahariri:&nbsp;</strong></p>
<p>&nbsp;</p>    

<p>Tuzo hii inadhaminiwa na kampuni ya Mabati Rolling Mills, Kenya, na kampuni ya ALAF Limited, Tanzania (ambazo ni miongoni mwa kampuni za Safal Mauritius Limited); pia na Wakfu wa Ngugi wa Thiong’o (Ngugi wa Thiong’o Foundation).</p>
<p>&nbsp;</p>    

<p>Kampuni ya&nbsp;<strong>Safal Investments Mauritius Limited&nbsp;</strong>na matawi yake (ambayo ni pamoja na Mabati Rolling Mills Limited, Kenya, na ALAF Limited, Tanzania) inajulikana kwa jina la jumla la The Safal Group. Hii ni kampuni kubwa kabisa inayotengeneza mabati katika nchi 12 za Afrika.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p>
<p>&nbsp;</p>    

<p><strong>Mabati Rolling Mills Limited (MRM)&nbsp;</strong>ilibuniwa zaidi ya miaka 50 iliyopita. Ni kampuni kubwa kabisa Kenya inayotengeneza mabati ya kuezekea mapaa, na inaongoza katika utanzu huu wa ufundi. Pia inaongoza katika bara la Afrika kwa kutengeneza mabati ikitumia teknolojia ya hali ya juu kabisa inayopatikana duniani. Mabati yake maarufu yanasifika na yanaaminiwa na mamilioni ya wajenzi. www.mabati.com</p>
<p>&nbsp;</p>    

<p><strong>Safal MRM Foundation</strong>, yenye makao yake Kenya, ni kitengo cha Mabati Rolling Mills na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. Miongoni mwa misaada hiyo, inayotolewa Mariakani, Kenya, ni kuanzisha na kuendelea kugharimia uendeshaji wa Taasisi ya Mabati ya Mafunzo ya Teknolojia (Mabati Technical Training Institute), na Kituo cha Mabati cha Matibabu (Mabati Medical Centre). www.safalmrmfoundation.org</p>
<p>&nbsp;</p>    

<p><strong>ALAF Limited (ALAF)&nbsp;</strong>ni kampuni ya Tanzania inayoongoza katika utengenezaji wa mabati ya kuezekea mapaa. Tangu ilipobuniwa mwaka 1960, ALAF imeendelea kuchangia kwa kiasi kikubwa katika shughuli za ujenzi nchini. ALAF haitengenezi mabati ya kuezekea mapaa tu, bali pia aina za nyaya za chuma zinazotumika katika ujenzi wa mapaa. ALAF pia inatengeneza mabomba ya metali yanayotumika katika shughuli mbalimbali za ufundi. www.alaf.co.tz</p>
<p>&nbsp;</p> 

<p><strong>Safal ALAF Foundation</strong>, yenye makao yake Tanzania, ni kitengo cha ALAF na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. www.safalalaffoundation.org</p>
<p>&nbsp;</p>   


<p><strong>Ngugi Wa Thiong’o Foundation </strong>Wakfu huu unapata nguvu zake kutokana na hamu &nbsp;na ari ya kukuza kuonekana kwa Lugha za Kiafrika nchini Kenya, barani Afrika, na duniani, na kutambuliwa kuwa ni vyombo mwafaka vya kuendeshea shughuli za sanaa ya uigizaji, ubunifu, uvumbuzi, na taaluma. Pia unazitambua lugha hizi kwamba zina uwezo wa kuwa mstari wa mbele katika kila fani – tangu utamaduni, sayansi za kibiolojia, teknolojia hadi tiba.&nbsp;&nbsp; http://ngugiwathiongofoundation.org</p>
<p>&nbsp;</p>    

<p><strong>East African Educational Publisher (EAEP)&nbsp;</strong>ni shirika mojawapo kuu la wachapishaji. EAEP linajitahidi kuyahusisha maadili yanayoonekana kama kwamba yanakinzana; yaani kuchapisha kazi za kiwango cha juu zinazogusia maswala ya kijamii, ya kitamaduni na ya kiuchumi, na wakati huo huo kufaulu kufanya biashara iliyo tayari kukabiliana na hali halisi na misukosuko ya zama za kiteknolojia.&nbsp;Mwaka &nbsp;2016 shirika hili lilichapisha riwaya <em>Penzi la Damu</em>, ya Anna S. Manyanza, iliyoshinda nafasi ya kwanza mwaka huo, na riwaya <em>Kolonia Santita</em>, ya Enock Maregesi, iliyoshinda nafasi ya pili. <a href="http://www.eastafricanpublishers.com">http://www.eastafricanpublishers.com</a></p>
<p>&nbsp;</p>    

<p><strong>Mkuki na Nyota Publishers&nbsp;</strong>ni shirika huru la uchapishaji vitabu vya kimaendeleo, kiukombozi, vya bei nafuu na maridadi. Shirika hili lilianzishwa mwaka 1991 kutokana na ukosefu wa vitabu vya kiwango cha juu nchini Tanzania. Kaulimbiu yake ni kuchapisha “Vitabu Vinavyofaa, Vitabu vya Bei Nafuu, na Vitabu Maridadi.” Disemba 2018 shirika hili liliichapisha diwani ya mshairi Dotto Rangimoto,&nbsp;<em>Mwanangu Rudi Nyumbani</em>, iliyoshinda nafasi ya kwanza ya ushairi katika mashindano haya ya mwaka 2017. Na mwezi wa Januari 2019 likaichapisha riwaya ya Ali Hilal Ali,&nbsp;<em>Mmeza Fupa,&nbsp;</em>iliyoshinda nafasi ya kwanza ya mashindano haya katika sehemu ya riwaya, mwaka 2017.&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p>
<p>&nbsp;</p>    

<p><strong>Africa Poetry Book Fund&nbsp;</strong>inaimarisha na kuendeleza uchapishaji wa sanaa za kishairi kupitia vitabu vyake, mashindano, warsha, semina, pamoja na kushirikiana na wachapishaji, matamasha, mawakala, vyuo, vyuo vikuu, makongamano, na vikundi vingine vinavyohusika na ushairi Afrika.&nbsp;<a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
<p>&nbsp;</p>    
<p>&nbsp;</p>    


<h2>Majaji wa 2019</h2>
<p>&nbsp;</p>

<p><strong><img class="left-img" src="img/Prof.-Clara-Momanyi.jpg" alt="" width="115" height="132"></strong></p>
<p style="margin: 0in; margin-bottom: .0001pt; line-height: 16.5pt; background: #F0EEE4;"><strong><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">Prof. Clara Momanyi</span></strong><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">&nbsp;ni Mkenya ambaye amefunza Fasihi ya Kiswahili katika vyuo vikuu vya Kenya kwa zaidi ya miaka 20. Tasnifu yake ya uzamili ilikuwa ni kuhusu Fasihi ya Kiswahili na Maswala ya Jinsia. Pia ni mwandishi wa riwaya, hadithi fupi na mashairi. Miongoni mwa vitabu vyake ni&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Ushindi wa Nakate,&nbsp;</span></em>kitabu cha hadithi kilichoshinda tuzo ya Jomo Kenyatta-Textbook Centre Prize for Literature, mwaka wa 2015, katika kitengo cha fasihi ya watoto.&nbsp; Vitabu vyake vyengine ni pamoja na&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Tumaini</span></em>,&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Nakuruto</span></em>&nbsp;na&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Pendo</span></em>&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Katika</span></em>&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Shari</span></em>.</span></p>
<p style="margin: 0in; margin-bottom: .0001pt; line-height: 16.5pt; background: #F0EEE4; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; widows: 2; -webkit-text-stroke-width: 0px; word-spacing: 0px;"><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">Maandishi yake ya kitaaluma yamechapishwa katika majarida mbalimbali yanayotambulika. Kwa sasa Prof. Momanyi anajishughulisha zaidi na utafiti katika Fasihi ya Kiswahili, pamoja na kutafsiri kwa Kiswahili nyaraka mbalimbali za kitaifa na za kimataifa kutoka Kiingereza.</span></p>
<p style="margin: 0in; margin-bottom: .0001pt; line-height: 16.5pt; background: #F0EEE4; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; widows: 2; -webkit-text-stroke-width: 0px; word-spacing: 0px;"><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">Mwaka wa 2015 Prof. Momanyi alikuwa mmojawapo wa majaji wa&nbsp; shindano la kwanza la Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Afrika. Pia amekuwa jaji katika mashindano ya Tuzo nyengine kadhaa za Fasihi ya Kiswahili, kwa mfano Jomo Kenyatta Prize for Literature, Kenya, ambapo alishiriki kuteua kazi bora za fasihi katika Kiingereza na Kiswahili.</span></p>
<p>&nbsp;</p>

<p><strong><img class="left-img" src="Ahmed.jpg" alt="" width="110" height="126"></strong></p>
<p style="margin: 0in; margin-bottom: .0001pt; line-height: 16.5pt; background: #F0EEE4;"><strong><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">Ahmed Rajab</span></strong><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">, mzawa wa Zanzibar, ni mwandishi wa kimataifa, mchambuzi wa siasa, mwandishi wa insha na mwanasahafu wa Raia Mwema gazeti kubwa la kila wiki la Tanzania. Ana shahada ya Falsafa kutoka Chuo Kikuu cha London, stashahada ya juu katika Taaluma ya Miji ya Nchi Zinazoendelea kutoka chuo cha University College, London, na shahada ya uzamili katika somo la Fasihi ya Kisasa ya Kiafrika kutoka Chuo Kikuu cha Sussex. Tasnifu yake ilikuwa juu ya David Diop, mshairi wa falsafa ya Négritude.</span></p>
<p style="margin: 0in; margin-bottom: .0001pt; line-height: 16.5pt; background: #F0EEE4; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; widows: 2; -webkit-text-stroke-width: 0px; word-spacing: 0px;"><span style="font-size: 10.5pt; font-family: 'Arial',sans-serif; color: #333333;">Ahmed amewahi kufanya kazi katika Idhaa ya BBC, jarida la&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Index-on-Censorship</span></em>, gazeti la&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Africa Events</span></em>, jarida la&nbsp;<em><span style="font-family: 'Arial',sans-serif;">Africa Analysis</span></em>, pamoja na kwenye mashirika ya Umoja wa Mataifa ya Unesco na UNDP. Kutoka 2006 hadi 2009 alikuwa Mkuu wa Chumba cha Habari, Dubai, (akisimamia eneo la Mashariki ya Kati na Asia) katika Shirika la Habari za Kibinadamu la IRIN, lililokuwa chini ya Umoja wa Mataifa. Baadaye aliishi Nairobi kwa miaka mitatu akiwa Mkurugenzi Mtendaji wa kampuni ya televisheni ya Universal TV.&nbsp; Siku hizi anafanya kazi ya kutoa ushauri na ni mshiriki wa Taasisi ya Gusau iliyoko Kaduna, Nigeria. Baadhi ya mashairi ya Ahmed yamo kwenye kitabu cha mkusanyiko wa mashairi kiitwacho&nbsp;<em><span style="font-family: 'Arial',sans-serif;">African New Voices</span></em>, kilichochapishwa na Longman mwaka 1997. Amefasiri kwa Kiswahili vitabu viwili vya watoto vilivyochapishwa karibuni na wachapishaji wa Salaam Publishing, jijini London.&nbsp; Mwaka 2018 Ahmed Rajab alikuwa mmojawapo wa majaji wa Tuzo ya Caine ya Uandishi wa Kiafrika.</span></p>
<p>&nbsp;</p>

<p><strong><img class="left-img" src="Dr.-Amiri.jpg" alt="" width="108" height="124"></strong></p>
<p><strong>Dkt. Amiri Swaleh</strong>&nbsp;ni Mhadhiri Mwandamizi katika Idara ya Kiswahili, Chuo Kikuu cha Nairobi; na amekuwa akisomesha Fasihi ya Kiswahili na Isimujamii kwa miaka 27 sasa. Kwa hivi sasa ni Mkuu wa Kitengo cha Fasihi katika Idara ya Kiswahili. Mbali na makala yake ya kitaaluma yaliyochapishwa katika majarida mbalimbali, vile vile Dkt. Amiri ni mwandishi wa hadithi fupi ambazo zimechapishwa katika mikusanyo ya hadithi fupi, kama vile&nbsp;<em>Kosa la Nani? na Hadithi Nyingine&nbsp;</em>(2018).</p>
<p>Nyanja za kitaaluma anazoshughulika nazo zaidi ni pamoja na utafiti, uhakiki na uchambuzi wa Fasihi ya Kiswahili, hasa katika vipengee vya maswala ya kijinsia, ushairi wa Kiswahili wa kale, historia ya Kiswahili, lugha na maendeleo ya jamii, na mifumo ya kisiasa</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
	
        `;


           
        }

        else if (contentId.startsWith('content8')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        else if (contentId.startsWith('content9')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `

		
			<h1 style="text-align: center;"><strong>TUZO YA KISWAHILI YA SAFAL</strong></h1>
            <h1 style="text-align: center;"><strong>YA FASIHI YA AFRIKA</strong></h1>
<h1 style="text-align: center;"><strong>&nbsp;</strong></h1>
<p>&nbsp;</p>
				<h2>Tangazo la Washindi wa ${year} </h2>
<p>&nbsp;</p>

<p>Washindi wa Tuzo ya Kiswahili ya Safal ya Fasihi ya Afrika kwa mwaka 2022 walituzwa na <strong>Mheshimiwa Kassim Majaliwa Majaliwa</strong>, Waziri Mkuu wa Jamhuri ya Muungano wa Tanzania kwenye hafla maalumu iliyofanyika Januari 25, 2023, kwenye Ukumbi wa Mlimani City, Dar es Salaam.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<strong><img class="left-img" src="img/majaliwa.jpg"  width="300" height="224"></strong>
<div class="clearfix"></div>
<p>&nbsp;</p>


<p>Tuzo hii inafadhiliwa na kampuni ya Safal Group, kupitia matawi yake ya Mabati Rolling Mills (MRM), Kenya, na ALAF, Tanzania, Kituo cha Taaluma za Afrika katika Chuo Kikuu cha Cornell, Marekani USA; na Wakfu wa Ngugi wa Thiong’o.</p>
<p>&nbsp;</p>

<p>Madhumuni makuu ya Tuzo hii, iliyoanzishwa mwaka 2014 na <strong>Dkt. Lizzy Attree</strong> na <strong>Dkt. Mukoma wa Ngugi</strong>, ni kuthamini uandishi kwa lugha za Kiafrika, kuhimiza sanaa ya tafsiri baina ya lugha za Kiafrika zenyewe kwa zenyewe, na pia kutafsiri maandishi ya lugha nyengine kwa lugha za Kiafrika.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p>Majaji wa mwaka 2022, Prof. F.E.M.K. Senkoro (Prefesa mstaafu), Dkt. Magdaline Nakhumicha Wafula (Chuo Kikuu cha Moi, Kenya), na Dkt. Hamisi Babusa (Chuo Kikuu cha Kenyatta, Kenya) walichagua mswada wa <strong><em>Ujanajike</em></strong> ulioandikwa na <strong>Dotto Daudi Rangimoto</strong>, kuwa mshindi wa kwanza katika Kitengo cha Riwaya, na mswada wa <strong><em>Mamangu Nipe Wosia</em></strong>, wa<em> Salum Makamba</em>, kuwa mshindi katika kitengo cha Ushairi. Kila mmoja wao alipokea Dola za Marekani 5,000.</p>

<p>&nbsp;</p> 


<img class="left-img" src="img/dotto.jpg"  width="300" height="224">
<p><strong>Dotto Rangimoto</strong> alizaliwa Morogoro, Tanzania, mwaka wa 1986. Alishinda nafasi ya kwanza (Ushairi) katika Tuzo ya Kiswahili ya Mabati-Cornell mwaka wa 2018, na mswada wake ulioshinda, <em>Mwanangu Rudi Nyumbani,</em> baadaye ukachapishwa kitabu na shirika la Mkuki na Nyota Publishers, Dar es Salaam. Dotto alimaliza elimu yake ya sekondari mwaka 2004 katika Shule ya Sekondari Morogoro. Baada ya hapo amejihusisha na biashara ndogo ndogo na kilimo. Ni mkereketwa mkubwa wa Fasihi ya Kiswahili, hasa riwaya na ushairi.</p>
    <p>&nbsp;</p>   
<div class="clearfix"></div>
<p>&nbsp;</p>

<img class="left-img" src="img/salum.jpg"  width="300" height="224">
<p><strong>Salum Makamba</strong> ni mwandishi chipukizi ambaye, mbali na riwaya, huandika hadithi fupi, mashairi, tamthiliya, insha na makala juu ya maswala mbalimbali ya kijamii. Alisomea udaktari kutoka Chuo Kikuu cha Dar es Salaam.</p>    
<p>&nbsp;</p>
    <p>&nbsp;</p>  
<p>&nbsp;</p>
<p>&nbsp;</p>
<div class="clearfix"></div>

<p>&nbsp;</p>
<p>&nbsp;</p>

<p>Katika hotuba yake kwenye hafla hio, Waziri Mkuu, Mheshimiwa Kassim Majaliwa Majaliwa, aliwapongeza washindi hao na pia uongozi na bodi ya Tuzo ya Safal-Cornell ya Fasihi ya Afrika na wadhamini wote, wakiongozwa na Safal Group, kwa kazi nzuri wanayoifanya ya kuendeleza fasihi kwa lugha za Kiafrika, hasa Kiswahili.</p>
<p>&nbsp;</p>

<p>Mkurugenzi Mtendaji wa Safal Group, Bw. Andrew Lindgren, naye alizungumza katika hafla hiyo na kuangazia umuhimu wa lugha ya Kiswahili katika maendeleo ya ukanda wa Afrika Mashariki. “Kupitia uungwaji mkono wetu wa tuzo hizi, Kundi la SAFAL limejitolea kwa dhati kuendeleza lugha za Kiafrika, na nawapongeza ALAF Limited na MRM kwa kazi yao ya kuandaa sherehe za Tuzo kila mwaka.”</p>
<p>&nbsp;</p>

<p>Kwa niaba ya Jopo la Majaji, <strong>Prof. Senkoro </strong>(mwenyekiti) alisema kwamba miswada iliyoshirikishwa mwaka huu ilikuwa ya kiwango cha juu kiasi cha kwamba ilikuwa vigumu sana kwa majaji kuchagua washindi wa kwanza. “Kupokelewa kwa idadi kubwa sana ya miswada ya riwaya na ushairi, kutoka sehemu mbalimbali za Afrika, hasa Afrika ya Mashariki, ni dalili tosha kuwa tunayo hazina kubwa ya ubunifu, hasa miongoni mwa vijana, ivukayo mipaka ya nchi mojamoja, na ambayo ikimwagiliwa maji ya misingi ya uandishi bora na uchapishaji wa kazi za kifasihi itaiimarisha sana tasnia ya Fasihi ya Kiswahili,” aliongeza Prof. Senkoro.</p>
<p>&nbsp;</p>

<p>Naye Bwana Walter Bgoya wa shirika la Mkuki na Nyota Publishers, mchapishaji rasmi wa miswada inayoshinda, alisema, “Tuzo ya Safal–Cornell imeibua waandishi wenye vipaji katika uwanja wa fasihi tangu ilipoanzishwa mwaka 2014, na hakuna shaka kuwa imewapa waandishi msukumo na kufanya sherehe hizi za kutoa tuzo, siku ya furaha kubwa katika maisha ya wale wanaopata bahati ya kushinda.”</p>
<p>&nbsp;</p>

<p>Pia, alisisitiza kuhusu kuamsha ari ya wasomi wanazuoni wa Tanzania na kwingineko, kuanza kukuza lugha ya Kiswahili katika sayansi na teknolojia.&nbsp; Alisema, “wako wanazuoni ambao tayari wamejikita katika kufanya hayo; wanachohitaji ni kazi zao kutambulika na kutumika.”</p>
<p>&nbsp;</p>

<p>Nafasi ya pili katika Kitengo cha Riwaya ilichukuliwa na <strong>Isaac Ndolo </strong>(Kenya), aliyeandika riwaya ya <strong>Wimbo wa Hatima</strong>. Naye <strong>Ally Bakari Mchanyato</strong> alipata nafasi ya pili katika kitengo cha Ushairi kwa diwani itwaayo <strong>Uswahilini. </strong>Kila mmoja alitunukiwa Dola za Marekani 2,500.</p>
<p>&nbsp;</p>

    <strong><img class="left-img" src="img/Isaac.jpg"  width="300" height="224"></a></strong>
    <strong><img class="left-img" src="img/Ally.jpg"  width="300" height="224"></a></strong>


<div class="clearfix"></div>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p>Miswada inayoshinda huchapishwa na shirika la Mkuki na Nyota Publishers, Dar es Salaam.</p>
<p>&nbsp;</p>

<p>Kama ilivyotangazwa hapo awali, kazi za waandishi wengine walioteuliwa kwenye Orodha Fupi zilikuwa: <strong>Dunia na Watu Wake (</strong>Riwaya<strong>)</strong> ya <strong>Ahmad Simba Mwaita</strong> na <strong>Mzoga Unaonukia </strong>(Ushairi) ya <strong>Lenard Mtesigwa.</strong></p>
<p>&nbsp;</p>

<p>Washindi hao na wenzao walikuwemo katika Orodha Fupi pia walihudhuria hafla hiyo ya utoaji tuzo jijini Dar es Salaam.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>



<p><strong>Kwa Wahariri:&nbsp;</strong></p>
<p>&nbsp;</p>

<p>Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Kiafrika, yenye thamani ya jumla ya Dola za Marekani 15,000, hutolewa kila mwaka kwa miswada bora, au kwa vitabu vilivyochapishwa miaka miwili kabla ya mwaka wa kutolewa zawadi, katika fani za riwaya, ushairi, wasifu, tamthilia na riwaya za picha. Miswada inayoshinda huchapishwa na shirika la Mkuki na Nyota. Na mswada bora wa ushairi hufasiriwa kwa Kiingereza na kuchapishwa kitabu na shirika la Africa Poetry Book Fund.</p>
<p>&nbsp;</p>

<p>Tuzo hii inadhaminiwa na kampuni ya Mabati Rolling Mills, Kenya, na kampuni ya ALAF Limited, Tanzania (ambazo ni miongoni mwa kampuni za Safal Mauritius Limited); pia na Ofisi ya Makamu wa Mkuu wa Maswala ya Kimataifa katika Chuo Kikuu cha Cornell, Idara ya Taaluma za Afrika ya Chuo Kikuu cha Cornell, Marekani, na Wakfu wa Ngugi wa Thiong’o (Ngugi wa Thiong’o Foundation).</p>
<p>&nbsp;</p>

<p>Kampuni ya&nbsp;<strong>Safal Investments Mauritius Limited&nbsp;</strong>na matawi yake (ambayo ni pamoja na Mabati Rolling Mills Limited, Kenya, na ALAF Limited, Tanzania) inajulikana kwa jina la jumla la The Safal Group. Hii ni kampuni kubwa kabisa inayotengeneza mabati katika nchi 12 za Afrika.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p>
<p>&nbsp;</p>

<p><strong>Mabati Rolling Mills Limited (MRM)&nbsp;</strong>ilibuniwa zaidi ya miaka 50 iliyopita. Ni kampuni kubwa kabisa Kenya inayotengeneza mabati ya kuezekea mapaa, na inaongoza katika utanzu huu wa ufundi. Pia inaongoza katika bara la Afrika kwa kutengeneza mabati ikitumia teknolojia ya hali ya juu kabisa inayopatikana duniani. Mabati yake maarufu yanasifika na yanaaminiwa na mamilioni ya wajenzi. www.mabati.com</p>
<p>&nbsp;</p>

<p><strong>Safal MRM Foundation</strong>, yenye makao yake Kenya, ni kitengo cha Mabati Rolling Mills na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. Miongoni mwa misaada hiyo, inayotolewa Mariakani, Kenya, ni kuanzisha na kuendelea kugharimia uendeshaji wa Taasisi ya Mabati ya Mafunzo ya Teknolojia (Mabati Technical Training Institute), na Kituo cha Mabati cha Matibabu (Mabati Medical Centre). www.safalmrmfoundation.org</p>
<p>&nbsp;</p>

<p><strong>ALAF Limited (ALAF)&nbsp;</strong>ni kampuni ya Tanzania inayoongoza katika utengenezaji wa mabati ya kuezekea mapaa. Tangu ilipobuniwa mwaka 1960, ALAF imeendelea kuchangia kwa kiasi kikubwa katika shughuli za ujenzi nchini. ALAF haitengenezi mabati ya kuezekea mapaa tu, bali pia aina za nyaya za chuma zinazotumika katika ujenzi wa mapaa. ALAF pia inatengeneza mabomba ya metali yanayotumika katika shughuli mbalimbali za ufundi. www.alaf.co.tz</p>
<p>&nbsp;</p>


<p><strong>Mkuki na Nyota Publishers&nbsp;</strong>ni shirika huru la uchapishaji vitabu vya kimaendeleo, kiukombozi, vya bei nafuu na maridadi. Shirika hili lilianzishwa mwaka 1991 kutokana na ukosefu wa vitabu vya kiwango cha juu nchini Tanzania. Kaulimbiu yake ni kuchapisha “Vitabu Vinavyofaa, Vitabu vya Bei Nafuu, na Vitabu Maridadi.” Disemba 2018 shirika hili liliichapisha diwani ya mshairi Dotto Rangimoto,&nbsp;<em>Mwanangu Rudi Nyumbani</em>, iliyoshinda nafasi ya kwanza ya ushairi katika mashindano haya ya mwaka 2017. Na mwezi wa Januari 2019 likaichapisha riwaya ya Ali Hilal Ali,&nbsp;<em>Mmeza Fupa,&nbsp;</em>iliyoshinda nafasi ya kwanza ya mashindano haya katika sehemu ya riwaya, mwaka 2017.&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p>
<p>&nbsp;</p>

<p><strong>Africa Poetry Book Fund&nbsp;</strong>inaimarisha na kuendeleza uchapishaji wa sanaa za kishairi kupitia vitabu vyake, mashindano, warsha, semina, pamoja na kushirikiana na wachapishaji, matamasha, mawakala, vyuo, vyuo vikuu, makongamano, na vikundi vingine vinavyohusika na ushairi Afrika.&nbsp;<a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>



<h3>Majaji wa 2022</h3>
<p>&nbsp;</p>

<p><strong>Prof. </strong><strong>F.E.M.K. Senkoro </strong>ana shahada za B.A. (Education), M.A (Kiswahili) na Ph.D. (Kiswahili) kutoka Chuo Kikuu cha Dar es Salaam, na M.A.&nbsp; (Fasihi Linganishi) kutoka Chuo Kikuu cha&nbsp;&nbsp; Alberta, Canada. Pamoja na kufundisha Kiswahili kwa muda mrefu katika Chuo Kikuu cha Dar es Salaam, kabla ya kustaafu Profesa Senkoro alikuwa pia Mratibu wa Kituo cha Fasihi Andishi na Fasihi Simulizi za Kiafrika na Mkuu wa Idara ya Fasihi zote katika Taasisi ya Taaluma za Kiswahili (TATAKI); na Mkuu wa Kitivo Mshiriki (Utafiti na Machapisho) katika kilichokuwa Kitivo cha Fani na Sayansi za Jamii katika chuo hichohicho. Wakati huohuo, kwa mihula miwili mfululizo, Profesa Senkoro alikuwa katika Kamati ya Utendaji ya Baraza la Maendeleo ya Utafiti wa Sayansi za Kijamii Afrika (CODESRIA) kama Mwenyekiti wa Kamati Ndogo ya Utawala Bora. Vilevile Profesa Senkoro amekuwa Mwanazuoni na Profesa Mualikwa katika vyuo vikuu mbalimbali vikiwemo vya UNISA na Durban-Westville, Afrika Kusini; Wisconsin-Madison, Boston, Harvard, na Princeton nchini Marekani; na Chuo Kikuu cha Namibia (UNAM). Amechapisha zaidi ya makala 100 zihusuzo vipengele mbalimbali vya fasihi ya Kiafrika, hasa ile ya Kiswahili, na pia vitabu 12 vikiwemo vya nadharia ya fasihi, riwaya mbili na diwani moja ya hadithi fupi. &nbsp;Amepata tuzo kadhaa ikiwemo ya CODESRIA kwa ajili ya uandishi wa kazi yake ya “The Social Significance of&nbsp; the Journey in Folktales&nbsp;&nbsp; from&nbsp; &nbsp;Zanzibar”;&nbsp;&nbsp; Tuzo ya Rockefeller&nbsp; African&nbsp; Humanities Institute, W.E.B. Du Bois Institute for Afro American Research, ya Chuo Kikuu cha Harvard (2000 –2001); na Nishani ya Kiswahili ya Shaaban Robert iliyotolewa na Baraza la Kiswahili la Taifa (BAKITA) &nbsp;(2001). Kwa sasa, zaidi ya kufundisha kozi za uzamivu za fasihi ya Kiswahili katika vyuo vikuu kadhaa, Profesa Senkoro anaendelea na uandishi wa vitabu na makala mbalimbali kuhusu lugha, fasihi na utamaduni wa Kiswahili.</p>
<p>&nbsp;</p>
<p><strong>Dkt. Magdaline Nakhumicha Wafula </strong>ana shahada za B.A. (Honours) na P.G.D.E. kutoka Chuo Kikuu cha Egerton, MPhil (Kiswahili) kutoka Chuo Kikuu cha Moi na Ph.D. (Fasihi za Kiafrika) kutoka Chuo Kikuu cha Bayreuth, Germany. Amekuwa akifundisha lugha na fasihi ya Kiswahili katika Chuo Kikuu cha Moi,Eldoret&nbsp; tangu mwaka 2014. Kwa sasa anashikilia wadhifa wa Mkuu wa Idara ya Kiswahili na Lugha Nyingine za Kiafrika. Amefanya utafiti katika vitengo vya Isimujamii, riwaya ya Kiswahili, Tafsiri na masuala ya Jinsia. Anachangamkia zaidi tanzu za kinathari na hasa riwaya ya Kiswahili.Tasnifu yake ya Uzamifu ni tahakiki ya migogoro ya vizazi katika riwaya za <em>Vuta n’kuvute,Kufa Kuzikana</em>, <em>Kipimo cha Mizani</em> na&nbsp; <em>Tumaini</em>. Ameandika&nbsp; na kuchapisha tahakiki juu ya <em>Kisima cha Giningi</em>, <em>Msimu wa Vipepeo</em>, <em>Nakuruto, Unaitwa Nani?Dunia&nbsp; Yao, Babu Alipofufuka </em>na <em>Bin-Adamu! </em>Pamoja na kufundisha kozi za fasihi ya Kiswahili kwa muda mrefu katika Chuo Kikuu cha Moi, amesimamia na kutahini zaidi ya tasnifu&nbsp; 10 za uzamili na uzamifu katika fasihi simulizi na fasihi andishi ya Kiswahili. Tangu mwaka wa 2016 amekuwa miongoni mwa wahariri wa <em>Mwanga wa Lugha;</em> Jarida la Idara ya Kiswahili na Lugha Nyingine za Kiafrika linalochapishwa kila mwaka.</p>
<p>&nbsp;</p>

<p><strong>Dkt. Hamisi&nbsp;Babusa</strong>&nbsp;ni mhadhiri wa Kiswahili na Ufundishaji Lugha. Amefunza katika vyuo vikuu vingi vikiwemo Chuo Kikuu cha St. Lawrence, kilicho Canton, NY, Marekani. Kwa sasa ni mhadhiri na Mkuu wa Kitengo katika Chuo Kikuu cha Kenyatta. Mbali na kuwa mhadhiri, Dkt. Babusa pia ni mwandishi kazi za kibunilizi na za Kitaaluma. Ameandika kazi anuwai kama vile Kamusi Teule na pia A Dictionary of English and Swahili Equivaleny Proverbs na nyingine nyingi. Amechangia katika mikusanyiko mingi ya Hadithi Fupi na Mashairi na pia akahariri kadhaa. Dkt. Babusa pia ameandika novela za watoto kama vile <em>Msururu Wa Binti Kitabu</em> na <em>Msururu Wa Makumba</em>. Yeye ndiye mwandishi wa kwanza kuwahi kutunga hadithi za Kiswahili za Sayansi Bunilizi <em>Msururu Wa Makumba</em> ambazo zilimfanya akapewa tuzo ya kuwa mmoja wa wanasayansi ishirini bora nchini Kenya, Mwaka 2018.&nbsp; Aidha yeye ndiye mwasisi na Meneja Msimamizi wa BABUSA&nbsp;TV, chaneli ya mtandaoni ya kufunza watoto lugha ya Kiswahili kwa kupitia vikaragosi na nyimbo.</p>
<p>&nbsp;</p>

<p><strong>Tovuti: </strong><a href="http://kiswahiliprize.org/">http:kiswahiliprize.org</a></p>
<p><strong>&nbsp;</strong></p>
		
	</div>
            `;
        }

        else if (contentId.startsWith('content10')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <div class="post-250 page type-page status-publish hentry">

				<h1 class="entry-title">Washindi wa mwaka 2021 ni</h1>
		
				<div class="entry-content">
			<h2 style="text-align: center;"><strong>TUZO YA KISWAHILI YA MABATI-CORNELL</strong></h2>
<h2 style="text-align: center;"><strong>YA FASIHI YA AFRIKA</strong></h2>
<h3 style="text-align: center;"><strong>&nbsp;</strong><strong>Tangazo la Washindi wa 2021</strong></h3>
<p>&nbsp;</p>
<p>Washindi wa Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Afrika kwa mwaka 2021 walitangazwa tarehe 27 Januari, 2021, kwenye hafla maalumu iliyofanyika katika Ukumbi wa Mlimani City, Dar es Salaam, ambapo Mgeni Rasmi alikuwa Mheshimiwa<strong>&nbsp;Kassim Majaliwa</strong>, Waziri Mkuu wa Jamhuri ya Muungano wa Tanzania. Washindi hao walitangazwa na Mwenyekiti wa Bodi ya Wadhamini ya Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Afrika&nbsp;<strong>Abdilatif Abdalla</strong>. Miongoni mwa wageni mashuhuri waliokuwepo ni pamoja na Mheshimiwa&nbsp;<strong>Mohammed Omar Mchengerwa</strong>, Waziri wa Utamaduni, Sanaa na Michezo; Mheshimiwa&nbsp;<strong>Amos Makalla</strong>, Mkuu wa Mkoa wa Dar es Salaam, na Bwana<strong>&nbsp;Anders Lindgren,</strong>&nbsp;Mkurugenzi Mtendaji wa Safal Group.</p>
<p>Madhumuni makuu ya Tuzo hii, iliyoanzishwa mwaka 2014 na&nbsp;<strong>Dkt. Lizzy Attree&nbsp;</strong>(Short Story Day Africa) na&nbsp;<strong>Dkt. Mukoma wa Ngugi</strong>&nbsp;(Chuo Kikuu cha Cornell, Marekani), ni kuthamini uandishi kwa lugha za Kiafrika, kuhimiza sanaa ya tafsiri baina ya lugha za Kiafrika zenyewe kwa zenyewe, na pia kutafsiri maandishi ya lugha nyengine kwa lugha za Kiafrika.</p>
<p><strong>Washindi:</strong></p>
<p>Katika Kitengo cha Riwaya, mshindi wa nafasi ya kwanza ni &nbsp;<strong>Halfani Sudy</strong>&nbsp;kwa riwaya yake inayoitwa&nbsp;<em>Kirusi Kipya</em>. Na mshindi wa kwanza katika Kitengo cha Ushairi ni&nbsp;<strong>Mohamed Omar Juma</strong>&nbsp;kwa diwani yake inayoitwa&nbsp;<em>Chemchemi Jangwani</em>.&nbsp; Mshindi wa nafasi ya pili</p>
<p>katika Kitengo cha Riwaya ni&nbsp;<strong>Lucas Lubago</strong>&nbsp;kwa riwaya yake,<em>&nbsp;Bweni la Wasichana</em>. Kama ilivyotangazwa wakati Tuzo hii ilipoanzishwa, mshindi wa nafasi ya pili anaweza pia kutoka katika kitengo chochote. Kwa sababu hiyo, majaji walimchagua<strong>&nbsp;Mbwana Kidato</strong>&nbsp;kushika nafasi hiyo kwa mswada wake uitwao&nbsp;<em>Sinauba</em>, ambao majaji waliyaeleza maandishi hayo kuwa ni ya mtindo mpya. Kwa niaba yao, Prof Mutembei alisema, “Kazi hii ni aina mpya ya uandishi. Ni uandishi wa kiubunifu wa hali ya juu; lakini si riwaya, si tamthilia. Yote mawili yamo: mna uandishi wa kinathari (kama riwaya) na mna majibizano na maongezi baina ya wahusika (kama tamthilia). Ni kwa sababu hiyo kazi hii tuliipa nafasi maalumu ya thamani.</p>
<p>Mshindi wa nafasi ya kwanza katika kila kitengo alitunukiwa Dola 5,000 za Marekani; na mshindi wa pili katika kila kitengo alipokea Dola 2,500 za Marekani.</p>
<p>Majaji wa mashindano ya mwaka 2020 walikuwa ni &nbsp;<strong>Prof. Aldin K. Mutembei&nbsp;</strong>(Chuo Kikuu cga Dar es Salaam),&nbsp;<strong>Dkt. Salma Omar Hamad</strong>&nbsp;(Chuo Kikuu Huria cha Tanzania) na&nbsp;<strong>Dkt. Joseph N. Maitaria&nbsp;</strong>(Chuo Kikuu cha Karatina, Kenya). Mwenyekiti wa Jopo la Majaji, Prof. Aldin K. Mutembei, alisema kwa niaba ya wenzake, “Miswada iliyoshinda ilikuwa ni ya kiwango cha juu cha ubunifu, matumizi sahihi na ubora wa lugha, na ushirikishwaji wa wahusika wenye uhalisia katika jamii. Pia tulizingatia maudhui yanayolingana na majira ya nyakati hizi tulizonazo katika jamii zetu Afrika.Mfupi”</p>
<p><strong>Wasifu Mfupi wa Washindi:</strong></p>
<p><strong>Halfani Sudy&nbsp;</strong>alizaliwa mwaka 1989, mkoani Lindi, wilaya ya Kilwa. Amekuwa akiandika riwaya tangu mwaka 2014, na ameshachapisha vitabu vitano:&nbsp;<em>Penzi Chungu, Farida, Kipepeo Mwekundu, Kanda ya Siri</em>&nbsp;na&nbsp;<em>Msako Hatari.</em>&nbsp;Hivi sasa, Halfani Sudy ni Mkuu wa Idara ya Ustawi wa Jamii, na anasomesha somo la Ustawi wa Jamii katika chuo cha New Mafinga Health Allied Institute kilichopo Mafinga, mkoani Iringa.</p>
<p><strong>Mohamed Omar Juma&nbsp;</strong>alizaliwa mwaka 1986 katika kijiji cha Wambaa, mkoa wa kusini Pemba. Ana shahada ya kwanza ya Sanaa na Ualimu (B.A. Ed) kutoka Chuo Kikuu cha Waislamu, Morogoro, Tanzania, alikosomea somo la Kiswahili na Kiingereza. Mwaka 2018 alitunukiwa cheti katika mashindano ya Tuzo ya Ushairi ya Ebrahim Hussein. Hivi sasa ni mwalimu wa Kiswahili na Kiingereza katika Shule ya Sekondari ya Minazini, Kigamboni, &nbsp;Dar es Salaam; na pia ni Mwanafunzi wa Chuo Kikuu Huria cha Tanzania, anakosomea Shahada ya Uzamili: Elimu katika Utawala, Mipango na Mafunzo ya Sera.</p>
<p>Kama ilivyotangazwa mwezi wa Disemba 2020, wafuatao ni miongoni mwa waliokuwemo katika Orodha Fupi:&nbsp;<strong>Hafidh Athumani Kido</strong>&nbsp;kwa riwaya yake,&nbsp;<em>Kanzu ya Ukubwa</em>;&nbsp;<strong>Msusa Mohamedi Msusa</strong>&nbsp;kwa diwani yake,<em>&nbsp;Malenga wa Masasi</em>; na&nbsp;<strong>Mfaume Hamisi Mfaume</strong>&nbsp;kwa diwani yake,&nbsp;<em>Sinaye Baba</em>.</p>
<p><strong>Kwa Wahariri:&nbsp;</strong></p>
<p>Tuzo ya Kiswahili ya Mabati-Cornell ya Fasihi ya Afrika, yenye thamani ya jumla ya Dola za Marekani 15,000, hutolewa kila mwaka kwa miswada bora, au kwa vitabu vilivyochapishwa miaka miwili kabla ya mwaka wa kutolewa zawadi, katika fani za riwaya, ushairi, wasifu, tamthilia na riwaya za picha. Miswada inayoshinda huchapishwa na mashirika ya uchapishaji vitabu, Mkuki na Nyota Publishers, Tanzania, na East African Educational Publishers (EAEP), Kenya. Na mswada bora wa ushairi hufasiriwa kwa Kiingereza na kuchapishwa kitabu na shirika la Africa Poetry Book Fund.</p>
<p>Tuzo hii inadhaminiwa na kampuni ya Mabati Rolling Mills, Kenya, na kampuni ya ALAF Limited, Tanzania (ambazo ni miongoni mwa kampuni za Safal Mauritius Limited); pia na Ofisi ya Makamu wa Mkuu wa Maswala ya Kimataifa katika Chuo Kikuu cha Cornell, Idara ya Taaluma za Afrika ya Chuo Kikuu cha Cornell, Marekani, na Wakfu wa Ngugi wa Thiong’o (Ngugi wa Thiong’o Foundation).</p>
<p>Kampuni ya&nbsp;<strong>Safal Investments Mauritius Limited&nbsp;</strong>na matawi yake (ambayo ni pamoja na Mabati Rolling Mills Limited, Kenya, na ALAF Limited, Tanzania) inajulikana kwa jina la jumla la The Safal Group. Hii ni kampuni kubwa kabisa inayotengeneza mabati katika nchi 12 za Afrika.&nbsp;<a href="http://www.safalgroup.com/">www.safalgroup.com</a></p>
<p><strong>Mabati Rolling Mills Limited (MRM)&nbsp;</strong>ilibuniwa zaidi ya miaka 50 iliyopita. Ni kampuni kubwa kabisa Kenya inayotengeneza mabati ya kuezekea mapaa, na inaongoza katika utanzu huu wa ufundi. Pia inaongoza katika bara la Afrika kwa kutengeneza mabati ikitumia teknolojia ya hali ya juu kabisa inayopatikana duniani. Mabati yake maarufu yanasifika na yanaaminiwa na mamilioni ya wajenzi. www.mabati.com</p>
<p><strong>Safal MRM Foundation</strong>, yenye makao yake Kenya, ni kitengo cha Mabati Rolling Mills na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. Miongoni mwa misaada hiyo, inayotolewa Mariakani, Kenya, ni kuanzisha na kuendelea kugharimia uendeshaji wa Taasisi ya Mabati ya Mafunzo ya Teknolojia (Mabati Technical Training Institute), na Kituo cha Mabati cha Matibabu (Mabati Medical Centre). www.safalmrmfoundation.org</p>
<p><strong>ALAF Limited (ALAF)&nbsp;</strong>ni kampuni ya Tanzania inayoongoza katika utengenezaji wa mabati ya kuezekea mapaa. Tangu ilipobuniwa mwaka 1960, ALAF imeendelea kuchangia kwa kiasi kikubwa katika shughuli za ujenzi nchini. ALAF haitengenezi mabati ya kuezekea mapaa tu, bali pia aina za nyaya za chuma zinazotumika katika ujenzi wa mapaa. ALAF pia inatengeneza mabomba ya metali yanayotumika katika shughuli mbalimbali za ufundi. www.alaf.co.tz</p>
<p><strong>Ofisi ya Makamu wa Mkuu wa Maswala ya Kimataifa&nbsp;</strong>katika Chuo Kikuu cha Cornell inatoa mwongozo na kusaidia katika kusimamia juhudi za kuzidisha shughuli za kimataifa Cornell. Lengo lake ni kushirikiana na shule, vyuo na taasisi nyengine ili kuendeleza na kutekeleza mipango inayohusiana na shughuli za kimataifa za Chuo Kikuu hiki. Ofisi hii inaisaidia Halmashauri mpya ya Kimataifa, ambayo mwenyekiti wake ni Makamu wa Mkuu. http://international.cornell.edu/international_vision</p>
<p><strong>Idara ya Taaluma za Afrika na Utafiti&nbsp;</strong>inachangia kwa kiasi kikubwa katika shughuli za kitaaluma, kitamaduni na za kijamii kwenye Chuo Kikuu cha Cornell, Ithaca.&nbsp;<a href="http://www.asrc.cornell.edu/">http://www.asrc.cornell.edu</a></p>
<p><strong>Ngugi Wa Thiong’o Foundation&nbsp;</strong>Wakfu huu unapata nguvu zake kutokana na hamu na ari ya kukuza kuonekana kwa Lugha za Kiafrika nchini Kenya, barani Afrika, na duniani, na kutambuliwa kuwa ni vyombo mwafaka vya kuendeshea shughuli za sanaa ya uigizaji, ubunifu, uvumbuzi, na taaluma. Pia unazitambua lugha hizi kwamba zina uwezo wa kuwa mstari wa mbele katika kila fani – tangu utamaduni, sayansi za kibiolojia, teknolojia hadi tiba.&nbsp;&nbsp; http://ngugiwathiongofoundation.org</p>
<p><strong>East African Educational Publisher (EAEP)&nbsp;</strong>ni shirika mojawapo kuu la wachapishaji. EAEP linajitahidi kuyahusisha maadili yanayoonekana kama kwamba yanakinzana; yaani kuchapisha kazi za kiwango cha juu zinazogusia maswala ya kijamii, ya kitamaduni na ya kiuchumi, na wakati huo huo kufaulu kufanya biashara iliyo tayari kukabiliana na hali halisi na misukosuko ya zama za kiteknolojia.&nbsp;<a href="http://www.eastafricanpublishers.com/">http://www.eastafricanpublishers.com</a></p>
<p><strong>Mkuki na Nyota Publishers&nbsp;</strong>ni shirika huru la uchapishaji vitabu vya kimaendeleo, kiukombozi, vya bei nafuu na maridadi. Shirika hili lilianzishwa mwaka 1991 kutokana na ukosefu wa vitabu vya kiwango cha juu nchini Tanzania. Kaulimbiu yake ni kuchapisha “Vitabu Vinavyofaa, Vitabu vya Bei Nafuu, na Vitabu Maridadi.” Disemba 2018 shirika hili liliichapisha diwani ya mshairi Dotto Rangimoto,&nbsp;<em>Mwanangu Rudi Nyumbani</em>, iliyoshinda nafasi ya kwanza ya ushairi katika mashindano haya ya mwaka 2017. Na mwezi wa Januari 2019 likaichapisha riwaya ya Ali Hilal Ali,&nbsp;<em>Mmeza Fupa,&nbsp;</em>iliyoshinda nafasi ya kwanza ya mashindano haya katika sehemu ya riwaya, mwaka 2017.&nbsp;<a href="http://www.mkukinanyota.com/">http://www.mkukinanyota.com</a></p>
<p><strong>Africa Poetry Book Fund&nbsp;</strong>inaimarisha na kuendeleza uchapishaji wa sanaa za kishairi kupitia vitabu vyake, mashindano, warsha, semina, pamoja na kushirikiana na wachapishaji, matamasha, mawakala, vyuo, vyuo vikuu, makongamano, na vikundi vingine vinavyohusika na ushairi Afrika.&nbsp;<a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
<p><strong>Bodi ya Wadhamini:&nbsp;</strong>Abdilatif Abdalla (Chair), Mukoma Wa Ngugi, Lizzy Attree, Walter Bgoya, Henry Chakava, Chege Githiora, Clarissa Vierke, Farouk Topan, Carole Boyce Davies, and Ngugi Wa Thiong’o.</p>
<p>Msimamizi (Administrator):&nbsp;<strong>Moses Kilolo</strong></p>
<p><strong>Majaji wa 2020</strong></p>
<p><strong>Prof. Aldin K. Mutembei</strong>&nbsp;(Shahada ya Kwanza (Elimu).; Shahada ya Uzamili (Isimu) (Dar); Shahada ya Uzamili (Fasihi); Shahada ya Uzamivu (Leiden) ni Mgoda, Kigoda cha Uprofesa wa Kiswahili cha Mwalimu Julius Nyerere, Chuo Kikuu cha Dar es Salaam. Kabla ya hapo alikuwa Mkurugenzi wa Taasisi ya Taaluma za Kiswahili; na sasa ni Mkurugenzi wa Taasisi ya Confucius, Chuo Kikuu cha Dar es Salaam. Anasomesha Fasihi ya Kiswahili/Kiafrika, Mawasiliano, Nadharia za Uhakiki, Fasihi Simulizi na Lugha ya Kiswahili kwa wazungumzaji wa lugha nyengine. Ameshachapisha vitabu vine, miongoni mwa hivyo ni riwaya&nbsp;<em>Kisiki Kikavu</em>&nbsp;(E &amp; D Limited, 2005) na&nbsp;<em>Korasi Katika Fasihi: Nadharia Mpya ya Uhakiki</em>&nbsp;(Taasisi ya Taaluma za Kiswahili, Chuo Kikuu cha Dar es Salaam, 2012).</p>
<p><strong>Dkt. Salma Omar Hamad</strong>&nbsp;alizaliwa Pemba, Zanzibar, mwaka 1980. Hivi sasa ni Mhadhiri wa Fasihi ya Kiswahili na Isimu katika Chuo Kikuu Huria cha Tanzania. Alipata shahada yake ya kwanza ya Kiswahili (Elimu) kutoka Chuo Kikuu cha Taifa Zanzibar (SUZA); na Shahada ya Uzamili (Isimu) kutoka Chuo Kikuu cha Dar es Salaam, Shahada yake ya Uzamivu &nbsp;katika Kiswahili aliipata kutoka Chuo Kikuu cha Taifa Zanzibar. Dkt. Salma ameandika hadithi fupi kadhaa zilizoko kwa wachapishaji zikisubiri kuchapishwa. Pia amechangia hadithi katika mikusanyo ya hadithi fupi; kama vile hadithi yake, “Shibe Inatumaliza” kwenye mkusanyo uitwao&nbsp;<em>Tumbo Lisiloshiba na Hadithi Nyingine</em>&nbsp;(Longhorn Publishers, 2016).</p>
<p><strong>Dkt. Joseph N. Maitaria</strong>&nbsp;ni Mhadhiri Mwandamizi na Mkuu wa Idara ya Sanaa na Lugha, Kitivo cha Elimu na Sayansi za Kijamii, Chuo Kikuu cha Karatina, Kenya. Ana shahada ya Kwanza ya Ualimu (Chuo Kikuu cha Kenyatta) ambapo alisomea Shahada ya Elimu, Kiswahili na Dini. Shahada ya Uzamili alisomea Fasihi ya Kiswahili (Chuo Kikuu cha Kenyatta), na Shahada ya Uzamivu kuhusu Ushairi wa Kiswahili (Chuo Kikuu cha Kenyatta). Yeye pia ni mwanachama na Katibu wa vyama vya kitaaluma vya Kiswahili, kama vile Chama cha Kiswahili cha Afrika Mashariki (CHAKAMA) na Chama cha Kiswahili cha Taifa (CHAKITA), Kenya. Dkt. Maitaria amechapisha vitabu na makala kadhaa kuhusu Fasihi ya &nbsp;Kiswahili kwenye majarida ya kitaaluma.</p>
<ul>
<li><strong>Tovuti:&nbsp;</strong><a href="http://blogs.cornell.edu/kiswahiliprize/">http://blogs.cornell.edu/kiswahiliprize/</a></li>
<li><strong>Twitter:&nbsp;</strong>@KiswahiliPrize</li>
<li><strong>Facebook:&nbsp;</strong><a href="https://www.facebook.com/pages/Mabati-Cornell-Kiswahili-Prize%20forAfrican-Literature/1534905843433822">https://www.facebook.com/pages/Mabati-Cornell-Kiswahili-Prize forAfrican-Literature/1534905843433822</a></li>
</ul>
<p><strong>Mawasiliano:</strong></p>
<p>Prof. Mukoma Wa Ngugi, Cornell University,&nbsp;<a href="mailto:kiswahiliprize@cornell.edu">kiswahiliprize@cornell.edu</a></p>
<p>Dr Lizzy Attree,&nbsp;<a href="mailto:kiswahiliprize@cornell.edu">kiswahiliprize@cornell.edu</a></p>
<p>Moses Kilolo&nbsp;&nbsp;<a href="mailto:kiswahiliprize@cornell.edu">kiswahiliprize@cornell.edu</a></p>
		</div><!-- end .entry-content -->
		
	</div>
            `;
        }

        else if (contentId.startsWith('content11')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        else if (contentId.startsWith('content12')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        else if (contentId.startsWith('content13')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="post-172 page type-page status-publish hentry">

				<h1 class="entry-title">Washindi wa mwaka 2018 ni</h1>
		
			<p><img class="left-img" src="img/Zainab.jpg" width="258" height="300"></p>
            <p><strong>Zainab Alwi Baharoon</strong>&nbsp;(Tanzania), kwa riwaya yake,&nbsp;<em>Mungu Hakopeshwi</em>, (Tuzo ya Dola 5,000 za Marekani).</p>


            <p>&nbsp;</p><p>&nbsp;</p>
            <div class="clearfix"></div>
            <div class="clearfix"></div>
            <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>

            <p><img class="left-img" src="img/Jacob-Ngumbau-Julius.jpg" width="300" height="264"></p>
            <p><strong>Jacob Ngumbau Julius</strong>&nbsp;(Kenya) , kwa diwani yake ya mashairi,&nbsp;<em>Moto wa Kifuu</em>, (Tuzo ya Dola 5,000 za Marekani).</p>
		
            `;
        }

        else if (contentId.startsWith('content14')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h1>Washindi wa mwaka ${year} </h1>

		    <p>&nbsp;</p>
			<h2><strong>Riwaya</strong></h2>
            <p>&nbsp;</p>
            <p><img class="left-img" src="img/Ally-Hilal.jpg" width="225" height="300"></p>
            <p><b>Ally Hilal</b></p>
            <p>Ali Hilal Ali ni mwandishi chipukizi wa riwaya na mashairi ya Kiswahili. Alizaliwa kijiji cha Kalani, Pemba, mwaka 1989, na kukulia katika mji wa Wete Pemba, Zanzibar.&nbsp;Alianza masomo yake mwaka 1997 katika Shule ya Msingi ya Jadida, Wete, Pemba; na masomo ya sekondari kuanzia mwaka 2004 katika Chuo&nbsp;cha Kiislamu, Kiuyu, Micheweni, Pemba.&nbsp;Baada ya hapo akaendelea na masomo katika Chuo cha Usimamizi wa Fedha (IFM), Dar es Salaam, ambapo mwaka 2013 alihitimu Shahada ya Kwanza katika Sayansi ya Hifadhi ya Jamii (BSc in Social Protection).</p>
            <p>Alianza kujishughulisha na kuandika riwaya na mashairi mwaka 2008. Riwaya yake ya kwanza, <em>Safari Yangu</em>, ilichapishwa na Buluu Publishing, Ufaransa, mwaka 2015. Pia amechangia mashairi kadhaa kwenye <em>Diwani ya Kurasa Mpya</em>, ambayo ni mkusanyo wa mashairi ya washairi watano.</p>
            <p>&nbsp;</p>
            <p><b>Email:</b> ahbenylal7@gmail.com</p>
            <div class="clearfix"></div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>


            <h2><strong>Ushairi</strong></h2>
            <p>&nbsp;</p>
            <li><b>Dotto Rangimoto</b></li><p>Dotto Rangimoto alizaliwa Morogoro, Tanzania, mwaka 1986. Baada ya kupata elimu ya sekondari katika Shule ya Sekondari ya Morogoro, mwaka 2004, Dotto amekuwa akijishughulisha na biashara ndogondogo na kilimo. Yeye ni mpenzi mkubwa wa Fasihi ya Kiswahili, hasa hadithi na mashairi; na ni miongoni mwa washairi chipukizi wa Kiswahili.</p>
            <p>&nbsp;</p>
            <p><b>Email:</b> mzalendo.njano5@gmail.com</p>
            <p>&nbsp;</p>
            <div class="clearfix"></div>
            <p><img class="left-img" src="img/Dotto-2-22iuavs.jpg" width="300" height="298"> 

            <p>Kama ilivyotangazwa kabla, wafuatao ni waandishi wengine waliokuwamo katika orodha fupi:</p>
            <ul>
            <li><strong>Ally Hilal (Tanzania)</strong>, <em>Mmeza Fupa</em> (riwaya)</li>
            <li><strong>Hussein Wamaywa (Tanzania)</strong>, <em>Mkakati wa Kuelekea Ikulu</em> (riwaya)</li>
            <li><strong>Richard Atuti Nyabuya (Kenya)</strong>, <em>Umalenga wa Nyanda za Juu</em> (ushairi)</li>
            </ul>
<p>Maandishi hayo ni miongoni mwa miswada 20 iliyosomwa na waamuzi watatu:</p>
<ul>
<li><strong>Prof. Rayya Timammy</strong> – Profesa Mshiriki, Idara ya Kiswahili, Chuo Kikuu cha Nairobi</li>
<li><strong>Dkt. Shani Omari</strong> – Mhadhiri Mwandamizi, Idara ya Fasihi, Mawasiliano na Uchapishaji, Taasisi ya Taaluma za Kiswahili, Chuo Kikuu cha Dar es Salaam</li>
<li><strong>Prof. Joshua S. Madumulla</strong> – Profesa Mshiriki wa Fasihi, Chuo Kikuu cha Tumaini, Iringa</li>
</ul>
<p>Wakizingatia historia ndefu ya fasihi ya Kiswahili, waamuzi walisema, “Kwenye riwaya iliyopata ushindi wa kwanza, swala la mwanamke limejadiliwa kwa urefu. Mwanamke amewakilishwa katika nyanja na nafasi zake mbalimbali katika jamii. Mila na desturi zinazotumiwa kumkandamiza mwanamke zimedhihirishwa kuwa ni miongoni mwa vikwazo vikubwa vinavyomzuia mwanamke kuendelea na kufanikiwa. Lakini mwanamke anapambana dhidi ya vikwazo hivyo na, hatimaye, anafaulu.”</p>
<p><em>“</em>Mashairi yaliyomo katika muswada ulioshinda yametungwa kwa lahaja ya Kimvita, inayozungumzwa Mombasa. Lahaja hii imetumiwa na washairi maarufu wa nyakati mbalimbali katika historia; kwa mfano Muyaka wa Muhaji, mshairi mashuhuri wa karne ya 19. Pia imetumiwa na washairi wa wakati wetu huu: Ahmad Nassir Juma Bhalo, Abdilatif Abdalla, na sasa Ahmed Hussein Ahmed. Hii ni lahaja iliyo na utajiri mkubwa wa msamiati&nbsp; na sauti mbalimbali za matamshi ya maneno.”</p>
<p>Mwaka huu, zawadi za Tuzo hii zitatolewa Tanzania katika Hoteli ya Hyatt Regency Dar es Salaam, Kilimanjaro, Ukumbi wa Kibo, tarehe 16 Januari, 2017.</p>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><b>Kwa Wahariri:</b></p>
<p>&nbsp;</p>
<p>Tuzo ya Kiswahili ya Safal ya Fasihi ya Kiafrika, yenye thamani ya jumla ya Dola za Marekani 15,000, hutolewa kila mwaka kwa miswada bora, au kwa vitabu vilivyochapishwa miaka miwili kabla ya mwaka wa kutolewa zawadi, katika fani za riwaya, ushairi, wasifu na riwaya za picha. Miswada inayoshinda huchapishwa na shirika la uchapishaji vitabu la East African Educational Publishers (EAEP). Na mswada bora wa ushairi hufasiriwa kwa Kiingereza na kuchapishwa kitabu na shirika la Africa Poetry Book Fund.</p>
<p>&nbsp;</p>
<p>Tuzo hii inadhaminiwa na kampuni ya Mabati Rolling Mills, Kenya, na kampuni ya ALAF Limited, Tanzania (ambazo ni miongoni mwa kampuni za Safal Mauritius Limited); pia na Ofisi ya Makamu wa Mkuu wa Maswala ya Kimataifa katika Chuo Kikuu cha Cornell, na Idara ya Taaluma za Afrika ya Chuo Kikuu cha Cornell, Marekani.</p>
<p>&nbsp;</p>
<p>Kampuni ya <strong>Safal Investments Mauritius Limited</strong> na matawi yake (ambayo ni pamoja na Mabati Rolling Mills Limited, Kenya, na ALAF Limited, Tanzania) inajulikana kwa jina la jumla la The Safal Group. Hii ni kampuni kubwa kabisa inayotengeneza mabati katika nchi 12 za Afrika. <a href="http://www.safalgroup.com/">www.safalgroup.com</a></p>
<ul>
<li><strong>Mabati Rolling Mills Limited (MRM)</strong> ilibuniwa zaidi ya miaka 50 iliyopita. Ni kampuni kubwa kabisa Kenya inayotengeneza mabati ya kuezekea mapaa, na inaongoza katika utanzu huu wa ufundi. Pia inaongoza katika bara la Afrika kwa kutengeneza mabati ikitumia teknolojia ya hali ya juu kabisa inayopatikana duniani. Mabati yake maarufu yanasifika na yanaaminiwa na mamilioni ya wajenzi.<a href="http://www.mabati.com/"> www.mabati.com</a></li>
<li><strong>Safal MRM Foundation</strong>, yenye makao yake Kenya, ni kitengo cha Mabati Rolling Mills na Safal Group kinachoshughulika na kutoa misaada ya aina mbalimbali. Miongoni mwa misaada hiyo, inayotolewa Mariakani, Kenya, ni kuanzisha na kuendelea kugharimia uendeshaji wa Taasisi ya Mabati ya Mafunzo ya Teknolojia (Mabati Technical Training Institute), na Kituo cha Mabati cha Matibabu (Mabati Medical Centre). <a href="http://www.safalmrmfoundation.org/">www.safalmrmfoundation.org</a></li>
<li><strong>ALAF Limited (ALAF)</strong> ni kampuni ya Tanzania inayoongoza katika utengenezaji wa mabati ya kuezekea mapaa. Tangu ilipobuniwa mwaka 1960, ALAF imeendelea kuchangia kwa kiasi kikubwa katika shughuli za ujenzi nchini. ALAF haitengenezi mabati ya kuezekea mapaa tu, bali pia aina za nyaya za chuma zinazotumika katika&nbsp;ujenzi wa mapaa. ALAF pia inatengeneza mabomba ya metali yanayotumika katika shughuli mbalimbali za ufundi. <a href="http://www.alaf.co.tz/">www.alaf.co.tz&nbsp;</a></li>
</ul>
<p>&nbsp;</p>
<p><strong>East African Educational Publisher (EAEP)</strong> ni shirika mojawapo kuu la wachapishaji. EAEP linajitahidi kuyahusisha maadili yanayoonekana kama kwamba yanakinzana; yaani kuchapisha kazi za kiwango cha juu zinazogusia maswala ya kijamii, ya kitamaduni na ya kiuchumi, na wakati huo huo kufaulu kufanya biashara iliyo tayari kukabiliana na hali halisi na misukosuko ya zama za kiteknolojia. <a href="http://www.eastafricanpublishers.com/">http://www.eastafricanpublishers.com</a></p>
<p><strong>Africa Poetry Book Fund</strong> inaimarisha na kuendeleza uchapishaji wa sanaa za kishairi kupitia vitabu vyake, mashindano, warsha, semina, pamoja na kushirikiana na wachapishaji, matamasha, mawakala, vyuo, vyuo vikuu, makongamano, na vikundi vingine vinavyohusika na ushairi Afrika. <a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Bodi ya Wadhamini:</strong> Abdilatif Abdalla (Mwenyekiti), Mukoma wa Ngugi, Lizzy Attree, Happiness Bulugu, Walter Bgoya, Henry Chakava, Chege Githiora, Carole Boyce Davies, Rajeev Shah, na Ngugi Wa Thiong’o.</p>
		
            `;
        }

        else if (contentId.startsWith('content15')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        else if (contentId.startsWith('content16')) {
            const year = contentId.split('-')[1];
            contentArea.innerHTML = `
                <h2>${year} Winners</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        

        else if (contentId === 'content17') {
            contentArea.innerHTML = `
                <h1 class="entry-title">Bodi ya Wadhamini</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

			<img src="img/Mukoma.PNG" alt="Mukoma-Jeremy Weate(1) photo" width="170" height="192" class="left-img">
            <p><strong>Mukoma Wa Ngugi, </strong>mwanzilishi mmoja, ni Profesa wa Kiingereza katika Chuo Kikuu cha Cornell na mwandishi wa <i><span style="text-decoration: underline;">Black Star Nairobi </span></i>(Melville, 2013) na <i><span style="text-decoration: underline;">Nairobi Heat</span></i> (Penguin, SA 2009, <span style="text-decoration: underline;">Melville House Publishing, </span>2011) na diwani ya mashari iitwayo <i><span style="text-decoration: underline;">Hurling Words at Consciousness</span></i> (AWP, 2006). Yeye ni mwandishi wa <span style="text-decoration: underline;">This is Africa. </span>Mukoma ana Shahada ya Udaktari katika Kiingereza kutoka Chuo Kikuu cha Wisconsin, Madison, Shahada ya Ufundi (MA) katika Uandishi wa Kubuni kutoka Chuo Kikuu cha Boston na Digrii ya Kiingereza na Sayansi ya Siasa kutoka Chuo cha Albright. Jarida la <i>New African </i>lilimtaja kama mmojawapo wa Waafrika 100 wenye wadhifa 2013.</p>
            <p>Tafsiri ya Kijerumani ya <i>Nairobi Heat </i>ilitambuliwa na <span style="text-decoration: underline;">Buchkultur</span> kama Kitabu cha Riwaya ya Uhalifu cha Msimu. Mwaka wa 2009, aliteuliwa mmojawapo wa washindi waliopendekezwa kushinda Caine Prize for African Writing <span style="text-decoration: underline;">Tuzo ya Caine ya Uandishi wa Kiafrika </span>&nbsp;na mwaka wa 2010 kwa <span style="text-decoration: underline;">Penguin Prize for African Writing </span>kwa nakala ya riwaya yake, <i>The First and Second Books of Transition. </i>Riwaya mpya inayoitwa <i>Mrs. Shaw </i>itachapishwa karibuni na Ohio U/Swallow Press na <i>Hunting Words with my Father </i>(mashairi) kutoka Akiba ya Afrika ya Ushairi mwaka wa 2016. Tafsiri ya Kijerumani ya <i>Black Star Nairobi </i>itachapishwa karibuni.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            <img class="left-img" src="img/Lizzy.jpg" alt="Lizzy Attree photo" width="154" height="192">
            <p><b>Lizzy Attree,</b> mmojawapo wa waanzilishi wa Tuzo hii, ana shahada ya uzamivu (PhD) kutoka School of Oriental and African Studies (SOAS), Chuo Kikuu cha London, kuhusu “Majibu ya Fasihi kwa Virusi vya Ukimwi Kutoka Afrika Kusini na Zimbabwe, 1990 – 2005”. Mkusanyo wake wa mahojiano na waandishi wa kwanza wa Kiafrika walioandika kuhusu Virusi na Ukimwi kutoka Zimbabwe na Afrika Kusini, uitwao <em>Blood on the Page</em> (Damu Ukurasani), ulichapishwa &nbsp;na Cambridge Scholars Publishing mwaka 2010. Mnamo mwaka huo huo alikuwa Mhadhiri kwenye Idara ya Kiingereza, Chuo Kikuu cha Rhodes, Afrika Kusini. Mwaka 2015 alisomesha Fasihi ya Afrika katika Chuo cha Kings College, London. Hivi sasa anasomesha Fasihi ya Ulimwengu na Fasihi ya London ya Kisasa, huko Richmond, Chuo Kikuu cha Kimataifa cha Marekani, London. Yeye ni Mkurugenzi kwenye bodi ya Short Story Day Africa; na kuanzia mwaka 2014 mpaka 2018 alikuwa Mkurugenzi wa Tuzo ya Caine. Pia amewahi kuwa mwamuzi wa Folktales Re-Imaged mtandaoni. Lizzy Attree pia ni mtayarishaji wa ‘Kufikiria Nje ya Eneo la Penalti’ (mradi wa Wachezaji Mpira &nbsp;wa Kiafrika unaofadhiliwa na Baraza la Sanaa la Uingereza na kuungwa mkono na Jumuiya ya Ushairi); na ni mwandishi na mhakiki.</p>
            <p>&nbsp;</p>

            <p><img class="left-img" src="img/Abdilatif.jpg" alt="Abdilatif Abdalla Nov 12-13 photo" width="135" height="200">
            <strong>Abdilatif Abdalla </strong>anajulikana zaidi kwa diwani yake ya mashairi ‘Sauti ya Dhiki’ (iliyochapishwa mwaka wa 1973) iliyoandikwa akiwa gerezani Kenya katika ya miaka 1969 na 1972. Alitiwa jela kwa kuandika kijitabu muhimu ‘Kenya: Twendapi?’ (1968) iliyoshutumu ukandamizaji wa serikali ya KANU ya Jomo Kenyatta. Abdalla pia amehusika na miradi mengi ya utafsiri na uhariri wa riwaya za baada ya ukoloni (Ayi Kwei Armah), tafsiri za Kurani, mashairi ya Kiswahili cha kale na kazi muhimu za kitaalimu huku akisimamia upinzani dhidi ya uongozi wa Moi alipokuwa uhamishoni London (na kina Ngugi) miongo ya 1980 na 1990.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p><br>


            <img class="left-img" src="img/Chege.png" alt="Chege Githiora photo" width="135" height="100">
            <p><strong>Chege Githiora&nbsp;</strong>ni Mhadhiri Mkuu wa Kiswahili katika Idara ya Lugha na Tamaduni za Kiafrika katika Chuo cha Masomo ya Maeneo ya Mashariki na Afrika (School of Oriental and African Studies), Chuo Kikuu cha London. Alizaliwa na kukulia Kenya na kusoma Meksiko na Marekani alikofundisha Kiswahili, lugha na fasihi, katika chuo cha El Colegio de Mexico, Chuo Kikuu cha Boston na Chuo Kikuu cha Michigan State alikohitimu na Shahada ya Uzamivu (PhD) katika Kugha mwaka wa 1999. Anaandika na kutafsiri kutoka na kwa Kikikuyu, Kiingereza, Kiwahili na Kihispania. Mada za utafiti na machapisho yake ni uzungumzaji wa lugha zaidi ya moja, tofauti kati ya lugha, misimu ya barobaro mijini, Kihispania na tamaduni na jamii mseto za Kiafrika na Kihispania, hati na utafsiri. Juu ya hayo, anafundisha na kutafiti muundo wa lugha za Kibantu hasa Kikikuyu na Kiswahili.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            
            
            <p><img class="left-img" src="img/sarit.jpg" alt="Sarit Shah " width="261" height="210"></p>
            <p><strong>Sarit Shah</strong> ni mwenyekiti wa <a href="https://mabati.com/"><u>Mabati Rolling Mills Ltd</u></a>,(MRM) moja ya kampuni zinazomilikiwa na kampuni ya <a href="https://www.safalgroup.com/"><u>Safal Group</u></a>. Kwa bidhaa na vifaa vya ujenzi, kampuni ya MRM imekuwa tiba mujarab kwa kipindi cha miaka 60 katika mataifa ya Afrika. Mbali na hayo Sarit pia ni mwenyekiti wa wakfu wa <a href="https://www.safalmrmfoundation.org/"><u>Safal MRM</u>, </a>tawi linaloshughulika kutoa misaada la kampuni ya <a href="https://www.safalgroup.com/"><u>Safal Group</u>.</a> Wakfu wa <a href="https://www.safalmrmfoundation.org/"><u>Safal MRM</u></a> umekuwa ukizisaidia jamii kwa zaidi ya miongo miwili katika nyanja za Elimu, Afya, Makazi na Mazingira.</p>
            <p>Sarit amezuru mataifa ya Afrika na sasa yuko nchini Kenya ambapo anachangia pakubwa mikakati ya uongozi katika makundi ya kampuni za Safal. &nbsp;Ana ari katika masuala ya biashara endelevu na ustawi wa jamii. Aidha amechangia pakubwa mipango kadhaa ya elimu nchini Kenya kama vile, <a href="https://www.safalmrmfoundation.org/?page_id=464"><u>Taasisi ya Mafunzo ya Ufundi</u></a> iliiyoko katika kaunti ya Kilifi. Taasisi hiyo hutoa mafunzo ya kiufundi kwa vijana 1000 kila mwaka kwa lengo la kuboresha viwango vyao vya kuajiriwa ama kujiajiri. Pamoja na hayo, Wakfu wa <a href="https://www.safalmrmfoundation.org/"><u>&nbsp;Safal MRM </u></a>unaendesha kituo cha matibabu; &nbsp;<a href="https://www.safalmrmfoundation.org/?page_id=469"><u>Mabati Medical Centre</u></a>, kinachotoa huduma bora za matibabu kwa zaidi ya wagonjwa 40000 nchini Kenya. Huduma zinazotolewa katika kituo hicho ni pamoja na; matunzo kamili ya afya, yakiwemo ushauri, matibabu, dawa na upimaji wa magonjwa kwa kutumia vifaa vya hali ya juu katika maabara. Kituo hicho pia hutoa tiba maalum kwa watu wenye matatizo ya macho, meno na huduma kwa wagonjwa wenye saratani ya mlango wa kizazi.</p>
            <p>Ari ya Sarit kuhusu utamaduni, ilimchochea kufanikisha tuzo ya Fasihi ya Kiswahili barani Afrika ya Mabati-Cornell kwa miaka minane sasa. &nbsp;Tuzo hiyo inachangia maendeleo ya fasihi na elimu katika Afrika Mashariki, ambayo ni muhimu kwa utamaduni na ustawi wa jamii.</p>
            <p>Sarit ana Shahada ya Sayansi katika masuala ya Uhandisi wa Umeme na vifaa meme kutoka Chuo Kikuu cha Uingereza na Shahada ya Uzamili kutoka Chuo Kikuu cha Rochester, New York, Marekani.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            

            <img class="left-img" src="img/Vierke.jpg" alt="Clarissa Vierke" width="261" height="210">
            <P><strong>Clarissa Vierke</strong><br> Ni professa wa fasihi ya lugha za kiafrika katika Chuo Kikuu cha Bayreuth, nchini Ujerumani. Yeye ni mpenzi wa lugha na fasihi za Kiswahili. Alianza kusaidia kuandaa Kongamano la Kiswahili la Bayreuth la kimataifa wakati alipokuwa bado mwanafunzi wa lugha na fasihi za Kiafrika zaidi ya miaka ishirini iliyopita, na bado analiendesha kila mwaka. Katika utafiti wake amejishughulisha haswa na na fasihi ya Kiswahili, hususan tenzi na mashairi za zamani zilizohifadhiwa kwa khati za Kiarabu. Hivi karibuni amefanya utafiti kuhusu miswada „iliyosafiri“ na inayopatikana pwani kote Afrika Mashariki, kama Kenya, Tanzania na vilevile Msumbiji. Pamoja na professa wengine wa fasihi ya kifaransa na fasihi linganishi anaendesha mradi wa utafiti kuhusu uhusiano wa kifasihi na kisanaa baina ya nchi mbalimbali na pande mbalimbali za bahari ya Hindi. Clarissa Vierke ni mtafiti mkuu wa “Cluster of Excellence Africa Multiple. Reconfiguring African Studies”, mradi mkuu wa utafiti unaofadhiliwa na serikali ya Ujerumani, na mwenyekiti wa jopo la “Ujumi na Sanaa” (“Arts and Aesthetics”). Pamoja na wenzake from Leipzig na Colgone nchini Ujerumani, Stellenbosch (Afrika Kusini), Wukari (Nigeria) na Eldoret (Kenya), alianzisha mradi wa “Recalibrating Afrikanistik” unaosaidiwa na Volkswagen Foundation na unaolenga kupanga masomo ya lugha na fasihi za Kiafrika kwa miaka ya mbele</p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>Waakilishi zaidi watatangazwa</h2>
		
	</div>            `;
        }
    }

    function initializeSlideshow() {
        let slideIndex = 0;
        let slides = document.getElementsByClassName("mySlides");
        let interval;

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
        }

        function startSlideshow() {
            interval = setInterval(showSlides, 4000); // Change image every 3 seconds
        }

        function stopSlideshow() {
            clearInterval(interval);
        }

        function plusSlides(n) {
            stopSlideshow();
            slideIndex += n;
            if (slideIndex > slides.length) { slideIndex = 1 }
            if (slideIndex < 1) { slideIndex = slides.length }
            showSlides();
            startSlideshow();
        }

        showSlides(); // Show the first slide
        startSlideshow(); // Start the automatic slideshow

        // Attach event handlers to next and previous buttons
        document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
        document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    }

    // Automatically load the Home content when the page is opened
    loadContent('content1');
});




function loadContent(contentId) {
    const contentArea = document.getElementById('content-area');

    switch(contentId) {
        case 'content1-en':
            contentArea.innerHTML = '<p>Home content in English <div class="slideshow-container"> <div class="mySlides fade"> <img src="img/majaliwa.jpg" style="width:100%"></div><div class="mySlides fade"> <img src="img/2nd-place.jpg" style="width:100%"> </div> <div class="mySlides fade"> <img src="img/1st-place.jpg" style="width:100%"> </div> <div class="mySlides fade"> <img src="img/majaliwa.jpg" style="width:100%"> </div> <div class="mySlides fade"> <img src="img/dotto.jpg" style="width:100%"> </div> <a class="prev">&#10094;</a> <a class="next">&#10095;</a> </div></p>';
            break;
        case 'content1-sw':
            contentArea.innerHTML =
            '<p>Yaliyomo kwa Kiswahili</p> <p><div class="slideshow-container"><div class="mySlides fade"><img src="img/majaliwa.jpg" style="width:100%"></div></div></p> ';
            break;

        case 'content2-en':
            contentArea.innerHTML = '   <h1 class="entry-title">Safal Kiswahili Prize for</h1> <h1 class="entry-title">African Literature</h1> <p>&nbsp;</p> <div class="entry-content"> <p><img class="size-medium wp-image-550" src="img/prize.jpg" alt="" width="300" height="200"></p> <p></p> <p>In <strong>2022</strong>, the prize name changed from <strong>Mabati Cornell Kiswahili Prize</strong> to <strong>Safal Cornell Kiswahili Prize</strong></p> <p>&nbsp;</p><p>In <strong>2024</strong>, the prize name has been transformed from <strong>Safal Cornell Kiswahili Prize</strong> to <strong>Safal Kiswahili Prize for African Literature</strong></p><p>&nbsp;</p> </div>';
            break;
        case 'content2-sw':
            contentArea.innerHTML = '<p>Sasisho kwa Kiswahili</p>';
            break;

         case 'content3-en':
            contentArea.innerHTML = '<h1 class="entry-title">CALL FOR SUBMISSION 2024</h1><p>&nbsp;</p><div class="slideshow-container"><img src="img/CALL-FOR-SUBMISSION.jpg" style="width:100%"></div><p>&nbsp;</p><p><strong>CALL FOR SUBMISSIONS FOR THE 2024 SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></p><p>&nbsp;</p><p>The Safal Kiswahili Prize for African Literature has today announced the call for submissions of manuscripts for its 9<sup>th</sup> edition. The prize, formerly knowns as The Safal-Cornell Kiswahili Prize for Africa Literature re-branded its name to reflect the parent organization and main sponsor, the Safal Group Limited, with its member companies Mabati Rolling Mills (MRM) in Kenya and ALAF (ALAF) in Tanzania.&nbsp; The Safal Group is Africa’s largest supplier of building solutions in in 8 countries.</p><p>&nbsp;</p>';
            break;
        case 'content3-sw':
            contentArea.innerHTML = '<p>Yaliyomo kwa Kiswahili</p>';
            break;

        case 'content4-en':
                contentArea.innerHTML = '<h2>About the Prize</h2> <div class="entry-content"> <p>&nbsp;</p> <p>The Mabati Cornell Kiswahili Prize for African Literature was founded by Mukoma Wa Ngugi and Lizzy Attree in 2014 to promote writing in African languages and encourage translation from, between and into African languages. The Prize sets a historical precedent for African philanthropy by Africans and shows that African philanthropy can and should be at the center of African cultural production.</p> <p>&nbsp;</p> <p>Over 140 million people speak Kiswahili in Eastern and Southern Africa. Kiswahili is also one of the official languages in Kenya and Tanzania. Through some of the most prolific African writers and poets writing in Kiswahili, such as Shaban Roberts and Ebrahim Hussein there is a large body of work in Kiswahili that has long been a staple language in leading research universities e.g. Nairobi University, Boston University and University of Wisconsin – Madison. In other words, Kiswahili is an established world language and should be considered as such.</p><p>&nbsp;</p> <p>Moving from the principle that all languages are created equal and no one language should thrive at the expense of the other, we are proposing that a Kiswahili Prize for Literature be established with the express goal of promoting reading and writing in African languages. Literary prizes highlight fresh talent, encourage authors and demonstrate that reading matters.</p> <p>While there exists international literary prizes for African writing such as the Caine Prize and the recently established, Etisalat Prize, there are no major international and Pan-African literary prizes awarded to works produced in an African language. The Jomo Kenyatta Prize for Literature is a biannual award organized by the Kenya Publishers Association to recognize outstanding works published in Kenya in English and Kiswahili.</p><p>&nbsp;</p> <p>These facts alone make an international Kiswahili literary prize historical in nature, setting a precedent for other literature in African languages while making an important contribution to the body of world literature.</p> <p>&nbsp;</p><p>We are grateful for your support and patience as we embark on this language adventure.</p> </div>';
                break;
        case 'content4-sw':
                contentArea.innerHTML = '<p>Sasisho kwa Kiswahili</p>';
                break;

        case 'content5-en':
                contentArea.innerHTML = '<h2>Rules of Submission</h2><div class="entry-content"><p>&nbsp;</p><p>Please send unpublished manuscripts or books (fiction, poetry, collections of short stories, and memoir, or graphic novels) published in Kiswahili within two years of the award year to, <a href="mailto:submission@kiswahiliprize.org">submission@kiswahiliprize.org</a> .</p> </div>';
                break;
        case 'content5-sw':
                contentArea.innerHTML = '<p>Sasisho kwa Kiswahili</p>';
                break;

        case 'content6-en':
                contentArea.innerHTML = ' <h1 class="entry-title">Award Criteria</h1> <p>&nbsp;</p><div class="entry-content"><p>The prize will be awarded to the best unpublished manuscript or book published within two years of the award year across the categories of Fiction/Nonfiction/Graphic Novels. The total proposed awards of $15,000 US dollars will be divided as follows:</p><p>&nbsp;</p> <p>1st Fiction Prize – $5,000</p> <p>&nbsp;</p> <p>1st Poetry Prize – $5,000</p> <p>&nbsp;</p> <p>2nd Prize – $2,500 in any genre</p> <p>&nbsp;</p><p>3rd Prize – $2,500 in any genre</p><p>&nbsp;</p><p>The winning manuscripts will be considered for publication by Mkuki na Nyota.</p><p>An award ceremony will be held with the four prize winning writers in attendance. The first and second award ceremonies were held in Kenya and Tanzania respectively, the 2025 Awards will be held in Tanzania. </p></div>';
                break;
         case 'content6-sw':
                contentArea.innerHTML = '<p>Sasisho kwa Kiswahili</p>';
                break;

        case 'content7-en':
                contentArea.innerHTML = '<h1 class="entry-title">Judges</h1> <div class="entry-content"><h1 style="text-align: center;"><strong>SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></h1><p>&nbsp;</p><p>&nbsp;</p><h2 style="text-align: left;"><strong>Announcement of 2021 Judges</strong></h2><p style="text-align: center;"><strong>&nbsp;</strong></p><p>The Chairman of the Board of Trustees of Mabati-Cornell Kiswahili Prize for African Literature, Abdilatif Abdalla, is pleased to announce the Judges of the 2021 Kiswahili Prize as &nbsp;<strong>Prof. Aldin K. Mutembei, Dr. Salma Omar</strong> and <strong>Dr. Joseph Nyehita Maitaria</strong>. He also announced that <strong>Prof. Rocha Chimerah </strong>and<strong> Dr. Hamisi Babusa </strong>will judge The Nyabola Prize, a special 2021 award for youth writing science fiction and speculative fiction in Kiswahili, for writers aged between 18 and 35.</p><p>“The Mabati-Cornell Kiswahili Prize for African Literature has seen an unprecedent increase in the number of entries, from 96 in 2019 to 256 in 2021. This year, the entries also came from 13 countries across the world, including Tanzania, Kenya, &nbsp;Uganda, Burundi, Uganda, Egypt, Nigeria, and the African diaspora in the USA, Canada, Germany, Switzerland, Finland and the Netherlands. “It is very encouraging to see that the Prize is not only truly pan-African, but also extends beyond the continental borders,” said Munyao Kilolo, the Prize Administrator.</p><p>The Chair of the Board of Trustees, Abdilatif Abdalla, said, “It makes my heart dance with joy to see how increasingly responsive the participants are and the higher quality of entries submitted as the Prize gets more widely known and becomes more inclusive. It is my earnest hope that this competition will ultimately assist in realizing the Pan-African dream which we have been yearning for all these years. I also would like to urge &nbsp;female writers to participate more in order to bridge the gender gap which currently exists.”</p><p>Ms. Nanjala Nyabola, founder of the Nyabola Prize, a special award for 2021 for youth writing science fiction and speculative fiction in Kiswahili, said “Its very important for Kiswahili language communities to remain involved in the development and use of new concepts in technology,” said Nyabola, “and what better way to do that than to support exciting and captivating storytelling around science and technology”.</p><p>The judges will work together to select a shortlist that will be announced in November 2021. The winning entries in each category will be announced at an awards ceremony in mid- December in Dar es Salaam, Tanzania.</p><p>After suspending the 2020 edition due to the challenges wrought by the Covid-19 pandemic, the Prize founders, Dr. Lizzy Attree and Prof. Mukoma Wa Ngugi, are excited to see this re-energized participation.The growth of the Prize, from strength to strength, is an excellent example that is encouraging other prizes in African languages.</p><p>Founded in 2014 by Dr. Lizzy Attree and Prof. Mukoma Wa Ngugi (Cornell University), the Prize has the express goal of recognizing writing in African languages and encouraging translation from, between and into African languages.</p><p>&nbsp;</p><h2>2021 Judges:</h2><p>&nbsp;</p><p><strong><img src="img/Aldin.jpg" alt="Aldin" width="261" height="300" ,sizes="(max-width: 261px) 100vw, 261px"></a><p>&nbsp;</p> Prof Aldin K. Mutembei</strong> (BA Ed.; MA Ling (Dar); MA (Lit); PhD (Leiden), holds a Chair as the Mwalimu Julius Nyerere Professor in Kiswahili at the University of Dar es Salaam. He is a former Director of the Institute of Kiswahili Studies; and the current Director of the Confucius Institute at the University of Dar es Salaam. He teaches Kiswahili/African Literature, Communication, Literary Theories and Orature and Kiswahili language to speakers of other languages. He has published four &nbsp;literary works, among which is a novel, <em>Kisiki Kikavu</em>. (E &amp; D Limited, 2005), and a literary theory book, <em>Korasi Katika Fasihi: Nadharia Mpya ya Uhakiki</em> (Institute of Kiswahili Studies, University of Dar es Salaam, 2012).</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><strong><img src="img/Dr-Salma-Omar-Hamad.jpg" alt="Dr. Salma Omar Hamad" width="261" height="300"></a> <p>&nbsp;</p> Dr. Salma Omar Hamad </strong> was born in Pemba, Zanzibar. She is currently a Lecturer of Kiswahili Literature and Linguistics at The Open University of Tanzania. She did her BA in Education (Hons) at State University of Zanzibar (SUZA); majoring in Kiswahili; MA in Linguistics at the University of &nbsp;Dar es Salaam, specializing in Kiswahili; and a PhD in Kiswahili from SUZA. She is the author of several short stories awaiting publication and has also contributed to short story anthologies, such as her story “Shibe Inatumaliza” in a collection entitled <em>Tumbo Lisiloshiba na Hadithi Nyingine</em> (Longhorn Publishers, 2016).</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><strong><img decoding="async" class="size-medium wp-image-457 alignleft" src="img/MAITARIA.jpg" alt="Dr. Maitaria" width="261" height="300"></a> <p>&nbsp;</p> Dr. Joseph Nyehita Maitaria </strong>is a Senior Lecturer and the Chairperson of the Department of Humanities and Languages in the School of Education and Social Sciences (SESS), Karatina University, Kenya. He holds a BA (Education) in Kiswahili and Christian Religious Education (Kenyatta University); MA in Kiswahili (Kenyatta University) and PhD in Kiswahili Literary Genres and Kiswahili Poetry (Kenyatta University). He is a committee member of various Kiswahili associations and is presently the Secretary of the East Africa Kiswahili Association (CHAKAMA) and Kiswahili Scholars Association of Kenya (CHAKITA). An author of Kiswahili books, he has also published widely in academic journals in the area of Kiswahili Poetry.</p><p>&nbsp;</p><p>&nbsp;</p><p><strong><img loading="lazy" decoding="async" class="size-medium wp-image-459 alignleft" src="img/Babusa.jpg" alt="Dr. Hamisi Babusa" width="261" height="300"></a> <p>&nbsp;</p> Dr. Hamisi Babusa</strong> is a Lecturer of Kiswahili and Language Education at Kenyatta University. He has also taught in other universities, among them St. Lawrence University, in Canton, NY, USA. Among his publications are <em>Kamusi Teule</em>, a dictionary of Kiswahili proverbs with their equivalents in English, several short stories and poems in various anthologies. Dr. Babusa has also written children novellas like<em> Binti Kitabu</em> &nbsp;and also <em>Makumba</em>, science fiction series, for which in 2018 he was recognized as one of the top twenty scientists in Kenya.</p><p>&nbsp;</p><p>&nbsp;</p><p><strong><img loading="lazy" decoding="async" class=" wp-image-460 alignleft" src="img/Rocha.jpg" alt="Prof Rocha Chimerah" width="257" height="224"></a> <p>&nbsp;</p> Prof Rocha Chimerah</strong> is a Professor of Kiswahili Linguistics at Pwani University in Kenya. He received his PhD from Ohio University in the USA in 1989, taught in Rwanda for 8 years and has published many papers in refereed journals in East Africa and abroad in the areas of Kiswahili Linguistics, Language and Literature. He has written a number of acclaimed novels and plays. Among his published novels are <em>Nyongo Mkalia Ini</em> and <em>Siri Sirini</em> ( a three-volume sequel). He won the Noma Award in 2000 for his co-authorship of the book <em>Ufundishaji wa Fasihi: Nadharia na Mbinu</em>. His book, <em>Kiswahili: Past, Present and Future Horizon</em> was listed in the 100 Best African Books of the 20<sup>th</sup> Century Award in Harare, Zimbabwe, in 2002.</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>Notes to Editors</strong></p><p>&nbsp;</p><p>The Prize is primarily supported by Mabati Rolling Mills of Kenya (a subsidiary of the Safal Group), The Office of the Vice Provost for International Affairs at Cornell University, the Africana Studies Center at Cornell University and the Ngugi wa Thiong’o Foundation.</p><p>&nbsp;</p><p><strong>Safal Investments Mauritius Ltd. and its subsidiaries&nbsp;</strong>(which include Mabati Rolling Mills Ltd of Kenya and ALAF Limited in Tanzania)&nbsp;<strong>are collectively known as The Safal Group.&nbsp; &nbsp;</strong></p><p>&nbsp;</p><p>The Safal Group is the largest producer of Steel Roofing on the African continent with 36 operations in 12 countries.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p><p>&nbsp;</p><p><strong>Mabati Rolling Mills</strong>&nbsp;<strong>Ltd</strong>&nbsp;(MRM) is the largest producer of steel roofing in Kenya. Established more than 50 years ago, the company is a leading innovator in its field. MRM led Africa in the manufacture of coated steel using the most advanced corrosion protection technology available worldwide, and its roofing brands are household names which are known and trusted by millions of consumers. <a href="http://www.mabati.com">www.mabati.com</a></p><p>&nbsp;</p> <p><strong>The Safal MRM Foundation</strong>, based in Kenya, is a philanthropic enterprise of Mabati Rolling Mills and the Safal Group. It founded, and continues to fully manage, both the Mabati Technical Training Institute, and the Mabati Medical Centre, both in Mariakani, Kenya. safalmrmfoundation.org</p><p>&nbsp;</p> <p><strong>ALAF Limited&nbsp;</strong>(ALAF) is Tanzania’s leading steel roofing manufacturer. Established in 1960, ALAF has always, and continues to be, a key player in the development of the country’s construction sector. ALAF is a fully integrated operation, not only making steel roofing, but also producing the metal coated coils used by these roofing operations. ALAF manufactures metal tubing and piping for various applications.&nbsp;<a href="http://www.alaf.co.tz">alaf.co.tz</a></p><p>&nbsp;</p><p><strong>The Africana Studies and Research Center</strong>&nbsp;enriches the academic, cultural, and social environments on the Cornell University Ithaca campus. Website:&nbsp;<a href="http://www.asrc.cornell.edu">http://www.asrc.cornell.edu</a></p> <p>&nbsp;</p><p><strong>Mkuki na Nyota Publishers&nbsp;</strong>is an independent, vibrant Tanzanian imprint publishing relevant, progressive, liberating, affordable and entertaining content.&nbsp; Established in 1991, Mkuki na Nyota Publishers emerged in response to the general absence of high quality, independent publishing in Tanzania. Its mission statement is to publish, “Relevant Books, Affordable Books, and Beautiful Books.” They have successfully published 2017 poetry winner, Dotto Rangimoto’s&nbsp;<em>Mwanangu Rudi Nyumbani&nbsp;</em>(December 2018) and published Ali Hilal Ali’s novel&nbsp;<em>Mmeza Fupa</em>&nbsp;(January 2019).&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p><p>&nbsp;</p><p><strong>East African Educational Publishers</strong>&nbsp;is one of Africa’s leading publishers.&nbsp; EAEP strives to juggle the seemingly contradicting values of publishing works of enduring value cutting across the social, cultural, political and economic spectrum of society and at the same time excelling as a viable business that is ready to face the realities and vagaries of the technology age. &nbsp;They published 2015 winners A.S. Manyanza and Enock Maregesi’s novels&nbsp;<em>Penzi la Damu&nbsp;</em>and&nbsp;<em>Kolonia Santita&nbsp;</em>in 2016.&nbsp;&nbsp;<a href="http://www.eastafricanpublishers.com">http://www.eastafricanpublishers.com</a></p><p>&nbsp;</p><p><strong>The Africa Poetry Fund</strong>&nbsp;promotes and advances the development and publication of the poetic arts through its book series, contests, workshops, and seminars and through its collaborations with publishers, festivals, booking agents, colleges, universities, conferences and all other entities that share an interest in the poetic arts of Africa. Website: <a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p><p>&nbsp;</p><p><strong>Ngugi Wa Thiong’o Foundation</strong> is powered by the interest and passion to raise the visibility of African Languages in Kenya, Africa and the world, as vehicles for performance, creativity, innovations, and scholarship. It sees African languages as the new intellectual frontier in everything from culture, biological sciences, technology and medicine. <a href="http://ngugiwathiongofoundation.org">http://ngugiwathiongofoundation.org</a></p><p>&nbsp;</p><p><strong>Board of Trustees:</strong> Abdilatif Abdalla (Chair), Mukoma Wa Ngugi, Lizzy Attree, Happiness Bulugu, Walter Bgoya, Henry Chakava, Chege Githiora, Clarissa Vierke, Farouk Topan, Carole Boyce Davies, and Ngugi Wa Thiong’o.</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>The website is</strong>: https://safalkiswahiliawards</p><p>&nbsp;</p></div><!-- end .entry-content -->';
                break;
        case 'content7-sw':
                contentArea.innerHTML = '<p>Sasisho kwa Kiswahili</p>';
                break;

        // Add more cases for each content ID as needed
        default:
            contentArea.innerHTML = '<p>Content not found</p>';
            break;
    }
}

function showEnglish() {
    document.querySelectorAll('[data-content$="-en"]').forEach(function(link) {
        link.style.display = 'block';
    });
    document.querySelectorAll('[data-content$="-sw"]').forEach(function(link) {
        link.style.display = 'none';
    });
    loadContent('content1-en');
}

function showSwahili() {
    document.querySelectorAll('[data-content$="-en"]').forEach(function(link) {
        link.style.display = 'none';
    });
    document.querySelectorAll('[data-content$="-sw"]').forEach(function(link) {
        link.style.display = 'block';
    });
    loadContent('content1-sw');
}