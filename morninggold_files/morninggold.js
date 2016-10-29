// Created by iWeb 3.0.4 local-build-20120623

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('morninggold_files/morninggoldMoz.css')
detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('morninggold_files','shapeimage_3','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
