/* java script for counter start */


            let counts = setInterval(updated);
            let upto = [15,5,1,2];
            function updated() 
            {
            let count1 = document.getElementById("counter1");
            let count2 = document.getElementById("counter2");
            let count3 = document.getElementById("counter3");
            let count4 = document.getElementById("counter4");
            var count=[count1,count2,count3,count4];
            for (x=0;x<upto.length;x++)
            {
                count[x].innerHTML=++upto[x];
                if (upto[x] === 100)
                {
                  clearInterval(counts);
                }
                
            }
        }

