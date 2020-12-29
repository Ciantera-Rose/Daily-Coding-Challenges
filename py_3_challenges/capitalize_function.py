import string
#Challenge:
#Write a program that capitalizes the first letter of every word in a string

#SOLUTION 1
def cap_sentence(first_letter):
  return ' '.join(word.capitalize() for word in str.split(' ')) 

str = "capitalize the first letter of each word in this sentence"
print(cap_sentence(str)) 
#Capitalize The First Letter Of Each Word In This Sentence


#SOLUTION 2
#List Comprehension | Account for apostrophe
def cap_sentence(first_letter):
  return " ".join(word[0].upper() + word[1:] for word in str.split())

str = "let's try a list comprehension" 
print(cap_sentence(str)) #Let's Try A List Comprehension


#SOLUTION 3
#import string  |  #string.capwords method |  #Accounts for apostrophe
str = string.capwords("it's time for a coding challenge")
print(str) #It's Time For A Coding Challenge


#SOLUTION 4
#title() function: NOTE: does not account for apostrophes
str = "a coding challenge a day keeps the skills at bay"
str_two = str.title()
print(str_two) #A Coding Challenge A Day Keeps The Skills At Bay