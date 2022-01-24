p1=localStorage.getItem("Player1_name");
p2=localStorage.getItem("Player2_name");
p1_score=0
p2_score=0
document.getElementById("player1_name").innerHTML=p1+" : ";
document.getElementById("player2_name").innerHTML=p2+" : ";
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_question").innerHTML="Question Turn : "+p1;
document.getElementById("player_answer").innerHTML="Answer Turn : "+p2;
function send()
{
   w=document.getElementById("word").value;
   word=w.toLowerCase();
   c1=word.charAt(1);
   l=Math.floor(word.length/2);
   c2=word.charAt(l);
   l1=word.length-1;
   c3=word.charAt(l1);
   r1=word.replace(c1,"_");
   r2=r1.replace(c2,"_");
   r3=r2.replace(c3,"_");
   question="<h4 id='word_display'>Q."+r3+"</h4>";
   i_box="<br> Answer : <input type='text' id='input_check_box'>";
   c_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
   row=question+i_box+c_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
}
q_turn="player1";
a_turn="player2";
function check()
{
    ans=document.getElementById("input_check_box").value;
    answer=ans.toLowerCase();
    if(answer==word)
    {
        if(a_turn=="player1")
        {
            p1_score=p1_score+1
            document.getElementById("player1_score").innerHTML=p1_score;
            
        }
        else
        {
            p2_score=p2_score+1
            document.getElementById("player2_score").innerHTML=p2_score;
        }
    }
    if(q_turn=="player1")
        {
            q_turn="player2";
            document.getElementById("player_question").innerHTML="question turn-"+ p2;
            
        }
        else
        {
            q_turn="player1";
            document.getElementById("player_question").innerHTML="question turn-"+ p1;
        }
        if(a_turn=="player1")
        {
            a_turn="player2";
            document.getElementById("player_answer").innerHTML="answer turn-"+ p2;
            
        }
        else
        {
            a_turn="player1";
            document.getElementById("player_answer").innerHTML="answer-"+ p1;
        }
        document.getElementById("output").innerHTML="";
    }
