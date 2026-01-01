//
//  main.cpp
//  stringManipulation
//
//  Created by Ryan Hart on 3/31/21.
//

#include <iostream>
#include <cctype>
#include <iomanip>

using namespace std;

void printCharArray(char *, int );
void genWordList(char *, string *, int&);
void countLetters(string *, int , int *);
void displayStatistics(string *, int , int *);
char *getParagraph(const int);
int largestWord(int *, int );
int smallestWord(int *, int );
void countLengths(int *, int , int*, int);
void printReverse(string *, int );
void displayStrings(string *, char *, int*, int , const int );
void printBackwards(string *, int , int *);

int main(int argc, const char * argv[])
{
    const int CHARACTER_LIMIT = 257;
    const int WORD_LIMIT = 20;
    
    int wordCount = 0;
    char *paragrah = nullptr;
    string *wordList = nullptr;
    int *wordLengths = nullptr;
    
    wordList = new string[WORD_LIMIT];
    
    paragrah = getParagraph(CHARACTER_LIMIT); // gets user to input a paragrah
    
    genWordList(paragrah, wordList, wordCount); // generates a list of words from a string
    
    wordLengths = new int[wordCount];
    
    // displays stats on letter count, largest/smallest word,
    // total words and count of word length
    displayStatistics(wordList, wordCount, wordLengths);
    
    // displays the string normally, backwards, and reverse.
    displayStrings(wordList, paragrah, wordLengths, wordCount, CHARACTER_LIMIT);

    // deletes dynamically created
    delete wordLengths;
}

// displays the string normally, backwards, and reverse.
void displayStrings(string *wordList, char *paragraph, int *wordLengths, int wordCount, const int limit){
    
    cout << endl;
    cout << "String Manipulations:\t";
    cout << "\nOriginial:\t";
    printCharArray(paragraph,limit);
    cout << "\nReverse:\t";
    printReverse(wordList, wordCount);
    cout << "\nBackwards:\t";
    printBackwards(wordList, wordCount, wordLengths);
    cout << endl;
}

// prints word backwards
void printBackwards(string *wordList, int wordCount, int *wordLengths){
    
    int length = 0;
    string word;
    
    for (int i = 0; i < wordCount; i++) // for each word in the list
    {
        word = *(wordList + i);         // store word from list
        length = *(wordLengths + i);    // store length that is respective to the word
        
        for (int j = length; j >= 0; j--)
        {
            cout << word[j];                 // prints the word backwards
        }
        
        cout << " ";
    }

}

// prints a string in reverse
void printReverse(string *wordList, int wordCount)
{
    for (int i = wordCount; i >= 0; i--) {  // prints from the end until it reaches beginning
        cout << *(wordList + i) << " ";
    }
    
}

// gets user to input a string
// the string is returned
char *getParagraph(const int limit)
{
    
    char *ptr = nullptr;
    
    ptr = new char[limit];
    
    cout << "Enter a paragraph:\n";
    
    cin.get(ptr, limit);
    
    return ptr;
    
}

// generates a word list from a string
void genWordList(char *list, string *ptrWordList, int& wordCount)
{
    
    char *ptr = list;
    string word;

    while (*ptr){  // until not null
        
        while (isalpha(*ptr)) // if character, add it to word
        {
            word += *ptr++;
        }
        
        if(word != ""){
            *ptrWordList++ = word; // store word in wordlist
            word = "";
            wordCount++;
        }
        
        while (!isalpha(*ptr) && *ptr){ // if not a character and if pointer is not null
             ptr++;
        }
    }
}

// prints a string
void printCharArray(char *list, int size)
{
    char *ptr = list;
    
    while(*ptr)
    {
        // prints up to the last memory location
        cout << *ptr++;
    }
}

// displays stats on letter count, largest/smallest word,
// total words and count of word length
void displayStatistics(string *wordList, int wordCount, int *wordLengths)
{
    int *lengthCount = nullptr;
    int largest = 0;
    
    countLetters(wordList, wordCount, wordLengths);
    
    cout << "\nCount of Letters:\n";
    for (int i = 0; i < wordCount; i++) {
        
        cout << left << setw(6) << "Word:"
             << left << setw(10) <<  *(wordList + i)
             << left << setw(9) << "Letters:"
             << left << setw(10) << *(wordLengths + i) << endl;
    }
    
    largest = largestWord(wordLengths, wordCount);
    
    cout << "\nWord Data:\n";
    cout << "The total number of words is:\t" << wordCount;
    cout << "\nThe largest word is:\t" << largest;
    cout << "\nThe smallest word is:\t" << smallestWord(wordLengths, wordCount);
    cout << endl;
    
    lengthCount = new int[largest];
    
    countLengths(wordLengths, wordCount, lengthCount, largest);
    
    cout <<"\nWord length counts:\n";
    for (int i = 0; i < largest; i++) {
        
        cout << left << setw(6) << "Word Length:"
             << left << setw(6) <<  i + 1
             << left << setw(9) << "Count:"
             << left << setw(10) << *(lengthCount + i) << endl;
    }
    
    delete lengthCount;
    
}

// counts the characters in a string
void countLetters(string *wordList, int wordCount, int *wordLength)
{
    string *ptrWordList = wordList;
    string word;
    
    int j = 0;

    for (int i = 0; i < wordCount; i++) // until wordCount
    {
        
        word = *(ptrWordList + i); // store word
        
            while (word[j])        // until word terminates
            {
                j++;               // keeps track of each letter
            }
        
        *(wordLength + i) = j;     // stores the letter count in wordLength
        
        j=0;
        
    }
}


// gets the count of each word length
void countLengths(int *wordLength, int wordCount, int*lengthCount, int largest)
{
    int counter = 0;
    
    for (int i = 1; i < largest + 1; i++)  // starts a length and goes until largest length
    {
        for(int j = 0; j < wordCount; j++) // repeats for each word in list
        {
            if(*(wordLength + j) == i)     // checks if the word length is = i (length)
            {
                counter++;
            }
        }
        
        *(lengthCount + (i - 1)) = counter; // stores how many time a length was repeated
        
        counter = 0;
    }
}

//gets the largest word length
// returns largest value
int largestWord(int *wordLengths, int wordCount)
{
    int largest = *wordLengths;
    
    // checks each value to see which one is the largest
    for (int i = 0; i < wordCount; i++) {
        if(largest < *(wordLengths + i))
        {
            largest = *(wordLengths + i);
        }
    }
    
    return largest;
}

// gets the smallest word length
// returns smallest value
int smallestWord(int *wordLengths, int wordCount)
{
    int smallest = *wordLengths;
    
    // find the smallest value
    for (int i = 0; i < wordCount; i++) {
        if(smallest > *(wordLengths + i))
        {
            smallest = *(wordLengths + i);
        }
    }
    
    return smallest;
}
