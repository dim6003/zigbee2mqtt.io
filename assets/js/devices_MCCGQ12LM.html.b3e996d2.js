"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21739],{78961:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>l});var n=a(6254);const i={},s=(0,a(89596).A)(i,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"aqara-mccgq12lm",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#aqara-mccgq12lm"},[(0,n.Lk)("span",null,"Aqara MCCGQ12LM")])],-1)),(0,n.Lk)("table",null,[t[7]||(t[7]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"MCCGQ12LM")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Door and window sensor T1")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"contact, battery, voltage, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.png",alt:"Aqara MCCGQ12LM"})])],-1)),t[6]||(t[6]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"White-label"),(0,n.Lk)("td",null,"Aqara DW-S03D, Yandex YNDX-00520")],-1))])]),t[12]||(t[12]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the reset button to keep the light flashing, until the interview process finishes successfully.</p><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation"><span>Recommendation</span></a></h3><p>If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the <code>debounce</code> option in your device specific configuration.</p><p>E.g. (devices.yaml)</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_sensor</span>\n<span class="line">    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">1</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',8)),(0,n.Lk)("p",null,[t[9]||(t[9]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[8]||(t[8]=[(0,n.eW)("OTA updates")]))),_:1}),t[10]||(t[10]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),l=JSON.parse('{"path":"/devices/MCCGQ12LM.html","title":"Aqara MCCGQ12LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara MCCGQ12LM control via MQTT","description":"Integrate your Aqara MCCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-17T18:57:09.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Recommendation","slug":"recommendation","link":"#recommendation","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733950137000},"filePathRelative":"devices/MCCGQ12LM.md"}')}}]);