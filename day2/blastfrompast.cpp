//
//  main.cpp
//  stringManipulation_2
//
//  Created by _ on 4/4/21.
//

#include <iostream>
#include <cctype>

using namespace std;

void printCharArray(char *, int);
void genWordList(char *, string *, int&);
void countLetters(string *, int, int *);
int largestWord(int *, int);
int smallestWord(int *, int);
void countLengths(int *, int, int*, int);
void printReverse(string*, int);
int countString(string *);
void printBackwards(string *, int, int *);

int main(int argc, const char * argv[]){
    
    const int CHARACTER_LIMIT = 257;
    const int WORD_LIMIT = 25;
    
    char paragraph[CHARACTER_LIMIT], *pt_paragraph = paragraph;
    string wordList[WORD_LIMIT], *pt_wordList = wordList;
    string word;
    
    int *pt_wordLength = nullptr, *pt_LengthCount = nullptr;
    
    int wordCount = 0, largest = 0;
    
    // get input from user from
    cin.getline(pt_paragraph, 257);
    
    // generates word list
    genWordList(pt_paragraph, pt_wordList, wordCount);
    
    // use word count to dynamically create array
    pt_wordLength = new int[wordCount];
    
    countLetters(pt_wordList, wordCount, pt_wordLength);
    
    largest = largestWord(pt_wordLength, wordCount);
    
    cout << largest << endl;
    
    cout << smallestWord(pt_wordLength, wordCount) << endl;
    
    pt_LengthCount = new int[largest];
    
    countLengths(pt_wordLength, wordCount, pt_LengthCount, largest);
    
    for (int i = 0; i < largest; i++) {
        cout << "Word Length \t" << i + 1 << "\tCount of Length\t";
        cout << *(pt_LengthCount + i) << endl;
    }
    
    printReverse(wordList, wordCount)
    
    return 0;
}

void countLengths(int *wordLength, int wordCount, int*lengthCount, int largest)
{
    int counter = 0;
    
    for (int i = 1; i < largest + 1; i++)
    {
        for(int j = 0; j < wordCount; j++)
        {
            if(*(wordLength + j) == i)
            {
                counter++;
            }
        }
        
        *(lengthCount + (i - 1)) = counter;
        counter = 0;
    }
}

int largestWord(int *wordLengths, int wordCount)
{
    int largest = *wordLengths;
    
    for (int i = 0; i < wordCount; i++) {
        if(largest < *(wordLengths + i))
        {
            largest = *(wordLengths + i);
        }
    }
    
    return largest;
}

int smallestWord(int *wordLengths, int wordCount)
{
    int smallest = *wordLengths;
    
    for (int i = 0; i < wordCount; i++) {
        if(smallest > *(wordLengths + i))
        {
            smallest = *(wordLengths + i);
        }
    }
    
    return smallest;
}

void countLetters(string *wordList, int wordCount, int *wordLength)
{
    string *ptrWordList = wordList;
    string word;
    
    int j = 0;
    
    //We want to be able select a word
    //count the letters
    //store that value in an array
    
    for (int i = 0; i < wordCount; i++) {
        
        word = *(ptrWordList + i);
        
            while (word[j])
            {
                j++;
            }
        *(wordLength + i) = j;
        j=0;
        
    }
}

void genWordList(char *list, string *ptrWordList, int& wordCount){
    
    char *ptr = list;
    string word;

    while (*ptr){
        
        while (isalpha(*ptr))
        {
            word += *ptr++;
        }
        
        if(word != ""){
            *ptrWordList++ = word;
            word = "";
            wordCount++;
        }
        
        while (!isalpha(*ptr) && *ptr){
             ptr++;
        }
    }
}

void printCharArray(char *list, int size)
{
    char *ptr = list;
    
    while(*ptr)
    {
        // prints up to the last memory location
        cout << *ptr++;
    }
}

void printReverse(string *wordList, int wordCount)
{
    for (int i = wordCount; i >= wordCount; i--)
    {
        cout << *(wordList + i);
    }
    
}
