import{_ as o,r as i,o as r,c as l,a as e,b as s,F as c,d as a,e as t}from"./app.e696d174.js";const d={},u=e("h1",{id:"making-a-release",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#making-a-release","aria-hidden":"true"},"#"),a(" Making a release")],-1),p=e("p",null,"To make a new release we use GitHub action release_manual.yml to manually release all modules at once.",-1),h=e("p",null,"Follow these steps to call release action.",-1),m=a("navigate to "),g={href:"https://github.com/research-software-directory/RSD-as-a-service/actions",target:"_blank",rel:"noopener noreferrer"},f=a("GitHub actions"),b=e("li",null,[a("select "),e("code",null,"create release draft (manual)"),a(" action")],-1),_=e("li",null,'on the right you select "Run workflow". Ensure "main" brand is selected and click on "Run workflow"',-1),k=t('<h2 id="performed-operations" tabindex="-1"><a class="header-anchor" href="#performed-operations" aria-hidden="true">#</a> Performed operations</h2><ul><li>checkout main branch with the complete history</li><li>calculate new version based on conventional commits keywords &#39;feat/fix&#39;. For breaking changes use BREAKING CHANGE: at the footer of the commit message</li><li>build the services: <ul><li>auth: build, tag and push docker image to ghcr.io</li><li>database: build, tag and push docker image to ghcr.io</li><li>backend: build, tag and push docker image to ghcr.io</li><li>frontend: build, tag and push docker image to ghcr.io</li><li>nginx: build, tag and push docker image to ghcr.io</li><li>scrapers: build, tag and push docker image to ghcr.io</li></ul></li><li>create docker-compose.yml for release that uses images created in the previous step</li><li>update citation file with new version number and release date</li><li>make deployment.zip file where all files needed for deployment are included</li><li>commit new CITATION.cff file with message &#39;release: update citation file&#39;</li><li>create GitHub release (draft) and include information from changelog and deployment.zip</li></ul><h2 id="removing-draft-release" tabindex="-1"><a class="header-anchor" href="#removing-draft-release" aria-hidden="true">#</a> Removing draft release</h2>',3),v=a("If you need to remove draft release you can do that via "),w={href:"https://github.com/research-software-directory/RSD-as-a-service/releases",target:"_blank",rel:"noopener noreferrer"},y=a("GitHub interface"),x=t(`<h2 id="removing-tags" tabindex="-1"><a class="header-anchor" href="#removing-tags" aria-hidden="true">#</a> Removing tags</h2><p>If you need to remove tag from the repository use following commands.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># delete locally</span>
<span class="token function">git</span> tag -d <span class="token punctuation">{</span>tag<span class="token punctuation">}</span>
<span class="token comment"># remove from origin</span>
<span class="token function">git</span> push origin --delete <span class="token punctuation">{</span>tag<span class="token punctuation">}</span>
<span class="token comment"># or more specifically</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">{</span>tag<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,3);function I(N,R){const n=i("ExternalLinkIcon");return r(),l(c,null,[u,p,h,e("ul",null,[e("li",null,[m,e("a",g,[f,s(n)])]),b,_]),k,e("p",null,[v,e("a",w,[y,s(n)])]),x],64)}var G=o(d,[["render",I],["__file","release.html.vue"]]);export{G as default};
