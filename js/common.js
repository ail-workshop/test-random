/* https://www.w3web.net/how-to-add-header-and-footer-in-javascript/ */

function header () {
  with(document) {
       write("<div id='headerMain'>");
            write("<a class='logo' href='./index.html'>");
              write("<span class='nav-title'>AIAI</span>");
            write("</a>");
           write("<div class='menuMain'>");
               write("<ul class='menu'>");
                    write("<li><a href='index.html'>Home</a>");
                    write("</li>")
                    write("<li><a href='call.html'>Call for papers</a>");
                    write("</li>")
                    write("<li><a href='program.html'>Program</a>");
                    write("</li>")
                    write("<li><a href='practical_info.html'>Practical Information</a>");
                    write("</li>")
                    write("<li><a href='mailto:julie.goncharov@uni-goettingen.de'>Contact us</a>");
                    write("</li>")
               write("</ul>");
           write("</div>");
        write("</div>");
      write("<div id='project-header'>");
            write("<image class='project-header-image' src='./assets/images/AIAI_prog.png'/>");
                write("<div class='main-title'>Agency and Intentions in AI</div>");
                  write("<div>");
                      write("<blockquote><p>How do you connect with a single piece of information?</p><p>Date ‘em</p>");
                          write("<footer><cite>Kyle Thompson</cite></footer>");
                      write("</blockquote>");
                write("</div>");
            write("</div>");
      write("</div>");
  }
  /* imgsearch(); */
}

function footerContainer(){
      with(document){
        write("<div id='footerMain'>");
            write("<div>");
                    write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                        write("<img src='./assets/images/ail_logo_blue.png' style='width:120px'>");
                    write("</a>");
            write("</div>");
            write("<div class='project-card-text-container'>");
                    write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                        write("Agency and Intentions in Language");
                    write("</a>");
            write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("<img src='./assets/images/ASG_white.png' style='width:100px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("Action Sensitivity in Grammar");
                  write("</a>");
          write("</div>");
/*          write("<div>");
                  write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                      write("<img src='./assets/images/ail_logo_blue.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                      write("Agency and Intentions in Language");
                  write("</a>");
          write("</div>");
 */
        write("</div>");
          }
  }
var clicks = 0;
var filePDF = "";
const items = ["assets/pdf/1.pdf","assets/pdf/2.pdf","assets/pdf/3.pdf","assets/pdf/4.pdf","assets/pdf/5.pdf","assets/pdf/6.pdf","assets/pdf/7.pdf","assets/pdf/8.pdf","assets/pdf/9.pdf","assets/pdf/10.pdf","assets/pdf/11.pdf","assets/pdf/12.pdf","assets/pdf/13.pdf","assets/pdf/14.pdf","assets/pdf/15.pdf","assets/pdf/16.pdf"];
function downloadPdf() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
/*        if ( clicks < 5 ) {
            filePDF = "assets/pdf/1-4.pdf"
        }else if ( clicks > 4 && clicks < 9 ){
            filePDF = "assets/pdf/5-8.pdf"
        } else {
            filePDF = "assets/pdf/9.pdf"
        }
 */
    filePDF = random_item(items);
    
    document.getElementById("fpdf").innerHTML = filePDF;
    
    const anchor = document.createElement("a");
    
    anchor.href = filePDF;
    anchor.target = '_blank';
    anchor.download = filePDF || 'download';
    
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    document.getElementById("btn").disabled = true;
}
function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
