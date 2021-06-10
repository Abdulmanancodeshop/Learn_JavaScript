console.log('Welcome to javaScript')
let html= "<h>this is my heading</h>"+
         "<p>this is my para</p>";
        //  console.log(html)
        //  html =html.concat('this ', 'my') //concat is used to combine two words in string 
        //  console.log(html);
        // html = html.replace('this','my');
        // console.log(reverse(html))
        // let replaced =html.replace('this','my')
        // console.log(replaced)
        let str='this is a string';
        console.log(str);
        // let position =str.indexOf('is'); it gives the first occurence of the substring  
        // let position =str.lastIndexOf('is'); it gives the last occurence of the substring 
        // console.log(position)
        // --------substring from astring-------
        // let string = str.slice(0,4); it can takes negative number
        // console.log(string);
        
        let string = str.substr(1,3);
        console.log(string);
        // -----------Upper and lower Case---------
        // let str1 = html.toUpperCase();
        let str1 = html.toLowerCase();
        let strwithwhitespaces = "            this  is          my     "
        console.log(strwithwhitespaces.trim()) //to remove the white spaces from start and end
        // console.log(str1);
        console.log(html.charAt(2));
        console.log(html.charCodeAt(2));
