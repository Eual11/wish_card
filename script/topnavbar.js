function response()
{
   let topnav = document.getElementById("topnavid");
   if(topnav.className==="topnav")
   {
    topnav.className+=" responsive";
   }
   else
   {
    topnav.className="topnav";
   }
}