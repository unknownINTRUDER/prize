

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

                <h2><strong>SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></h2>
                <p>&nbsp;</p>


                <p>&nbsp;</p>
              <div class="slideshow-container">
                  <div class="mySlides fade">
                      <img src="img/majaliwa.jpg" style="width:100%">
                  </div>
                  <div class="mySlides fade">
                      <img src="img/2nd-place.jpg" style="width:100%">
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


<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="swahili/img/3rd-place.jpg" style="width:100%"></p>
<p>&nbsp;</p>   
<p><img src="swahili/img/Ally.jpg" style="width:100%"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


              <p>&nbsp;</p>
              <p>&nbsp;</p>
            `;
            initializeSlideshow();
        } else if (contentId === 'content3') {
            contentArea.innerHTML = `
            <h1 class="entry-title">CALL FOR SUBMISSION 2024</h1>
            <p>&nbsp;</p>


            <p>Dar es Salaam, Tanzania, July 30, 2024... <b>The Safal Kiswahili African Literature Prize</b> today announced that participants should submit their manuscripts for this year’s 2024 competition.</p>
            <p>&nbsp;</p>
            <p>Previously known as the Safal-Cornell Kiswahili African Literature Prize, its name has now been changed to reflect the sponsor's name - namely Safal Group, through its subsidiaries<b> Mabati Rolling Mills (MRM)</b> of Kenya and <b>ALAF Limited</b> of Tanzania. Safal Group is a leading company manufacturing high-quality building materials in nine East and Southern African countries, providing superior products to millions of customers across Africa. It also distributes a variety of trusted brand products in the market.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

                <img src="swahili/img/call-for-submission-english.JPG" style="width:100%">    
            <p>&nbsp;</p>
            <p>&nbsp;</p>


            <h2>SEND THE SUBMISSION TO: <a href="mailto:kiswahiliprize@kiswahiliprize.org">kiswahiliprize@kiswahiliprize.org</a></h2>

            <p>&nbsp;</p>
            <p>&nbsp;</p>

            <p><strong>CALL FOR SUBMISSIONS FOR THE 2024 SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></p>
            <p>&nbsp;</p>
        <p>Submissions for this year's competition begin today,<b> July 30, 2024</b>, and end on <b>November 30, 2024.</b> Writers from East Africa and anywhere in the world who write in Kiswahili are encouraged to submit their manuscripts and participate in the competition. Once again, female writers are especially encouraged to come forward and participate in large numbers.</p>
        <p>&nbsp;</p>
        <p>Those wishing to participate in this year's competition are encouraged to submit manuscripts that have not been published in any form in the categories of novel, poetry, short story collection, drama, biography, and graphic novels. Published books will not be considered.</p>
        <p>&nbsp;</p>
        <p>Total prizes of <b>$15,000</b> will be awarded as follows: the first-place winner in the novel and poetry categories will each receive<b> $5,000</b>; and the second-place winners in the novel or poetry categories, or any other category, will receive <b>$2,500</b> each.</p>
        <p>&nbsp;</p>
        <p>The winning manuscripts will be published by Mkuki na Nyota Publishers (Tanzania), which may collaborate with other publishers to facilitate the availability of the winning books. The poetry manuscripts that win will be translated into English and published by the Africa Poetry Book Fund.</p>
        <p>&nbsp;</p>
        <p><b>The award ceremony for the 2024 winners will take place in July 2025, and all shortlisted authors will attend.</b></p>            <p>&nbsp;</p>
            `;
            initializeSlideshow();
        } else if (contentId === 'content2') {
            contentArea.innerHTML = `
                <h1 class="entry-title">Safal Kiswahili Prize for</h1>
                <h1 class="entry-title">African Literature</h1>

                <p>&nbsp;</p>
                <div class="entry-content">
                    <p><img class="size-medium wp-image-550" src="img/prize.jpg" alt="" width="300" height="200"></p>
                    <p>&nbsp;</p>
                    <p>In <strong>2022</strong>, the prize name changed from <strong>Mabati Cornell Kiswahili Prize</strong> to <strong>Safal Cornell Kiswahili Prize</strong></p>
                    <p>&nbsp;</p>
                    <p>In <strong>2024</strong>, the prize name has been transformed from <strong>Safal Cornell Kiswahili Prize</strong> to <strong>Safal Kiswahili Prize for African Literature</strong></p>
                    <p>&nbsp;</p>
                </div>
            `;
        } else if (contentId === 'content4') {
            contentArea.innerHTML = `
                <h2>About the Prize</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>The Safal Kiswahili Prize for African Literature was founded by Mukoma Wa Ngugi and Lizzy Attree in 2014 to promote writing in African languages and encourage translation from, between and into African languages. The Prize sets a historical precedent for African philanthropy by Africans and shows that African philanthropy can and should be at the center of African cultural production.</p>
                    <p>The Prize, formerly known as The Safal-Cornell Kiswahili Prize for Africa Literature, has rebranded its name to reflect the parent organization. Sponsored by the Safal Group through its subsidiaries ALAF Limited (Tanzania) and Mabati Rolling Mills (Kenya).</p>
                    <p>&nbsp;</p>
                    <p>Over 140 million people speak Kiswahili in Eastern and Southern Africa. Kiswahili is also one of the official languages in Kenya and Tanzania. Through some of the most prolific African writers and poets writing in Kiswahili, such as Shaban Roberts and Ebrahim Hussein there is a large body of work in Kiswahili that has long been a staple language in leading research universities e.g. Nairobi University, Boston University and University of Wisconsin – Madison. In other words, Kiswahili is an established world language and should be considered as such.</p>
                    <p>&nbsp;</p>
                    <p>Moving from the principle that all languages are created equal and no one language should thrive at the expense of the other, we are proposing that a Kiswahili Prize for Literature be established with the express goal of promoting reading and writing in African languages. Literary prizes highlight fresh talent, encourage authors and demonstrate that reading matters.</p>
                    <p>While there exists international literary prizes for African writing such as the Caine Prize and the recently established, Etisalat Prize, there are no major international and Pan-African literary prizes awarded to works produced in an African language. The Jomo Kenyatta Prize for Literature is a biannual award organized by the Kenya Publishers Association to recognize outstanding works published in Kenya in English and Kiswahili.</p>
                    <p>&nbsp;</p>
                    <p>These facts alone make an international Kiswahili literary prize historical in nature, setting a precedent for other literature in African languages while making an important contribution to the body of world literature.</p>
                    <p>&nbsp;</p>
                    <p>We are grateful for your support and patience as we embark on this language adventure.</p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>The company&nbsp;<strong>Safal Investments Mauritius Limited&nbsp;</strong>and its branches (including Mabati Rolling Mills Limited, Kenya, and ALAF Limited, Tanzania) are commonly known as The Safal Group. This is the largest roofing sheet manufacturing company in 12 African countries.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p>
<p>&nbsp;</p>

<p><strong>Mabati Rolling Mills Limited (MRM)&nbsp;</strong>was established over 50 years ago. It is the largest roofing sheet manufacturing company in Kenya and leads in this craft segment. It also leads the African continent in manufacturing roofing sheets using the highest available technology. Its famous roofing sheets are highly regarded and trusted by millions of builders. www.mabati.com</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
<p><strong>Safal MRM Foundation</strong>, headquartered in Kenya, is the charitable arm of Mabati Rolling Mills and Safal Group that deals with various types of assistance. Among the assistance provided in Mariakani, Kenya, is the establishment and continued funding of the Mabati Technical Training Institute, and the Mabati Medical Centre. www.safalmrmfoundation.org</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><img src="img/ALAF.PNG" style="width:15%"></p><p>&nbsp;</p><p>&nbsp;</p>
<p><strong>ALAF Limited (ALAF)&nbsp;</strong>is a leading roofing sheet manufacturing company in Tanzania. Since its establishment in 1960, ALAF has made significant contributions to the country's construction activities. ALAF not only manufactures roofing sheets but also various types of metal wires used in roof construction. ALAF also manufactures metal pipes used in various craft activities. www.alaf.co.tz</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
<p><strong>Safal ALAF Foundation</strong>, headquartered in Tanzania, is the charitable arm of ALAF and Safal Group that deals with various types of assistance. www.safalalaffoundation.org</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><strong>Ngugi Wa Thiong’o Foundation</strong>. This foundation draws its strength from the desire and passion to promote and highlight African languages in Kenya, across Africa, and globally, recognizing them as suitable tools for conducting activities in the arts, creativity, innovation, and academics. It also recognizes these languages as having the potential to lead in every field – from culture, biological sciences, technology to medicine.&nbsp;&nbsp; http://ngugiwathiongofoundation.org</p>
<p>&nbsp;</p>

<p><strong>Mkuki na Nyota Publishers&nbsp;</strong>is an independent organization publishing developmental, liberating, affordable, and elegant books. This organization was established in 1991 due to the lack of high-quality books in Tanzania. Its motto is to publish "Books That Matter, Affordable Books, and Elegant Books."&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p>
<p>&nbsp;</p>

<p><strong>Africa Poetry Book Fund&nbsp;</strong>strengthens and promotes the publication of poetic arts through its books, competitions, workshops, seminars, as well as partnering with publishers, festivals, agents, schools, universities, conferences, and other poetry-related groups in Africa.&nbsp;<a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
<p>&nbsp;</p>

<p>&nbsp;</p>
                </div>
            `;
        } else if (contentId === 'content5') {
            contentArea.innerHTML = `
                <h2>Rules of Submission</h2>
                <div class="entry-content">
                    <p>&nbsp;</p>
			<p>Please send unpublished&nbsp;manuscripts (fiction, poetry, collections of short stories, and memoir, or graphic novels) in Kiswahili to, <a href="mailto:kiswahiliprize@kiswahiliprize.org">kiswahiliprize@kiswahiliprize.org</a>.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            <p>Only one entry per writer may be submitted each year.&nbsp;Previous winners are not eligible for 12 months.</p>
            <p>&nbsp;</p>

            <ul>
                <li>Manuscripts should have between 40,000 - 60,000 words for fiction</li>
                <li>Poetry manuscripts with not less than 60 pages</li>
                <li>All entries must be in Kiswahili</li>
                <li>Not less  than 40,000 words <b>(with each short story between 1,000 and 6,000 words)</b></li>
                <li>Entries should be attached in Microsoft Word or PDF format, with the title of the story as the file name</li>
                <li>The first page of the story should include the name of the story and the number of words</li>
                <li>The entry must be typed in Times New Roman 12 point font with 1.5 line spacing</li>
                <li>Send submissions as attachments</li>
                <li>The email included with the submission attachment should include the following information: Legal Name, Pen Name,&nbsp; Telephone Number, Short Bio, Age, and Country of Residence</li>
                </ul>
<p>&nbsp;</p>

            `;
        } else if (contentId === 'content6') {
            contentArea.innerHTML = `
            <h1 class="entry-title">Award Criteria</h1>
            <p>&nbsp;</p>
            <div class="entry-content">
                <p>The prize will be awarded to the best unpublished manuscript across the categories of Fiction/Nonfiction/Graphic Novels. The total proposed awards of $15,000 US dollars will be divided as follows:</p>
                <p>&nbsp;</p>
                <p>1st Fiction Prize – $5,000</p>
                <p>&nbsp;</p>
                <p>1st Poetry Prize – $5,000</p>
                <p>&nbsp;</p>
                <p>2nd Prize – $2,500 in any genre</p>
                <p>&nbsp;</p>
                <p>3rd Prize – $2,500 in any genre</p>
                <p>&nbsp;</p>
                <p>The winning manuscripts will be considered for publication by Mkuki na Nyota.</p>
                <p>An award ceremony will be held with the four prize winning writers in attendance. The first and second award ceremonies were held in Kenya and Tanzania respectively, the 2025 Awards will be held in Tanzania. </p>
            </div>
            `;
        }
        else if (contentId === 'content7') {
            contentArea.innerHTML = `

                <div class="post-70 page type-page status-publish hentry">

				    <h1 class="entry-title">Judges</h1>
		
				    <div class="entry-content">
			            <h1 style="text-align: center;"><strong>SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></h1>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <h2 style="text-align: left;"><strong>Announcement of 2021 Judges</strong></h2>
                        <p style="text-align: center;"><strong>&nbsp;</strong></p>
                        <p>The Chairman of the Board of Trustees of Mabati-Cornell Kiswahili Prize for African Literature, Abdilatif Abdalla, is pleased to announce the Judges of the 2021 Kiswahili Prize as &nbsp;<strong>Prof. Aldin K. Mutembei, Dr. Salma Omar</strong> and <strong>Dr. Joseph Nyehita Maitaria</strong>. He also announced that <strong>Prof. Rocha Chimerah </strong>and<strong> Dr. Hamisi Babusa </strong>will judge The Nyabola Prize, a special 2021 award for youth writing science fiction and speculative fiction in Kiswahili, for writers aged between 18 and 35.</p>
                        <p>“The Mabati-Cornell Kiswahili Prize for African Literature has seen an unprecedent increase in the number of entries, from 96 in 2019 to 256 in 2021. This year, the entries also came from 13 countries across the world, including Tanzania, Kenya, &nbsp;Uganda, Burundi, Uganda, Egypt, Nigeria, and the African diaspora in the USA, Canada, Germany, Switzerland, Finland and the Netherlands. “It is very encouraging to see that the Prize is not only truly pan-African, but also extends beyond the continental borders,” said Munyao Kilolo, the Prize Administrator.</p>
                        <p>The Chair of the Board of Trustees, Abdilatif Abdalla, said, “It makes my heart dance with joy to see how increasingly responsive the participants are and the higher quality of entries submitted as the Prize gets more widely known and becomes more inclusive. It is my earnest hope that this competition will ultimately assist in realizing the Pan-African dream which we have been yearning for all these years. I also would like to urge &nbsp;female writers to participate more in order to bridge the gender gap which currently exists.”</p>
                        <p>Ms. Nanjala Nyabola, founder of the Nyabola Prize, a special award for 2021 for youth writing science fiction and speculative fiction in Kiswahili, said “Its very important for Kiswahili language communities to remain involved in the development and use of new concepts in technology,” said Nyabola, “and what better way to do that than to support exciting and captivating storytelling around science and technology”.</p>
                        <p>The judges will work together to select a shortlist that will be announced in November 2021. The winning entries in each category will be announced at an awards ceremony in mid- December in Dar es Salaam, Tanzania.</p>
                        <p>After suspending the 2020 edition due to the challenges wrought by the Covid-19 pandemic, the Prize founders, Dr. Lizzy Attree and Prof. Mukoma Wa Ngugi, are excited to see this re-energized participation.The growth of the Prize, from strength to strength, is an excellent example that is encouraging other prizes in African languages.</p>
                        <p>Founded in 2014 by Dr. Lizzy Attree and Prof. Mukoma Wa Ngugi (Cornell University), the Prize has the express goal of recognizing writing in African languages and encouraging translation from, between and into African languages.</p>
                        <p>&nbsp;</p>
                        <h2>2021 Judges:</h2>
                        <p>&nbsp;</p>

                        
                        <div class="container-judges"> 
                        <strong><img src="img/Aldin.jpg" alt="Aldin" width="261" height="300" class="left-img">
                        <p>&nbsp;</p>
                        <p> Prof Aldin K. Mutembei</strong> (BA Ed.; MA Ling (Dar); MA (Lit); PhD (Leiden), holds a Chair as the Mwalimu Julius Nyerere Professor in Kiswahili at the University of Dar es Salaam. He is a former Director of the Institute of Kiswahili Studies; and the current Director of the Confucius Institute at the University of Dar es Salaam. He teaches Kiswahili/African Literature, Communication, Literary Theories and Orature and Kiswahili language to speakers of other languages. He has published four &nbsp;literary works, among which is a novel, <em>Kisiki Kikavu</em>. (E &amp; D Limited, 2005), and a literary theory book, <em>Korasi Katika Fasihi: Nadharia Mpya ya Uhakiki</em> (Institute of Kiswahili Studies, University of Dar es Salaam, 2012).</p>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                        <div class="container-judges"> 
                        <img src="img/Dr-Salma-Omar-Hamad.jpg" alt="Dr. Salma Omar Hamad" width="261" height="300" class="left-img">
                        <p>&nbsp;</p>
                        <p><strong>Dr. Salma Omar Hamad </strong> was born in Pemba, Zanzibar. She is currently a Lecturer of Kiswahili Literature and Linguistics at The Open University of Tanzania. She did her BA in Education (Hons) at State University of Zanzibar (SUZA); majoring in Kiswahili; MA in Linguistics at the University of &nbsp;Dar es Salaam, specializing in Kiswahili; and a PhD in Kiswahili from SUZA. She is the author of several short stories awaiting publication and has also contributed to short story anthologies, such as her story “Shibe Inatumaliza” in a collection entitled <em>Tumbo Lisiloshiba na Hadithi Nyingine</em> (Longhorn Publishers, 2016).</p>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                        <div class="container-judges"> 
                        <img class="left-img" src="img/MAITARIA.jpg" alt="Dr. Maitaria" width="261" height="300">
                        <p>&nbsp;</p>
                        <strong> <p> Dr. Joseph Nyehita Maitaria </strong>is a Senior Lecturer and the Chairperson of the Department of Humanities and Languages in the School of Education and Social Sciences (SESS), Karatina University, Kenya. He holds a BA (Education) in Kiswahili and Christian Religious Education (Kenyatta University); MA in Kiswahili (Kenyatta University) and PhD in Kiswahili Literary Genres and Kiswahili Poetry (Kenyatta University). He is a committee member of various Kiswahili associations and is presently the Secretary of the East Africa Kiswahili Association (CHAKAMA) and Kiswahili Scholars Association of Kenya (CHAKITA). An author of Kiswahili books, he has also published widely in academic journals in the area of Kiswahili Poetry.</p>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                        <div class="container-judges"> 
                        <img class="left-size" src="img/Babusa.jpg" alt="Dr. Hamisi Babusa" width="261" height="300">
                        <p>&nbsp;</p>
                        <strong><p>Dr. Hamisi Babusa</strong> is a Lecturer of Kiswahili and Language Education at Kenyatta University. He has also taught in other universities, among them St. Lawrence University, in Canton, NY, USA. Among his publications are <em>Kamusi Teule</em>, a dictionary of Kiswahili proverbs with their equivalents in English, several short stories and poems in various anthologies. Dr. Babusa has also written children novellas like<em> Binti Kitabu</em> &nbsp;and also <em>Makumba</em>, science fiction series, for which in 2018 he was recognized as one of the top twenty scientists in Kenya.</p>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                        <div class="container-judges"> 
                        <img class="left-img" src="img/Rocha.jpg" alt="Prof Rocha Chimerah" width="257" height="224">
                        <p>&nbsp;</p>
                        <strong><p>Prof Rocha Chimerah</strong> is a Professor of Kiswahili Linguistics at Pwani University in Kenya. He received his PhD from Ohio University in the USA in 1989, taught in Rwanda for 8 years and has published many papers in refereed journals in East Africa and abroad in the areas of Kiswahili Linguistics, Language and Literature. He has written a number of acclaimed novels and plays. Among his published novels are <em>Nyongo Mkalia Ini</em> and <em>Siri Sirini</em> ( a three-volume sequel). He won the Noma Award in 2000 for his co-authorship of the book <em>Ufundishaji wa Fasihi: Nadharia na Mbinu</em>. His book, <em>Kiswahili: Past, Present and Future Horizon</em> was listed in the 100 Best African Books of the 20<sup>th</sup> Century Award in Harare, Zimbabwe, in 2002.</p>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        
                        <p><strong>Notes to Editors</strong></p>
                        <p>&nbsp;</p>
                        
                        <p>The Prize is primarily supported by Mabati Rolling Mills of Kenya (a subsidiary of the Safal Group), The Office of the Vice Provost for International Affairs at Cornell University, the Africana Studies Center at Cornell University and the Ngugi wa Thiong’o Foundation.</p>
                        <p>&nbsp;</p>
                        <p><strong>Safal Investments Mauritius Ltd. and its subsidiaries&nbsp;</strong>(which include Mabati Rolling Mills Ltd of Kenya and ALAF Limited in Tanzania)&nbsp;<strong>are collectively known as The Safal Group.&nbsp; &nbsp;</strong></p>
                        <p>&nbsp;</p>
                        <p>The Safal Group is the largest producer of Steel Roofing on the African continent with 36 operations in 12 countries.&nbsp;<a href="http://www.safalgroup.com">www.safalgroup.com</a></p>
                        <p>&nbsp;</p>
                        <p><strong>Mabati Rolling Mills</strong>&nbsp;<strong>Ltd</strong>&nbsp;(MRM) is the largest producer of steel roofing in Kenya. Established more than 50 years ago, the company is a leading innovator in its field. MRM led Africa in the manufacture of coated steel using the most advanced corrosion protection technology available worldwide, and its roofing brands are household names which are known and trusted by millions of consumers. <a href="http://www.mabati.com">www.mabati.com</a></p>
                        <p>&nbsp;</p>
                        <p><strong>The Safal MRM Foundation</strong>, based in Kenya, is a philanthropic enterprise of Mabati Rolling Mills and the Safal Group. It founded, and continues to fully manage, both the Mabati Technical Training Institute, and the Mabati Medical Centre, both in Mariakani, Kenya. safalmrmfoundation.org</p>
                        <p>&nbsp;</p>
                        <p><strong>ALAF Limited&nbsp;</strong>(ALAF) is Tanzania’s leading steel roofing manufacturer. Established in 1960, ALAF has always, and continues to be, a key player in the development of the country’s construction sector. ALAF is a fully integrated operation, not only making steel roofing, but also producing the metal coated coils used by these roofing operations. ALAF manufactures metal tubing and piping for various applications.&nbsp;<a href="http://www.alaf.co.tz">alaf.co.tz</a></p>
                        <p>&nbsp;</p>
                        <p><strong>The Africana Studies and Research Center</strong>&nbsp;enriches the academic, cultural, and social environments on the Cornell University Ithaca campus. Website:&nbsp;<a href="http://www.asrc.cornell.edu">http://www.asrc.cornell.edu</a></p>
                        <p>&nbsp;</p>
                        <p><strong>Mkuki na Nyota Publishers&nbsp;</strong>is an independent, vibrant Tanzanian imprint publishing relevant, progressive, liberating, affordable and entertaining content.&nbsp; Established in 1991, Mkuki na Nyota Publishers emerged in response to the general absence of high quality, independent publishing in Tanzania. Its mission statement is to publish, “Relevant Books, Affordable Books, and Beautiful Books.” They have successfully published 2017 poetry winner, Dotto Rangimoto’s&nbsp;<em>Mwanangu Rudi Nyumbani&nbsp;</em>(December 2018) and published Ali Hilal Ali’s novel&nbsp;<em>Mmeza Fupa</em>&nbsp;(January 2019).&nbsp;<a href="http://www.mkukinanyota.com">http://www.mkukinanyota.com</a></p>
                        <p>&nbsp;</p>
                        <p><strong>East African Educational Publishers</strong>&nbsp;is one of Africa’s leading publishers.&nbsp; EAEP strives to juggle the seemingly contradicting values of publishing works of enduring value cutting across the social, cultural, political and economic spectrum of society and at the same time excelling as a viable business that is ready to face the realities and vagaries of the technology age. &nbsp;They published 2015 winners A.S. Manyanza and Enock Maregesi’s novels&nbsp;<em>Penzi la Damu&nbsp;</em>and&nbsp;<em>Kolonia Santita&nbsp;</em>in 2016.&nbsp;&nbsp;<a href="http://www.eastafricanpublishers.com">http://www.eastafricanpublishers.com</a></p>
                        <p>&nbsp;</p>
                        <p><strong>The Africa Poetry Fund</strong>&nbsp;promotes and advances the development and publication of the poetic arts through its book series, contests, workshops, and seminars and through its collaborations with publishers, festivals, booking agents, colleges, universities, conferences and all other entities that share an interest in the poetic arts of Africa. Website: <a href="http://africanpoetrybf.unl.edu/">http://africanpoetrybf.unl.edu/</a></p>
                        <p>&nbsp;</p>
                        <p><strong>Ngugi Wa Thiong’o Foundation</strong> is powered by the interest and passion to raise the visibility of African Languages in Kenya, Africa and the world, as vehicles for performance, creativity, innovations, and scholarship. It sees African languages as the new intellectual frontier in everything from culture, biological sciences, technology and medicine. <a href="http://ngugiwathiongofoundation.org">http://ngugiwathiongofoundation.org</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p><strong>The website is</strong>: https://kiswahiliprize.org</p>
                        <p>&nbsp;</p>
                       </div><!-- end .entry-content -->
		
	            </div>
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
                <h1>${year} WINNERS</h1>
               
			<h1 style="text-align: center;"><strong>SAFAL KISWAHILI PRIZE FOR AFRICAN LITERATURE</strong></h1>

<p>&nbsp;</p>
<p>&nbsp;</p>

<p>The winners of the Safal Kiswahili Prize for African Literature 2022 were awarded by <strong>His Excellency Majaliwa Kassim Majaliwa</strong>, Prime Minister of the United Republic of Tanzania at a special ceremony at the Mlimani City Conference Center in Dar es Salaam, on the 25th of January 2023.</p>
<p>&nbsp;</p>

<P>
<strong><img class="left-img" src="img/majaliwa.jpg"  width="300" height="224"></strong>
</p>

<p>The Safal Kiswahili Prize for African Literature was founded in 2014 by Dr. Lizzy Attree and Dr. Mukoma Wa Ngugi to recognize writing in African languages and encourage translation from, between, and into African languages.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p>
    The 2022 judges; Prof F.E.M.K. Senkoro (chair, Professor Emeritus), Dr. Magdaline Nakhumicha Wafula (Moi University, Kenya), and Dr. Hamisi Babusa (Kenyatta University, Kenya) selected the following and they both received prize money of US $5,000 Dollars each. <p>&nbsp;</p> 
</p>   
<div class="clearfix"></div>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>1.Dotto Daudi Rangimoto’s </strong>novel<strong> <em>Ujanajike</em></strong> (Womanhood)<strong>,</strong> as the winner in the Fiction category.</p>
    <p>&nbsp;</p> 
    <img class="left-img" src="img/dotto.jpg"  width="300" height="224">
    <p>&nbsp;</p>   
<div class="clearfix"></div>
<p>&nbsp;</p>


 <p><strong>2.Salum Makamba’s </strong>poetry collection<strong> Mamangu Nipe Wosia </strong>(Mother, Counsel me) as the winner in the Poetry category.<p>&nbsp;</p>
    <img class="left-img" src="img/salum.jpg"  width="300" height="224">
    <p>&nbsp;</p>
    <p>&nbsp;</p>  
<p>&nbsp;</p>
<p>&nbsp;</p>
<div class="clearfix"></div>

<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Dotto Rangimoto </strong>was born in Morogoro, Tanzania, in 1986. He won the Safal Kiswahili Prize in 2017, and his winning manuscript, <em>Mwanangu Rudi Nyumbani,</em> was subsequently published by Mkuki na Nyota Publishers, Dar es Salaam. Dotto completed his secondary education in 2004 at Morogoro Secondary School. Thereafter he has been involved in small enterprise business and farming. He is a great enthusiast of Kiswahili Literature, especially novels and poetry.</p>
<p>&nbsp;</p>


<p><strong>Salum Makamba</strong> is a young writer from Tanzania. In addition to novels, he writes short stories, poems, fiction, essays and articles on various social issues. Salum trained as a medical doctor from the University of Dar es Salaam.</p>
<p>&nbsp;</p>

<p>In his speech, the Prime Minister His Excellency Kassim Majaliwa congratulated the winners and praised the management of the Prize, its board, and the sponsors, led by Safal Group, for their important work in promoting literature in African languages, particularly Kiswahili.</p>
<p>&nbsp;</p>

<p>The CEO of Safal Group, Mr. Andrew Lindgren, also spoke at the ceremony and highlighted the importance of the Kiswahili language in the development of the East African region. “Through our support of these awards, The Safal Group is firmly committed to the course of African languages. I commend ALAF Limited and MRM for organizing the award ceremony each year.”</p>
<p>&nbsp;</p>

<p>On behalf of the panel of judges, Prof Senkoro (chair) commended the 2022 entrants for the high quality of their writing, saying that it made it very difficult for the judges to pick out the first-place winners. “This is sufficient evidence that we have a great treasure of creativity, especially among young people, that transcends the boundaries of each country, and which if sprinkled with the basics of writing and publishing literary works will greatly strengthen Kiswahili literature,” added Prof Senkoro.</p>
<p>&nbsp;</p>

<p>Mr. Walter Bgoya of the Mkuki and Nyota Publishers, the official publisher of the winning manuscripts, said, “The Safal Award has raised talented writers in the field of literature since it was established in 2014, and there is no doubt that it has given writers inspiration and made the award ceremonies a day of great joy in the lives of those who are lucky enough to win.”</p>
<p>&nbsp;</p>

<p>He also emphasized on awakening the spirit of scholars in Tanzania and elsewhere to start promoting the Kiswahili language in science and technology. “There are scholars who are already focused on doing that. What they need is for their work to be recognized and used,” he added.</p>
<p>&nbsp;</p>

<p>The second-place winner in the Fiction category was<strong> Isaac Ndolo </strong>(Kenya) for his manuscript<strong> <em>Wimbo wa Hatima</em></strong> (<strong>The Final Song</strong>), and in the Poetry category was<strong> Ally Bakari Mchanyato </strong>(Tanzania) for his manuscript<strong> Uswahilini. </strong>Each received 2,500 USD.</p>
<p>&nbsp;</p>

    <strong><img class="left-img" src="img/Isaac.jpg"  width="300" height="224"></a></strong>
    <strong><img class="left-img" src="img/Ally.jpg"  width="300" height="224"></a></strong>


<div class="clearfix"></div>
<p>The winning manuscripts are published by Mkuki na Nyota publishers.</p>
<p>&nbsp;</p>

<p>As earlier announced, other shortlisted works and authors were:&nbsp;<strong>Dunia na Watu Wake</strong>&nbsp;by Ahmad Simba Mwaita and <strong>Mzoga Unaonukia</strong>&nbsp;by Lenard Mtesigwa both from Tanzania.</p>
<p>&nbsp;</p>

<p>Both the winners and their fellow shortlistees were in attendance during the award giving ceremony in Dar es Salaam.</p>
<p>&nbsp;</p>

<p>&nbsp;</p>
		
            `;
        }

        else if (contentId.startsWith('content10')) {
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
                <div class="entry-content">
                    <p>&nbsp;</p>
                    <p>Details of the ${year} winners will be added here.</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }

        else if (contentId.startsWith('content14')) {
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

		
				
			<p><strong><u>2015 winners</u></strong></p>
<p><strong>Fiction</strong></p>
<p><strong>Winner</strong></p>
<ul>
<li>Anna Samwel – <a href="https://textbookcentre.com/catalogue/penzi-la-damu_220538/">Penzi la Damu</a> $5,000</li>
</ul>
<p><img  src="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Anna-Samwel-200x300.jpg" alt="Anna Samwel" width="50" height="100"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><strong>Runners up</strong></p>
<ul>
<li>Enock Maregesi – <a href="https://www.amazon.com/Kolonia-Santita-Panthera-Tigrisi-Swahili/dp/1477222952">Kolonia Santita</a> $3,000</li>
</ul>
<p><img  src="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Enock-Maregesi-199x300.jpg" alt="Enock Maregesi" width="199" height="300"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


<p><strong>Poetry</strong></p>
<p><strong>Winner</strong></p>

<p>Mohammed K. Ghassani – <a href="https://www.amazon.com/Nna-Kwetu-Sauti-Mhamiaji-Swahili/dp/1535182725">N’na Kwetu</a> $5,000<p>

<p><img class="left-img" src="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Mohammed-Khelef-Ghassani-260x300.jpg" alt="Mohammed Khelef Ghassani" width="199" height="230"></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


<p><strong>Second runners up</strong></p>

<p>Christopher Bundala Budebah – Kifaurongo $2,000<p>

<p><a href="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah.jpg"><img loading="lazy" decoding="async" class="alignnone wp-image-426" src="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah-225x300.jpg" alt="Christopher Budebah" width="199" height="265" srcset="https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah-225x300.jpg 225w, https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah-768x1024.jpg 768w, https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah-1152x1536.jpg 1152w, https://kiswahiliprize.cornell.edu/files/2020/12/2015-Christopher-Budebah.jpg 1440w" sizes="(max-width: 199px) 100vw, 199px"></a></p>
<p>The six judges said that the winners used “captivating, measured, flowing and sometimes humorous poetic language” to address issues facing East African societies, such as drugs and the harm they unleash globally; gender relations and women’s rights; and political corruption. “This is African neo-realism in an African language at its best,” they said.</p>
<p>Source: <a href="https://news.cornell.edu/stories/2015/11/first-mabati-cornell-kiswahili-prizes-announced">Cornell Chronicle</a></p>
		

            `;
        }

        

        else if (contentId === 'content17') {
            contentArea.innerHTML = `
                <h1 class="entry-title">Trustees</h1>
                <p>&nbsp;</p> <p>&nbsp;</p>

                        <img class="left-img" src="swahili/img/Mukoma.png" alt="Mukoma-Jeremy photo" width="154" height="178">
                        <p><strong>Mukoma Wa Ngugi, </strong>co-founder,&nbsp;is an Assistant Professor of English at Cornell University and the author of&nbsp;<a title="" href="http://www.amazon.com/Black-Nairobi-Melville-International-Crime/dp/1612192106"><em>Black Star Nairobi</em>&nbsp;</a>(Melville, 2013) and&nbsp;<a title="" href="http://www.penguinbooks.co.za/book/9780143026174/"><em>Nairobi Heat</em></a>&nbsp;(Penguin, SA 2009,&nbsp;<a title="" href="http://mhpbooks.com/books/nairobi-heat/">Melville House Publishing</a>, 2011), and an anthology of poetry titled&nbsp;<a title="" href="http://www.amazon.com/Hurling-Words-Consciousness-Mukoma-Ngugi/dp/1592214630"><em>Hurling Words at Consciousness</em></a>&nbsp;(AWP, 2006). He is a columnist for&nbsp;<a title="" href="http://thisisafrica.me/">This is Africa</a>.&nbsp;Mukoma holds a PhD in English from the University of Wisconsin, Madison, an MA in Creative Writing from Boston University and a BA in English and Political Science from Albright College.&nbsp; In 2013,&nbsp;<em>New African</em>&nbsp;magazine named him one of the 100 most Influential Africans.</p>
                        <p>The German translation of&nbsp;<em>Nairobi Heat</em>&nbsp;was named the 2014 Crime Book of the Season by&nbsp;<a title="" href="http://www.buchmarkt.de/content/59045-die-buchkultur-jury-hat-entschieden-bester-krimi-der-saison-2014-nairobi-heat-von-mukoma-wa-ngugi-.htm">Buchkultur</a>.&nbsp; In 2009, he was shortlisted for the&nbsp;<a title="" href="http://www.caineprize.com/">Caine Prize for African Writing&nbsp;</a>&nbsp;and in 2010 for the&nbsp;<a title="" href="http://www.penguinbooks.co.za/african-winners/index.php">Penguin Prize for African Writing&nbsp;</a>for his novel manuscript,&nbsp;<em>The First and Second Books of Transition</em>. A new novel titled&nbsp;<em>Mrs. Shaw</em>&nbsp;is forthcoming from Ohio U/Swallow Press and&nbsp;<em>Hunting Words with my Father</em>&nbsp;(poems) from the Africa Poetry Fund in 2016. A German translation of&nbsp;<em>Black Star Nairobi</em>&nbsp;is forthcoming in 2015.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    
                        <p><img class="left-img" src="swahili/img/Abdilatif.jpg" alt="Abdilatif Abdalla photo" width="135" height="210">
                        <strong>Abdilatif Abdalla</strong> is best known for his poetry volume ‘Sauti ya Dhiki’ (Voice of Agony, published in 1973), written in prison in Kenya between 1969-1972. He had been imprisoned for authoring the critical pamphlet ‘Kenya: Twendapi?’ (Kenya: where are we going? 1968), condemning the dictatorial features of Jomo Kenyatta’s KANU rule. Abdalla has also been involved in a multitude of translation and editing projects, between postcolonial novels (Ayi Kwei Armah), Qur’an translations, historic Swahili poetry, and critical academic works, next to being a driving-force in the shaping of a democratic opposition to the Moi-regime from exile in London (with Ngugi et al.) through the 1980s and 1990s.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    

                        <img class="left-img" src="swahili/img/WalterBgoya.jpeg" alt="WalterBgoya3" width="197" height="195">
                        <p><strong>Walter Bgoya,</strong> 1972 to 1990 Walter Bgoya directed the Tanzania Publishing House (TPH), which promoted Dar es Salaam as a progressive centre for intellectuals internationally. The TPH publications included Walter Rodney’s “How Europe Underdeveloped Africa”,Agostinho Neto’s “Sacred Hope”,Samora Machel’s “Establishing People’s Power to Serve the Masses,” and Issa Shivji’s “Class Struggle in Tanzania”. In 1991 Bgoya founded Mkuki na Nyota, an independent book publishing company based in Dar es Salaam. Bgoya said, in response to the general absence of independent scholarly publishing in Tanzania: “We are proud to publish relevant, beautiful, and affordable books, and place them in the hands of passionate readers in Tanzania and around the world.” Mkuki na Nyota books, children’s books, trade books and educational books, in both English and Kiswahili. This publisher actively translates literature into Kiswahili, including books like The Little Prince from the original French. Bgoya is a founding member of the African Books Collective, a collective owned and governed by African publishers. Mkuki na Nyota also works with NGOs to promote reading and education in Tanzania. Bgoya is a also a founding member of the African Publishers Network and was the Chairperson of the jury for the prestigious NOMA Award for Publishing in Africa. Walter Bgoya has delivered numerous papers on the themes of reading, writing, publishing and the quest for an authentic African voice in the literary world.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    
                        <img class="left-img" src="swahili/img/Boyce-Davies.jpg" alt="Boyce Davies photo for site" width="161" height="240">
                        <p><>strong>Carole Boyce-Davies </strong>is Professor of Africana Studies and English at Cornell University. Her most recently published book <i>Caribbean Spaces. Escape Routes from Twilight Zones</i>, dealing with the issue of internationalizing Caribbean culture was long listed for the BOCA Prize in non-fiction. Born in Trinidad and Tobago, she studied African Literature at the University of Ibadan. Of several visiting professorships and Fulbright teaching and research fellowships, her Fall, 2014 distinguished visiting professorship at Beijing Foreign Studies University, Beijing, China is one of the most memorable. &nbsp;She is the author of the prize-wining <i>Left of Karl Marx. The Political Life of Black Communist Claudia Jones</i> (Duke University Press, 2008) and <i>Black Women, Writing and Identity: Migrations of the Subject </i>(Routledge, 1994) and over 100 published journal articles and book chapters. Dr. Boyce Davies has also published the following critical editions<i>: Ngambika. Studies of Women in African Literature</i> (Africa World Press, 1986); <i>Out of the Kumbla. Caribbean Women and Literature</i> (Africa World Press, 1990); a two-volume collection of critical and creative writing entitled <i>Moving Beyond Boundaries</i> (New York University Press, 1995<i>): International Dimensions of Black Women’s Writing </i>(volume 1), and <i>Black Women’s Diasporas</i> (volume 2) and<i> Claudia Jones</i> <i>Beyond Containment: Autobiographical Reflections, Poetry, Essays </i>(Banbury: Ayebia, 2011). Her work specifically on the African diaspora include: <i>The African Diaspora: African Origins and New World Identities</i> (with Ali Mazrui and Isidore Okpewho, Indiana University Press, 1999); <i>Decolonizing the Academy. African Diaspora Studies</i> (Africa World Press, 2003) and serving as the general editor of the 3-volume <i>The Encyclopedia of the African Diaspora </i>(Oxford: ABC-CLIO, 2008). &nbsp;She is working on a new book project on “Black Women and Political Leadership in the African Diaspora.”</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                        <img class="left-img" src="swahili/img/Chege.png" alt="Chege Githiora photo" width="126" height="94"  300w, 728w">
                        <p><b>Chege Githiora </b>is a<b> </b>Senior Lecturer in Swahili in the department of the languages and cultures of Africa, at the School of Oriental and African Studies (SOAS), University of London. He was born and raised in Kenya, then studied in Mexico and USA where he also taught Swahili language and literature at El Colegio de Mexico, Boston University, and Michigan State University from where he graduated with a PhD in Linguistics, in 1999. He writes and translates from and into Gĩkũyũ, English, Swahili and Spanish. His research Interests and publications are in the areas of multilingualism, variation in language, urban youth codes, Spanish language and Afro-Latin American culture and society, lexicography and translation. He also teaches and researches on the structure of Bantu Languages with focus on Gĩkũyũ and Kiswahili.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                        <img class="left-img" src="swahili/img/sarit.jpg" alt="Sarit Shah " width="300" height="200">
                        <strong>Sarit Shah </strong>Born and schooled in Kenya, qualified in the UK and USA, Sarit is a British Citizen residing permanently in South Africa to manage the Safal Group’s widely spread business interests.</p>
                        <p>Sarit has extensive experience in business leadership and development, and is currently fully occupied in managing his wide business role within the Safal Group, a market leader in the Roofing &amp; Steel Industry in most countries in Eastern and Southern Africa, and India.</p>
                        <p>After graduating with a BSc (Hons) in Electrical and Electronic Engineering from Manchester University in 1988, Sarit gained brief work experience in the UK before embarking on a full time MBA through the University of Rochester, New York, USA. On completion in 1991 he moved to Uganda to start a business importing and stocking to sell building products. This ultimately led to his relocation to South Africa in 1996, and the commencement of his journey at the Safal Group in various leadership roles as below.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                    
                        <img class="left-img" src="swahili/img/Ngugi.jpg" alt="Ngugi Wa Thiong'o photo" width="135" height="203">
                        <p><b>Ngugi wa Thiong’o</b> teaches in the Departments of Comparative Literature and English at the University of California, Irvine. Born in Kenya, into a large peasant family, he was educated at Kamandura, Manguu and Kinyogori primary schools and Alliance High School, all in Kenya; Makerere University College (then a campus of London University), Kampala, Uganda; and the University of Leeds, Britain. He is recipient of seven Honorary Doctorates. A many-sided intellectual, he is novelist, essayist, playwright, journalist, editor, academic and social activist. Ngũgĩ burst onto the literary scene in East Africa with the performance of his first major play, <i>The Black Hermit</i>, at the National Theatre in Kampala. He is the author of <i>Petals of Blood</i>, <i>Decolonising the Mind</i>, and other books. He is the recipient of the <a href="http://en.wikipedia.org/wiki/Lotus_Prize_for_Literature">Lotus Prize for Literature</a> and <a href="http://en.wikipedia.org/wiki/Nonino#International_Nonino_Prize">Nonino International Prize for Literature</a>; he was nominated for the prestigious&nbsp;<a href="http://en.wikipedia.org/wiki/Man_Booker_International_Prize">Man Booker International Prize</a>. In 2012, he was awarded a&nbsp;<a href="http://en.wikipedia.org/wiki/National_Book_Critics_Circle_Award">National Book Critics Circle Award</a> for&nbsp;<i>In the House of the Interpreter</i>, as well as the 2014&nbsp;<a href="http://en.wikipedia.org/w/index.php?title=Nicol%C3%A1s_Guill%C3%A9n_Lifetime_Achievement_Award_for_Philosophical_Literature&amp;action=edit&amp;redlink=1">Nicolás Guillén Lifetime Achievement Award for Philosophical Literature</a>. In 2010 and 2014, he was a finalist for the Nobel Prize for Literature.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>


                        <img class="left-img" src="swahili/img/farouk.jpg" alt="Dr Farouk Topan" width="134" height="205">
                        <p><strong>Dr. Farouk Topan</strong> is a prominent Swahili scholar and writer who pioneered the study and teaching of Swahili literature in Kiswahili at the University of Dar-es-Salaam and the University of Nairobi. He has published widely on various aspects of Swahili literature, religion, spirit possession and identity in East Africa.</p>
                        <p>Dr. Topan taught at SOAS and was one of the founder editors of the departmental Journal of African Cultural Studies (JACS). He has also been teaching at the Aga Khan University Institute for the Study of Muslim Civilizations.​</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>


                    <img class="left-img" src="swahili/img/Vierke.jpg" alt="Clarissa Vierke" width="158" height="182">
                    <p><strong>Clarissa Vierke </strong>is professor of Literatures in African Languages at the University of Bayreuth. She loves Swahili language and literature. When she was still a student of African languages and literatures more than twenty years ago, she started to help to organizing the annual Bayreuth Swahili Colloquium and she still runs it every year. Her research has mostly focused on old, pre-colonial Swahili poetry which has been preserved in Arabic script. In recent years, she has concentrated on some of these manuscripts which have travelled widely all along the East African Coast and can be found in Kenya, Tanzania as well as Mozambique. Together with colleagues from Francophone and comparative literature, she has a research project on the networks of literature and arts, linking various countries and parts of the Indian Ocean. Clarissa Vierke is principal investigator of the Cluster of excellence “Africa Multiple. Reconfiguring African Studies” and the spokesperson of the research section Arts and Aesthetics. Together with colleagues from Leipzig and Cologne in Germany, Stellenbosch (South Africa), Wukari (Nigeria) and Eldoret (Kenya), she set up the project “Recalibrating Afrikanistik” funded by the Volkswagen foundation with the aim to plan the future of the study of African languages and literatures.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                    <h2>Additional trustees will be announced.</h2>
		        </div>
            `;
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


