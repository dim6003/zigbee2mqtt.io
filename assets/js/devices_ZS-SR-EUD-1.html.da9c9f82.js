"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84796],{28238:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>n});var i=o(6254);const d={},a=(0,o(89596).A)(d,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"moes-zs-sr-eud-1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#moes-zs-sr-eud-1"},[(0,i.Lk)("span",null,"Moes ZS-SR-EUD-1")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZS-SR-EUD-1")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Moes")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Star ring smart dimmer switch 1 gang")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"light (state, brightness, min_brightness, max_brightness), countdown, light_type, power_on_behavior, backlight_mode, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZS-SR-EUD-1.png",alt:"Moes ZS-SR-EUD-1"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="light-type-enum" tabindex="-1"><a class="header-anchor" href="#light-type-enum"><span>Light type (enum)</span></a></h3><p>Type of light attached to the device. Value can be found in the published state on the <code>light_type</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_type&quot;: NEW_VALUE}</code>. The possible values are: <code>led</code>, <code>incandescent</code>, <code>halogen</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum"><span>Backlight mode (enum)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>normal</code>, <code>inverted</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14))])}]]),n=JSON.parse('{"path":"/devices/ZS-SR-EUD-1.html","title":"Moes ZS-SR-EUD-1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZS-SR-EUD-1 control via MQTT","description":"Integrate your Moes ZS-SR-EUD-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Light type (enum)","slug":"light-type-enum","link":"#light-type-enum","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Backlight mode (enum)","slug":"backlight-mode-enum","link":"#backlight-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733950137000},"filePathRelative":"devices/ZS-SR-EUD-1.md"}')}}]);