//Given a string, only swap the vowels of it

#include<string.h>

class Solution {
public:
    string reverseVowels(string s) {
        int start = 0, end = (int) s.size();
        char sC, v;
        while(start != end){
            if((sC=tolower(s[start])) == 'a' || sC == 'e' || sC == 'i' ||sC == 'o' ||  sC == 'u'){
                v = s[end];
                while(--end > start && (v=tolower(s[end])) != 'a' && v != 'e' && v != 'i' && v != 'o' &&  v != 'u');                    
               if(end <= start)
                      return s;
                v = s[end];   
                s[end] = s[start];
                s[start++] = v;
            }else{
                start++;
            }
        }
        return s;
    }
};