import{_ as s,r as t,o as i,c as h,a as e,b as a,w as l,F as c,d as r,e as d}from"./app.e696d174.js";var p="/documentation/landing-page.webp",g="/documentation/software-overview.webp",w="/documentation/project-overview.webp",u="/documentation/organisation-overview.webp",f="/documentation/registered-organisation.webp";const m={},b=e("h1",{id:"navigating-the-rsd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navigating-the-rsd","aria-hidden":"true"},"#"),r(" Navigating the RSD")],-1),v=e("p",null,[e("img",{src:p,alt:"image"})],-1),_=e("p",null,"There are many ways to discover interesting research software on the RSD. The main starting points are:",-1),y=e("ul",null,[e("li",null,"The search bar (in the header)"),e("li",null,'The software overview (reachable by clicking "Discover Software" or the "Software" link in the header)'),e("li",null,'The projects overview (reachable by clicking "Projects" in the header)'),e("li",null,'The organisations overview (reachable by clicking "Organisations" in the header)')],-1),S=r("For more advanced users, we also offer a "),j={href:"/RSD-as-a-service/api.html",target:"_blank",rel:"noopener noreferrer"},T=r("REST API"),k=r(", allowing you to use the RSD as a data source for other applications."),D=d('<h2 id="global-search" tabindex="-1"><a class="header-anchor" href="#global-search" aria-hidden="true">#</a> Global search</h2><p>Using the search bar in the header, you can perform a global search of all data in the RSD by simply providing a search term. Currently, the search will match the following fields:</p><ul><li>the name of software, projects and organisations</li><li>the short description of software and projects</li><li>the keywords of software and projects</li><li>the research domains of projects</li></ul><p>At the moment, we do not yet match on the long descriptions of software, projects and organisations, but we expect to do so in the future.</p><h2 id="software-overview" tabindex="-1"><a class="header-anchor" href="#software-overview" aria-hidden="true">#</a> Software Overview</h2><p><img src="'+g+'" alt="image"></p><p>The software overview page provides a list of all software in the RSD. For each software, a <strong>card</strong> is shown with basic information: name, short description, last update, number of mentions, and number of contributors. To browse and search for software of interest, the <em>filter and search</em> bar can be used.</p><p>Simply typing into the search bar will trigger the RSD to search for software containing (part of) the terms you entered. The name, short description and keywords are included in the search. Entering multiple words into the search bar will be interpreted as an <strong>AND</strong>. Only software containing all search terms will be shown as a result.</p><p>By default, 12 software cards are shown per page. This number can be increased if desired using the <strong>Per page</strong> dropdown menu.</p><p>It is also possible to filter the software by keywords, programming languages and the license. Selecting multiple filter values is interpreted as an <strong>AND</strong>. Only software using all of the selected filters will be shown as a result. You can also combine filters with the search term to further reduce the selection.</p><h2 id="project-overview" tabindex="-1"><a class="header-anchor" href="#project-overview" aria-hidden="true">#</a> Project Overview</h2><p><img src="'+w+'" alt="image"></p><p>The project overview page provides a list of all projects in the RSD. For each project, a <strong>card</strong> is shown with basic information: name, short description, last update, and if the project is running or completed. To browse and search for projects of interest. The <em>filter and search</em> bar on the page can be used.</p><p>Simply typing into the search bar will trigger the RSD to search for projects containing (part of) the terms you entered. The name, short description, keywords, and research domains are included in the search. Entering multiple words into the search bar will be interpreted as an <strong>AND</strong>. Only projects containing all search terms will be shown as a result.</p><p>By default, 12 project cards are shown per page. This number can be increased if desired using the <strong>Per page</strong> dropdown menu.</p><p>It is also possible to filter the projects by keywords, research domains and/or participating organisations. Selecting multiple filter values is interpreted as an <strong>AND</strong>. Only software using all of the selected filters will be shown as a result. You can also combine filters with search terms to further reduce the selection.</p><h2 id="organisation-overview" tabindex="-1"><a class="header-anchor" href="#organisation-overview" aria-hidden="true">#</a> Organisation Overview</h2><p><img src="'+u+'" alt="image"></p><p>The organisation overview page provides a list of all organisations listed in the RSD. For each organisation, a <strong>card</strong> is shown basic information: name, logo, and the number of software and project pages which this organisation participates in.</p>',19),R=r("For organisations which are a registered member of the RSD, the "),x=e("img",{src:f,alt:"image"},null,-1),N=r(" checkmark is shown on the card. If you wish to register your organisation, you can find more information in "),O=r("How to register an organisation"),A=r("."),E=e("p",null,[r("To browse and search for organisations of interest, the "),e("em",null,"search"),r(" bar on the top of the page can be used. Simply typing into the search bar will trigger the RSD to search for organisation whose name contains (part of) the terms you entered. Entering multiple words into the search bar will be interpreted as an "),e("strong",null,"AND"),r(". Only organisations whose name contains all search terms will be shown as a result.")],-1),F=e("p",null,[r("By default, 12 organisation cards are shown per page. This number can be increased if desired using the "),e("strong",null,"Per page"),r(" dropdown menu. The "),e("strong",null,"<"),r(" and "),e("strong",null,">"),r(" icons can be used to move between pages.")],-1);function B(I,P){const o=t("ExternalLinkIcon"),n=t("RouterLink");return i(),h(c,null,[b,v,_,y,e("p",null,[S,e("a",j,[T,a(o)]),k]),D,e("p",null,[R,x,N,a(n,{to:"/register-organisation.html"},{default:l(()=>[O]),_:1}),A]),E,F],64)}var V=s(m,[["render",B],["__file","navigation.html.vue"]]);export{V as default};
