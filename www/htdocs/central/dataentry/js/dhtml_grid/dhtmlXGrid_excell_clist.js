/*dhtmlxGrid v.1.4 build 70813 Standard Edition
Copyright Scand LLC http://www.scbr.com
This version of Software is free for using in GPL applications. For commercial use please contact info@scbr.com to obtain license*/
 

 
function eXcell_clist(cell){try{this.cell = cell;this.grid = this.cell.parentNode.grid;}catch(er){};this.edit = function(){this.val = this.getValue();var a=(this.cell._combo||this.grid.clists[this.cell._cellIndex]);if (!a)return;this.obj = document.createElement("DIV");var b=this.val.split(",");var text="";for (var i=0;i<a.length;i++){var fl=false;for (var j=0;j<b.length;j++)if (a[i]==b[j])fl=true;if (fl)text+="<div><input type='checkbox' checked='true' /><label>"+a[i]+"</label></div>";else
 text+="<div><input type='checkbox' id='ch_lst_"+i+"'/><label>"+a[i]+"</label></div>";};text+="<div><input type='button' value='Apply' style='width:100px;font-size:8pt;' onclick='this.parentNode.parentNode.editor.grid.editStop();'/></div>"

 this.obj.editor=this;this.obj.innerHTML=text;document.body.appendChild(this.obj);this.obj.style.position="absolute";this.obj.className="dhx_clist";this.obj.onclick=function(e){(e||event).cancelBubble=true;return true;};this.obj.style.zIndex=19;var arPos = this.grid.getPosition(this.cell);this.obj.style.left=arPos[0]+"px";this.obj.style.top=arPos[1]+this.cell.offsetHeight+"px";this.obj.getValue=function(){var text="";for (var i=0;i<this.childNodes.length-1;i++)if (this.childNodes[i].childNodes[0].checked){if (text)text+=",";text+=this.childNodes[i].childNodes[1].innerHTML;};return text;};};this.getValue = function(){return this.cell.innerHTML.toString()._dhx_trim()
 };this.detach = function(val){if (this.obj){this.setValue(this.obj.getValue());this.obj.editor=null;this.obj.parentNode.removeChild(this.obj);this.obj=null;};return this.val!=this.getValue();};};eXcell_clist.prototype = new eXcell;eXcell_clist.prototype.setValue = function(val){if (typeof(val)=="object"){var optCol=this.grid.xmlLoader.doXPath("./option",val);if (optCol.length)this.cell._combo=[];for (var j=0;j<optCol.length;j++)this.cell._combo.push(optCol[j].firstChild?optCol[j].firstChild.data:"");val=val.firstChild.data;};this.setCValue(val);};dhtmlXGridObject.prototype.registerCList=function(col,list){if (!this.clists)this.clists=new Array();if (typeof(list)!="object") list=list.split(",");this.clists[col]=list;};
